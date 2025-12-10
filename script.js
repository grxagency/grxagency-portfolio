// ============================================
// INICIALIZAÇÃO, I18N E UTILITÁRIOS
// ============================================

// Small 1x1 transparent placeholder to avoid empty src requests
const PLACEHOLDER_IMG = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==';

// Traduções completas para interface (pt / en)
const TRANSLATIONS = {
    pt: {
        nav: ['Início','Serviços','Sobre','Portfólio','Por que Contratar','Depoimentos','Contato'],
        hero: {
            title: 'Sua <span class="highlight">Presença Digital</span> em Outro Nível',
            subtitle: 'Somos a <strong>GRX AGENCY</strong>, especializados em sites premium, branding e experiências digitais que convertem. Projetamos estratégia, design e tecnologia para você vender mais.',
            cta_whatsapp: 'Conversar no WhatsApp',
            cta_portfolio: 'Ver portfólio'
        },
        services: {
            title: 'Meus Serviços',
            subtitle: 'Soluções digitais completas para sua empresa crescer',
            cards: [
                { title: 'Criação de Sites', desc: 'Desenvolvo sites modernos, responsivos e otimizados para conversão. Desde landing pages até plataformas completas.' },
                { title: 'Design e Branding', desc: 'Crio identidades visuais poderosas que conectam com seu público e transmitem profissionalismo.' },
                { title: 'Social Media', desc: 'Estratégias de conteúdo e gerenciamento de redes sociais que geram engajamento e crescimento.' },
                { title: 'E-commerce', desc: 'Lojas online completas com integração de pagamento, gestão de produtos e otimização de vendas.' },
                { title: 'Automação', desc: 'Sistemas inteligentes que automatizam processos, economizam tempo e aumentam produtividade.' },
                { title: 'Consultoria Digital', desc: 'Orientação estratégica para sua transformação digital, escolha de tecnologias e roadmap de crescimento.' }
            ]
        },
        about: {
            eyebrow: 'Sobre o estúdio',
            title: 'Design estratégico para marcas que querem vender mais',
            subtitle: 'Unimos branding, UX e performance para criar sites, landing pages e identidades que comunicam valor real e geram confiança.',
            badges: [
                { strong: '7 anos', span: 'em design e produto digital' },
                { strong: '+35%', span: 'média de aumento em conversão' },
                { strong: 'Entrega ágil', span: 'roadmap claro e sprints semanais' }
            ],
            pills: ['UX/UI','Identidade visual','Webflow/WordPress','CRO','Design System']
        },
        process: {
            title: 'Processo claro em 4 passos',
            steps: [
                { strong: 'Imersão:', text: 'briefing rápido + mapa de objetivos.' },
                { strong: 'Arquitetura:', text: 'estrutura, copy e wireframes focados em conversão.' },
                { strong: 'Visual:', text: 'identidade, UI, microinterações e responsividade.' },
                { strong: 'Lançamento:', text: 'publicação, otimização e ajustes finos.' }
            ],
            note: 'Cada etapa tem entregas, prazos e checkpoints para você acompanhar tudo.'
        },
        portfolio: { title: 'Últimos Projetos', subtitle: 'Portfólio com cases de branding, design e produto digital, direto ao ponto', viewProject: 'Ver projeto', viewOnline: 'Ver online', noProjects: 'Nenhum projeto disponível.' },
        benefits: {
            title: 'Por Que Contratar?',
            subtitle: 'O que você ganha trabalhando comigo',
            cards: [
                { title: 'Entrega Rápida', text: 'Projetos entregues no prazo com qualidade garantida. Você não espera, não paga atraso e sai ganhando.' },
                { title: 'Comunicação Clara', text: 'Você nunca fica no escuro. Atualizações constantes, respostas rápidas e alinhamento total com seu projeto.' },
                { title: 'Qualidade Premium', text: 'Código limpo, design profissional, otimização para conversão. Seu site não é um amador, ele é enterprise.' },
                { title: 'Foco em Resultados', text: 'Meu objetivo é seu crescimento. Cada detalhe é pensado para gerar leads, vendas e autoridade.' },
                { title: 'Suporte Humanizado', text: 'Não sou um chatbot. Você fala comigo, entendo seu negócio e proponho soluções genuinamente úteis.' },
                { title: 'Flexibilidade', text: 'Adapto meus serviços ao seu orçamento, cronograma e necessidades específicas. Sem engessamento.' }
            ]
        },
        testimonials: {
            title: 'Depoimentos',
            subtitle: 'O que clientes e parceiros dizem sobre meu trabalho',
            list: [
                { name: 'Laura Menezes', role: 'CMO, SaaS B2B', text: 'Guilherme chegou com um diagnóstico claro, reorganizou copy, layout e formulários no nosso site. Em 6 semanas, demos um salto de +38% em leads qualificados. Ele fala a língua do time de marketing e entrega rápido.' },
                { name: 'Felipe Duarte', role: 'Fundador, Estúdio Criativo', text: 'Precisávamos de uma identidade que conversasse com clientes de branding e social. O Guilherme criou um guia visual completo e arquivos prontos em Photoshop, Illustrator e InDesign. Ficou fácil de replicar e o cliente final entendeu tudo na primeira apresentação.' },
                { name: 'Beatriz Ramos', role: 'Owner, Loja de Moda', text: 'Ele refez nossa landing de coleção com foco em UX e fotos bem posicionadas. Ajustou paleta, tipografia e botões. As clientes entenderam a proposta e o ticket médio subiu. Entrega certeira.' },
                { name: 'Marcus Azevedo', role: 'Produtor, Eventos', text: 'Guilherme criou todo o material do evento: identidade, folder e peças sociais. Entregou arquivos editáveis em InDesign e Illustrator, com export otimizado. O cliente aprovou de primeira.' },
                { name: 'João Diniz', role: 'Head de Produto, Fintech', text: 'Precisávamos alinhar UI com guidelines e criar componentes no Figma. Ele padronizou ícones, grids e entregou exports prontos para dev. O handoff foi limpo e sem retrabalho.' },
                { name: 'Ana Prado', role: 'Diretora de Arte', text: 'Nos apresentou versões em Illustrator e InDesign, prontas para gráfica e digital. Ajustou cores para pantone e CMYK, cuidou de export em lotes e deixou um guia rápido de uso. Muito prático.' }
            ]
        },
        contact: {
            title: 'Vamos Trabalhar Juntos?',
            subtitle: 'Deixe sua mensagem ou entre em contato direto pelo WhatsApp',
            form: {
                nameLabel: 'Seu Nome', emailLabel: 'Seu E-mail', phoneLabel: 'WhatsApp (Opcional)',
                serviceLabel: 'Tipo de Serviço', serviceOptions: {
                    '': 'Selecione um serviço', site: 'Criação de Site', design: 'Design e Branding', social: 'Social Media', ecommerce: 'E-commerce', automation: 'Automação', consulting: 'Consultoria', other: 'Outro'
                },
                messageLabel: 'Sua Mensagem', sendButton: 'Enviar Mensagem', placeholders: {
                    name: 'João Silva', email: 'joao@email.com', phone: '(11) 9 9999-9999', message: 'Conte-me um pouco sobre seu projeto...'
                }
            },
            infoCards: [
                { title: 'WhatsApp', text: 'Resposta rápida e atendimento humanizado', linkText: 'Abrir conversa', href: 'https://wa.me/5511954608135' },
                { title: 'E-mail', text: 'Para dúvidas e briefings detalhados', linkText: 'contato.grxagency@outlook.com', href: 'mailto:contato.grxagency@outlook.com' },
                { title: 'LinkedIn', text: 'Acompanhe conteúdo e atualizações', linkText: 'Visitar perfil', href: 'https://linkedin.com/in/grxagency' }
            ],
            cta: {
                title: 'Pronto para impulsionar seu negócio?',
                button: 'Conversar Agora no WhatsApp'
            }
        },
        footer: {
            about: 'Agência especializada em criação de sites, design, branding e soluções digitais para empresas que visam crescimento e inovação.',
            linksQuick: ['Início','Serviços','Portfólio','Contato'],
            servicesList: ['Criação de Sites','Design e Branding','Social Media','E-commerce'],
            contactLinks: ['WhatsApp','E-mail','LinkedIn'],
            copyright: '© {year} GRX AGENCY. Todos os direitos reservados.',
            developed: 'Desenvolvido com ♥ para agências que visam excelência.'
        }
    },
    en: {
        nav: ['Home','Services','About','Portfolio','Why Hire','Testimonials','Contact'],
        hero: {
            title: 'Take Your <span class="highlight">Digital Presence</span> To The Next Level',
            subtitle: 'We are <strong>GRX AGENCY</strong>, specialists in premium websites, branding and digital experiences that convert. We design strategy, design and technology so you can sell more.',
            cta_whatsapp: 'Chat on WhatsApp',
            cta_portfolio: 'View portfolio'
        },
        services: {
            title: 'Services',
            subtitle: 'Complete digital solutions to help your business grow',
            cards: [
                { title: 'Website Development', desc: 'I build modern, responsive websites optimized for conversion. From landing pages to full platforms.' },
                { title: 'Design & Branding', desc: 'I create powerful visual identities that connect with your audience and communicate professionalism.' },
                { title: 'Social Media', desc: 'Content strategies and social media management that drive engagement and growth.' },
                { title: 'E-commerce', desc: 'Complete online stores with payment integration, product management and sales optimization.' },
                { title: 'Automation', desc: 'Smart systems that automate processes, save time and increase productivity.' },
                { title: 'Digital Consulting', desc: 'Strategic guidance for your digital transformation, tech selection and growth roadmap.' }
            ]
        },
        about: {
            eyebrow: 'About the studio',
            title: 'Strategic design for brands that want to sell more',
            subtitle: 'We combine branding, UX and performance to deliver websites, landing pages and identities that communicate real value and build trust.',
            badges: [
                { strong: '7 years', span: 'in design and digital product' },
                { strong: '+35%', span: 'average conversion increase' },
                { strong: 'Agile delivery', span: 'clear roadmap and weekly sprints' }
            ],
            pills: ['UX/UI','Visual Identity','Webflow/WordPress','CRO','Design System']
        },
        process: {
            title: 'Clear process in 4 steps',
            steps: [
                { strong: 'Immersion:', text: 'quick briefing + objective map.' },
                { strong: 'Architecture:', text: 'structure, copy and wireframes focused on conversion.' },
                { strong: 'Visual:', text: 'identity, UI, microinteractions and responsiveness.' },
                { strong: 'Launch:', text: 'publishing, optimization and fine-tuning.' }
            ],
            note: 'Each stage has deliveries, deadlines and checkpoints so you can follow everything.'
        },
        portfolio: { title: 'Latest Projects', subtitle: 'Portfolio with branding, design and product cases — straight to the point', viewProject: 'View project', viewOnline: 'View online', noProjects: 'No projects available.' },
        benefits: {
            title: 'Why Hire?',
            subtitle: 'What you gain by working with me',
            cards: [
                { title: 'Fast Delivery', text: 'Projects delivered on time with guaranteed quality. You don’t wait, you don’t pay for delays and you win.' },
                { title: 'Clear Communication', text: 'You never stay in the dark. Constant updates, fast replies and full alignment with your project.' },
                { title: 'Premium Quality', text: 'Clean code, professional design, optimization for conversion. Your site is not amateur — it’s enterprise.' },
                { title: 'Results Focused', text: 'My goal is your growth. Every detail is designed to generate leads, sales and authority.' },
                { title: 'Human Support', text: 'I’m not a chatbot. You talk to me, I understand your business and propose genuinely useful solutions.' },
                { title: 'Flexibility', text: 'I adapt my services to your budget, timeline and specific needs. No rigid packages.' }
            ]
        },
        testimonials: {
            title: 'Testimonials',
            subtitle: 'What clients and partners say about my work',
            list: [
                { name: 'Laura Menezes', role: 'CMO, SaaS B2B', text: 'Guilherme came with a clear diagnosis, reorganized copy, layout and forms on our site. In 6 weeks we jumped +38% in qualified leads. He speaks the marketing team language and delivers fast.' },
                { name: 'Felipe Duarte', role: 'Founder, Creative Studio', text: 'We needed an identity that spoke to branding and social clients. Guilherme created a complete visual guide and files ready in Photoshop, Illustrator and InDesign. It was easy to replicate and the end client understood everything in the first presentation.' },
                { name: 'Beatriz Ramos', role: 'Owner, Fashion Store', text: 'He rebuilt our collection landing with a UX focus and well-positioned photos. He adjusted palette, typography and buttons. Customers understood the proposal and the average ticket increased. Solid delivery.' },
                { name: 'Marcus Azevedo', role: 'Producer, Events', text: 'Guilherme created all event materials: identity, brochure and social pieces. He delivered editable files in InDesign and Illustrator, optimized exports. The client approved on the first review.' },
                { name: 'João Diniz', role: 'Head of Product, Fintech', text: 'We needed to align UI with guidelines and create components in Figma. He standardized icons, grids and delivered exports ready for dev. Handoff was clean with no rework.' },
                { name: 'Ana Prado', role: 'Art Director', text: 'He presented versions in Illustrator and InDesign, ready for print and digital. Adjusted colors for Pantone and CMYK, handled batch export and left a quick usage guide. Very practical.' }
            ]
        },
        contact: {
            title: 'Shall We Work Together?',
            subtitle: 'Leave your message or contact directly via WhatsApp',
            form: {
                nameLabel: 'Your Name', emailLabel: 'Your E-mail', phoneLabel: 'WhatsApp (Optional)',
                serviceLabel: 'Service Type', serviceOptions: {
                    '': 'Select a service', site: 'Website Development', design: 'Design & Branding', social: 'Social Media', ecommerce: 'E-commerce', automation: 'Automation', consulting: 'Consulting', other: 'Other'
                },
                messageLabel: 'Your Message', sendButton: 'Send Message', placeholders: {
                    name: 'John Smith', email: 'john@email.com', phone: '(11) 9 9999-9999', message: 'Tell me a little about your project...'
                }
            },
            infoCards: [
                { title: 'WhatsApp', text: 'Fast response and personalized support', linkText: 'Start conversation', href: 'https://wa.me/5511954608135' },
                { title: 'E-mail', text: 'For detailed questions and briefs', linkText: 'contato.grxagency@outlook.com', href: 'mailto:contato.grxagency@outlook.com' },
                { title: 'LinkedIn', text: 'Follow content and updates', linkText: 'Visit profile', href: 'https://linkedin.com/in/grxagency' }
            ],
            cta: {
                title: 'Ready to boost your business?',
                button: 'Let\'s Talk on WhatsApp'
            }
        },
        footer: {
            about: 'Agency specialized in website creation, design, branding and digital solutions for companies aiming growth and innovation.',
            linksQuick: ['Home','Services','Portfolio','Contact'],
            servicesList: ['Website Development','Design & Branding','Social Media','E-commerce'],
            contactLinks: ['WhatsApp','E-mail','LinkedIn'],
            copyright: '© {year} GRX AGENCY. All rights reserved.',
            developed: 'Built with ♥ for agencies aiming at excellence.'
        }
    }
};

// Estado do idioma atual
let CURRENT_LANG = localStorage.getItem('lang') || 'pt';

// Armazenará SVGs originais capturados do DOM para preservar ícones
const ORIGINAL_SERVICE_ICONS = [];
const ORIGINAL_BENEFITS_ICONS = [];
const ORIGINAL_CONTACT_ICONS = [];

function captureOriginalIcons() {
    // Serviços
    document.querySelectorAll('.services .service-card .service-icon').forEach(el => {
        ORIGINAL_SERVICE_ICONS.push(el.innerHTML);
    });

    // Benefícios
    document.querySelectorAll('.benefits .benefit-card .benefit-icon').forEach(el => {
        ORIGINAL_BENEFITS_ICONS.push(el.innerHTML);
    });

    // Contato
    document.querySelectorAll('.contact-info .contact-info-card .info-icon').forEach(el => {
        ORIGINAL_CONTACT_ICONS.push(el.innerHTML);
    });
}

// Obtém texto traduzido por caminho simples (ex: 'hero.title')
function t(path) {
    const parts = path.split('.');
    let obj = TRANSLATIONS[CURRENT_LANG] || TRANSLATIONS.pt;
    for (const p of parts) {
        if (obj && p in obj) obj = obj[p]; else return '';
    }
    return obj;
}

// Aplica traduções na página (elementos principais)
function applyTranslations() {
    // Navegação
    const navLinks = document.querySelectorAll('.nav-menu li a');
    const navTexts = t('nav') || [];
    navLinks.forEach((a, i) => { if (navTexts[i]) a.textContent = navTexts[i]; });

    // Hero
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) heroTitle.innerHTML = t('hero.title') || heroTitle.innerHTML;
    const heroSubtitle = document.querySelector('.hero-subtitle');
    if (heroSubtitle) heroSubtitle.innerHTML = t('hero.subtitle') || heroSubtitle.innerHTML;
    const heroPrimary = document.querySelector('#hero .hero-cta .btn-primary');
    const heroSecondary = document.querySelector('#hero .hero-cta .btn-secondary');
    if (heroPrimary) heroPrimary.textContent = t('hero.cta_whatsapp') || heroPrimary.textContent;
    if (heroSecondary) heroSecondary.textContent = t('hero.cta_portfolio') || heroSecondary.textContent;

    // Sections
    const sections = ['services','portfolio','benefits','testimonials','contact'];
    sections.forEach(id => {
        const title = document.querySelector(`#${id} .section-title`);
        const subtitle = document.querySelector(`#${id} .section-subtitle`);
        if (title && t(`${id}.title`)) title.textContent = t(`${id}.title`);
        if (subtitle && t(`${id}.subtitle`)) subtitle.textContent = t(`${id}.subtitle`);
    });

    // Contact header
    const contactH = document.querySelector('#contact .contact-header .section-title');
    const contactSub = document.querySelector('#contact .contact-header .section-subtitle');
    if (contactH && t('contact.title')) contactH.textContent = t('contact.title');
    if (contactSub && t('contact.subtitle')) contactSub.textContent = t('contact.subtitle');

    // Form labels & placeholders
    const lblName = document.querySelector('label[for="name"]');
    const lblEmail = document.querySelector('label[for="email"]');
    const lblPhone = document.querySelector('label[for="phone"]');
    const lblService = document.querySelector('label[for="service"]');
    const lblMessage = document.querySelector('label[for="message"]');
    if (lblName) lblName.textContent = t('contact.form.nameLabel');
    if (lblEmail) lblEmail.textContent = t('contact.form.emailLabel');
    if (lblPhone) lblPhone.textContent = t('contact.form.phoneLabel');
    if (lblService) lblService.textContent = t('contact.form.serviceLabel');
    if (lblMessage) lblMessage.textContent = t('contact.form.messageLabel');

    // Placeholders
    const inpName = document.getElementById('name');
    const inpEmail = document.getElementById('email');
    const inpPhone = document.getElementById('phone');
    const inpMessage = document.getElementById('message');
    if (inpName) inpName.placeholder = t('contact.form.placeholders.name');
    if (inpEmail) inpEmail.placeholder = t('contact.form.placeholders.email');
    if (inpPhone) inpPhone.placeholder = t('contact.form.placeholders.phone');
    if (inpMessage) inpMessage.placeholder = t('contact.form.placeholders.message');

    // Service select options
    const serviceSelect = document.getElementById('service');
    if (serviceSelect) {
        const opts = t('contact.form.serviceOptions') || {};
        Array.from(serviceSelect.options).forEach(opt => {
            if (opt.value in opts) opt.textContent = opts[opt.value];
            else if (opt.value === '' && opts['']) opt.textContent = opts[''];
        });
    }

    // Footer
    const footerBottom = document.querySelector('.footer-bottom p');
    if (footerBottom) {
        const year = new Date().getFullYear();
        footerBottom.textContent = (t('footer.copyright') || '').replace('{year}', year);
    }

    // CTA Section (Pronto para impulsionar / Ready to boost)
    const ctaTitle = document.querySelector('.contact-cta h3');
    const ctaButton = document.querySelector('.contact-cta a');
    if (ctaTitle) ctaTitle.textContent = t('contact.cta.title');
    if (ctaButton) {
        // Atualiza apenas o texto do botão, preservando o SVG
        const svg = ctaButton.querySelector('svg');
        ctaButton.textContent = '';
        if (svg) ctaButton.appendChild(svg);
        ctaButton.appendChild(document.createTextNode(t('contact.cta.button')));
    }

    // Atualiza texto de botões no header (botões de idioma)
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.setAttribute('aria-pressed', btn.dataset.lang === CURRENT_LANG ? 'true' : 'false');
    });

    // Atualiza atributo lang do documento para acessibilidade
    document.documentElement.lang = (CURRENT_LANG === 'en') ? 'en' : 'pt-BR';

    // Renderiza seções que foram substituídas por dados traduzíveis
    renderServicesSection();
    renderAboutSection();
    renderProcessSection();
    renderBenefitsSection();
    renderTestimonialsSection();
    renderContactInfo();
    renderFooter();
}

// Helper para obter campos de projeto por idioma (ex: title_pt / title_en / fallback)
function getProjectText(project, field) {
    const langSuffix = (CURRENT_LANG === 'en') ? 'en' : 'pt';
    const fieldLang = `${field}_${langSuffix}`;
    if (project[fieldLang]) return project[fieldLang];
    if (project[field]) return project[field];
    return '';
}

// Render helpers para seções mais complexas
function renderServicesSection() {
    const container = document.querySelector('.services .services-grid');
    if (!container) return;
    const data = t('services.cards') || [];
    if (!Array.isArray(data) || data.length === 0) return;
    container.innerHTML = '';
    data.forEach(card => {
        const div = document.createElement('div');
        div.className = 'service-card';
        div.setAttribute('data-aos', 'fade-up');
        const idx = Array.from(container.children).length;
        const iconHtml = ORIGINAL_SERVICE_ICONS[idx] || '<svg width="48" height="48" viewBox="0 0 48 48" fill="none"><rect x="6" y="6" width="36" height="36" rx="4" stroke="#B00020" stroke-width="2"/></svg>';
        div.innerHTML = `
            <div class="service-icon">${iconHtml}</div>
            <h3>${card.title}</h3>
            <p>${card.desc}</p>
        `;
        container.appendChild(div);
    });
}

function renderAboutSection() {
    const eyebrow = document.querySelector('.about-left .eyebrow');
    const title = document.querySelector('.about-left .section-title');
    const subtitle = document.querySelector('.about-left .section-subtitle');
    const badgesWrap = document.querySelector('.about-left .about-badges');
    const pillsWrap = document.querySelector('.about-left .about-pills');
    const about = TRANSLATIONS[CURRENT_LANG].about || {};
    if (eyebrow && about.eyebrow) eyebrow.textContent = about.eyebrow;
    if (title && about.title) title.textContent = about.title;
    if (subtitle && about.subtitle) subtitle.textContent = about.subtitle;
    if (badgesWrap && about.badges) {
        badgesWrap.innerHTML = '';
        about.badges.forEach(b => {
            const el = document.createElement('div'); el.className = 'about-badge';
            el.innerHTML = `<strong>${b.strong}</strong><span>${b.span}</span>`;
            badgesWrap.appendChild(el);
        });
    }
    if (pillsWrap && about.pills) {
        pillsWrap.innerHTML = '';
        about.pills.forEach(p => {
            const s = document.createElement('span'); s.textContent = p; pillsWrap.appendChild(s);
        });
    }
}

function renderProcessSection() {
    const card = document.querySelector('.about-right .process-card');
    if (!card) return;
    const process = TRANSLATIONS[CURRENT_LANG].process || {};
    card.innerHTML = '';
    const h3 = document.createElement('h3'); h3.textContent = process.title || '';
    card.appendChild(h3);
    const ol = document.createElement('ol');
    (process.steps || []).forEach(step => {
        const li = document.createElement('li');
        li.innerHTML = `<strong>${step.strong}</strong> ${step.text}`;
        ol.appendChild(li);
    });
    card.appendChild(ol);
    const pnote = document.createElement('p'); pnote.className = 'process-note'; pnote.textContent = process.note || '';
    card.appendChild(pnote);
}

function renderBenefitsSection() {
    const grid = document.querySelector('.benefits-grid');
    if (!grid) return;
    const data = (TRANSLATIONS[CURRENT_LANG].benefits || {}).cards || [];
    grid.innerHTML = '';
    data.forEach(b => {
        const div = document.createElement('div'); div.className = 'benefit-card'; div.setAttribute('data-aos','fade-up');
        const bidx = Array.from(grid.children).length;
        const bIcon = ORIGINAL_BENEFITS_ICONS[bidx] || '<svg width="40" height="40" viewBox="0 0 40 40" fill="none"><circle cx="20" cy="20" r="18" stroke="#B00020" stroke-width="2"/></svg>';
        div.innerHTML = `
            <div class="benefit-icon">${bIcon}</div>
            <h3>${b.title}</h3>
            <p>${b.text}</p>
        `;
        grid.appendChild(div);
    });
}

function renderTestimonialsSection() {
    const container = document.querySelector('.testimonials-grid');
    if (!container) return;
    const data = (TRANSLATIONS[CURRENT_LANG].testimonials || {}).list || [];
    container.innerHTML = '';
    data.forEach(tst => {
        const card = document.createElement('div'); card.className = 'testimonial-card'; card.setAttribute('data-aos','fade-up');
        card.innerHTML = `
            <div class="testimonial-header">
                <div class="testimonial-avatar">${(tst.name || '').split(' ').map(n=>n[0]).join('').slice(0,2)}</div>
                <div class="testimonial-meta">
                    <h4>${tst.name}</h4>
                    <p>${tst.role}</p>
                </div>
            </div>
            <div class="testimonial-rating">${'<svg width="16" height="16" viewBox="0 0 16 16" fill="#B00020"><path d="M8 1l2.4 4.9 5.4.8-3.9 3.8.9 5.4L8 12.5l-4.8 2.4.9-5.4-3.9-3.8 5.4-.8L8 1z"/></svg>'.repeat(5)}</div>
            <p class="testimonial-text">${tst.text}</p>
        `;
        container.appendChild(card);
    });
}

function renderContactInfo() {
    const wrapper = document.querySelector('.contact-info');
    if (!wrapper) return;
    const cards = (TRANSLATIONS[CURRENT_LANG].contact || {}).infoCards || [];
    wrapper.innerHTML = '';
    cards.forEach(c => {
        const card = document.createElement('div'); card.className = 'contact-info-card';
        const cidx = Array.from(wrapper.children).length;
        const cIcon = ORIGINAL_CONTACT_ICONS[cidx] || '<svg width="40" height="40" viewBox="0 0 40 40" fill="none"><rect x="4" y="6" width="32" height="28" rx="2" stroke="#B00020" stroke-width="1.5"/></svg>';
        card.innerHTML = `
            <div class="info-icon">${cIcon}</div>
            <h4>${c.title}</h4>
            <p>${c.text}</p>
            <a class="contact-link" href="${c.href}" ${c.href.startsWith('http') ? 'target="_blank"' : ''}>${c.linkText}</a>
        `;
        wrapper.appendChild(card);
    });
}

function renderFooter() {
    const about = document.querySelector('.footer .footer-section .brand-font') || null;
    const footerSections = document.querySelectorAll('.footer .footer-section');
    // First footer-section uses brand and paragraph
    const firstP = document.querySelector('.footer .footer-section p');
    if (firstP && TRANSLATIONS[CURRENT_LANG].footer && TRANSLATIONS[CURRENT_LANG].footer.about) firstP.textContent = TRANSLATIONS[CURRENT_LANG].footer.about;
    // Quick links
    const quick = document.querySelectorAll('.footer .footer-section')[1];
    if (quick) {
        const ul = quick.querySelector('ul');
        if (ul) {
            ul.innerHTML = '';
            (TRANSLATIONS[CURRENT_LANG].footer.linksQuick || []).forEach((l, i) => {
                const li = document.createElement('li'); const a = document.createElement('a'); a.href = ['#hero','#services','#portfolio','#contact'][i] || '#'; a.textContent = l; li.appendChild(a); ul.appendChild(li);
            });
        }
    }
    // Services list
    const servSec = document.querySelectorAll('.footer .footer-section')[2];
    if (servSec) {
        const ul = servSec.querySelector('ul'); if (ul) { ul.innerHTML = ''; (TRANSLATIONS[CURRENT_LANG].footer.servicesList||[]).forEach(it => { const li = document.createElement('li'); const a = document.createElement('a'); a.href = '#services'; a.textContent = it; li.appendChild(a); ul.appendChild(li); }); }
    }
    // Contact links
    const contactSec = document.querySelectorAll('.footer .footer-section')[3];
    if (contactSec) {
        const ul = contactSec.querySelector('ul'); if (ul) { ul.innerHTML = ''; (TRANSLATIONS[CURRENT_LANG].footer.contactLinks||[]).forEach((it, i)=>{ const li = document.createElement('li'); const a = document.createElement('a'); a.href = ['https://wa.me/5511954608135','mailto:contato.grxagency@outlook.com','https://linkedin.com/in/grxagency'][i]|| '#'; a.target = i<2? '_blank':''; a.textContent = it; li.appendChild(a); ul.appendChild(li); }); }
    }
}

// Altera o idioma atual e persiste
function setLanguage(lang) {
    if (!TRANSLATIONS[lang]) return;
    CURRENT_LANG = lang;
    localStorage.setItem('lang', lang);
    applyTranslations();
    // Recarrega o portfólio para atualizar textos dinâmicos (se presente)
    const grid = document.getElementById('portfolioGrid');
    if (grid) initPortfolio();
}

// Escuta botões de idioma (se existirem)
function initLanguageButtons() {
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const lang = btn.dataset.lang;
            setLanguage(lang);
            document.querySelectorAll('.lang-btn').forEach(b => b.setAttribute('aria-pressed', b.dataset.lang === lang ? 'true' : 'false'));
        });
    });
}

// Inicializa o seletor de idioma mais rico (dropdown com teclado)
function initLanguageSwitcher() {
    const switchEl = document.getElementById('langSwitch');
    if (!switchEl) return;
    const currentBtn = document.getElementById('langCurrent');
    const optionsList = switchEl.querySelector('.lang-options');
    const optionEls = switchEl.querySelectorAll('.lang-option');

    function updateCurrentUI() {
        const flag = (CURRENT_LANG === 'en') ? '🇺🇸' : '🇧🇷';
        // Show full native label next to flag
        const label = (CURRENT_LANG === 'en') ? 'English' : 'Português';
        const name = label;
        const flagEl = currentBtn.querySelector('.lang-flag');
        const labelEl = currentBtn.querySelector('.lang-label');
        if (flagEl) flagEl.textContent = flag;
        if (labelEl) labelEl.textContent = label;
        optionEls.forEach(o => o.setAttribute('aria-selected', o.dataset.lang === CURRENT_LANG ? 'true' : 'false'));
    }

    // Toggle dropdown
    currentBtn.addEventListener('click', (e) => {
        const expanded = currentBtn.getAttribute('aria-expanded') === 'true';
        currentBtn.setAttribute('aria-expanded', String(!expanded));
        optionsList.classList.toggle('show');
        if (!expanded) {
            // move focus to first selected option
            const sel = switchEl.querySelector('.lang-option[aria-selected="true"]');
            if (sel) sel.focus(); else optionEls[0].focus();
        }
    });

    // Option click
    optionEls.forEach(opt => {
        opt.tabIndex = 0;
        opt.addEventListener('click', (e) => {
            const lang = opt.dataset.lang;
            setLanguage(lang);
            updateCurrentUI();
            optionsList.classList.remove('show');
            currentBtn.setAttribute('aria-expanded','false');
            currentBtn.focus();
        });

        opt.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); opt.click(); }
            if (e.key === 'Escape') { optionsList.classList.remove('show'); currentBtn.setAttribute('aria-expanded','false'); currentBtn.focus(); }
            if (e.key === 'ArrowDown') { e.preventDefault(); const next = opt.nextElementSibling || optionEls[0]; next.focus(); }
            if (e.key === 'ArrowUp') { e.preventDefault(); const prev = opt.previousElementSibling || optionEls[optionEls.length-1]; prev.focus(); }
        });
    });

    // Close when clicking outside
    document.addEventListener('click', (e) => {
        if (!switchEl.contains(e.target)) {
            optionsList.classList.remove('show');
            currentBtn.setAttribute('aria-expanded','false');
        }
    });

    // keyboard on current button
    currentBtn.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowDown' || e.key === 'Enter' || e.key === ' ') {
            e.preventDefault(); currentBtn.click();
        }
    });

    updateCurrentUI();
}

/**
 * Aguarda o DOM estar completamente carregado
 */
document.addEventListener('DOMContentLoaded', function() {
    initLanguageSwitcher();
    captureOriginalIcons();
    setLanguage(CURRENT_LANG);
    initMobileMenu();
    initFormHandler();
    initScrollIndicator();
    initPortfolio();
    initIntersectionObserver();
});

// ============================================
// SCROLL SUAVE
// ============================================

/**
 * Ativa scroll suave para links internos
 */
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
}

// ============================================
// INTERSECTION OBSERVER - Animações ao scroll
// ============================================

/**
 * Observa elementos com data-aos e anima quando entram na viewport
 */
function initIntersectionObserver() {
    // Verifica suporte ao Intersection Observer
    if (!('IntersectionObserver' in window)) {
        // Fallback: mostra todos os elementos
        document.querySelectorAll('[data-aos]').forEach(el => {
            el.classList.add('visible');
        });
        return;
    }

    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Adiciona classe visible quando elemento entra na viewport
                entry.target.classList.add('visible');

                // Para de observar este elemento (executa apenas uma vez)
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observa todos os elementos com data-aos
    document.querySelectorAll('[data-aos]').forEach(element => {
        observer.observe(element);
    });
}

// ============================================
// MENU MOBILE
// ============================================

/**
 * Inicializa funcionalidade do menu hamburger
 */
function initMobileMenu() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    if (!hamburger) return;

    // Toggle menu ao clicar no hamburger
    hamburger.addEventListener('click', function(e) {
        e.stopPropagation();
        toggleMenu();
    });

    // Fechar menu ao clicar em um link
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            toggleMenu();
        });
    });

    // Verifica suporte ao Intersection Observer
    if (!('IntersectionObserver' in window)) {
        // Fallback: mostra todos os elementos
        document.querySelectorAll('[data-aos]').forEach(el => {
            el.classList.add('visible');
        });
        return;
    }

    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Adiciona classe visible quando elemento entra na viewport
                entry.target.classList.add('visible');

                // Para de observar este elemento (executa apenas uma vez)
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observa todos os elementos com data-aos
    document.querySelectorAll('[data-aos]').forEach(element => {
        observer.observe(element);
    });
}

// ============================================
// FORMULÁRIO DE CONTATO
// ============================================

/**
 * Inicializa o formulário de contato
 */
function initFormHandler() {
    const form = document.getElementById('contactForm');

    if (!form) return;

    form.addEventListener('submit', async function(e) {
        e.preventDefault();

        // Coleta dados do formulário
        const formData = {
            name: document.getElementById('name').value.trim(),
            email: document.getElementById('email').value.trim(),
            phone: document.getElementById('phone').value.trim(),
            subject: document.getElementById('service').value,
            message: document.getElementById('message').value.trim()
        };

        // Validação básica
        if (!validateForm(formData)) {
            return;
        }

        // Desabilita botão de submit
        const submitBtn = form.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        submitBtn.disabled = true;
        submitBtn.textContent = 'Enviando...';

        console.log('Contato: iniciando envio', formData);

        try {
            // Envia para backend (Brevo API)
            const response = await fetch('http://localhost:3000/api/contact', {  // ✅ Porta 3000
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });

            const data = await response.json();
            console.log('Resultado envio:', data);

            if (data.success) {
                showSuccessMessage(form, '✓ Mensagem recebida com sucesso! Você receberá uma confirmação por e-mail em breve.');
                form.reset();
            } else {
                showErrorMessage(data.message || 'Não foi possível enviar a mensagem. Tente novamente.');
            }
        } catch (err) {
            console.error('Erro ao enviar:', err);
            showErrorMessage('Erro ao enviar mensagem. Tente novamente ou entre em contato via WhatsApp.');
        } finally {
            submitBtn.disabled = false;
            submitBtn.textContent = originalText;
        }
    });

    /**
     * Valida dados do formulário
     */
    function validateForm(data) {
        if (!data.name) {
            showErrorMessage('Por favor, digite seu nome');
            return false;
        }

        if (!data.email || !isValidEmail(data.email)) {
            showErrorMessage('Por favor, digite um e-mail válido');
            return false;
        }

        if (!data.subject) {
            showErrorMessage('Por favor, selecione um tipo de serviço');
            return false;
        }

        if (!data.message || data.message.length < 10) {
            showErrorMessage('A mensagem deve ter pelo menos 10 caracteres');
            return false;
        }

        return true;
    }

    /**
     * Valida formato de email
     */
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    /**
     * Mostra mensagem de sucesso
     */
    function showSuccessMessage(form, customMessage) {
        const message = document.createElement('div');
        message.className = 'form-message success';
        message.textContent = '✓ Mensagem enviada com sucesso! Entraremos em contato em breve.';

        form.parentNode.insertBefore(message, form);

        // Remove mensagem após 5 segundos
        setTimeout(() => {
            message.remove();
        }, 5000);
    }

    /**
     * Mostra mensagem de erro
     */
    function showErrorMessage(errorText) {
        const message = document.createElement('div');
        message.className = 'form-message error';
        message.textContent = '✗ ' + errorText;

        const form = document.getElementById('contactForm');
        form.parentNode.insertBefore(message, form);

        // Remove mensagem após 4 segundos
        setTimeout(() => {
            message.remove();
        }, 4000);
    }
}

// ============================================
// INDICADOR DE SCROLL
// ============================================

/**
 * Anima o indicador de scroll ao chegar perto da seção seguinte
 */
function initScrollIndicator() {
    const indicator = document.querySelector('.scroll-indicator');

    if (!indicator) return;

    window.addEventListener('scroll', function() {
        const scrollPosition = window.scrollY;

        // Esconde o indicador após rolar 300px
        if (scrollPosition > 300) {
            indicator.style.opacity = '0';
            indicator.style.pointerEvents = 'none';
        } else {
            indicator.style.opacity = '1';
            indicator.style.pointerEvents = 'auto';
        }
    });
}

// ============================================
// UTILITÁRIOS ADICIONAIS
// ============================================

/**
 * Função para adicionar classe 'active' ao link de navegação atual
 * Útil para destacar seção ativa
 */
function updateActiveNavLink() {
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section[id]');

    window.addEventListener('scroll', function() {
        let current = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;

            if (scrollY >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + current) {
                link.classList.add('active');
            }
        });
    });
}

// Executa ao carregar (opcional)
updateActiveNavLink();

// ============================================
// EFEITOS VISUAIS ADICIONAIS
// ============================================

/**
 * Efeito de parallax suave (opcional)
 * Cria movimento sutil de profundidade
 */
function initParallaxEffect() {
    const heroSection = document.querySelector('.hero');

    if (!heroSection) return;

    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const hero = document.querySelector('.hero-image');

        if (hero) {
            hero.style.transform = `translateY(${scrolled * 0.5}px)`;
        }
    });
}

// Ativa parallax (comentado por padrão, descomente se quiser)
// initParallaxEffect();

// ============================================
// TRATAMENTO DE PERFORMANCE
// ============================================

/**
 * Debounce para eventos de scroll/resize
 * Melhora performance ao reduzir chamadas de função
 */
function debounce(func, delay) {
    let timeoutId;
    return function(...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => func(...args), delay);
    };
}

/**
 * Lazy loading de imagens (opcional)
 * Carrega imagens apenas quando visíveis
 */
function initLazyLoad() {
    if (!('IntersectionObserver' in window)) return;

    const images = document.querySelectorAll('img[data-src]');

    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src || PLACEHOLDER_IMG;
                img.removeAttribute('data-src');
                observer.unobserve(img);
            }
        });
    });

    images.forEach(img => imageObserver.observe(img));
}

// ============================================
// STYLES PARA MENSAGENS DO FORMULÁRIO
// ============================================

/**
 * Cria estilos CSS para as mensagens do formulário
 * (Alternativa: adicione esses estilos no style.css)
 */
function injectFormMessageStyles() {
    const style = document.createElement('style');
    style.textContent = `
        .form-message {
            padding: 12px 16px;
            border-radius: 8px;
            margin-bottom: 16px;
            font-weight: 500;
            animation: slideDownFade 0.3s ease-out;
        }

        .form-message.success {
            background: #d4edda;
            color: #155724;
            border: 1px solid #c3e6cb;
        }

        .form-message.error {
            background: #f8d7da;
            color: #721c24;
            border: 1px solid #f5c6cb;
        }

        @keyframes slideDownFade {
            from {
                opacity: 0;
                transform: translateY(-10px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
    `;
    document.head.appendChild(style);
}

// Injeta estilos ao carregar
injectFormMessageStyles();

// ============================================
// ROLAR PARA TOPO (BOTÃO FLUTUANTE OPCIONAL)
// ============================================

/**
 * Cria botão flutuante para rolar para o topo
 * Descomente para usar
 */
function initScrollToTopButton() {
    // Descomente as linhas abaixo para ativar
    /*
    const scrollTopBtn = document.createElement('button');
    scrollTopBtn.innerHTML = '↑';
    scrollTopBtn.className = 'scroll-to-top';
    scrollTopBtn.setAttribute('aria-label', 'Voltar ao topo');
    document.body.appendChild(scrollTopBtn);

    scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            scrollTopBtn.style.opacity = '1';
            scrollTopBtn.style.pointerEvents = 'auto';
        } else {
            scrollTopBtn.style.opacity = '0';
            scrollTopBtn.style.pointerEvents = 'none';
        }
    });
    */
}

// ============================================
// DETECÇÃO DE DISPOSITIVO MÓVEL
// ============================================

/**
 * Detecta se é dispositivo móvel
 */
function isMobileDevice() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

/**
 * Adiciona classe ao body se for mobile
 */
function detectMobileDevice() {
    if (isMobileDevice()) {
        document.body.classList.add('is-mobile');
    }
}

detectMobileDevice();

// ============================================
// ANALYTICS (OPCIONAL)
// ============================================

/**
 * Rastreia cliques em CTAs
 * Útil para integração com Google Analytics
 */
function trackCTAClicks() {
    document.querySelectorAll('.btn-primary, .btn-cta-header').forEach(btn => {
        btn.addEventListener('click', function() {
            // Aqui você pode enviar evento para Google Analytics
            if (typeof gtag !== 'undefined') {
                gtag('event', 'cta_click', {
                    'button_text': this.textContent,
                    'button_href': this.href
                });
            }

            // Ou para Matomo/Piwik
            if (typeof _paq !== 'undefined') {
                _paq.push(['trackEvent', 'CTA', 'click', this.textContent]);
            }
        });
    });
}

trackCTAClicks();

// ============================================
// PORTFÓLIO DINÂMICO + LIGHTBOX
// ============================================

/**
 * Inicializa o carregamento do portfólio dinâmico
 */
function initPortfolio() {
    const grid = document.getElementById('portfolioGrid');
    if (!grid) {
        console.error('❌ Elemento #portfolioGrid não encontrado!');
        return;
    }

    console.log('📁 Iniciando carregamento do portfólio...');
    console.log('🔗 URL: /data/projects.json');

    fetch('/data/projects.json')
        .then(res => {
            console.log(`📊 Response status: ${res.status}`);
            if (!res.ok) {
                throw new Error(`HTTP Error: ${res.status}`);
            }
            return res.json();
        })
        .then(projects => {
            console.log(`✅ Sucesso! ${projects.length} projetos carregados:`, projects);
            if (projects.length === 0) {
                grid.innerHTML = '<p style="text-align:center; padding: 40px;">⚠️ Nenhum projeto encontrado.</p>';
                return;
            }
            renderPortfolio(projects, grid);
        })
        .catch(err => {
            console.error('❌ ERRO ao carregar projects.json:', err);
            console.error('Detalhes:', err.message);
            grid.innerHTML = `<p style="text-align:center; padding: 40px; color: red;">❌ Erro: ${err.message}</p>`;
        });
}

/**
 * Renderiza os cards do portfólio a partir do array de projetos
 */
function renderPortfolio(projects, grid) {
    grid.innerHTML = '';

    if (!projects || projects.length === 0) {
        grid.innerHTML = '<p style="text-align:center; grid-column: 1 / -1;">Nenhum projeto disponível.</p>';
        return;
    }

    projects.forEach((p, idx) => {
        const card = document.createElement('article');
        card.className = 'portfolio-card';
        card.setAttribute('data-aos', 'fade-up');
        card.setAttribute('role', 'button');
        card.tabIndex = 0;

        const openProject = () => {
            if (p.variations && p.variations.length > 0) {
                openVariationSelector(p);
            } else {
                openLightbox(projects, idx);
            }
        };

        const imageWrap = document.createElement('div');
        imageWrap.className = 'portfolio-image';

        const thumb = p.thumb || p.cover || 'https://via.placeholder.com/400x300?text=Projeto';

        const img = document.createElement('img');
        img.className = 'portfolio-cover';
        img.setAttribute('alt', p.title || 'Projeto');
        img.src = thumb || PLACEHOLDER_IMG;  // ✅ SRC direto (fallback safe)
        img.loading = 'lazy';
        img.decoding = 'async';
        img.style.width = '100%';
        img.style.height = '100%';
        img.style.objectFit = 'cover';

        imageWrap.appendChild(img);
        imageWrap.addEventListener('click', openProject);

        const info = document.createElement('div');
        info.className = 'portfolio-info';
        const h3 = document.createElement('h3');
        h3.textContent = getProjectText(p, 'title') || 'Sem título';
        const ptxt = document.createElement('p');
        ptxt.textContent = getProjectText(p, 'short') || (CURRENT_LANG === 'en' ? 'Description not available' : 'Descrição não disponível');

        const tagsWrap = document.createElement('div');
        tagsWrap.className = 'portfolio-tags';
        (p.tags || []).forEach(t => {
            const span = document.createElement('span');
            span.textContent = t;
            tagsWrap.appendChild(span);
        });

        const actions = document.createElement('div');
        actions.className = 'portfolio-actions';
        const viewBtn = document.createElement('button');
        viewBtn.className = 'btn btn-small btn-primary';
        viewBtn.textContent = t('portfolio.viewProject') || 'Ver projeto';
        viewBtn.type = 'button';
        viewBtn.addEventListener('click', (ev) => {
            ev.stopPropagation();
            openProject();
        });
        actions.appendChild(viewBtn);

        if (p.caseUrl && p.caseUrl !== '#') {
            const linkBtn = document.createElement('a');
            linkBtn.className = 'btn btn-small btn-secondary';
            linkBtn.textContent = t('portfolio.viewOnline') || 'Ver online';
            linkBtn.href = p.caseUrl;
            linkBtn.target = '_blank';
            linkBtn.rel = 'noopener noreferrer';
            linkBtn.addEventListener('click', (ev) => ev.stopPropagation());
            actions.appendChild(linkBtn);
        }

        info.appendChild(h3);
        info.appendChild(ptxt);
        info.appendChild(tagsWrap);
        info.appendChild(actions);

        card.appendChild(imageWrap);
        card.appendChild(info);

        card.addEventListener('click', openProject);
        card.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                openProject();
            }
        });

        grid.appendChild(card);
    });

    // Re-run AOS observer for newly added elements
    initIntersectionObserver();
}

/**
 * Abre modal para seleção de variação
 */
function openVariationSelector(project) {
    // Remove qualquer seletor aberto anteriormente
    const prev = document.querySelector('.variation-selector-overlay');
    if (prev) prev.remove();

    const overlay = document.createElement('div');
    overlay.className = 'variation-selector-overlay';
    overlay.setAttribute('role', 'dialog');
    overlay.setAttribute('aria-modal', 'true');

    const modal = document.createElement('div');
    modal.className = 'variation-selector-modal';

    const header = document.createElement('div');
    header.className = 'variation-selector-header';

    const title = document.createElement('h2');
    title.className = 'variation-selector-title';
    title.textContent = getProjectText(project, 'title') || '';
    header.appendChild(title);

    const closeBtn = document.createElement('button');
    closeBtn.className = 'variation-selector-close';
    closeBtn.textContent = '✕';
    closeBtn.type = 'button';
    closeBtn.addEventListener('click', () => document.body.removeChild(overlay));
    header.appendChild(closeBtn);

    modal.appendChild(header);

    const grid = document.createElement('div');
    grid.className = 'variation-selector-grid';

    (project.variations || []).forEach(variation => {
        const card = document.createElement('button');
        card.className = 'variation-selector-card';
        card.type = 'button';

        const img = document.createElement('img');
        img.src = variation.cover || variation.thumb || PLACEHOLDER_IMG;
        img.alt = variation.name_en && CURRENT_LANG === 'en' ? variation.name_en : (variation.name_pt || variation.name || 'Variação');
        img.loading = 'lazy';

        const name = document.createElement('div');
        name.className = 'variation-selector-name';
        name.textContent = (CURRENT_LANG === 'en' ? (variation.name_en || variation.name_pt || variation.name) : (variation.name_pt || variation.name_en || variation.name));

        card.appendChild(img);
        card.appendChild(name);

        card.addEventListener('click', () => {
            document.body.removeChild(overlay);
            openLightboxVariation(variation);
        });

        grid.appendChild(card);
    });

    modal.appendChild(grid);
    overlay.appendChild(modal);
    document.body.appendChild(overlay);

    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) document.body.removeChild(overlay);
    });

    // Keyboard navigation
    const handleKeyDown = (e) => {
        if (e.key === 'Escape') {
            document.body.removeChild(overlay);
            document.removeEventListener('keydown', handleKeyDown);
        }
    };
    document.addEventListener('keydown', handleKeyDown);

    injectVariationSelectorStyles();
}

/**
 * Abre o lightbox para uma variação específica
 */
function openLightboxVariation(variation) {
    try { console.log('lightbox: openLightboxVariation called', variation.id || variation.name || variation.name_pt || variation.name_en || 'no-id'); } catch(e) {}
    // Cria overlay e caixa principal
    const overlay = document.createElement('div');
    overlay.className = 'lightbox-overlay';
    overlay.setAttribute('role', 'dialog');
    overlay.setAttribute('aria-modal', 'true');
    // tornar overlay focável para manter foco nele e evitar jumps de scroll
    overlay.tabIndex = 0;

    const box = document.createElement('div');
    box.className = 'lightbox-box';
    // tornar box focável para controlar foco e rolagem interna
    box.tabIndex = 0;

    // Guarda overflow atual e declara handler var para remoção segura
    let previousBodyOverflow = document.body.style.overflow;
    let onKeyDown = null;
    // guarda elemento previamente focado para restaurar o foco ao fechar
    let previousActiveElement = document.activeElement;

    const title = document.createElement('h3');
    title.className = 'lightbox-title';
    title.textContent = (CURRENT_LANG === 'en' ? (variation.name_en || variation.name_pt || variation.name) : (variation.name_pt || variation.name_en || variation.name)) || '';

    const subtitle = document.createElement('p');
    subtitle.className = 'lightbox-subtitle';
    subtitle.textContent = 'Role para baixo e veja cada página da identidade sem cortes.';

    // Galeria vertical para rolar as peças sem cortes
    // Use variation.images only if it's a non-empty array; otherwise fall back to cover
    const images = (Array.isArray(variation.images) && variation.images.length > 0) ? variation.images : [variation.cover];
    const imgContainer = document.createElement('div');
    imgContainer.className = 'lightbox-images lightbox-images-vertical';
    // Coleção de promises para aguardar todos os carregamentos de imagem
    const _imageLoadPromises = [];

    // Dica rápida para o usuário (removida visual extra; mantemos apenas o subtitle)
    // const helper = document.createElement('p');
    // helper.className = 'lightbox-helper';
    // helper.textContent = 'Role para ver todas as páginas do projeto';
    // imgContainer.appendChild(helper);

    // Preload images off-DOM to measure sizes and avoid layout shifts.
    // Fallback timeout prevents a single stuck image from blocking the modal.
    const preloadTimeoutMs = 10000;
    const preloadPromises = images.map((src, index) => {
        return new Promise((res) => {
            const im = new Image();
            let settled = false;
            const onDone = (ok) => {
                if (settled) return; settled = true;
                try { console.log('lightbox: image preload', variation.id || variation.name || '', index + 1, '/', images.length, src, ok ? 'ok' : 'error'); } catch(e) {}
                res({ src, index, ok, width: im.naturalWidth || 0, height: im.naturalHeight || 0 });
            };
            im.onload = () => onDone(true);
            im.onerror = () => onDone(false);
            im.src = src || PLACEHOLDER_IMG;
            im.loading = 'eager';
            // timeout fallback
            setTimeout(() => onDone(false), preloadTimeoutMs);
        });
    });

    // Once preloads complete (or timeout), build the DOM in order using cached images.
    Promise.all(preloadPromises).then((results) => {
        // sort by original index just in case
        results.sort((a, b) => a.index - b.index);
        results.forEach((r) => {
            const wrapper = document.createElement('figure');
            wrapper.className = 'lightbox-img-wrapper';

            const img = document.createElement('img');
            img.src = r.src || PLACEHOLDER_IMG;
            img.alt = `${(CURRENT_LANG === 'en' ? (variation.name_en || variation.name_pt || variation.name) : (variation.name_pt || variation.name_en || variation.name)) || 'Projeto'} - página ${r.index + 1}`;
            img.loading = 'eager';
            img.className = 'lightbox-img';

            const caption = document.createElement('figcaption');
            caption.className = 'lightbox-caption';
            caption.textContent = `${r.index + 1} / ${images.length}`;

            wrapper.appendChild(img);
            wrapper.appendChild(caption);
            imgContainer.appendChild(wrapper);

            // push a resolved promise for parity with previous logic
            _imageLoadPromises.push(Promise.resolve());
        });

        // After appending all cached images, force initial scroll to top once
        try { if (box) { box.scrollTop = 0; } else if (imgContainer) { imgContainer.scrollTop = 0; } } catch(e) {}
    });

    const closeOverlay = () => {
        // restore scrolling on body and html (be defensive)
        try { document.body.style.overflow = previousBodyOverflow ?? ''; } catch (err) {}
        try { document.documentElement.style.overflow = previousBodyOverflow ?? ''; } catch (err) {}
        // remove any keydown handler we registered
        try { if (onKeyDown) document.removeEventListener('keydown', onKeyDown); } catch (err) {}
        // remove this overlay node
        try { if (overlay && overlay.parentNode) overlay.parentNode.removeChild(overlay); } catch (err) {}
        // remove any leftover overlays (defensive cleanup)
        try { const rest = document.querySelectorAll('.lightbox-overlay'); rest.forEach(n => n.parentNode && n.parentNode.removeChild(n)); } catch (err) {}
        // restore focus
        try { if (previousActiveElement && typeof previousActiveElement.focus === 'function') previousActiveElement.focus(); } catch (err) {}
    };

    const closeBtn = document.createElement('button');
    closeBtn.className = 'lightbox-close btn-small';
    closeBtn.textContent = 'Fechar';
    closeBtn.type = 'button';
    closeBtn.addEventListener('click', closeOverlay);

    box.appendChild(title);
    box.appendChild(subtitle);
    box.appendChild(imgContainer);
    box.appendChild(closeBtn);
    overlay.appendChild(box);
    document.body.appendChild(overlay);

    // fechamento por clique fora do box
    try { overlay.addEventListener('click', (e) => { if (e.target === overlay) closeOverlay(); }); } catch(e) {}
    // fechamento por ESC
    try { onKeyDown = (e) => { if (e.key === 'Escape') closeOverlay(); }; document.addEventListener('keydown', onKeyDown); } catch(e) {}

    // Força scroll imediato no box/container logo após anexar (diagnóstico)
    try {
        if (typeof box !== 'undefined' && box) {
            box.scrollTop = 0;
            console.log('lightbox: forced box.scrollTop = 0 after append');
        }
        if (box) {
            box.scrollTop = 0;
            console.log('lightbox: forced box.scrollTop = 0 after append');
        }
    } catch (err) { console.warn('lightbox: force scroll after append failed', err); }

    // Evita rolagem da página atrás do modal
    document.body.style.overflow = 'hidden';

    // Desfoca elemento ativo (por exemplo o botão que o usuário clicou)
    // para evitar que o navegador tente manter o foco e cause scroll automático
    try { if (document.activeElement) document.activeElement.blur(); } catch (err) {}

    // Move foco para o box — o box é o elemento rolável agora
    try { setTimeout(() => { box.focus(); }, 0); } catch (err) {}

    // Quando todas as imagens carregarem, garante que o primeiro item esteja visível
    try {
        Promise.all(_imageLoadPromises).then(() => {
            try {
                const first = imgContainer.querySelector('.lightbox-img-wrapper');

                // Função auxiliar que força o scroll para o topo várias vezes
                // (trata repaint/relayout e carregamentos tardios)
                const forceTop = () => {
                    try {
                        console.log('lightbox: forceTop start', variation.id || variation.name || '');
                        if (box) {
                            box.scrollTop = 0;
                            if (typeof box.scrollTo === 'function') box.scrollTo({ top: 0, behavior: 'auto' });
                        } else if (imgContainer) {
                            imgContainer.scrollTop = 0;
                            if (typeof imgContainer.scrollTo === 'function') imgContainer.scrollTo({ top: 0, behavior: 'auto' });
                        }
                    } catch (e) {}
                    try { if (box) { box.scrollTop = 0; if (typeof box.scrollTo === 'function') box.scrollTo({ top: 0, behavior: 'auto' }); } } catch (e) {}
                    try { if (first && typeof first.scrollIntoView === 'function') first.scrollIntoView({ block: 'start', behavior: 'auto' }); } catch (e) {}
                    try { console.log('lightbox: after forceTop, imgContainer.scrollTop=', imgContainer ? imgContainer.scrollTop : 'n/a', 'box.scrollTop=', box ? box.scrollTop : 'n/a'); } catch(e) {}
                };

                // Executa em várias etapas para contornar repaints e race conditions
                forceTop();
                setTimeout(forceTop, 50);
                setTimeout(forceTop, 200);
                setTimeout(forceTop, 600);
            } catch (err) {}
        }).catch(() => {
            // Mesmo em erro, tenta forçar o topo
            try { if (box) box.scrollTop = 0; } catch (err) {}
        });
    } catch (err) {}

    

    // Atalho de teclado: fechar no ESC
    onKeyDown = (e) => {
        if (e.key === 'Escape') {
            closeOverlay();
        }
    };
    document.addEventListener('keydown', onKeyDown);

    // Clique fora fecha
    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) {
            closeOverlay();
        }
    });

    // Garante que o container esteja no topo ao abrir (fallback)
    requestAnimationFrame(() => {
        try { if (box) box.scrollTop = 0; } catch (err) {}
    });

    

    injectLightboxStyles();
}

/**
 * Cria e exibe um lightbox simples para um projeto
 */
function openLightbox(projects, projectIndex) {
    const project = projects[projectIndex];
    if (!project) return;

    // Remove qualquer lightbox aberto anteriormente para evitar conflitos
    const prevOverlay = document.querySelector('.lightbox-overlay');
    if (prevOverlay) {
        prevOverlay.remove();
    }

    const overlay = document.createElement('div');
    overlay.className = 'lightbox-overlay';
    overlay.setAttribute('role', 'dialog');
    overlay.setAttribute('aria-modal', 'true');

    const box = document.createElement('div');
    box.className = 'lightbox-box';

    const header = document.createElement('div');
    header.className = 'lightbox-header';

    const title = document.createElement('h3');
    title.className = 'lightbox-title';
    title.textContent = project.title || '';

    header.appendChild(title);

    // Use project.images only if it's a non-empty array; otherwise fall back to cover
    const images = (Array.isArray(project.images) && project.images.length > 0) ? project.images : [project.cover];
    let currentImageIndex = 0;
    // Guarda overflow atual e handler para remoção segura
    let previousBodyOverflow = document.body.style.overflow;
    let onKeyDown = null;
    // guarda elemento previamente focado para restaurar o foco ao fechar
    let previousActiveElement = document.activeElement;

    const imgContainer = document.createElement('div');
    imgContainer.className = 'lightbox-images';

    const imgWrapper = document.createElement('div');
    imgWrapper.className = 'lightbox-img-wrapper';

    const img = document.createElement('img');
    img.src = images[currentImageIndex] || PLACEHOLDER_IMG;
    img.alt = project.title || '';
    img.loading = 'eager';
    img.className = 'lightbox-img';

    // quando a imagem carrega, garanta que o container esteja posicionado no topo
    img.addEventListener('load', () => {
        try { if (box) box.scrollTop = 0; else if (imgContainer) imgContainer.scrollTop = 0; } catch (err) {}
    });
    imgWrapper.appendChild(img);
    imgContainer.appendChild(imgWrapper);

    // Navigation só aparece se tiver mais de 1 imagem
    let navControls = null;
    if (images.length > 1) {
        navControls = document.createElement('div');
        navControls.className = 'lightbox-nav';

        const prevBtn = document.createElement('button');
        prevBtn.className = 'lightbox-nav-btn lightbox-prev';
        prevBtn.textContent = '❮';
        prevBtn.type = 'button';
        prevBtn.title = 'Anterior';
            prevBtn.addEventListener('click', () => {
            currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
            img.loading = 'eager';
            img.src = images[currentImageIndex] || PLACEHOLDER_IMG;
            // update counter when image finishes loading
                img.onload = () => { try { updateCounter(); if (box) box.scrollTop = 0; else if (imgContainer) imgContainer.scrollTop = 0; } catch (err) {} };
        });

        const nextBtn = document.createElement('button');
        nextBtn.className = 'lightbox-nav-btn lightbox-next';
        nextBtn.textContent = '❯';
        nextBtn.type = 'button';
        nextBtn.title = 'Próxima';
        nextBtn.addEventListener('click', () => {
            currentImageIndex = (currentImageIndex + 1) % images.length;
            img.loading = 'eager';
            img.src = images[currentImageIndex];
            img.onload = () => { try { updateCounter(); if (box) box.scrollTop = 0; else if (imgContainer) imgContainer.scrollTop = 0; } catch (err) {} };
        });

        const counter = document.createElement('div');
        counter.className = 'lightbox-counter';
        
        const updateCounter = () => {
            counter.textContent = `${currentImageIndex + 1} / ${images.length}`;
        };
        updateCounter();

        navControls.appendChild(prevBtn);
        navControls.appendChild(counter);
        navControls.appendChild(nextBtn);

        imgContainer.appendChild(navControls);
    }

    const closeOverlay = () => {
        // restore scrolling on body and html (defensive)
        try { document.body.style.overflow = previousBodyOverflow ?? ''; } catch (err) {}
        try { document.documentElement.style.overflow = previousBodyOverflow ?? ''; } catch (err) {}
        // remove any keydown handler we registered
        try { if (onKeyDown) document.removeEventListener('keydown', onKeyDown); } catch (err) {}
        // remove this overlay node
        try { if (overlay && overlay.parentNode) overlay.parentNode.removeChild(overlay); } catch (err) {}
        // remove any leftover overlays (defensive cleanup)
        try { const rest = document.querySelectorAll('.lightbox-overlay'); rest.forEach(n => n.parentNode && n.parentNode.removeChild(n)); } catch (err) {}
        // restore focus
        try { if (previousActiveElement && typeof previousActiveElement.focus === 'function') previousActiveElement.focus(); } catch (err) {}
    };

    const closeBtn = document.createElement('button');
    closeBtn.className = 'lightbox-close btn-small';
    closeBtn.textContent = 'Fechar';
    closeBtn.type = 'button';
    closeBtn.addEventListener('click', closeOverlay);

    // Atalhos de teclado
    onKeyDown = (e) => {
        if (e.key === 'Escape') {
            closeOverlay();
            return;
        }
        if (images.length > 1) {
            if (e.key === 'ArrowLeft') {
                currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
                img.loading = 'eager';
                img.src = images[currentImageIndex] || PLACEHOLDER_IMG;
                if (navControls) {
                    const counter = navControls.querySelector('.lightbox-counter');
                    if (counter) counter.textContent = `${currentImageIndex + 1} / ${images.length}`;
                }
            }
            if (e.key === 'ArrowRight') {
                currentImageIndex = (currentImageIndex + 1) % images.length;
                img.loading = 'eager';
                img.src = images[currentImageIndex] || PLACEHOLDER_IMG;
                if (navControls) {
                    const counter = navControls.querySelector('.lightbox-counter');
                    if (counter) counter.textContent = `${currentImageIndex + 1} / ${images.length}`;
                }
            }
        }
    };
    document.addEventListener('keydown', onKeyDown);

    box.appendChild(header);
    box.appendChild(imgContainer);
    box.appendChild(closeBtn);
    overlay.appendChild(box);
    document.body.appendChild(overlay);

    // Clique fora fecha
    try { overlay.addEventListener('click', (e) => { if (e.target === overlay) closeOverlay(); }); } catch(e) {}
    // Move foco para o box para manter rolagem interna
    try { box.tabIndex = 0; setTimeout(() => { box.focus(); }, 0); } catch(e) {}

    // Evita que a página por trás role
    document.body.style.overflow = 'hidden';
    try { if (document.activeElement) document.activeElement.blur(); } catch (err) {}

    setTimeout(() => {
        try { if (box && typeof box.scrollTop !== 'undefined') box.scrollTop = 0; } catch (err) {}
        try { if (imgContainer && typeof imgContainer.scrollTop !== 'undefined') imgContainer.scrollTop = 0; } catch (err) {}
    }, 50);

    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) {
            closeOverlay();
        }
    });

    injectLightboxStyles();
}

function injectVariationSelectorStyles() {
    if (document.getElementById('variation-selector-styles')) return;
    const s = document.createElement('style');
    s.id = 'variation-selector-styles';
    s.textContent = `
        .variation-selector-overlay{position:fixed;inset:0;background:rgba(0,0,0,0.85);display:flex;align-items:center;justify-content:center;padding:16px;z-index:1999}
        .variation-selector-modal{width:90vw;max-width:900px;max-height:90vh;background:#fff;border-radius:12px;box-shadow:0 20px 60px rgba(0,0,0,0.5);display:flex;flex-direction:column;overflow:hidden}
        .variation-selector-header{padding:20px;border-bottom:1px solid #e0e0e0;display:flex;align-items:center;justify-content:space-between;flex-shrink:0}
        .variation-selector-title{margin:0;color:var(--text-1);font-size:20px;font-weight:700}
        .variation-selector-close{background:none;border:none;font-size:24px;cursor:pointer;color:var(--text-1);padding:0;width:32px;height:32px;display:flex;align-items:center;justify-content:center;transition:all 0.2s ease}
        .variation-selector-close:hover{color:var(--accent)}
        .variation-selector-grid{flex:1;display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:20px;padding:20px;overflow-y:auto}
        .variation-selector-card{background:transparent;border:2px solid #e0e0e0;border-radius:8px;overflow:hidden;cursor:pointer;transition:all 0.2s ease;display:flex;flex-direction:column}
        .variation-selector-card:hover{border-color:var(--accent);transform:translateY(-4px);box-shadow:0 10px 30px rgba(0,0,0,0.1)}
        .variation-selector-card img{width:100%;height:150px;object-fit:contain;display:block;background:#fff;padding:8px;box-sizing:border-box}
        .variation-selector-name{padding:12px;text-align:center;background:#f5f5f5;color:var(--text-1);font-weight:600;font-size:14px}
        @media(max-width:768px){
            .variation-selector-modal{width:95vw;max-height:95vh}
            .variation-selector-header{padding:16px}
            .variation-selector-title{font-size:18px}
            .variation-selector-grid{grid-template-columns:repeat(auto-fit,minmax(150px,1fr));gap:16px;padding:16px}
            .variation-selector-card img{height:120px}
            .variation-selector-name{padding:10px;font-size:13px}
        }
    `;
    document.head.appendChild(s);
}

function injectLightboxStyles() {
    if (document.getElementById('lightbox-styles')) return;
    const s = document.createElement('style');
    s.id = 'lightbox-styles';
    s.textContent = `
        /* Overlay não deve rolar — o box interno será o scrollable */
        .lightbox-overlay{position:fixed;inset:0;background:rgba(0,0,0,0.85);display:flex;align-items:center;justify-content:center;padding:10px;z-index:2000;overflow:hidden}
        /* Box passa a ser o elemento rolável com altura limitada */
        .lightbox-box{width:90vw;max-width:1000px;max-height:90vh;background:#fff;border-radius:12px;box-shadow:0 20px 60px rgba(0,0,0,0.5);display:flex;flex-direction:column;overflow:auto}
        .lightbox-header{padding:16px 20px;border-bottom:1px solid #e0e0e0;flex-shrink:0}
        .lightbox-title{margin:0;color:var(--text-1);font-size:18px;font-weight:700}
        /* Container principal de imagens (padrão: centralizado) */
                .lightbox-images{flex:1;display:flex;align-items:center;justify-content:center;background:#f5f5f5;padding:12px;overflow:visible;position:relative;gap:12px}
                /* Versão vertical: empilha imagens em coluna. A rolagem fica no .lightbox-box */
                .lightbox-images-vertical{flex-direction:column;align-items:center;padding:12px 12px;box-sizing:border-box;overflow:visible;gap:12px}
        /* Wrapper de cada imagem; não fixa altura para evitar cortes */
        .lightbox-img-wrapper{display:flex;flex-direction:column;align-items:center;justify-content:center;width:100%;max-width:980px;margin:0 auto;background:#fff;border-radius:12px;box-shadow:0 16px 40px rgba(0,0,0,0.08);padding:8px 8px 10px;gap:8px}
                /* Imagens ocupam largura disponível, mantendo proporção (sem cortes) */
                .lightbox-img{max-width:100%;width:100%;height:auto;max-height:calc(100vh - 160px);object-fit:contain;display:block;border-radius:10px;background:#fff}
        .lightbox-helper{margin:0 0 6px;color:#555;font-weight:600;font-size:14px;text-align:center}
        .lightbox-caption{color:#7a7a7a;font-size:13px;text-align:center;font-weight:500;letter-spacing:0.2px}
        .lightbox-subtitle{margin:6px 0 10px;color:#666;font-size:14px;text-align:center;line-height:1.5;font-weight:500}
        /* evita qualquer altura fixa que possa cortar a capa */
        .lightbox-img-wrapper{max-height:none}
        /* Nav (mantida para o lightbox padrão) */
        .lightbox-nav{position:absolute;bottom:20px;left:50%;transform:translateX(-50%);display:flex;align-items:center;gap:16px;background:rgba(0,0,0,0.75);padding:12px 20px;border-radius:50px;z-index:10}
        .lightbox-nav-btn{background:var(--accent);color:white;border:none;border-radius:50%;width:40px;height:40px;display:flex;align-items:center;justify-content:center;cursor:pointer;font-size:18px;font-weight:bold;transition:all 0.2s ease}
        .lightbox-nav-btn:hover{background:#d9001a;transform:scale(1.1)}
        .lightbox-nav-btn:active{transform:scale(0.95)}
        .lightbox-counter{color:white;font-size:14px;font-weight:600;min-width:50px;text-align:center}
        .lightbox-close{background:var(--accent);color:white;border:none;border-radius:8px;padding:10px 20px;cursor:pointer;margin:12px auto;font-weight:600;font-size:14px;transition:all 0.2s ease;flex-shrink:0;position:sticky;bottom:12px;z-index:30}
        .lightbox-close:hover{background:#d9001a}
        .lightbox-close:active{transform:scale(0.95)}
        @media(max-width:768px){
            .lightbox-overlay{padding:12px}
            .lightbox-box{width:95vw;max-height:95vh}
            .lightbox-header{padding:12px 16px}
            .lightbox-title{font-size:16px}
            .lightbox-images{padding:16px 12px}
            .lightbox-nav{gap:12px;padding:10px 16px;bottom:16px}
            .lightbox-nav-btn{width:36px;height:36px;font-size:16px}
            .lightbox-close{margin:12px auto;padding:8px 16px;font-size:13px}
            .lightbox-img-wrapper{max-width:100%}
        }
    `;
    document.head.appendChild(s);
}

// ============================================
// UTILITY: PRINT DE DEBUG (REMOVA EM PRODUÇÃO)
// ============================================

console.log('✓ Portfolio JS carregado com sucesso');
console.log('✓ Menu mobile, scroll suave e animações ativas');
