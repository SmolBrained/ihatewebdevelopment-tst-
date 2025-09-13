import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";
import { getFirestore, collection, getDocs, doc, getDoc } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";
import { getFunctions, httpsCallable } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-functions.js";

const firebaseConfig = {
    apiKey: "AIzaSyD0qVihpuLI0cF0PZ32o8tFBLfTgjlqB6A",
    authDomain: "literary-speaking.firebaseapp.com",
    projectId: "literary-speaking",
    storageBucket: "literary-speaking.appspot.com",
    messagingSenderId: "699059463612",
    appId: "1:699059463612:web:ecb2e784d627c6b93937b9",
    measurementId: "G-0L1V3XXGGR"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const functions = getFunctions(app);

let products = [];
let cart = JSON.parse(localStorage.getItem('cart')) || [];

const saveCart = () => {
    localStorage.setItem('cart', JSON.stringify(cart));
};

const updateCartDisplay = () => {
    const cartContainer = document.getElementById('cart-items-container');
    const cartIconCount = document.getElementById('cart-item-count');
    const cartTotalPrice = document.getElementById('cart-total-price');
    const lang = document.documentElement.lang || 'en';

    if (cartContainer) {
        cartContainer.innerHTML = '';
        if (cart.length === 0) {
            cartContainer.innerHTML = `<p>${lang === 'es' ? 'Tu carrito está vacío.' : 'Your cart is empty.'}</p>`;
        } else {
            cart.forEach(item => {
                const product = products.find(p => p.id === item.id);
                if (product) {
                    const itemElement = document.createElement('div');
                    itemElement.className = 'cart-item';
                    itemElement.innerHTML = `
                        <img src="${product.imageUrl || 'https://i.imgur.com/3Yj6bA1.png'}" alt="${product[`name_${lang}`]}" class="cart-item-image">
                        <div class="cart-item-details">
                            <p class="cart-item-name">${product[`name_${lang}`]}</p>
                            <p class="cart-item-price">$${(product.price || 0).toFixed(2)}</p>
                            <div class="cart-item-quantity">
                                <button data-id="${item.id}" class="quantity-change decrease" aria-label="Decrease quantity">-</button>
                                <span>${item.quantity}</span>
                                <button data-id="${item.id}" class="quantity-change increase" aria-label="Increase quantity">+</button>
                            </div>
                        </div>
                        <button data-id="${item.id}" class="remove-item-btn" aria-label="Remove item">&times;</button>
                    `;
                    cartContainer.appendChild(itemElement);
                }
            });
        }
    }
    
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    const totalPrice = cart.reduce((sum, item) => {
        const product = products.find(p => p.id === item.id);
        return sum + (product ? product.price * item.quantity : 0);
    }, 0);

    if (cartIconCount) cartIconCount.textContent = totalItems;
    if (cartTotalPrice) cartTotalPrice.textContent = `$${totalPrice.toFixed(2)}`;
};

const addToCart = (productId, quantity = 1) => {
    const existingItem = cart.find(item => item.id === productId);
    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        cart.push({ id: productId, quantity });
    }
    saveCart();
    updateCartDisplay();
};

const updateQuantity = (productId, newQuantity) => {
    const item = cart.find(item => item.id === productId);
    if (item) {
        if (newQuantity > 0) {
            item.quantity = newQuantity;
        } else {
            cart = cart.filter(cartItem => cartItem.id !== productId);
        }
        saveCart();
        updateCartDisplay();
    }
};

const removeFromCart = (productId) => {
    cart = cart.filter(item => item.id !== productId);
    saveCart();
    updateCartDisplay();
};

const populateProductGrid = (container, productList) => {
    if (!container) return;
    const lang = document.documentElement.lang || 'en';
    container.innerHTML = '';
    
    productList.forEach(product => {
        const card = document.createElement('a');
        card.className = 'product-card';
        card.href = `product-single.html?id=${product.id}`;

        const baseImage = product.imageUrl || 'https://i.imgur.com/3Yj6bA1.png';
        const hoverImage = (product.altImages && product.altImages.length > 0) ? product.altImages[0] : baseImage;

        card.innerHTML = `
            <div class="product-card-image-wrapper">
                <img src="${baseImage}" alt="${product[`name_${lang}`]}" class="product-card-image base-image">
                <img src="${hoverImage}" alt="${product[`name_${lang}`]} Hover" class="product-card-image hover-image">
            </div>
            <div class="product-card-content">
                <h3 class="product-card-name">${product[`name_${lang}`]}</h3>
                <p class="product-card-price">$${(product.price || 0).toFixed(2)}</p>
            </div>
        `;
        card.addEventListener('click', (e) => {
            e.preventDefault();
            siteRouter.navigateTo('product-single', product.id);
        });
        container.appendChild(card);
    });
};

const populateYouMayAlsoLike = (currentProductId) => {
    const container = document.getElementById('you-may-also-like-grid');
    const section = document.getElementById('you-may-also-like-section');
    if (!container || !section) return;

    const otherProducts = products.filter(p => p.isPublished && p.id !== currentProductId);
    if (otherProducts.length > 0) {
        const shuffled = otherProducts.sort(() => 0.5 - Math.random());
        const selected = shuffled.slice(0, 5);
        populateProductGrid(container, selected);
        section.classList.remove('hidden');
    } else {
        section.classList.add('hidden');
    }
};

async function fetchProducts() {
    if (products.length > 0) return;
    try {
        const querySnapshot = await getDocs(collection(db, "products"));
        products = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    } catch (error) {
        console.error("Error fetching products from Firestore:", error);
    }
}

async function displaySingleProduct() {
    const container = document.getElementById('product-detail-container');
    if (!container) return;
    
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');
    if (!productId) { siteRouter.navigateTo('store'); return; }

    const docRef = doc(db, "products", productId);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        const product = { id: docSnap.id, ...docSnap.data() };
        const lang = document.documentElement.lang || 'en';
        document.title = `${product[`name_${lang}`]} | Literary Speaking`;

        const allImages = [product.imageUrl, ...(product.altImages || [])].filter(Boolean);
        const thumbnailsHtml = allImages.map((imgUrl, index) => 
            `<img src="${imgUrl}" alt="Thumbnail ${index + 1}" class="thumbnail-img ${index === 0 ? 'active' : ''}" data-src="${imgUrl}">`
        ).join('');

        container.innerHTML = `
            <a class="back-link nav-link" data-page-id="store">← <span class="lang-switch" data-en="Back to store" data-es="Volver a la tienda"></span></a>
            <div class="product-detail-layout">
                <div class="product-gallery">
                    <div class="product-thumbnails">${thumbnailsHtml}</div>
                    <div class="product-main-image"><img src="${product.imageUrl || 'https://i.imgur.com/3Yj6bA1.png'}" alt="${product[`name_${lang}`]}"></div>
                </div>
                <div class="product-info">
                    <h1>${product[`name_${lang}`]}</h1>
                    <p class="price">$${(product.price || 0).toFixed(2)}</p>
                    <button class="add-to-cart-btn" data-id="${product.id}">${lang === 'es' ? 'Añadir al Carrito' : 'Add to Cart'}</button>
                    <div class="details-accordion">
                        <div class="accordion-item">
                            <div class="accordion-header lang-switch" data-en="Product Details" data-es="Detalles del Producto"></div>
                            <div class="accordion-content"><div class="accordion-content-inner">${product[`details_${lang}`] || ''}</div></div>
                        </div>
                        <div class="accordion-item">
                            <div class="accordion-header lang-switch" data-en="Shipping & Returns" data-es="Envío y Devoluciones"></div>
                            <div class="accordion-content"><div class="accordion-content-inner">${product[`shipping_${lang}`] || ''}</div></div>
                        </div>
                    </div>
                </div>
            </div>`;

        siteRouter.applyLanguage(lang);
        populateYouMayAlsoLike(productId);
        
        container.querySelector('.add-to-cart-btn').addEventListener('click', (e) => {
            addToCart(e.target.dataset.id);
            document.getElementById('cart-sidebar')?.classList.add('open');
        });
        
        container.querySelectorAll('.accordion-header').forEach(header => {
            header.addEventListener('click', () => {
                const item = header.parentElement;
                item.classList.toggle('open');
                const content = header.nextElementSibling;
                if (item.classList.contains('open')) {
                    content.style.maxHeight = content.scrollHeight + 'px';
                } else {
                    content.style.maxHeight = '0';
                }
            });
        });

        const mainImage = container.querySelector('.product-main-image img');
        container.querySelectorAll('.thumbnail-img').forEach(thumb => {
            thumb.addEventListener('click', () => {
                mainImage.src = thumb.dataset.src;
                container.querySelectorAll('.thumbnail-img').forEach(t => t.classList.remove('active'));
                thumb.classList.add('active');
            });
        });

    } else {
        siteRouter.navigateTo('store');
    }
}

function setupCartSidebar() {
    const cartIcon = document.getElementById('cart-icon');
    const cartSidebar = document.getElementById('cart-sidebar');
    const closeCartBtn = document.getElementById('close-cart-btn');

    if (cartIcon && cartSidebar && closeCartBtn) {
        cartIcon.addEventListener('click', () => cartSidebar.classList.add('open'));
        closeCartBtn.addEventListener('click', () => cartSidebar.classList.remove('open'));
        
        document.getElementById('cart-items-container').addEventListener('click', (e) => {
            const target = e.target.closest('button');
            if (!target) return;

            const productId = target.dataset.id;
            if (target.classList.contains('quantity-change')) {
                const item = cart.find(i => i.id === productId);
                let newQuantity = item.quantity;
                if (target.classList.contains('increase')) newQuantity++;
                if (target.classList.contains('decrease')) newQuantity--;
                updateQuantity(productId, newQuantity);
            }
            if (target.classList.contains('remove-item-btn')) {
                removeFromCart(productId);
            }
        });
    }
}

function displayCheckoutSummary() {
    const container = document.getElementById('summary-items-container');
    const subtotalEl = document.getElementById('summary-subtotal');
    const totalEl = document.getElementById('summary-total-price');
    if (!container || !totalEl) return;
    
    const lang = document.documentElement.lang || 'en';
    container.innerHTML = '';
    let totalPrice = 0;

    cart.forEach(item => {
        const product = products.find(p => p.id === item.id);
        if (product) {
            totalPrice += product.price * item.quantity;
            const itemElement = document.createElement('div');
            itemElement.className = 'summary-item';
            itemElement.innerHTML = `
                <img src="${product.imageUrl || 'https://i.imgur.com/3Yj6bA1.png'}" alt="${product[`name_${lang}`]}">
                <div class="summary-item-info">
                    <p>${product[`name_${lang}`]}</p>
                    <span>Qty: ${item.quantity}</span>
                </div>
                <span class="summary-item-price">$${(product.price * item.quantity).toFixed(2)}</span>
            `;
            container.appendChild(itemElement);
        }
    });
    if(subtotalEl) subtotalEl.textContent = `$${totalPrice.toFixed(2)}`;
    totalEl.textContent = `$${totalPrice.toFixed(2)}`;
}

async function setupCheckoutForm() {
    const form = document.getElementById('payment-form');
    if (!form) return;

    const payBtn = document.getElementById('pay-btn');
    const messageContainer = document.getElementById('payment-message');
    
    let stripe, elements;

    try {
        stripe = Stripe('pk_test_51S70bV4MFc0dXWfusXxk92OcptqNp5YD7HCCH5s9TOtJGTODjdW7UWEVUrGPz2XiCH2cSB5AaivtyWcboXHBiagr00NRrQuueB');
    } catch (e) {
        console.error("Stripe.js failed to load.");
        messageContainer.textContent = "Payment system failed to load. Please disable ad-blockers or try again later.";
        messageContainer.classList.remove('hidden');
        return;
    }

    const createPaymentIntent = httpsCallable(functions, 'createPaymentIntent');
    
    let clientSecret = null;
    try {
        const itemsToPurchase = cart.map(item => ({ id: item.id, quantity: item.quantity }));
        const result = await createPaymentIntent({ items: itemsToPurchase });
        clientSecret = result.data.clientSecret;
    } catch (error) {
        console.error("Could not create payment intent:", error);
        messageContainer.textContent = "Could not initialize payment. Please try again.";
        messageContainer.classList.remove('hidden');
        return;
    }

    elements = stripe.elements({ clientSecret });
    const cardElement = elements.create('card');
    cardElement.mount('#card-element');

    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        payBtn.classList.add('processing');
        payBtn.disabled = true;
        messageContainer.classList.add('hidden');

        const { error } = await stripe.confirmPayment({
            elements,
            confirmParams: {
                return_url: `${window.location.origin}/thank-you.html`,
                receipt_email: document.getElementById('email').value,
            },
        });

        if (error) {
            messageContainer.textContent = error.message;
            messageContainer.classList.remove('hidden');
            payBtn.classList.remove('processing');
            payBtn.disabled = false;
        }
    });
}

document.addEventListener('DOMContentLoaded', async () => {
    const currentPage = document.body.dataset.currentPage;
    
    await fetchProducts();

    if (currentPage === 'store') {
        const gridContainer = document.getElementById('product-grid-container');
        const publishedProducts = products.filter(p => p.isPublished === true);
        populateProductGrid(gridContainer, publishedProducts);
    } else if (currentPage === 'product-single') {
        displaySingleProduct();
    } else if (currentPage === 'checkout') {
        displayCheckoutSummary();
        setupCheckoutForm();
    }

    setupCartSidebar();
    updateCartDisplay();

    document.addEventListener('languageChanged', () => {
        if (currentPage === 'store') {
            const gridContainer = document.getElementById('product-grid-container');
            const publishedProducts = products.filter(p => p.isPublished === true);
            populateProductGrid(gridContainer, publishedProducts);
        }
        if (currentPage === 'product-single') displaySingleProduct();
        if (currentPage === 'checkout') displayCheckoutSummary();
        updateCartDisplay();
    });
});
