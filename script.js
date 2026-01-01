// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
    
    // ===========================================
    // LANGUAGE TOGGLE LOGIC
    // ===========================================
    const langToggle = document.getElementById('language-toggle');
    const body = document.body;
    
    // Check local storage for saved preference
    const savedLang = localStorage.getItem('language');
    
    if (savedLang === 'es') {
        body.classList.remove('lang-en-active');
        body.classList.add('lang-es-active');
        langToggle.checked = true; // Set switch to on
    } else {
        // Default to English
        body.classList.add('lang-en-active');
        body.classList.remove('lang-es-active');
        langToggle.checked = false; // Set switch to off
    }

    // Listen for switch changes
    langToggle.addEventListener('change', () => {
        if (langToggle.checked) {
            // Switch to Spanish
            body.classList.remove('lang-en-active');
            body.classList.add('lang-es-active');
            localStorage.setItem('language', 'es');
            console.log('🌐 Language switched to Spanish');
        } else {
            // Switch to English
            body.classList.remove('lang-es-active');
            body.classList.add('lang-en-active');
            localStorage.setItem('language', 'en');
            console.log('🌐 Language switched to English');
        }
    });

    // ===========================================
    // SCROLL REVEAL ANIMATION
    // ===========================================
    
    // Select all elements with the 'box' class
    const boxes = document.querySelectorAll('.box');

    // Configuration for Intersection Observer
    const observerOptions = {
        root: null, // Use the viewport as the root
        rootMargin: '0px 0px -50px 0px', // Trigger slightly before element enters viewport
        threshold: 0.1 // Trigger when 10% of the element is visible
    };

    // Create the Intersection Observer
    const scrollObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                // Add a staggered delay for smooth sequential animation
                // Calculate delay based on the order of appearance
                const delay = Array.from(boxes).indexOf(entry.target) * 80;
                
                setTimeout(() => {
                    entry.target.classList.add('visible');
                }, delay);
                
                // Stop observing this element once it's been animated
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
    
    // Add enhanced glow effect to boxes on hover
    boxes.forEach(box => {
        box.addEventListener('mouseenter', (e) => {
            // Skip the header and footer boxes for this effect
            if (!box.classList.contains('header') && box.tagName !== 'FOOTER') {
                box.style.boxShadow = '0 12px 35px rgba(255, 140, 0, 0.3)';
            }
        });

        box.addEventListener('mouseleave', (e) => {
            // Reset to default shadow
            if (!box.classList.contains('header') && box.tagName !== 'FOOTER') {
                box.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.3)';
            }
        });
    });

    // ===========================================
    // SMOOTH SCROLL FOR ANCHOR LINKS (Optional)
    // ===========================================
    
    // Enable smooth scrolling for any internal anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            
            // Only apply if it's not just '#'
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
    // LOGO ANIMATION (Optional Easter Egg)
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

            // Easter egg: after 3 clicks, show a fun message
            if (clickCount === 3) {
                console.log('🎓 Go Roadrunners! 🎓');
                clickCount = 0;
            }
        });
    }

    // ===========================================
    // DYNAMIC LINK COUNTER (Optional)
    // ===========================================
    
    // Count and log the total number of assignment links
    const assignmentLinks = document.querySelectorAll('section.box:not(.citation-section) li a');
    const totalLinks = assignmentLinks.length;
    
    console.log(`📚 Total assignment links: ${totalLinks}`);

    // ===========================================
    // ACCESSIBILITY ENHANCEMENTS
    // ===========================================
    
    // Add keyboard navigation support for cards
    boxes.forEach(box => {
        // Make boxes focusable if they contain interactive elements
        const hasLinks = box.querySelector('a');
        if (hasLinks) {
            box.setAttribute('tabindex', '0');
            
            // Add visual feedback on focus
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
    // CONSOLE WELCOME MESSAGE
    // ===========================================
    
    console.log('%c🎨 CIS 3030 Assignments Portfolio', 
        'font-size: 16px; font-weight: bold; color: #ff8c00;');
    console.log('%cDeveloped by David Quintana', 
        'font-size: 12px; color: #a8a8a8;');
    console.log('%cProfessor: Janos Fustos | Fall 2025', 
        'font-size: 11px; color: #666;');

});
