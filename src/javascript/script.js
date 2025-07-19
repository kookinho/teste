$(document).ready(function() {
    $('#mobile_btn').on('click', function () {
        $('#mobile_menu').toggleClass('active');
        $('#mobile_btn').find('i').toggleClass('fa-x');
    });

    const sections = $('section');
    const navItems = $('.nav-item');

    $(window).on('scroll', function () {
        const header = $('header');
        const scrollPosition = $(window).scrollTop() - header.outerHeight();

        let activeSectionIndex = 0;

        if (scrollPosition <= 0) {
            header.css('box-shadow', 'none');
        } else {
            header.css('box-shadow', '5px 1px 5px rgba(0, 0, 0, 0.1');
        }

        sections.each(function(i) {
            const section = $(this);
            const sectionTop = section.offset().top - 96;
            const sectionBottom = sectionTop+ section.outerHeight();

            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                activeSectionIndex = i;
                return false;
            }
        })

        navItems.removeClass('active');
        $(navItems[activeSectionIndex]).addClass('active');
    });

    ScrollReveal().reveal('#cta', {
        origin: 'left',
        duration: 2000,
        distance: '20%'
    });

    ScrollReveal().reveal('#about_content', {
        origin: 'right',
        duration: 1000,
        distance: '20%',
        delay: 300
    })

    ScrollReveal().reveal('.job', {
        origin: 'left',
        duration: 2000,
        distance: '20%'
    });

    ScrollReveal().reveal('#description', {
        origin: 'left',
        duration: 2000,
        distance: '20%'
    });

    ScrollReveal().reveal('#contact_form', {
        origin: 'right',
        duration: 2000,
        distance: '20%'
    });

    document.getElementById('contact_form').addEventListener('submit', function(e) {
            e.preventDefault();
            
            const phone = "5585985297269"; 
            
            const name = document.getElementById('name').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;
            
            const fullMessage = `*Assunto: ${subject}.*\n\nOlá, Me chamo ${name}!\n${message}`;
            
            const encodedMessage = encodeURIComponent(fullMessage);
            
            const whatsappUrl = `https://wa.me/${phone}?text=${encodedMessage}`;
            
            window.open(whatsappUrl, '_blank');
            
            this.reset();
        });

    document.querySelector('a.btn-default[href="#portfolio"]').addEventListener('click', function(e) {
    e.preventDefault(); 
        const portfolioSection = document.getElementById('portfolio');
        portfolioSection.scrollIntoView({ behavior: 'smooth' }); 
    });

});