const functions = require("firebase-functions");
const admin = require("firebase-admin");
const SibApiV3Sdk = require("@sendinblue/client");

admin.initializeApp();
const db = admin.firestore();

const BREVO_API_KEY = "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"; 

const apiInstance = new SibApiV3Sdk.TransactionalEmailsApi();
apiInstance.setApiKey(SibApiV3Sdk.TransactionalEmailsApiApiKeys.apiKey, BREVO_API_KEY);

const TEMPLATE_ID = 1;

exports.requestSubscription = functions.https.onCall(async (data, context) => {
    const email = data.email;
    if (!email) {
        throw new functions.https.HttpsError("invalid-argument", "Email is required.");
    }

    const token = admin.firestore().collection("dummy").doc().id;
    const expiration = Date.now() + 10 * 60 * 1000;

    const confirmationUrl = `https://smolbrained.github.io/ihatewebdevelopment-tst-/confirm-newsletter.html?token=${token}`;

    await db.collection("pendingSubscriptions").doc(token).set({
        email,
        expiration,
    });

    const sendSmtpEmail = new SibApiV3Sdk.SendSmtpEmail();
    sendSmtpEmail.to = [{ email: email }];
    sendSmtpEmail.templateId = TEMPLATE_ID;
    sendSmtpEmail.params = { confirmation_url: confirmationUrl };

    try {
        await apiInstance.sendTransacEmail(sendSmtpEmail);
        return { success: true };
    } catch (error) {
        console.error("Error sending email with Brevo:", error);
        throw new functions.https.HttpsError("internal", "Could not send email.");
    }
});

exports.confirmSubscription = functions.https.onRequest(async (req, res) => {
    const token = req.query.token;
    if (!token) return res.status(400).send("Confirmation token is missing.");

    const pendingDocRef = db.collection("pendingSubscriptions").doc(token);
    const pendingDoc = await pendingDocRef.get();

    if (!pendingDoc.exists) return res.status(404).send("Invalid or expired confirmation token.");
    
    const pendingData = pendingDoc.data();
    if (Date.now() > pendingData.expiration) {
        await pendingDocRef.delete();
        return res.status(400).send("This confirmation link has expired.");
    }

    const subscriberRef = db.collection("subscribers").doc(pendingData.email);
    await subscriberRef.set({
        email: pendingData.email,
        subscribedAt: admin.firestore.FieldValue.serverTimestamp(),
    });

    await pendingDocRef.delete();
    return res.send("Thank you for subscribing! You can now close this tab.");
});
