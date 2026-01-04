// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
    
    // ===========================================
    // BILINGUAL TRANSLATION SYSTEM
    // ===========================================
    
    const translations = {
        en: {
            'purpose-intro': 'This digital archive documents my technical progression through the academic and technical foundations of web development. For detailed inquiries or professional services, please visit davidquintana.dev. This site serves as a transparent record of my proficiency in:',
            'purpose-heading': 'Project Mission & Purpose',
            'skill-html': 'Semantic HTML5:',
            'skill-html-desc': 'Building meaningful, accessible document structures.',
            'skill-css': 'Modern CSS:',
            'skill-css-desc': 'Implementing responsive design via Flexbox, CSS Grid, and mobile-first strategies.',
            'skill-js': 'JavaScript Fundamentals:',
            'skill-js-desc': 'Developing logic through arrays, loops, and conditional statements.',
            'skill-standards': 'Web Standards:',
            'skill-standards-desc': 'Ensuring cross-browser compatibility and ADA accessibility compliance.',
            'gallery-heading': 'Technical Project Gallery',
            'gallery-intro': 'The following modules represent a semester-long deep dive into the New Perspectives on HTML5 and CSS curriculum. Each project demonstrates a shift from static markup to complex, interactive applications.',
            'tutorial-1-heading': 'Tutorial 1: Core HTML5 Fundamentals',
            'tutorial-1-link-1': 'Curbside Thai Challenge: Implemented foundational HTML5 structure and semantic markup for a mobile food vendor website.',
            'tutorial-1-link-2': 'Menu: Curbside Thai Menu',
            'tutorial-1-link-3': 'Reviews: Curbside Thai Reviews',
            'tutorial-2-heading': 'Tutorial 2: Core CSS Foundations',
            'tutorial-2-link-1': 'Tri & Succeed Sports Layout: Created a multi-page site using external CSS to control global typography and page regions.',
            'tutorial-2-link-2': 'TSS Coaches Page: Formatted navigation menus with dynamic hover effects and integrated custom web fonts.',
            'tutorial-2-link-3': 'Civil War History Site: Applied float-based layouts and dual navigation systems for a complex historical archive.',
            'tutorial-3-heading': 'Tutorial 3: Designing a Page Layout',
            'tutorial-3-link-1': 'Pandaisia Chocolates: Implemented multi-column layouts using percentage-based widths and absolute positioning.',
            'tutorial-3-link-2': 'Pandaisia Monthly Specials: Engineered a grid-based product gallery and a scrollable awards sidebar.',
            'tutorial-3-link-3': 'Slate & Pencil Tutoring: Developed a four-column CSS Grid layout featuring elements that span multiple rows and columns.',
            'tutorial-4-heading': 'Tutorial 4: Graphic Design with CSS',
            'tutorial-4-link-1': 'The Komatsu Family: Used RGBA color values and multiple background images to create visual depth without heavy image assets.',
            'tutorial-4-link-2': 'The Ferris Family: Utilized the border-image property and CSS filters (sepia) to evoke a historical aesthetic.',
            'tutorial-4-link-3': 'Chupacabra Music Fest: Engineered a functional 3D rotating cube using translateZ and rotate transforms in a 3D coordinate system.',
            'tutorial-5-heading': 'Tutorial 5: Responsive Design and Accessibility',
            'tutorial-5-link-1': 'Trusted Friends Pre-K: Implemented a mobile-first strategy and a specialized print stylesheet that optimizes typography for physical documents.',
            'tutorial-5-link-2': 'Trusted Friends Parenting Tips: Developed nested flexbox layouts and integrated the attr(href) CSS function for printed URLs.',
            'tutorial-5-link-3': 'Cauli-Wood Gallery: Swapped background images specifically for mobile users to improve outdoor readability.',
            'tutorial-6-heading': 'Tutorial 6: Working with Tables and Columns',
            'tutorial-6-link-1': 'DLR Nightly Schedule: Used <thead>, <tbody>, and <tfoot> tags with column grouping to manage diverse broadcast data.',
            'tutorial-6-link-2': 'DLR Morning Schedule: Utilized the CSS Multi-column Layout Module to flow descriptive text into a readable three-column format.',
            'tutorial-6-link-3': 'Marlin Internet: Integrated custom @font-face rules and multi-stop linear gradients to create a high-tech pricing interface.',
            'tutorial-7-heading': 'Tutorial 7: Designing a Web Form',
            'tutorial-7-link-1': 'ACGIP Conference Registration: Applied custom regex patterns for validation and a three-state visual feedback system using :valid and :invalid pseudo-classes.',
            'tutorial-7-link-2': 'Red Ball Pizza Order Forms: Engineered a multi-page form flow with dynamic field state management based on user delivery selections.',
            'tutorial-7-link-3': 'Red Ball Pizza Survey: Deployed range sliders and multi-select dropdown lists organized within semantic <fieldset> containers.',
            'tutorial-8-heading': 'Tutorial 8: Enhancing a Website with Advanced CSS',
            'tutorial-8-link-1': 'Frustrated Fox Game: Engineered complex sprite sheet animations using the steps() timing function and custom keyframe sequences.',
            'tutorial-8-link-2': 'Cinema Penguin: Fred Astaire Biography: Integrated HTML5 audio/video with custom WebVTT caption styling and an infinite marquee animation.',
            'tutorial-8-link-3': 'Cinema Penguin: Royal Wedding: Synchronized video playback with a 360-degree CSS rotation animation using checkbox-controlled triggers.',
            'tutorial-9-heading': 'Tutorial 9: Getting Started with JavaScript',
            'tutorial-9-link-1': 'Bridger College Student Union: Developed a dynamic calendar using a seven-case switch statement and locale-aware date formatting.',
            'tutorial-9-link-2': 'Tulsa Summer Party Countdown: Implemented setInterval and Math logic to perform real-time millisecond-to-unit conversions for a holiday countdown.',
            'tutorial-9-link-3': 'Tulsa New Year\'s Bash: Engineered a self-correcting target date calculation to ensure countdowns always display future events.',
            'tutorial-10-heading': 'Tutorial 10: Exploring Arrays, Loops, and Conditionals',
            'tutorial-10-link-1': 'VoterWeb Election Results: Processed multidimensional arrays of candidate data to generate interactive tables with visual percentage bars.',
            'tutorial-10-link-2': 'Lyman Hall Theater Event Listings: Created a 14-day time window for event filtering by performing millisecond arithmetic on current Date objects.',
            'tutorial-10-link-3': 'Lyman Hall Interactive Calendar: Built a modular function architecture to dynamically generate monthly calendar grids, including leap year logic.',
            'capstone-heading': 'Capstone Project: Tienda Salvadoreña',
            'capstone-subtitle': 'A Bilingual E-Commerce Website for Denver\'s Oldest Salvadoran Store',
            'capstone-intro': 'This capstone project synthesizes all techniques learned throughout CIS 3030 to create a culturally authentic digital storefront.',
            'capstone-link': 'Visit Tienda Salvadoreña Website',
            'capstone-feature-1': 'Bilingual Translation System:',
            'capstone-feature-1-desc': 'Custom lang-toggle.js with 200+ key-value pairs and localStorage persistence.',
            'capstone-feature-2': 'Sophisticated Design Tokens:',
            'capstone-feature-2-desc': 'Utilizes CSS variables for a national color palette and clamp() for fluid typography.',
            'capstone-feature-3': 'Advanced Layouts:',
            'capstone-feature-3-desc': 'Combines CSS Grid galleries with nested Flexbox containers for responsive card scaling.',
            'capstone-feature-4': 'Interactive UI:',
            'capstone-feature-4-desc': 'Features a JavaScript-driven product category filter and a custom image zoom modal system.',
            'capstone-feature-5': 'Accessibility & Standards:',
            'capstone-feature-5-desc': 'Achieved WCAG 2.1 Level AA compliance through ARIA landmarks, touch-target optimization, and reduced motion support.',
            'textbook-heading': 'Textbook Reference',
            'textbook-citation': 'Carey, Patrick M. New Perspectives on HTML5 and CSS: Comprehensive, 8th Edition. Cengage Learning, 2020.',
            'disclaimer-heading': 'Disclaimer',
            'disclaimer-text': 'This website was created in partial fulfillment of my CIS 3030 course requirements. All content is for academic demonstration purposes.'
        },
        es: {
            'purpose-intro': 'Este archivo digital documenta mi progreso técnico a través de los fundamentos académicos y técnicos del desarrollo web. Para consultas detalladas o servicios profesionales, visite davidquintana.dev. Este sitio sirve como un registro transparente de mi competencia en:',
            'purpose-heading': 'Misión y Propósito del Proyecto',
            'skill-html': 'HTML5 Semántico:',
            'skill-html-desc': 'Construyendo estructuras de documentos significativas y accesibles.',
            'skill-css': 'CSS Moderno:',
            'skill-css-desc': 'Implementando diseño responsivo a través de Flexbox, CSS Grid y estrategias mobile-first.',
            'skill-js': 'Fundamentos de JavaScript:',
            'skill-js-desc': 'Desarrollando lógica a través de arreglos, bucles y declaraciones condicionales.',
            'skill-standards': 'Estándares Web:',
            'skill-standards-desc': 'Garantizando la compatibilidad entre navegadores y el cumplimiento de accesibilidad ADA.',
            'gallery-heading': 'Galería de Proyectos Técnicos',
            'gallery-intro': 'Los siguientes módulos representan una inmersión profunda de un semestre en el plan de estudios de New Perspectives on HTML5 and CSS. Cada proyecto demuestra un cambio de marcado estático a aplicaciones complejas e interactivas.',
            'tutorial-1-heading': 'Tutorial 1: Fundamentos Básicos de HTML5',
            'tutorial-1-link-1': 'Desafío Curbside Thai: Implementé estructura HTML5 fundamental y marcado semántico para un sitio web de vendedor de comida móvil.',
            'tutorial-1-link-2': 'Menú: Menú de Curbside Thai',
            'tutorial-1-link-3': 'Reseñas: Reseñas de Curbside Thai',
            'tutorial-2-heading': 'Tutorial 2: Fundamentos Básicos de CSS',
            'tutorial-2-link-1': 'Diseño de Tri & Succeed Sports: Creé un sitio de varias páginas usando CSS externo para controlar la tipografía global y las regiones de página.',
            'tutorial-2-link-2': 'Página de Entrenadores TSS: Formaté menús de navegación con efectos hover dinámicos e integré fuentes web personalizadas.',
            'tutorial-2-link-3': 'Sitio de Historia de Guerra Civil: Apliqué diseños basados en flotación y sistemas de navegación dual para un archivo histórico complejo.',
            'tutorial-3-heading': 'Tutorial 3: Diseño de una Estructura de Página',
            'tutorial-3-link-1': 'Pandaisia Chocolates: Implementé diseños de varias columnas usando anchos basados en porcentajes y posicionamiento absoluto.',
            'tutorial-3-link-2': 'Especiales Mensuales de Pandaisia: Diseñé una galería de productos basada en cuadrícula y una barra lateral de premios desplazable.',
            'tutorial-3-link-3': 'Tutoría Slate & Pencil: Desarrollé un diseño CSS Grid de cuatro columnas con elementos que abarcan múltiples filas y columnas.',
            'tutorial-4-heading': 'Tutorial 4: Diseño Gráfico con CSS',
            'tutorial-4-link-1': 'La Familia Komatsu: Usé valores de color RGBA y múltiples imágenes de fondo para crear profundidad visual sin recursos de imagen pesados.',
            'tutorial-4-link-2': 'La Familia Ferris: Utilicé la propiedad border-image y filtros CSS (sepia) para evocar una estética histórica.',
            'tutorial-4-link-3': 'Festival de Música Chupacabra: Diseñé un cubo giratorio 3D funcional usando transformaciones translateZ y rotate en un sistema de coordenadas 3D.',
            'tutorial-5-heading': 'Tutorial 5: Diseño Responsivo y Accesibilidad',
            'tutorial-5-link-1': 'Trusted Friends Pre-K: Implementé una estrategia mobile-first y una hoja de estilo de impresión especializada que optimiza la tipografía para documentos físicos.',
            'tutorial-5-link-2': 'Consejos para Padres de Trusted Friends: Desarrollé diseños flexbox anidados e integré la función CSS attr(href) para URLs impresas.',
            'tutorial-5-link-3': 'Galería Cauli-Wood: Intercambié imágenes de fondo específicamente para usuarios móviles para mejorar la legibilidad al aire libre.',
            'tutorial-6-heading': 'Tutorial 6: Trabajar con Tablas y Columnas',
            'tutorial-6-link-1': 'Horario Nocturno DLR: Usé etiquetas <thead>, <tbody> y <tfoot> con agrupación de columnas para administrar datos de transmisión diversos.',
            'tutorial-6-link-2': 'Horario Matutino DLR: Utilicé el Módulo de Diseño Multi-columna CSS para fluir texto descriptivo en un formato legible de tres columnas.',
            'tutorial-6-link-3': 'Marlin Internet: Integré reglas @font-face personalizadas y gradientes lineales de múltiples paradas para crear una interfaz de precios de alta tecnología.',
            'tutorial-7-heading': 'Tutorial 7: Diseño de un Formulario Web',
            'tutorial-7-link-1': 'Registro de Conferencia ACGIP: Apliqué patrones regex personalizados para validación y un sistema de retroalimentación visual de tres estados usando pseudo-clases :valid e :invalid.',
            'tutorial-7-link-2': 'Formularios de Pedido Red Ball Pizza: Diseñé un flujo de formulario de múltiples páginas con gestión dinámica de estado de campo basada en selecciones de entrega del usuario.',
            'tutorial-7-link-3': 'Encuesta Red Ball Pizza: Desplegué controles deslizantes de rango y listas desplegables de selección múltiple organizadas dentro de contenedores <fieldset> semánticos.',
            'tutorial-8-heading': 'Tutorial 8: Mejora de un Sitio Web con CSS Avanzado',
            'tutorial-8-link-1': 'Juego del Zorro Frustrado: Diseñé animaciones complejas de hojas de sprites usando la función de temporización steps() y secuencias de keyframes personalizadas.',
            'tutorial-8-link-2': 'Cinema Penguin: Biografía de Fred Astaire: Integré audio/video HTML5 con estilo de subtítulos WebVTT personalizados y una animación de marquesina infinita.',
            'tutorial-8-link-3': 'Cinema Penguin: Boda Real: Sincronicé la reproducción de video con una animación de rotación CSS de 360 grados usando activadores controlados por checkbox.',
            'tutorial-9-heading': 'Tutorial 9: Introducción a JavaScript',
            'tutorial-9-link-1': 'Sindicato Estudiantil de Bridger College: Desarrollé un calendario dinámico usando una declaración switch de siete casos y formato de fecha consciente de configuración regional.',
            'tutorial-9-link-2': 'Cuenta Regresiva de Fiesta de Verano de Tulsa: Implementé setInterval y lógica Math para realizar conversiones de milisegundos a unidades en tiempo real para una cuenta regresiva de vacaciones.',
            'tutorial-9-link-3': 'Fiesta de Año Nuevo de Tulsa: Diseñé un cálculo de fecha objetivo auto-correctivo para garantizar que las cuentas regresivas siempre muestren eventos futuros.',
            'tutorial-10-heading': 'Tutorial 10: Explorando Arrays, Bucles y Condicionales',
            'tutorial-10-link-1': 'Resultados Electorales VoterWeb: Procesé arrays multidimensionales de datos de candidatos para generar tablas interactivas con barras de porcentaje visuales.',
            'tutorial-10-link-2': 'Listados de Eventos del Teatro Lyman Hall: Creé una ventana de tiempo de 14 días para el filtrado de eventos realizando aritmética de milisegundos en objetos Date actuales.',
            'tutorial-10-link-3': 'Calendario Interactivo de Lyman Hall: Construí una arquitectura de función modular para generar dinámicamente cuadrículas de calendario mensuales, incluida la lógica de año bisiesto.',
            'capstone-heading': 'Proyecto Final: Tienda Salvadoreña',
            'capstone-subtitle': 'Un Sitio Web Bilingüe de Comercio Electrónico para la Tienda Salvadoreña Más Antigua de Denver',
            'capstone-intro': 'Este proyecto final sintetiza todas las técnicas aprendidas a lo largo de CIS 3030 para crear una tienda digital culturalmente auténtica.',
            'capstone-link': 'Visitar Sitio Web de Tienda Salvadoreña',
            'capstone-feature-1': 'Sistema de Traducción Bilingüe:',
            'capstone-feature-1-desc': 'lang-toggle.js personalizado con más de 200 pares clave-valor y persistencia localStorage.',
            'capstone-feature-2': 'Tokens de Diseño Sofisticados:',
            'capstone-feature-2-desc': 'Utiliza variables CSS para una paleta de colores nacional y clamp() para tipografía fluida.',
            'capstone-feature-3': 'Diseños Avanzados:',
            'capstone-feature-3-desc': 'Combina galerías CSS Grid con contenedores Flexbox anidados para escala de tarjetas responsiva.',
            'capstone-feature-4': 'Interfaz de Usuario Interactiva:',
            'capstone-feature-4-desc': 'Presenta un filtro de categoría de productos impulsado por JavaScript y un sistema modal de zoom de imagen personalizado.',
            'capstone-feature-5': 'Accesibilidad y Estándares:',
            'capstone-feature-5-desc': 'Logró el cumplimiento WCAG 2.1 Nivel AA a través de puntos de referencia ARIA, optimización de objetivos táctiles y soporte de movimiento reducido.',
            'textbook-heading': 'Referencia del Libro de Texto',
            'textbook-citation': 'Carey, Patrick M. New Perspectives on HTML5 and CSS: Comprehensive, 8ª Edición. Cengage Learning, 2020.',
            'disclaimer-heading': 'Descargo de Responsabilidad',
            'disclaimer-text': 'Este sitio web fue creado en cumplimiento parcial de los requisitos de mi curso CIS 3030. Todo el contenido es para fines de demostración académica.'
        }
    };

    // Get language buttons
    const langEnBtn = document.getElementById('lang-en');
    const langEsBtn = document.getElementById('lang-es');

    // Check for saved language preference, default to English
    let currentLang = localStorage.getItem('language') || 'en';

    // Function to update all translatable elements
    function updateLanguage(lang) {
        currentLang = lang;
        localStorage.setItem('language', lang);

        // Update all elements with data-i18n attribute
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            if (translations[lang][key]) {
                element.textContent = translations[lang][key];
            }
        });

        // Update button states
        if (lang === 'en') {
            langEnBtn.classList.add('active');
            langEnBtn.setAttribute('aria-pressed', 'true');
            langEsBtn.classList.remove('active');
            langEsBtn.setAttribute('aria-pressed', 'false');
        } else {
            langEsBtn.classList.add('active');
            langEsBtn.setAttribute('aria-pressed', 'true');
            langEnBtn.classList.remove('active');
            langEnBtn.setAttribute('aria-pressed', 'false');
        }

        // Log language change
        console.log(`🌐 Language changed to: ${lang.toUpperCase()}`);
    }

    // Add click event listeners to language buttons
    langEnBtn.addEventListener('click', () => updateLanguage('en'));
    langEsBtn.addEventListener('click', () => updateLanguage('es'));

    // Initialize with saved or default language
    updateLanguage(currentLang);

    // ===========================================
    // SCROLL REVEAL ANIMATION
    // ===========================================
    
    // Select all elements with the 'box' class
    const boxes = document.querySelectorAll('.box');

    // Configuration for Intersection Observer
    const observerOptions = {
        root: null,
        rootMargin: '0px 0px -50px 0px',
        threshold: 0.1
    };

    // Create the Intersection Observer
    const scrollObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                const delay = Array.from(boxes).indexOf(entry.target) * 80;
                
                setTimeout(() => {
                    entry.target.classList.add('visible');
                }, delay);
                
                scrollObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Start observing each box element
    boxes.forEach(box => {
        scrollObserver.observe(box);
    });

    // ===========================================
    // ENHANCED HOVER GLOW EFFECT
    // ===========================================
    
    boxes.forEach(box => {
        box.addEventListener('mouseenter', (e) => {
            if (!box.classList.contains('header') && box.tagName !== 'FOOTER') {
                box.style.boxShadow = '0 12px 35px rgba(255, 140, 0, 0.3)';
            }
        });

        box.addEventListener('mouseleave', (e) => {
            if (!box.classList.contains('header') && box.tagName !== 'FOOTER') {
                box.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.4)';
            }
        });
    });

    // ===========================================
    // SMOOTH SCROLL FOR ANCHOR LINKS
    // ===========================================
    
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            
            if (href !== '#') {
                e.preventDefault();
                const target = document.querySelector(href);
                
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });

    // ===========================================
    // LOGO ANIMATION (Easter Egg)
    // ===========================================
    
    const logo = document.querySelector('.logo');
    if (logo) {
        let clickCount = 0;
        logo.addEventListener('click', () => {
            clickCount++;
            logo.style.transform = 'rotate(360deg) scale(1.1)';
            
            setTimeout(() => {
                logo.style.transform = 'rotate(0deg) scale(1)';
            }, 600);

            if (clickCount === 3) {
                console.log('🎓 Go Roadrunners! 🎓');
                clickCount = 0;
            }
        });
    }

    // ===========================================
    // DYNAMIC LINK COUNTER
    // ===========================================
    
    const assignmentLinks = document.querySelectorAll('section.box:not(.citation-section) li a');
    const totalLinks = assignmentLinks.length;
    
    console.log(`📚 Total assignment links: ${totalLinks}`);

    // ===========================================
    // ACCESSIBILITY ENHANCEMENTS
    // ===========================================
    
    boxes.forEach(box => {
        const hasLinks = box.querySelector('a');
        if (hasLinks) {
            box.setAttribute('tabindex', '0');
            
            box.addEventListener('focus', () => {
                box.style.outline = '2px solid rgba(255, 140, 0, 0.5)';
                box.style.outlineOffset = '4px';
            });
            
            box.addEventListener('blur', () => {
                box.style.outline = 'none';
            });
        }
    });

    // ===========================================
    // PERFORMANCE MONITORING
    // ===========================================
    
    window.addEventListener('load', () => {
        if (window.performance) {
            const perfData = window.performance.timing;
            const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
            console.log(`⚡ Page loaded in ${pageLoadTime}ms`);
        }
    });

    // ===========================================
    // CONSOLE WELCOME MESSAGE
    // ===========================================
    
    console.log('%c🎨 CIS 3030 Assignments Portfolio', 
        'font-size: 16px; font-weight: bold; color: #ff8c00;');
    console.log('%cDeveloped by David Quintana', 
        'font-size: 12px; color: #a8a8a8;');
    console.log('%cProfessor: Janos Fustos | Fall 2025', 
        'font-size: 11px; color: #666;');

});
