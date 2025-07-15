const siteRouter = {
    pages: {
        "home": "/",
        "about": "about.html",
        "news": "news.html",
        "the-team": "team.html",
        "contact": "contact.html",
        "receive-tutoring": "receive-tutoring.html",
        "become-a-tutor": "become-a-tutor.html",
        "support": "support.html",
        "articles": "articles.html",
        "lessons": "lessons.html",
        "report-time": "report-time.html",
        "member": "members.html"
    },
    members: {},
    async loadMembers() {
        try {
            const response = await fetch('members.json');
            this.members = await response.json();
        } catch (error) {
            console.error("Could not load members data:", error);
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
    async init() {
        await this.loadMembers();
        const headerContainer = document.getElementById('header');
        const footerContainer = document.querySelector('.site-footer');

        const headerHTML = `
            <div class="container">
                <div class="lang-switcher-mobile-wrapper"><div class="lang-switcher"><button id="lang-en-btn-mobile">EN</button><button id="lang-es-btn-mobile">ES</button></div></div>
                <a data-page-id="home" class="logo nav-link"><img src="https://i.imgur.com/vyE0G43.png" alt="Literary Speaking Logo" class="logo-unscrolled"><img src="https://i.imgur.com/UnpZvgZ.png" alt="Literary Speaking Logo" class="logo-scrolled"></a>
                <nav class="desktop-nav">
                    <div class="nav-item dropdown">
                        <div class="nav-link dropdown-toggle lang-switch" data-page-group="get-to-know-us" data-en="Get to Know Us" data-es="Conócenos"></div>
                        <div class="dropdown-menu">
                            <a data-page-id="about" class="lang-switch nav-link" data-en="About Us" data-es="Sobre Nosotros"></a>
                            <a data-page-id="the-team" class="lang-switch nav-link" data-en="The Team" data-es="El Equipo"></a>
                            <a data-page-id="news" class="lang-switch nav-link" data-en="News" data-es="Noticias"></a>
                            <a data-page-id="contact" class="lang-switch nav-link" data-en="Contact" data-es="Contacto"></a>
                        </div>
                    </div>
                    <div class="nav-item dropdown">
                        <div class="nav-link dropdown-toggle lang-switch" data-page-group="get-involved" data-en="Get Involved" data-es="Involúcrate"></div>
                        <div class="dropdown-menu">
                            <a data-page-id="receive-tutoring" class="lang-switch nav-link" data-en="Receive Tutoring" data-es="Recibir Tutoría"></a>
                            <a data-page-id="become-a-tutor" class="lang-switch nav-link" data-en="Become a Tutor" data-es="Conviértete en Tutor"></a>
                            <a data-page-id="support" class="lang-switch nav-link" data-en="Support Us" data-es="Apóyanos"></a>
                        </div>
                    </div>
                    <div class="nav-item dropdown">
                         <div class="nav-link dropdown-toggle lang-switch" data-page-group="resources" data-en="Resources" data-es="Recursos"></div>
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
                <h3 class="lang-switch mobile-nav-title" data-en="Get to Know Us" data-es="Conócenos"></h3>
                <a data-page-id="about" class="lang-switch nav-link" data-en="About Us" data-es="Sobre Nosotros"></a>
                <a data-page-id="the-team" class="lang-switch nav-link" data-en="The Team" data-es="El Equipo"></a>
                <a data-page-id="news" class="lang-switch nav-link" data-en="News" data-es="Noticias"></a>
                <a data-page-id="contact" class="lang-switch nav-link" data-en="Contact" data-es="Contacto"></a>

                <h3 class="lang-switch mobile-nav-title" data-en="Get Involved" data-es="Involúcrate"></h3>
                <a data-page-id="receive-tutoring" class="lang-switch nav-link" data-en="Receive Tutoring" data-es="Recibir Tutoría"></a>
                <a data-page-id="become-a-tutor" class="lang-switch nav-link" data-en="Become a Tutor" data-es="Conviértete en Tutor"></a>
                <a data-page-id="support" class="lang-switch nav-link" data-en="Support Us" data-es="Apóyanos"></a>

                <h3 class="lang-switch mobile-nav-title" data-en="Resources" data-es="Recursos"></h3>
                <a data-page-id="articles" class="lang-switch nav-link" data-en="Articles" data-es="Artículos"></a>
                <a data-page-id="lessons" class="lang-switch nav-link" data-en="Lessons" data-es="Lecciones"></a>
                <a data-page-id="report-time" class="lang-switch nav-link" data-en="Report Time" data-es="Reportar Horas"></a>
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

        document.querySelectorAll('.desktop-nav .dropdown-toggle').forEach(toggle => {
            toggle.addEventListener('click', (e) => {
                e.preventDefault();
            });
        });

        const setLanguage = (lang) => {
            document.querySelectorAll('[data-en], [data-es]').forEach(el => {
                const text = el.dataset[lang];
                if (text) {
                    el.innerHTML = text;
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
                document.querySelectorAll(`.dropdown-toggle[data-page-group="${currentGroup}"]`).forEach(link => {
                    link.classList.add('active-page-link');
                });
            }
        }
        
        setLanguage(localStorage.getItem('language') || 'en');
    }
};

document.addEventListener('DOMContentLoaded', () => {
    siteRouter.init();
});
