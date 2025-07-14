const siteRouter = {
    pages: {
        "home": "/",
        "about": "/about",
        "news": "/news",
        "the-team": "/team",
        "contact": "/contact",
        "receive-tutoring": "/receive-tutoring",
        "become-a-tutor": "/become-a-tutor",
        "support": "/support",
        "articles": "/articles",
        "lessons": "/lessons",
        "report-time": "/report-time",
        "member": "/members"
    },
    members: {
        "alejandra-perry000": {
            name: "Alejandra Perry",
            portrait: "https://i.imgur.com/PRlDxs2.png",
            secondaryImage: "https://i.imgur.com/HYqSjLz.jpeg",
            bio_en: "Hello Everyone! My name is Alejandra, and I coordinate tutoring at Paul W. Bell Middle School and Miami Coral Park High School. My experience tutoring started in middle school with helping family and friends. As I got to know my students better, I realized that many had the willingness and ability to excel but lacked support systems to do so. Many came from other countries not knowing English, and many more came from low-income backgrounds. To resolve the issue these disadvantages would have on them in school, I chose to organize school-wide tutoring. At first, I focused on English language skills, but I soon realized that helping students learning English (ELL) extended beyond that. With other tutors involved, we began to offer any academic subject students need assistance with, as well as FAST test and SAT preparation. I am proud to say that I helped an ELL student rise from level 2 to level 4 on the FAST exam after a year of tutoring. Between the dedicated tutors I work with to my perseverant students, creating a lesson plan to continue after high school.",
            bio_es: "¡Hola a todos! Mi nombre es Alejandra y coordino la tutoría en la Escuela Intermedia Paul W. Bell y en la Escuela Secundaria Miami Coral Park. Mi experiencia con la tutoría comenzó en la escuela intermedia ayudando a familiares y amigos. A medida que conocía mejor a mis estudiantes, me di cuenta de que muchos tenían la voluntad y la capacidad de sobresalir, pero carecían de sistemas de apoyo para hacerlo. Muchos venían de otros países sin saber inglés, y muchos más provenían de entornos de bajos ingresos. Para resolver el problema que estas desventajas tendrían en ellos en la escuela, decidí organizar tutorías en toda la escuela. Al principio, me centré en las habilidades del idioma inglés, pero pronto me di cuenta de que ayudar a los estudiantes que aprenden inglés (ELL) se extendía más allá de eso. Con otros tutores involucrados, comenzamos a ofrecer cualquier materia académica en la que los estudiantes necesitaran ayuda, así como preparación para los exámenes FAST y SAT. Me enorgullece decir que ayudé a un estudiante de ELL a subir del nivel 2 al nivel 4 en el examen FAST después de un año de tutoría. Entre los tutores dedicados con los que trabajo y mis estudiantes perseverantes, crear un plan de lecciones para continuar después de la escuela secundaria.",
            facts_en: ["Sophomore", "Tutors at Miami Coral Park High School and Paul W. Bell Middle School", "Tutoring since February 2024", "Teaches FAST Test Prep, ESOL English, Middle School Math, Algebra 1, and Geometry", "Aspiring Neurosurgeon and Science Researcher"],
            facts_es: ["Estudiante de segundo año", "Tutora en Miami Coral Park High School y la Escuela Intermedia Paul W. Bell", "Tutora desde febrero de 2024", "Enseña preparación para el examen FAST, inglés de ESOL, matemáticas de escuela intermedia, álgebra 1 y geometría", "Aspirante a Neurocirujana e Investigadora Científica"],
            color: "#B34AFF"
        },
        "aitana-avila000": {
            name: "Aitana Avila",
            portrait: "https://i.imgur.com/W1Upqjf.png",
            secondaryImage: "https://i.imgur.com/DGQhsGT.jpeg",
            bio_en: "Hi, I'm Aitana! Something I enjoy about tutoring is that I can help other people understand subjects they are struggling with and create logical thinking in them. Tutoring helps me reaffirm my knowledge and improve myself more and more every day.",
            bio_es: "¡Hola, soy Aitana! Algo que disfruto de la tutoría es que puedo ayudar a otras personas a entender materias con las que tienen dificultades y a desarrollar en ellas un pensamiento lógico. La tutoría me ayuda a reafirmar mis conocimientos y a mejorar cada día más.",
            facts_en: ["Sophomore", "Tutors at Miami Coral Park Senior High School and Paul W. Bell Middle School", "Tutoring since October 2024", "Teaches Middle School Math and Geometry", "Aspiring Dentist or Software Programmer"],
            facts_es: ["Estudiante de segundo año", "Tutora en Miami Coral Park Senior High School y en la Escuela Intermedia Paul W. Bell", "Tutora desde octubre de 2024", "Enseña Matemáticas y Geometría de escuela intermedia", "Aspirante a Dentista o Programadora de Software"],
            color: "#8865C6"
        },
        "amaylor-torres000": {
            name: "Amaylor Torres",
            portrait: "https://i.imgur.com/qKn2wFX.jpeg",
            secondaryImage: "https://i.imgur.com/zpZwVGr.jpeg",
            bio_en: "Hello, I'm Amaylor! One of the things I like about tutoring is helping out the kids. I remember when I was in the same room as they are now trying to get through class work and homework. Man, I needed at tutor then. I’m just happy they don’t have to say that. Tutoring helps me personally in being well spoken, the students always have different things to get through, I say bring it on. Love tutoring at Paul W. Bell.",
            bio_es: "¡Hola, soy Amaylor! Una de las cosas que me gustan de la tutoría es ayudar a los niños. Recuerdo cuando estaba en el mismo salón que ellos ahora, tratando de superar el trabajo de clase y las tareas. Vaya, necesitaba un tutor en ese entonces. Me alegro de que ellos no tengan que decir eso. La tutoría me ayuda personalmente a ser más elocuente, los estudiantes siempre tienen cosas diferentes que superar, y yo digo, ¡adelante! Me encanta dar tutoría en Paul W. Bell.",
            facts_en: ["Sophomore", "Tutors at Paul W. Bell Middle School", "Tutoring since November 2024", "Teaches Middle School ESOL English", "Aspiring Bass Player and Musician"],
            facts_es: ["Estudiante de segundo año", "Tutor en la Escuela Intermedia Paul W. Bell", "Tutor desde noviembre de 2024", "Enseña inglés como segundo idioma en la escuela intermedia", "Aspirante a Bajista y Músico"],
            color: "#47A7F5"
        },
        "amiel-cabellero000": {
            name: "Amiel Cabellero",
            portrait: "https://i.imgur.com/qLcPzcc.jpeg",
            secondaryImage: "https://i.imgur.com/oPQQ1kI.png",
            bio_en: "My inspiration for being part of Literary Speaking is that I have the chance to help other students understand what they are being thought better, this is also what I enjoy. It aligns with my goals because I get community service hours from it which I need in order to graduate.",
            bio_es: "Mi inspiración para formar parte de Literary Speaking es que tengo la oportunidad de ayudar a otros estudiantes a entender mejor lo que se les enseña, esto es también lo que disfruto. Se alinea con mis metas porque obtengo horas de servicio comunitario, las cuales necesito para graduarme.",
            facts_en: ["Secretary, Paul W. Bell Middle School"],
            facts_es: ["Secretaria, Escuela Intermedia Paul W. Bell"],
            color: "#1E4D2B"
        },
        "camila-lopez000": {
            name: "Camila Lopez",
            portrait: "https://i.imgur.com/x6nu22B.jpeg",
            secondaryImage: "https://i.imgur.com/4PzONFl.jpeg",
            bio_en: "Hi, I'm Camila! My inspiration for tutoring is to teach students English and use the things I learned from tutoring to teach my little sister English so she can follow her dreams and also try teaching my mom English that she always wanted to learn.",
            bio_es: "¡Hola, soy Camila! Mi inspiración para la tutoría es enseñar inglés a los estudiantes y usar lo que aprendí de la tutoría para enseñarle inglés a mi hermana pequeña para que pueda seguir sus sueños, y también intentar enseñarle inglés a mi mamá, que siempre quiso aprender.",
            facts_en: ["Freshman", "Tutors at Miami Coral Park Senior High School", "Tutoring since January 2025", "Teaches High School ESOL English", "Aspiring Artist and Teacher"],
            facts_es: ["Estudiante de primer año", "Tutora en Miami Coral Park Senior High School", "Tutora desde enero de 2025", "Enseña inglés como segundo idioma en la escuela secundaria", "Aspirante a Artista y Maestra"],
            color: "#F06292"
        },
        "vanessa-garcia000": {
            name: "Vanessa Garcia",
            portrait: "https://i.imgur.com/1W5K5l9.jpeg",
            secondaryImage: "https://i.imgur.com/okdI6rv.jpeg",
            bio_en: "Hello, I’m Vanessa and I started tutoring because I’ve always loved helping others understanding contents they might struggle with. Tutoring has helped me reinforce my knowledge and practice my teaching skills for my future students besides helping me grow as a person. One of the things that motivate me to tutor is that I like seeing my students improvement and inspire them to be better students and people in their daily life.",
            bio_es: "Hola, soy Vanessa y empecé a dar tutorías porque siempre me ha encantado ayudar a otros a entender contenidos con los que podrían tener dificultades. La tutoría me ha ayudado a reforzar mis conocimientos y a practicar mis habilidades de enseñanza para mis futuros estudiantes, además de ayudarme a crecer como persona. Una de las cosas que me motivan a ser tutora es que me gusta ver la mejora de mis estudiantes e inspirarlos a ser mejores estudiantes y personas en su vida diaria.",
            facts_en: ["Sophomore", "Tutors at Miami Coral Park Senior High School", "Tutoring since November 2024", "Teaches High School ESOL English", "Aspiring Teacher"],
            facts_es: ["Estudiante de segundo año", "Tutora en Miami Coral Park Senior High School", "Tutora desde noviembre de 2024", "Enseña inglés como segundo idioma en la escuela secundaria", "Aspirante a Maestra"],
            color: "#7E57C2"
        },
        "angelina-garma000": {
            name: "Angelina Garma",
            portrait: "https://i.imgur.com/dJMzmhq.jpeg",
            secondaryImage: "https://i.imgur.com/qIjORoX.png",
            bio_en: "Hi, I'm Angelina! I decided to take up tutoring because I enjoy helping others. Tutoring gives great opportunities to help your school, get more community hours, and improve learning. I enjoy the interactive nature of student-led tutoring and the effort put into by both the tutor and the student. Teaching fellow students improves your communication skills while also helping the student improve their own skills in the subject you are tutoring. With the community hours it offers, it aligns with my goals of getting a scholarship.",
            bio_es: "¡Hola, soy Angelina! Decidí empezar a dar tutoría porque disfruto ayudando a los demás. La tutoría ofrece grandes oportunidades para ayudar a tu escuela, obtener más horas comunitarias y mejorar el aprendizaje. Disfruto de la naturaleza interactiva de la tutoría dirigida por estudiantes y el esfuerzo puesto tanto por el tutor como por el estudiante. Enseñar a otros compañeros mejora tus habilidades de comunicación y al mismo tiempo ayuda al estudiante a mejorar sus propias habilidades en la materia que estás enseñando. Con las horas comunitarias que ofrece, se alinea con mis metas de obtener una beca.",
            facts_en: ["Sophomore", "Tutors at Miami Coral Park Senior High School", "Tutoring since October 2024", "Teaches Honors Algebra 2", "Aspiring Family Lawyer"],
            facts_es: ["Estudiante de segundo año", "Tutora en Miami Coral Park Senior High School", "Tutora desde octubre de 2024", "Enseña Álgebra 2 de Honores", "Aspirante a Abogada de Familia"],
            color: "#0047AB"
        },
        "jeanmichael-gonzalvo000": {
            name: "Jeanmichael Gonzalvo",
            portrait: "https://i.imgur.com/57KWNYp.png",
            secondaryImage: "",
            bio_en: "",
            bio_es: "",
            facts_en: ["Historian, Miami Coral Park Senior High"],
            facts_es: ["Historiador, Miami Coral Park Senior High"],
            color: "#483D8B"
        },
        "natalie-arenal000": {
            name: "Natalie Arenal",
            portrait: "https://i.imgur.com/SMlS7uy.jpeg",
            secondaryImage: "https://i.imgur.com/5kfx3uV.png",
            bio_en: "Hello, I'm Natalie! I am interested in improving my literary skills and helping students improve their own academic skills. I am inspired by Literary Speaking Tutoring because I want to make an impact and see what it's like to be in a mentorship position. I started out as a tutor teaching literary analysis, but now I'm continuing as a writer. I've always liked the idea of being a mentor, and this would be my chance to positively impact others.",
            bio_es: "¡Hola, soy Natalie! Estoy interesada en mejorar mis habilidades literarias y en ayudar a los estudiantes a mejorar sus propias habilidades académicas. Me inspira la Tutoría de Literary Speaking porque quiero tener un impacto y ver cómo es estar en una posición de mentoría. Empecé como tutora enseñando análisis literario, pero ahora continúo como escritora. Siempre me ha gustado la idea de ser mentora, y esta sería mi oportunidad de impactar positivamente a los demás.",
            facts_en: ["Junior", "Tutors at Miami Coral Park Senior High School", "Writing since June 2025", "Writes educational content (articles and lessons)", "Aspiring Nurse"],
            facts_es: ["Estudiante de tercer año", "Tutora en Miami Coral Park Senior High School", "Escribiendo desde junio de 2025", "Escribe contenido educativo (artículos y lecciones)", "Aspirante a Enfermera"],
            color: "#8B008B"
        },
        "sofia-gonzalez-carba000": {
            name: "Sofia Gonzalez-Carba",
            portrait: "https://i.imgur.com/fFgHnil.jpeg",
            secondaryImage: "https://i.imgur.com/Pi6qe5r.png",
            bio_en: "Hi, my name is Sofia, and I tutor because I enjoy helping kids improve and expand their learning abilities. Tutoring allows me to help students, especially with improving their English skills so that they can feel more confident in school. What I like most about tutoring is seeing students grow and knowing that I'm making a difference in their education. The benefits of tutoring go beyond the present; it helps me develop skills like communication, patience, and leadership that will be valuable for my future.",
            bio_es: "Hola, mi nombre es Sofía, y doy tutoría porque disfruto ayudando a los niños a mejorar y expandir sus habilidades de aprendizaje. La tutoría me permite ayudar a los estudiantes, especialmente a mejorar sus habilidades en inglés para que puedan sentirse más seguros en la escuela. Lo que más me gusta de la tutoría es ver a los estudiantes crecer y saber que estoy marcando una diferencia en su educación. Los beneficios de la tutoría van más allá del presente; me ayuda a desarrollar habilidades como la comunicación, la paciencia y el liderazgo que serán valiosas para mi futuro.",
            facts_en: ["Junior", "Tutors at Paul W. Bell Middle School", "Tutoring since December 2024", "Teaches Middle School ESOL English", "Aspiring CRNA (Certified Registered Nurse Anesthetist)"],
            facts_es: ["Estudiante de tercer año", "Tutora en la Escuela Intermedia Paul W. Bell", "Tutora desde diciembre de 2024", "Enseña inglés como segundo idioma en la escuela intermedia", "Aspirante a CRNA (Enfermera Anestesista Registrada Certificada)"],
            color: "#008B8B"
        },
        "isabella-stubbs000": {
            name: "Isabella Stubbs",
            portrait: "https://i.imgur.com/BqaQwiu.png",
            secondaryImage: "https://i.imgur.com/vVBMlhG.png",
            bio_en: "Hello, I'm Isabella! I've chosen to become a tutor in order to improve my own teaching skills while at the same time having an opportunity to help others.",
            bio_es: "¡Hola, soy Isabella! He elegido convertirme en tutora para mejorar mis propias habilidades de enseñanza y al mismo tiempo tener la oportunidad de ayudar a otros.",
            facts_en: ["Freshman", "Tutors at Paul W. Bell Middle School", "Tutoring since December 2024", "Teaches Middle School ESOL English and Math", "Aspiring Computer Engineer"],
            facts_es: ["Estudiante de primer año", "Tutora en la Escuela Intermedia Paul W. Bell", "Tutora desde diciembre de 2024", "Enseña inglés y matemáticas de ESOL en la escuela intermedia", "Aspirante a Ingeniera Informática"],
            color: "#4169E1"
        },
        "eimy-gil000": {
            name: "Eimy Gil",
            portrait: "https://i.imgur.com/meQImyb.jpeg",
            secondaryImage: "https://i.imgur.com/Y3fHeGd.png",
            bio_en: "Hi, I'm Eimy! I like tutoring because I have a little sister. Sometimes she struggles doing her homework, so I wanted to teach other people so I can practice to be a better teacher for my sister. I also want to do something related to medicine in the future, for which I will need good communication skills. I enjoy tutoring because I know how it feels to not know something and how hard it is, especially with a language, you need help learning those things, and I feel so good when I know that I am helping someone with things that they are struggling.",
            bio_es: "¡Hola, soy Eimy! Me gusta dar tutoría porque tengo una hermana pequeña. A veces tiene dificultades para hacer sus deberes, así que quise enseñar a otras personas para poder practicar y ser una mejor maestra para mi hermana. También quiero hacer algo relacionado con la medicina en el futuro, para lo cual necesitaré buenas habilidades de comunicación. Disfruto de la tutoría porque sé lo que se siente al no saber algo y lo difícil que es, especially con un idioma, necesitas ayuda para aprender esas cosas, y me siento muy bien cuando sé que estoy ayudando a alguien con cosas con las que está luchando.",
            facts_en: ["Freshman", "Tutors at Miami Coral Park Senior High School", "Tutoring since October 2024", "Teaches High School ESOL English", "Aspiring Children's Doctor or Psychologist"],
            facts_es: ["Estudiante de primer año", "Tutora en Miami Coral Park Senior High School", "Tutora desde octubre de 2024", "Enseña inglés como segundo idioma en la escuela secundaria", "Aspirante a Doctora o Psicóloga Infantil"],
            color: "#228B22"
        },
        "nicole-alvarez000": {
            name: "Nicole Alvarez",
            portrait: "https://i.imgur.com/KQ35YhW.jpeg",
            secondaryImage: "https://i.imgur.com/tbOOfg7.png",
            bio_en: "Hi, I'm Nicole! I enjoy tutoring because I love helping others learn and grow. Seeing students gain confidence and succeed is very rewarding. Tutoring lets me share knowledge, build connections, and support people in reaching their goals, which aligns with my own goal of making a positive impact.",
            bio_es: "¡Hola, soy Nicole! Disfruto de la tutoría porque me encanta ayudar a otros a aprender y crecer. Ver a los estudiantes ganar confianza y tener éxito es muy gratificante. La tutoría me permite compartir conocimientos, construir conexiones y apoyar a las personas para que alcancen sus metas, lo que se alinea con mi propio objetivo de generar un impacto positivo.",
            facts_en: ["Senior", "Tutors at Paul W. Bell Middle School", "Tutoring since January 2025", "Teaches Middle School English", "Aspiring Dermatologist"],
            facts_es: ["Estudiante de último año", "Tutora en la Escuela Intermedia Paul W. Bell", "Tutora desde enero de 2025", "Enseña inglés en la escuela intermedia", "Aspirante a Dermatóloga"],
            color: "#C71585"
        },
        "andrew-cuellar000": {
            name: "Andrew Cuellar",
            portrait: "https://i.imgur.com/X8kuRwU.jpeg",
            secondaryImage: "https://i.imgur.com/jSCPyVj.png",
            bio_en: "Hello, I'm Andrew! Tutoring is a gift that keeps on giving. I have not been tutoring for long, and honestly, during the first lesson I thought I wasn't ready for it. But then I remembered the feeling of helping others just like when I needed help. I think tutoring is such an amazing thing, and definitely aligns with my goals through wanting to get the most out of my high school experience. I think my inspiration for wanting to tutor is my parents and teachers who have always helped me and wanting to keep moving that forward.",
            bio_es: "¡Hola, soy Andrew! La tutoría es un regalo que sigue dando. No llevo mucho tiempo dando tutorías y, sinceramente, durante la primera lección pensé que no estaba listo para ello. Pero luego recordé la sensación de ayudar a otros justo como cuando yo necesité ayuda. Creo que la tutoría es algo increíble, y definitivamente se alinea con mis metas de querer aprovechar al máximo mi experiencia en la escuela secundaria. Creo que mi inspiración para querer ser tutor son mis padres y maestros que siempre me han ayudado y el deseo de seguir avanzando.",
            facts_en: ["Freshman", "Tutors at Miami Coral Park Senior High School", "Tutoring since December 2024", "Teaches Algebra 1", "Aspiring Children's Doctor or Psychologist"],
            facts_es: ["Estudiante de primer año", "Tutor en Miami Coral Park Senior High School", "Tutor desde diciembre de 2024", "Enseña Álgebra 1", "Aspirante a Doctor o Psicólogo Infantil"],
            color: "#9932CC"
        },
        "nicolas-vilches000": {
            name: "Nicolas Vilches",
            portrait: "https://i.imgur.com/P3EN0BH.jpeg",
            secondaryImage: "https://i.imgur.com/ZofL2VA.png",
            bio_en: "Hello, I'm Nicolas! I enjoy tutoring because I like explaining things to people. Also, by being forced to explain something to someone who doesn't understand it, I gain a deeper understanding of it as well.",
            bio_es: "¡Hola, soy Nicolás! Disfruto de la tutoría porque me gusta explicarle cosas a la gente. Además, al verme forzado a explicarle algo a alguien que no lo entiende, obtengo una comprensión más profunda de ello también.",
            facts_en: ["Senior", "Tutors at Miami Coral Park Senior High School", "Tutoring since February 2025", "Teaches Chemistry", "Aspiring Engineer"],
            facts_es: ["Estudiante de último año", "Tutor en Miami Coral Park Senior High School", "Tutor desde febrero de 2025", "Enseña Química", "Aspirante a Ingeniero"],
            color: "#0a1763"
        },
        "johann-lara000": {
            name: "Johann Lara",
            portrait: "https://i.imgur.com/cHgC9rn.jpeg",
            secondaryImage: "https://i.imgur.com/akdG8CI.png",
            bio_en: "Hello, I'm Johann! Tutoring is a method to help people understand what they have experienced in class through another person. Through tutoring, I can teach not only others my way of thinking but how they think as well. This allows a tutoring session to be a two way learning session but a session where two people grow and learn together.",
            bio_es: "¡Hola, soy Johann! La tutoría es un método para ayudar a las personas a entender lo que han experimentado en clase a través de otra persona. A través de la tutoría, puedo enseñar no solo a otros mi forma de pensar, sino también cómo piensan ellos. Esto permite que una sesión de tutoría sea una sesión de aprendizaje bidireccional, pero una sesión donde dos personas crecen y aprenden juntas.",
            facts_en: ["Senior", "Tutors at Miami Coral Park Senior High School", "Tutoring since February 2025", "Teaches Honors Physics", "Aspiring Engineer"],
            facts_es: ["Estudiante de último año", "Tutor en Miami Coral Park Senior High School", "Tutor desde febrero de 2025", "Enseña Física de Honores", "Aspirante a Ingeniero"],
            color: "#9400D3"
        },
        "amelia-guerra000": {
            name: "Amelia Guerra",
            portrait: "https://i.imgur.com/Ol9vqAP.jpeg",
            secondaryImage: "https://i.imgur.com/JUd41Hb.png",
            bio_en: "Hi, I'm Amelia. I chose to start tutoring because I like helping others. Tutoring gives others a chance to pinpoint what they struggle with to further learn and improve from it. What I would say I enjoy about tutoring is learning alongside others myself and being able to see the effort made along the way. Tutoring aligns with my goals because it helps me improve my communication, cooperation, tolerance, and problem-solving skills for my future and present goals.",
            bio_es: "Hola, soy Amelia. Elegí empezar a dar tutoría porque me gusta ayudar a los demás. La tutoría da a otros la oportunidad de identificar en qué tienen dificultades para seguir aprendiendo y mejorando a partir de ahí. Lo que diría que disfruto de la tutoría es aprender junto a los demás y poder ver el esfuerzo realizado en el camino. La tutoría se alinea con mis metas porque me ayuda a mejorar mis habilidades de comunicación, cooperación, tolerancia y resolución de problemas para mis metas futuras y presentes.",
            facts_en: ["Junior", "Tutors at Paul W. Bell Middle School", "Tutoring since December 2024", "Teaches Middle School ESOL English", "Aspiring Nurse Practitioner"],
            facts_es: ["Estudiante de tercer año", "Tutora en la Escuela Intermedia Paul W. Bell", "Tutora desde diciembre de 2024", "Enseña inglés como segundo idioma en la escuela intermedia", "Aspirante a Enfermera Practicante"],
            color: "#DC143C"
        },
        "stephanie-jimenez000": {
            name: "Stephanie Jimenez",
            portrait: "https://i.imgur.com/jxhWwce.jpeg",
            secondaryImage: "https://i.imgur.com/wUqLQO9.png",
            bio_en: "Hi everyone! I'm Stephanie and I enjoy tutoring because it gives me the chance to help others understand things they might struggle with and helping them get better. Tutoring also helps me strengthen my own skills and teaches me how to explain things better, aligning with my goals of improving my skills and be a better student.",
            bio_es: "¡Hola a todos! Soy Stephanie y disfruto de la tutoría porque me da la oportunidad de ayudar a otros a entender cosas con las que podrían tener dificultades y a mejorar. La tutoría también me ayuda a fortalecer mis propias habilidades y me enseña a explicar las cosas mejor, lo que se alinea con mis metas de mejorar mis habilidades y ser una mejor estudiante.",
            facts_en: ["Sophomore", "Tutors at Miami Coral Park Senior High School", "Tutoring since October 2024", "Teaches Highschool ESOL English", "Aspiring Doctor"],
            facts_es: ["Estudiante de segundo año", "Tutora en Miami Coral Park Senior High School", "Tutora desde octubre de 2024", "Enseña inglés como segundo idioma en la escuela secundaria", "Aspirante a Doctora"],
            color: "#6A5ACD"
        },
        "jose-unanue000": {
            name: "Jose Unanue",
            portrait: "https://i.imgur.com/ciF5FZH.jpeg",
            secondaryImage: "https://i.imgur.com/oBHqFT0.png",
            bio_en: "Hey, I'm Jose! I first considered tutoring as a challenge to see if I could learn others concepts I have been taught in the past. After multiple interactions, I stopped seeing it like that and started seeing how student's improve has been what has driven me to continue tutoring them.",
            bio_es: "¡Hola, soy José! Al principio consideré la tutoría como un desafío para ver si podía enseñar a otros conceptos que me habían enseñado en el pasado. Después de múltiples interacciones, dejé de verlo así y comencé a ver cómo la mejora de los estudiantes ha sido lo que me ha impulsado a continuar dando tutorías.",
            facts_en: ["Sophomore", "Tutored at Paul W. Bell Middle School", "Tutoring from November to December 2024", "Teaches Middle School Math", "Aspiring Mechanical Engineer"],
            facts_es: ["Estudiante de segundo año", "Tutor en la Escuela Intermedia Paul W. Bell", "Tutor de noviembre a diciembre de 2024", "Enseña Matemáticas de escuela intermedia", "Aspirante a Ingeniero Mecánico"],
            color: "#4682B4"
        },
        "ilie-tornes000": {
            name: "Ilie Tornes",
            portrait: "https://i.imgur.com/j16riwK.jpeg",
            secondaryImage: "https://i.imgur.com/dpAdnVC.png",
            bio_en: "Hi, my name is Ilie! I first started being interested in tutoring when I realized how many new students from other countries needed guidance in the English language. Those who do not speak English have a disadvantage at school and future job opportunities, so it is important to start cultivating a great learning environment since high school. What I enjoy most about tutoring is getting to help new people and seeing them progress in the language as the year goes on.",
            bio_es: "¡Hola, mi nombre es Ilie! Empecé a interesarme en la tutoría cuando me di cuenta de cuántos estudiantes nuevos de otros países necesitaban orientación en el idioma inglés. Aquellos que no hablan inglés tienen una desventaja en la escuela y en futuras oportunidades laborales, por lo que es importante empezar a cultivar un gran ambiente de aprendizaje desde la escuela secundaria. Lo que más disfruto de la tutoría es poder ayudar a gente nueva y verlos progresar en el idioma a medida que avanza el año.",
            facts_en: ["Sophomore", "Tutors at Miami Coral Park Senior High School", "Tutoring since October 2024", "Teaches Highschool ESOL English", "Aspiring Psychologist"],
            facts_es: ["Estudiante de segundo año", "Tutora en Miami Coral Park Senior High School", "Tutora desde octubre de 2024", "Enseña inglés como segundo idioma en la escuela secundaria", "Aspirante a Psicóloga"],
            color: "#2F4F4F"
        },
        "adrian-gomez000": {
            name: "Adrian Gomez",
            portrait: "https://i.imgur.com/3FWs7Eo.jpeg",
            secondaryImage: "https://i.imgur.com/AvvYwAh.png",
            bio_en: "“Education is not the filling of a pail, but the lighting of a fire.” – William Butler Yeats\n\nI'm Adrian Gomez, and I started tutoring because I love helping students grasp concepts in a way that makes sense to them. There's nothing more rewarding than seeing a student's face light up as they go from struggling to finally understanding or even mastering something. What I enjoy most is creating a learning environment where kids can progress at their own pace, free from the rigid and one-size-fits-all approach often seen in schools. I believe true learning happens when students are given the time and support they need to understand, not just memorize. While community service hours are a nice perk, what truly drives me is witnessing students realize that learning is not an obligation but a gift.",
            bio_es: "“La educación no es llenar un cubo, sino encender un fuego.” – William Butler Yeats\n\nSoy Adrián Gómez, y empecé a dar tutorías porque me encanta ayudar a los estudiantes a comprender conceptos de una manera que tenga sentido para ellos. No hay nada más gratificante que ver la cara de un estudiante iluminarse cuando pasa de tener dificultades a finalmente entender o incluso dominar algo. Lo que más disfruto es crear un ambiente de aprendizaje donde los niños pueden progresar a su propio ritmo, libres del enfoque rígido y de talla única que a menudo se ve en las escuelas. Creo que el verdadero aprendizaje ocurre cuando a los estudiantes se les da el tiempo y el apoyo que necesitan para entender, no solo para memorizar. Si bien las horas de servicio comunitario son una buena ventaja, lo que realmente me impulsa es presenciar a los estudiantes darse cuenta de que aprender no es una obligación, sino un regalo.",
            facts_en: ["Sophomore", "Tutored at Paul W. Bell Middle School", "Tutoring from November to December 2024", "Teaches Middle School Math", "Aspiring Biomechanical Systems Engineer"],
            facts_es: ["Estudiante de segundo año", "Tutor en la Escuela Intermedia Paul W. Bell", "Tutor de noviembre a diciembre de 2024", "Enseña Matemáticas de escuela intermedia", "Aspirante a Ingeniero de Sistemas Biomecánicos"],
            color: "#191970"
        }
    },
    navigateTo(pageId, params = null) {
        let url = this.pages[pageId];
        if (url) {
            if (pageId === 'member' && params) {
                url += `?id=${params}`;
            }
            window.location.href = url;
        } else {
            window.location.href = this.pages['home'];
        }
    },
    init() {
        const headerContainer = document.getElementById('header');
        const footerContainer = document.querySelector('.site-footer');

        const headerHTML = `
            <div class="container">
                <div class="lang-switcher-mobile-wrapper"><div class="lang-switcher"><button id="lang-en-btn-mobile">EN</button><button id="lang-es-btn-mobile">ES</button></div></div>
                <a data-page-id="home" class="logo nav-link"><img src="https://i.imgur.com/vyE0G43.png" alt="Literary Speaking Logo" class="logo-unscrolled"><img src="https://i.imgur.com/UnpZvgZ.png" alt="Literary Speaking Logo" class="logo-scrolled"></a>
                <nav class="desktop-nav">
                    <div class="nav-item dropdown">
                        <a data-page-id="about" class="lang-switch nav-link" data-page-group="get-to-know-us" data-en="Get to Know Us" data-es="Conócenos"></a>
                        <div class="dropdown-menu">
                            <a data-page-id="about" class="lang-switch nav-link" data-en="About Us" data-es="Sobre Nosotros"></a>
                            <a data-page-id="the-team" class="lang-switch nav-link" data-en="The Team" data-es="El Equipo"></a>
                            <a data-page-id="news" class="lang-switch nav-link" data-en="News" data-es="Noticias"></a>
                            <a data-page-id="contact" class="lang-switch nav-link" data-en="Contact" data-es="Contacto"></a>
                        </div>
                    </div>
                    <div class="nav-item dropdown">
                        <a data-page-id="become-a-tutor" class="lang-switch nav-link" data-page-group="get-involved" data-en="Get Involved" data-es="Involúcrate"></a>
                        <div class="dropdown-menu">
                            <a data-page-id="receive-tutoring" class="lang-switch nav-link" data-en="Receive Tutoring" data-es="Recibir Tutoría"></a>
                            <a data-page-id="become-a-tutor" class="lang-switch nav-link" data-en="Become a Tutor" data-es="Conviértete en Tutor"></a>
                            <a data-page-id="support" class="lang-switch nav-link" data-en="Support Us" data-es="Apóyanos"></a>
                        </div>
                    </div>
                    <div class="nav-item dropdown">
                         <a data-page-id="articles" class="lang-switch nav-link" data-page-group="resources" data-en="Resources" data-es="Recursos"></a>
                        <div class="dropdown-menu">
                            <a data-page-id="articles" class="lang-switch nav-link" data-en="Articles" data-es="Artículos"></a>
                            <a data-page-id="lessons" class="lang-switch nav-link" data-en="Lessons" data-es="Lecciones"></a>
                            <a data-page-id="report-time" class="lang-switch nav-link" data-en="Report Time" data-es="Reportar Horas"></a>
                        </div>
                    </div>
                    <div class="lang-switcher"><button id="lang-en-btn">EN</button><button id="lang-es-btn">ES</button></div>
                </nav>
                <button class="menu-toggle" aria-label="Toggle navigation"><span></span><span></span><span></span></button>
            </div>
            <nav class="mobile-nav">
                <div class="nav-item-mobile">
                    <a class="lang-switch mobile-main-link" data-en="Get to Know Us" data-es="Conócenos"></a>
                    <div class="mobile-dropdown">
                        <a data-page-id="about" class="lang-switch nav-link" data-en="About Us" data-es="Sobre Nosotros"></a>
                        <a data-page-id="the-team" class="lang-switch nav-link" data-en="The Team" data-es="El Equipo"></a>
                        <a data-page-id="news" class="lang-switch nav-link" data-en="News" data-es="Noticias"></a>
                        <a data-page-id="contact" class="lang-switch nav-link" data-en="Contact" data-es="Contacto"></a>
                    </div>
                </div>
                <div class="nav-item-mobile">
                   <a class="lang-switch mobile-main-link" data-en="Get Involved" data-es="Involúcrate"></a>
                    <div class="mobile-dropdown">
                        <a data-page-id="receive-tutoring" class="lang-switch nav-link" data-en="Receive Tutoring" data-es="Recibir Tutoría"></a>
                        <a data-page-id="become-a-tutor" class="lang-switch nav-link" data-en="Become a Tutor" data-es="Conviértete en Tutor"></a>
                        <a data-page-id="support" class="lang-switch nav-link" data-en="Support Us" data-es="Apóyanos"></a>
                    </div>
                </div>
                <div class="nav-item-mobile">
                    <a class="lang-switch mobile-main-link" data-en="Resources" data-es="Recursos"></a>
                    <div class="mobile-dropdown">
                        <a data-page-id="articles" class="lang-switch nav-link" data-en="Articles" data-es="Artículos"></a>
                        <a data-page-id="lessons" class="lang-switch nav-link" data-en="Lessons" data-es="Lecciones"></a>
                        <a data-page-id="report-time" class="lang-switch nav-link" data-en="Report Time" data-es="Reportar Horas"></a>
                    </div>
                </div>
            </nav>
        `;

        const footerHTML = `
            <div class="container">
                <a data-page-id="home" class="nav-link"><img src="https://i.imgur.com/vyE0G43.png" alt="Literary Speaking Footer Logo" class="scroll-animated"></a>
                <div class="footer-grid">
                    <div class="footer-col">
                        <h3 class="lang-switch" data-en="Get to Know Us" data-es="Conócenos"></h3>
                        <a data-page-id="about" class="lang-switch nav-link" data-en="About Us" data-es="Sobre Nosotros"></a>
                        <a data-page-id="the-team" class="lang-switch nav-link" data-en="The Team" data-es="El Equipo"></a>
                        <a data-page-id="news" class="lang-switch nav-link" data-en="News" data-es="Noticias"></a>
                        <a data-page-id="contact" class="lang-switch nav-link" data-en="Contact" data-es="Contacto"></a>
                    </div>
                    <div class="footer-col">
                        <h3 class="lang-switch" data-en="Get Involved" data-es="Involúcrate"></h3>
                        <a data-page-id="receive-tutoring" class="lang-switch nav-link" data-en="Receive Tutoring" data-es="Recibir Tutoría"></a>
                        <a data-page-id="become-a-tutor" class="lang-switch nav-link" data-en="Become a Tutor" data-es="Conviértete en Tutor"></a>
                        <a data-page-id="support" class="lang-switch nav-link" data-en="Support Us" data-es="Apóyanos"></a>
                    </div>
                    <div class="footer-col">
                        <h3 class="lang-switch" data-en="Follow Us" data-es="Síguenos"></h3>
                        <div class="social-icons">
                           <a href="https://www.instagram.com/literaryspeakingtutoring/" target="_blank" rel="noopener noreferrer">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                           </a>
                        </div>
                    </div>
                </div>
                <p class="copyright lang-switch" data-en="Copyright © 2025 Literary Speaking Tutoring | Privacy Policy" data-es="Copyright © 2025 Tutoría de Literary Speaking | Política de Privacidad"></p>
            </div>
        `;

        if (headerContainer) headerContainer.innerHTML = headerHTML;
        if (footerContainer) footerContainer.innerHTML = footerHTML;

        const header = document.getElementById('header');
        const menuToggle = document.querySelector('.menu-toggle');
        const body = document.body;

        const handleScroll = () => {
            if (header) header.classList.toggle('scrolled', window.pageYOffset > 50);
        };
        window.addEventListener('scroll', handleScroll);
        handleScroll();

        const closeMenu = () => {
            body.classList.remove('menu-open');
            if (menuToggle) menuToggle.classList.remove('active');
            if (header) header.classList.remove('menu-active-state');
        };

        if (menuToggle) {
            menuToggle.addEventListener('click', () => {
                const isOpen = body.classList.toggle('menu-open');
                menuToggle.classList.toggle('active', isOpen);
                if (header) header.classList.toggle('menu-active-state', isOpen);
            });
        }
        
        document.querySelectorAll('.nav-link').forEach(link => {
            if (link.dataset.pageId) {
                link.addEventListener('click', (event) => {
                    event.preventDefault();
                    const pageId = link.dataset.pageId;
                    const memberId = link.dataset.memberId;
                    this.navigateTo(pageId, memberId);
                    closeMenu();
                });
            }
        });

        document.querySelectorAll('.desktop-nav .nav-item.dropdown > a').forEach(toggle => {
            toggle.addEventListener('click', function(e) {
                e.preventDefault();
                const parentItem = this.parentElement;
                const wasOpen = parentItem.classList.contains('is-open');
                document.querySelectorAll('.desktop-nav .nav-item.dropdown').forEach(item => {
                    item.classList.remove('is-open');
                });
                if (!wasOpen) {
                    parentItem.classList.add('is-open');
                }
            });
        });

        document.addEventListener('click', function(e) {
            if (!e.target.closest('.desktop-nav')) {
                document.querySelectorAll('.desktop-nav .nav-item.dropdown.is-open').forEach(item => {
                    item.classList.remove('is-open');
                });
            }
        });

        document.querySelectorAll('.nav-item-mobile .mobile-main-link').forEach(mainLink => {
            mainLink.addEventListener('click', (e) => {
                e.preventDefault();
                const parent = mainLink.parentElement;
                parent.classList.toggle('open');
            });
        });

        const setLanguage = (lang) => {
            document.querySelectorAll('[data-en], [data-es]').forEach(el => {
                const text = el.dataset[lang];
                if (text) {
                    if (el.tagName === 'UL') {
                        el.innerHTML = text;
                    } else {
                        el.textContent = text;
                    }
                }
            });
            localStorage.setItem('language', lang);
            const isEn = lang === 'en';
            document.querySelectorAll('#lang-en-btn, #lang-en-btn-mobile').forEach(btn => btn.classList.toggle('active', isEn));
            document.querySelectorAll('#lang-es-btn, #lang-es-btn-mobile').forEach(btn => btn.classList.toggle('active', !isEn));
            document.documentElement.lang = lang;
        };

        const toggleLanguage = () => {
            const currentLang = localStorage.getItem('language') || 'en';
            setLanguage(currentLang === 'en' ? 'es' : 'en');
        };

        document.querySelectorAll('.lang-switcher').forEach(el => el.addEventListener('click', toggleLanguage));

        const pageGroups = {
            'about': 'get-to-know-us',
            'the-team': 'get-to-know-us',
            'news': 'get-to-know-us',
            'contact': 'get-to-know-us',
            'receive-tutoring': 'get-involved',
            'become-a-tutor': 'get-involved',
            'support': 'get-involved',
            'articles': 'resources',
            'lessons': 'resources',
            'report-time': 'resources'
        };

        const currentPage = document.body.dataset.currentPage;
        if (currentPage) {
            document.querySelectorAll(`.nav-link[data-page-id="${currentPage}"]`).forEach(link => {
                link.classList.add('active-page-link');
            });
            const currentGroup = pageGroups[currentPage];
            if (currentGroup) {
                document.querySelectorAll(`.nav-link[data-page-group="${currentGroup}"]`).forEach(link => {
                    link.classList.add('active-page-link');
                });
            }
        }
        
        setLanguage(localStorage.getItem('language') || 'en');
    }
};

document.addEventListener('DOMContentLoaded', () => {
    siteRouter.init();
});```

### index.html

This file includes the updated CSS for the refined dropdown behavior and image loading background.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Literary Speaking</title>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700;900&display=swap');
        :root{--font-family:'Inter',-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;--color-text:#222;--color-text-light:#555;--transition-speed:0.4s;--color-blue-light:#c3e5ff;--color-blue-dark:#0a1763;--color-beige:#fff0db;--color-beige-dark:#8b4102;--color-purple:#f2e7ff;--color-purple-dark:#4b0082;--color-green:#d1ffe6;--color-green-dark:#186d5e;--color-pink:#ffebf2;--color-pink-dark:#c71585;--color-yellow:#fffacd;--color-yellow-dark:#8B4513;--color-red:#ffdddd;--color-red-dark:#b22222;--color-teal:#e0ffff;--color-teal-dark:#008080;--color-footer-bg:#f7f7ff;--color-footer-text:#4a0e7e}
        *,*:before,*:after{box-sizing:border-box}
        html{scroll-behavior:smooth}
        body{margin:0;font-family:var(--font-family);background-color:#fff;color:var(--color-text);-webkit-font-smoothing:antialiased;overflow-x:hidden}
        body.menu-open{overflow:hidden}
        .container{max-width:1100px;margin:0 auto;padding:0 30px}
        .section{padding:80px 0;text-align:center;background-color:var(--section-bg,white);color:var(--section-text,var(--color-text))}
        .section-title{font-size:2.5rem;font-weight:900;margin:0 0 10px;line-height:1.2}
        .section-title.small{font-size:2rem}
        .section-subtitle{font-size:1.1rem;color:var(--color-text-light);max-width:700px;margin:0 auto 50px}
        .placeholder-img{display:block;width:100%;height:100%;object-fit:cover;transition:transform var(--transition-speed) ease;border-radius:12px;background-color:#000}
        .placeholder-img:hover{transform:scale(1.03)}
        .btn{display:inline-block;padding:24px 64px;border:2px solid;background-color:transparent;text-decoration:none;font-weight:700;font-size:1.2rem;margin:5px;transition:all var(--transition-speed) ease;cursor:pointer;color:var(--section-main-color,#333);border-color:var(--section-main-color,#333)}
        .btn:hover{background-color:var(--section-main-color,#333);color:var(--section-bg,white)}
        .site-header{position:fixed;top:0;left:0;width:100%;z-index:1000;transition:background-color var(--transition-speed) ease,border-color var(--transition-speed) ease,box-shadow var(--transition-speed) ease}
        .site-header .container{display:flex;justify-content:space-between;align-items:center;height:70px}
        .site-header .logo{cursor:pointer}
        .site-header .logo img{height:40px;width:auto;transition:filter var(--transition-speed) ease;transform:translateZ(0);background-color:transparent}
        .site-header .logo:hover img{filter:grayscale(30%)}
        .logo .logo-scrolled{display:none}
        .site-header.scrolled .logo .logo-unscrolled{display:none}
        .site-header.scrolled .logo .logo-scrolled{display:block}
        .site-header:not(.scrolled) .logo .logo-unscrolled{height:41px;transform:translate(0px,2px)}
        .desktop-nav{display:flex;align-items:center}
        .desktop-nav a{margin:0 10px;padding:5px 0;text-decoration:none;font-weight:500;font-size:.85rem;transition:color var(--transition-speed) ease, border-color var(--transition-speed) ease; cursor: pointer;}
        .desktop-nav .nav-link.active-page-link{font-weight:700}
        .lang-switcher{display:flex;border:1px solid;border-radius:100px;transition:border-color var(--transition-speed) ease;cursor:pointer;-webkit-tap-highlight-color:transparent;margin-left:10px}
        .lang-switcher button{background:0 0;border:0;padding:5px 10px;font-family:var(--font-family);font-weight:700;font-size:.75rem;cursor:pointer;border-radius:100px;transition:all var(--transition-speed) ease;pointer-events:none}
        .site-header:not(.scrolled){background-color:transparent;border-bottom-color:transparent}
        .site-header:not(.scrolled) .desktop-nav a{color:#fff;text-shadow:1px 1px 2px rgba(0,0,0,.2)}
        .site-header:not(.scrolled) .desktop-nav a:hover{color:#ddd}
        .site-header:not(.scrolled) .desktop-nav .lang-switcher{border-color:rgba(255,255,255,.5)}
        .site-header:not(.scrolled) .desktop-nav .lang-switcher button{color:#fff}
        .site-header:not(.scrolled) .desktop-nav .lang-switcher button.active{background-color:#fff;color:var(--color-text)}
        .site-header.scrolled{background-color:rgba(255,255,255,.85);backdrop-filter:blur(10px);-webkit-backdrop-filter:blur(10px);border-bottom:1px solid #f0f0f0}
        .site-header.scrolled .desktop-nav a{color:var(--color-text-light);text-shadow:none}
        .site-header.scrolled .desktop-nav a:hover{color:var(--color-text)}
        .site-header.scrolled .desktop-nav .lang-switcher{border-color:rgba(0,0,0,.1)}
        .site-header.scrolled .desktop-nav .lang-switcher button{color:var(--color-text-light)}
        .site-header.scrolled .desktop-nav .lang-switcher button.active{background-color:var(--color-text);color:#fff}
        .nav-item.dropdown{position:relative}
        .dropdown-menu{display:block;position:absolute;top:100%;left:0;background-color:#fff;min-width:180px;box-shadow:0 8px 16px 0 rgba(0,0,0,0.2);z-index:1;border-radius:8px;padding:10px 0;margin-top:10px;opacity:0;visibility:hidden;transform:translateY(-10px);transition:opacity 0.3s ease, transform 0.3s ease, visibility 0.3s}
        .dropdown-menu a{padding:12px 16px;text-decoration:none;display:block;color:var(--color-text) !important;text-shadow:none;font-weight:500}
        .dropdown-menu a:hover{background-color:#f1f1f1}
        .nav-item.dropdown:hover .dropdown-menu, .nav-item.dropdown.is-open .dropdown-menu{opacity:1;visibility:visible;transform:translateY(0)}
        .lang-switcher-mobile-wrapper,.menu-toggle,.mobile-nav{display:none}
        .hero-banner{height:100vh;min-height:700px;display:flex;align-items:center;justify-content:center;color:#fff;text-align:center;position:relative;padding:0 20px;background-image:url(https://i.imgur.com/uJwznLu.jpeg);background-attachment:fixed;background-position:center;background-repeat:no-repeat;background-size:cover;background-color:#000}
        .hero-banner .overlay{position:absolute;top:0;left:0;width:100%;height:100%;background-color:rgba(0,0,0,.5);z-index:2}
        .hero-banner .content{position:relative;z-index:3}
        .hero-banner h1{font-size:3.8rem;font-weight:900;margin:0;line-height:1.2}
        .hero-banner p{margin:15px auto 30px;font-size:1.2rem;max-width:600px}
        .hero-banner .btn{background-color:#fff;color:#333;border-color:#fff;padding:13px 33px;font-size:1.1rem}
        .hero-banner .btn:hover{background-color:transparent;color:#fff}
        .card-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:30px}
        .card-grid .scroll-animated:nth-child(2){transition-delay:.1s}
        .card-grid .scroll-animated:nth-child(3){transition-delay:.2s}
        .stat-card{padding:30px;border-radius:16px;transition:all var(--transition-speed) ease;background-color:var(--card-bg,#eee);color:var(--section-main-color,var(--color-text))}
        .stat-card:hover{transform:translateY(-8px);box-shadow:0 15px 30px rgba(0,0,0,.08)}
        .stat-card .big-number{font-size:6rem;font-weight:900;margin:10px 0;line-height:1}
        .stat-card .stat-label{font-size:1.1rem;font-weight:700;margin:0 0 10px}
        .stat-card .stat-desc{font-size:1rem;color:var(--stat-desc-color,var(--color-text-light));line-height:1.5}
        .stat-card .stat-desc a{text-decoration:underline;font-weight:700;color:inherit}
        .title-box{background-color:rgba(255,255,255,.6);padding:25px 40px;border-radius:16px;display:inline-block;margin-bottom:50px;color:var(--section-main-color,var(--color-text))}
        .title-box .title-number{font-size:1.5rem;font-weight:900}
        .title-box .title-main{font-size:2.2rem;font-weight:900;margin:5px 0}
        .title-box .title-sub{font-size:1.5rem;font-weight:700}
        .image-grid-2{display:grid;grid-template-columns:1fr 1fr;gap:30px;align-items:center}
        .logo-strip{display:flex;flex-wrap:wrap;justify-content:center;align-items:center;gap:40px;margin-top:50px}
        .logo-strip a{display:block}
        .logo-strip .placeholder-img{height:60px;width:auto;min-width:120px;max-width:150px;object-fit:contain;border-radius:0;filter:grayscale(1);opacity:.7;background-color:transparent}
        .logo-strip .placeholder-img:hover{transform:scale(1.05);filter:grayscale(0);opacity:1}
        .social-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:20px;margin-top:40px}
        .form-container{max-width:600px;margin:50px auto 0;text-align:left}
        .form-group{margin-bottom:25px}
        .form-group label{display:block;margin-bottom:8px;font-weight:700;font-size:.9rem}
        .form-group input,.form-group textarea{width:100%;padding:12px 0;border:0;border-bottom:2px solid rgba(0,0,0,.2);font-family:var(--font-family);font-size:1rem;background-color:transparent;transition:border-color var(--transition-speed) ease}
        .form-group input:focus,.form-group textarea:focus{outline:0;border-color:currentColor}
        .form-group textarea{resize:vertical}
        .site-footer{background-color:var(--color-footer-bg);padding:60px 0;text-align:center}
        .site-footer img{height:60px;margin:0 auto 20px;background-color:transparent}
        .site-footer .footer-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:20px;margin:30px auto;text-align:left}
        .site-footer .footer-col h3{font-size:1rem;font-weight:700;color:var(--color-footer-text);margin-bottom:15px}
        .site-footer .footer-col a{display:block;margin-bottom:10px;color:var(--color-footer-text);text-decoration:none;font-weight:500;cursor:pointer}
        .site-footer .footer-col a:hover{text-decoration:underline}
        .site-footer .social-icons{display:flex;gap:15px}
        .site-footer .social-icons a{color:var(--color-footer-text)}
        .site-footer .copyright{margin-top:40px;font-size:0.9rem;color:var(--color-footer-text)}
        .scroll-animated{opacity:0;transform:translateY(30px);transition:opacity .6s ease-out,transform .6s ease-out}
        .scroll-animated.is-visible{opacity:1;transform:translateY(0)}
        .section-theme-blue{--section-bg:var(--color-blue-light);--section-main-color:var(--color-blue-dark);--card-bg:#76cae9;--stat-desc-color:var(--color-blue-dark)}
        .section-theme-blue > .container > p{margin-top:30px;color:var(--color-blue-dark)}
        .section-theme-beige{--section-bg:var(--color-beige);--section-main-color:var(--color-beige-dark);padding:65px 0}
        .quote-container{position:relative;display:inline-block;margin:0}
        .quote-container::before,.quote-container::after{font-family:serif;font-size:9rem;font-weight:900;line-height:0;position:absolute;color:var(--section-main-color)}
        .quote-container::before{content:'“';top:40px;left:-25px}
        .quote-container::after{content:'”';bottom:40px;right:-25px}
        .section-theme-beige .quote{font-size:3rem;font-weight:700;color:var(--section-main-color);display:inline-block;background-color:rgba(255,255,255,.5);padding:40px 70px;border-radius:16px}
        .section-theme-purple{--section-bg:var(--color-purple);--section-main-color:var(--color-purple-dark)}
        #receive-tutoring .section-subtitle{margin-top:40px}
        .section-theme-green{--section-bg:var(--color-green);--section-main-color:var(--color-green-dark);--card-bg:#a9f8dd;--stat-desc-color:var(--color-green-dark)}
        .section-theme-pink{--section-bg:var(--color-pink);--section-main-color:var(--color-pink-dark)}
        #support-us .section-title{margin-top:60px}
        .section-blue-2 .card-grid{grid-template-columns:1fr 1fr}
        .section-theme-yellow{--section-bg:var(--color-yellow);--section-main-color:var(--color-yellow-dark)}
        #lessons .placeholder-img{aspect-ratio:2 / 1;margin-bottom:40px}
        .section-theme-red{--section-bg:var(--color-red)}
        .section-theme-red .stat-card{--section-main-color:var(--color-red-dark);--card-bg:#ffb6c1;--stat-desc-color:var(--color-red-dark);max-width:700px;margin-left:auto;margin-right:auto}
        #get-involved .placeholder-img{aspect-ratio:2 / 1;margin-bottom:40px}
        .section-theme-green-2{--section-bg:#e8f5e9;--section-main-color:#43a047}
        #articles.section-theme-green-2 .image-grid-2{align-items:flex-start}
        #articles.section-theme-green-2 .placeholder-img{aspect-ratio:4 / 3}
        #articles.section-theme-green-2 .form-container{margin:0;padding:0;box-shadow:none}
        #articles.section-theme-green-2 h3,#articles.section-theme-green-2 p{text-align:left}
        .section-theme-purple-2{--section-bg:#f3e5f5;--section-main-color:#8e24aa}
        #contact.section-theme-teal .image-grid-2,#articles.section-theme-green-2 .image-grid-2{align-items:flex-start}
        #contact.section-theme-teal .placeholder-img{aspect-ratio:1 / 1}
        #contact.section-theme-teal .form-container{margin:0;padding:0;box-shadow:none;color:var(--section-main-color)}
        @media (max-width:1150px){
        .desktop-nav{display:none}
        .lang-switcher-mobile-wrapper,.menu-toggle,.mobile-nav{display:flex}
        .site-header .container{display:grid;grid-template-columns:1fr auto 1fr;align-items:center}
        .lang-switcher-mobile-wrapper{justify-self:start}
        .lang-switcher-mobile-wrapper .lang-switcher{margin-left:0}
        .site-header .logo{justify-self:center}
        .mobile-nav{position:fixed;top:0;left:0;width:100%;height:100vh;background-color:rgba(255,255,255,.95);backdrop-filter:blur(10px);-webkit-backdrop-filter:blur(10px);flex-direction:column;align-items:center;justify-content:center;transform:translateY(-100%);transition:transform var(--transition-speed) ease-in-out;padding-top:70px}
        body.menu-open .mobile-nav{transform:translateY(0)}
        .mobile-nav a{text-shadow:none;text-decoration:none}
        .mobile-nav .nav-item-mobile{width:80%;text-align:left;padding:10px 0;border-bottom:1px solid #eee}
        .mobile-nav .nav-item-mobile:last-of-type{border-bottom:none}
        .mobile-nav > a.nav-link{width:80%;text-align:left;padding:15px 0;border-bottom:1px solid #eee;font-size:1.5rem;color:var(--color-text)}
        .nav-item-mobile .mobile-main-link{font-size:1.5rem;color:var(--color-text);display:flex;justify-content:space-between;align-items:center;cursor:pointer}
        .nav-item-mobile .mobile-main-link::after{content:'>';transform:rotate(90deg);transition:transform .3s ease}
        .nav-item-mobile.open .mobile-main-link::after{transform:rotate(-90deg)}
        .mobile-dropdown{max-height:0;overflow:hidden;transition:max-height .4s ease-out}
        .nav-item-mobile.open .mobile-dropdown{max-height:500px}
        .mobile-dropdown a{display:block;font-size:1.2rem;color:var(--color-text-light);padding:10px 0 10px 20px}
        .menu-toggle{flex-direction:column;justify-content:space-between;width:30px;height:21px;background:0 0;border:0;cursor:pointer;padding:0;z-index:1001;justify-self:end}
        .menu-toggle span{width:30px;height:3px;border-radius:10px;transition:all var(--transition-speed) ease-in-out}
        .site-header:not(.scrolled):not(.menu-active-state) .lang-switcher-mobile-wrapper .lang-switcher{border-color:rgba(255,255,255,.5)}
        .site-header:not(.scrolled):not(.menu-active-state) .lang-switcher-mobile-wrapper .lang-switcher button{color:#fff}
        .site-header:not(.scrolled):not(.menu-active-state) .lang-switcher-mobile-wrapper .lang-switcher button.active{background-color:#fff;color:var(--color-text)}
        .site-header:not(.scrolled):not(.menu-active-state) .menu-toggle span{background-color:#fff}
        .site-header.scrolled,.site-header.menu-active-state{background-color:rgba(255,255,255,.85);backdrop-filter:blur(10px);-webkit-backdrop-filter:blur(10px);border-bottom:1px solid #f0f0f0}
        :is(.site-header.scrolled,.site-header.menu-active-state) .lang-switcher-mobile-wrapper .lang-switcher{border-color:rgba(0,0,0,.1)}
        :is(.site-header.scrolled,.site-header.menu-active-state) .lang-switcher-mobile-wrapper .lang-switcher button{color:var(--color-text-light)}
        :is(.site-header.scrolled,.site-header.menu-active-state) .lang-switcher-mobile-wrapper .lang-switcher button.active{background-color:var(--color-text);color:#fff}
        :is(.site-header.scrolled,.site-header.menu-active-state) .menu-toggle span{background-color:var(--color-text)}
        .menu-toggle.active span:nth-child(1){transform:translateY(9px) rotate(45deg)}
        .menu-toggle.active span:nth-child(2){opacity:0;transform:translateX(-20px)}
        .menu-toggle.active span:nth-child(3){transform:translateY(-9px) rotate(-45deg)}}
        @media (max-width:768px){
        .section{padding:60px 0}
        .section-title{font-size:2rem}
        .section-subtitle{font-size:1rem}
        .hero-banner{background-attachment:scroll}
        .hero-banner h1{font-size:2.2rem}
        .hero-banner p{font-size:1.1rem}
        .btn{padding:18px 32px;font-size:1rem}
        .title-box .title-main{font-size:1.9rem}
        .title-box .title-sub{font-size:1.2rem}
        .stat-card .big-number{font-size:5rem}
        .stat-card .stat-desc{font-size:.9rem}
        .section-theme-beige .quote{font-size:2.5rem;padding:30px 20px;max-width:90vw}
        .quote-container::before,.quote-container::after{font-size:6rem}
        .quote-container::before{top:25px;left:0}
        .quote-container::after{bottom:25px;right:0}
        .card-grid,.image-grid-2,.social-grid,.section-blue-2 .card-grid,.site-footer .footer-grid{grid-template-columns:1fr}
        .site-footer .footer-col{text-align:center}}
    </style>
</head>
<body data-current-page="home">
    <header class="site-header" id="header"></header>
    <main>
        <section class="hero-banner" id="home">
            <div class="overlay"></div>
            <div class="content scroll-animated">
                <h1 class="lang-switch" data-en="Be Mentored by a Tutor" data-es="Sé Mentorizado por un Tutor"></h1>
                <p class="lang-switch" data-en="Free tutoring for those learning English and students seeking assistance in school" data-es="Tutoría gratuita para quienes aprenden inglés y estudiantes que buscan ayuda en la escuela"></p>
                <a data-page-id="receive-tutoring" class="btn lang-switch nav-link" data-en="Receive Assistance" data-es="Recibir Asistencia"></a>
            </div>
        </section>
        <section class="section section-theme-blue">
            <div class="container">
                <div class="card-grid">
                    <div class="stat-card scroll-animated">
                        <p class="stat-label lang-switch" data-en="ELL* and Low-Income students are" data-es="Estudiantes ELL* y de bajos ingresos son"></p>
                        <div class="big-number">50</div>
                        <p class="stat-desc"><span class="lang-switch" data-en="Percent less likely to take advanced math courses in high school compared nationally" data-es="Porciento menos propensos a tomar cursos de matemáticas avanzadas en la escuela secundaria en comparación a nivel nacional"></span><br><a href="https://www.sciencedirect.com/science/article/abs/pii/S0361476X24000572" target="_blank" rel="noopener noreferrer" class="lang-switch" data-en="Learn more" data-es="Aprende más"></a></p>
                    </div>
                    <div class="stat-card scroll-animated">
                        <p class="stat-label lang-switch" data-en="Of Low-Income 8th graders," data-es="De estudiantes de 8º grado de bajos ingresos,"></p>
                        <div class="big-number">18</div>
                        <p class="stat-desc"><span class="lang-switch" data-en="Percent are proficient in math versus 31% nationally" data-es="Porciento son competentes en matemáticas versus 31% a nivel nacional"></span><br><a href="https://www.letsgolearn.com/education-reform/poverty-impacts-educational-outcomes/" target="_blank" rel="noopener noreferrer" class="lang-switch" data-en="Learn more" data-es="Aprende más"></a></p>
                    </div>
                    <div class="stat-card scroll-animated">
                        <p class="stat-label lang-switch" data-en="Of ELL* 8th graders," data-es="De estudiantes ELL* de 8º grado,"></p>
                        <div class="big-number">5</div>
                         <p class="stat-desc"><span class="lang-switch" data-en="Percent are proficient in Reading versus 33% nationally" data-es="Porciento son competentes en lectura versus 33% a nivel nacional"></span><br><a href="https://www.edweek.org/teaching-learning/nations-report-card-how-ells-fared-in-2011/2011/11" target="_blank" rel="noopener noreferrer" class="lang-switch" data-en="Learn more" data-es="Aprende más"></a></p>
                    </div>
                </div>
                <p class="scroll-animated lang-switch" data-en='* "ELL" means "English language learner"' data-es='* "ELL" significa "aprendiz del idioma inglés"'></p>
            </div>
        </section>
        <section class="section section-theme-beige"><div class="container scroll-animated"><div class="quote-container"><h2 class="quote lang-switch" data-en="What do we do?" data-es="¿Qué Hacemos?"></h2></div></div></section>
        <section class="section section-theme-purple" id="receive-tutoring-section">
            <div class="container">
                <div class="title-box scroll-animated"><div class="title-number">1</div><h2 class="title-main lang-switch" data-en="Peer-to-Peer Tutoring" data-es="Tutoría de Estudiante a Estudiante"></h2></div>
                <div class="image-grid-2 scroll-animated"><img src="https://i.imgur.com/sMeIfhe.jpeg" alt="Students at green table" class="placeholder-img"><img src="https://i.imgur.com/61wvnof.jpeg" alt="Two students studying" class="placeholder-img"></div>
                <p class="section-subtitle scroll-animated lang-switch" style="margin-top: 40px;" data-en="We offer FREE, in person tutoring sessions for students learning English at Miami Coral Park Senior High School and Paul W. Bell Middle School." data-es="Ofrecemos sesiones de tutoría GRATUITAS y en persona para estudiantes que aprenden inglés en Miami Coral Park Senior High School y Paul W. Bell Middle School."></p>
                <div class="scroll-animated">
                    <a data-page-id="receive-tutoring" class="btn lang-switch nav-link" data-en="Receive Tutoring" data-es="Recibir Tutoría"></a>
                    <a data-page-id="become-a-tutor" class="btn lang-switch nav-link" data-en="Become a Tutor" data-es="Conviértete en Tutor"></a>
                </div>
            </div>
        </section>
        <section class="section section-theme-green">
            <div class="container">
                <div class="card-grid">
                    <div class="stat-card scroll-animated"><p class="stat-label lang-switch" data-en="Over" data-es="Más de"></p><div class="big-number">40</div><p class="stat-desc lang-switch" data-en="Tutoring Volunteers assisting in-person since early 2024" data-es="Voluntarios de tutoría asistiendo en persona desde principios de 2024"></p></div>
                    <div class="stat-card scroll-animated"><p class="stat-label lang-switch" data-en="Over" data-es="Más de"></p><div class="big-number">80</div><p class="stat-desc lang-switch" data-en="Students served through individual and group tutoring" data-es="Estudiantes atendidos a través de tutorías individuales y grupales"></p></div>
                    <div class="stat-card scroll-animated"><p class="stat-label lang-switch" data-en="Over" data-es="Más de"></p><div class="big-number">92</div><p class="stat-desc lang-switch" data-en="Percent of students expressed or demonstrated greater confidence" data-es="Porciento de estudiantes expresaron o demostraron mayor confianza"></p></div>
                </div>
            </div>
        </section>
        <section class="section section-theme-pink" id="support-us-section">
            <div class="container">
                <div class="title-box scroll-animated"><div class="title-number">2</div><h2 class="title-main lang-switch" data-en="Supporting Local Community" data-es="Apoyando a la Comunidad Local"></h2></div>
                <div class="image-grid-2 scroll-animated"><img src="https://i.imgur.com/F7Kb5Gz.jpeg" alt="Donation boxes in car" class="placeholder-img"><img src="https://i.imgur.com/UQUm6Gb.jpeg" alt="Group photo Happy Mother's Day" class="placeholder-img"></div>
                <h3 class="section-title small scroll-animated lang-switch" style="margin-top: 30px;" data-en="Organizations and Institutions We've Supported:" data-es="Organizaciones e Instituciones que Hemos Apoyado:"></h3><div class="logo-strip scroll-animated">
                    <a href="https://www3.dadeschools.net/home" target="_blank" rel="noopener noreferrer"><img src="https://i.imgur.com/lyc4Qhu.png" alt="Miami-Dade County Public Schools Logo" class="placeholder-img"></a>
                    <a href="https://www.mcpshs.net/" target="_blank" rel="noopener noreferrer"><img src="https://i.imgur.com/6ZE4lPq.png" alt="Miami Coral Park Senior High School Logo" class="placeholder-img"></a>
                    <a href="https://www.miamianimalrescue.org/" target="_blank" rel="noopener noreferrer"><img src="https://i.imgur.com/GG4krxg.png" alt="Miami Animal Rescue Logo" class="placeholder-img"></a>
                    <a href="https://lotushouse.org/" target="_blank" rel="noopener noreferrer"><img src="https://i.imgur.com/yQqvnXc.png" alt="Lotus House Logo" class="placeholder-img"></a>
                    <a href="https://paulbellmiddle.net/" target="_blank" rel="noopener noreferrer"><img src="https://i.imgur.com/SoSb1B6.png" alt="Paul W. Bell Middle School Logo" class="placeholder-img"></a>
                    <a href="https://www.miamidade.gov/global/home.page" target="_blank" rel="noopener noreferrer"><img src="https://i.imgur.com/mDvYYWH.png" alt="Miami-Dade County Logo" class="placeholder-img"></a>
                </div>
            </div>
        </section>
        <section class="section section-theme-blue section-blue-2">
            <div class="container">
                 <div class="card-grid">
                    <div class="stat-card scroll-animated"><p class="stat-label lang-switch" data-en="Over" data-es="Más de"></p><div class="big-number">200</div><p class="stat-desc lang-switch" data-en="Students and community members have contributed" data-es="Estudiantes y miembros de la comunidad han contribuido"></p></div>
                    <div class="stat-card scroll-animated"><p class="stat-label lang-switch" data-en="Over" data-es="Más de"></p><div class="big-number">1500</div><p class="stat-desc lang-switch" data-en="Dollars worth of donations distributed" data-es="Dólares en donaciones distribuidas"></p></div>
                </div>
            </div>
        </section>
        <section class="section section-theme-yellow" id="lessons-section">
            <div class="container">
                <div class="title-box scroll-animated"><div class="title-number">3</div><h2 class="title-main lang-switch" data-en="Online Tutoring and Lessons" data-es="Tutoría y Lecciones en Línea"></h2></div>
                <img src="https://i.imgur.com/aIDN2J3.jpeg" alt="Students in online tutoring session" class="placeholder-img scroll-animated">
                <p class="section-subtitle scroll-animated lang-switch" style="margin-top: 40px;" data-en="Starting Fall 2025, we will be offering free online tutoring and developing online lessons for self-guided learning." data-es="A partir del otoño de 2025, ofreceremos tutorías en línea gratuitas y desarrollaremos lecciones en línea para el aprendizaje autoguiado."></p>
                <h3 class="section-title small scroll-animated lang-switch" data-en="Looking for Online Tutors and Lesson Writers" data-es="Buscando Tutores y Escritores de Lecciones en Línea"></h3>
                <div class="scroll-animated">
                    <a data-page-id="become-a-tutor" class="btn lang-switch nav-link" data-en="Volunteer" data-es="Voluntario"></a>
                    <a data-page-id="receive-tutoring" class="btn lang-switch nav-link" data-en="Receive Tutoring" data-es="Recibir Tutoría"></a>
                    <a data-page-id="lessons" class="btn lang-switch nav-link" data-en="Lessons" data-es="Lecciones"></a>
                </div>
            </div>
        </section>
        <section class="section section-theme-red">
            <div class="container">
                <div class="stat-card scroll-animated"><p class="stat-label lang-switch" data-en="Over" data-es="Más de"></p><div class="big-number">1000</div><p class="stat-desc lang-switch" data-en="Hours of community service awarded to volunteers" data-es="Horas de servicio comunitario otorgadas a voluntarios"></p></div>
            </div>
        </section>
        <section class="section section-theme-purple" id="get-involved-section">
            <div class="container">
                <div class="title-box scroll-animated"><div class="title-number">4</div><h2 class="title-main lang-switch" data-en="Essay and College Application Assistance" data-es="Asistencia para Ensayos y Solicitudes Universitarias"></h2></div>
                <img src="https://i.imgur.com/9VueW1Z.jpeg" alt="Students getting essay help" class="placeholder-img scroll-animated">
                <p class="section-subtitle scroll-animated lang-switch" style="margin-top: 40px;" data-en="Starting Fall 2025, we will be offering online assistance with essay editing and applying to college." data-es="A partir del otoño de 2025, ofreceremos asistencia en línea con la edición de ensayos y la solicitud de ingreso a la universidad."></p>
                <h3 class="section-title small scroll-animated lang-switch" data-en="Looking for Online Editors and Councilors" data-es="Buscando Editores y Consejeros en Línea"></h3>
                <div class="scroll-animated">
                    <a data-page-id="become-a-tutor" class="btn lang-switch nav-link" data-en="Volunteer" data-es="Voluntario"></a>
                    <a data-page-id="receive-tutoring" class="btn lang-switch nav-link" data-en="Receive Assistance" data-es="Recibir Asistencia"></a>
                </div>
            </div>
        </section>
        <section class="section section-theme-green-2" id="articles-section">
            <div class="container">
                <div class="title-box scroll-animated"><div class="title-number">5</div><h2 class="title-main lang-switch" data-en="Articles and Newsletter" data-es="Artículos y Boletín Informativo"></h2></div>
                <div class="image-grid-2 scroll-animated">
                    <img src="https://i.imgur.com/PmqrHBx.jpeg" alt="Newsletter Image" class="placeholder-img">
                    <div class="form-container">
                        <h3 class="lang-switch" data-en="Sign Up for Our Seasonal Newsletter" data-es="Suscríbete a Nuestro Boletín de Temporada"></h3>
                        <p class="lang-switch" data-en="Receive updates on our program, articles, and news!" data-es="¡Recibe notificaciones sobre nuestro programa, artículos y noticias!"></p>
                        <form><div class="form-group"><label for="email-signup" class="lang-switch" data-en="EMAIL *" data-es="CORREO ELECTRÓNICO *"></label><input type="email" id="email-signup" required></div><button type="submit" class="btn lang-switch" data-en="Subscribe" data-es="Suscribir"></button></form>
                    </div>
                </div>
            </div>
        </section>
        <section class="section section-theme-purple-2" id="news-section">
            <div class="container">
                <h2 class="section-title scroll-animated lang-switch" data-en="Social Media" data-es="Redes Sociales"></h2>
                <p class="section-subtitle scroll-animated">Follow us <a href="https://www.instagram.com/literaryspeakingtutoring/" target="_blank" rel="noopener noreferrer">@literaryspeakingtutoring</a></p>
                <div class="social-grid scroll-animated">
                    <a href="https://www.instagram.com/literaryspeakingtutoring/p/DK3AVD4M3GZ/" target="_blank" rel="noopener noreferrer"><img src="https://i.imgur.com/Ceyk6wH.png" alt="Social Media Image 1" class="placeholder-img"></a>
                    <a href="https://www.instagram.com/literaryspeakingtutoring/p/DJyDXDLscC_/" target="_blank" rel="noopener noreferrer"><img src="https://i.imgur.com/6VsQop0.png" alt="Social Media Image 2" class="placeholder-img"></a>
                    <a href="https://www.instagram.com/literaryspeakingtutoring/p/DJyABrhMuRv/" target="_blank" rel="noopener noreferrer"><img src="https://i.imgur.com/KHl81Ia.png" alt="Social Media Image 3" class="placeholder-img"></a>
                    <a href="https://www.instagram.com/literaryspeakingtutoring/p/DJx-qDis6EY/" target="_blank" rel="noopener noreferrer"><img src="https://i.imgur.com/5mxH5l2.png" alt="Social Media Image 4" class="placeholder-img"></a>
                    <a href="https://www.instagram.com/literaryspeakingtutoring/p/DJx7cIlsbME/" target="_blank" rel="noopener noreferrer"><img src="https://i.imgur.com/SBbDP7q.png" alt="Social Media Image 5" class="placeholder-img"></a>
                    <a href="https://www.instagram.com/literaryspeakingtutoring/p/DJx57vAs3So/" target="_blank" rel="noopener noreferrer"><img src="https://i.imgur.com/6jBECxo.png" alt="Social Media Image 6" class="placeholder-img"></a>
                </div>
            </div>
        </section>
        <section class="section section-theme-teal" id="contact-section">
            <div class="container">
                <h2 class="section-title scroll-animated lang-switch" data-en="Do you have questions?" data-es="¿Tienes preguntas?"></h2>
                <p class="section-subtitle scroll-animated lang-switch" data-en="Use the form below for any questions, or contact us at literaryspeakingmentoring@gmail.com." data-es="Utilice el siguiente formulario para cualquier pregunta o póngase en contacto con nosotros en literaryspeakingmentoring@gmail.com."></p>
                <div class="image-grid-2 scroll-animated">
                    <img src="https://i.imgur.com/ltxyrk1.jpeg" alt="Contact Form Image" class="placeholder-img">
                    <div class="form-container">
                        <h3 class="lang-switch" data-en="Message" data-es="Mensaje"></h3>
                        <form><div class="form-group"><label for="contact-name" class="lang-switch" data-en="NAME *" data-es="NOMBRE *"></label><input type="text" id="contact-name" required></div><div class="form-group"><label for="contact-email" class="lang-switch" data-en="EMAIL *" data-es="CORREO ELECTRÓNICO *"></label><input type="email" id="contact-email" required></div><div class="form-group"><label for="contact-comment" class="lang-switch" data-en="COMMENT *" data-es="COMENTARIO *"></label><textarea id="contact-comment" required></textarea></div><button type="submit" class="btn lang-switch" data-en="Submit" data-es="Enviar"></button></form>
                    </div>
                </div>
            </div>
        </section>
    </main>
    <footer class="site-footer"></footer>
    <script src="router.js"></script>
    <script>
        document.addEventListener('DOMContentLoaded', () => {
            const animateCounter = (el) => {
                const final = parseInt(el.dataset.final, 10);
                if (isNaN(final)) return;
                let start = null;
                const duration = 2000;
                const step = (timestamp) => {
                    if (!start) start = timestamp;
                    const progress = Math.min((timestamp - start) / duration, 1);
                    el.textContent = Math.floor(progress * final);
                    if (progress < 1) {
                        requestAnimationFrame(step);
                    } else {
                        el.textContent = final;
                    }
                };
                requestAnimationFrame(step);
            };

            document.querySelectorAll('.big-number').forEach(el => {
                el.dataset.final = el.textContent;
                el.textContent = '0';
            });

            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-visible');
                        const counter = entry.target.querySelector('.big-number');
                        if (counter && counter.textContent === '0') {
                             animateCounter(counter);
                        }
                        observer.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.1 });

            document.querySelectorAll('.scroll-animated').forEach(el => {
                if ('IntersectionObserver' in window) {
                    observer.observe(el);
                } else {
                    el.classList.add('is-visible');
                    const counter = el.querySelector('.big-number');
                    if(counter) counter.textContent = counter.dataset.final;
                }
            });
        });
    </script>
</body>
</html>
