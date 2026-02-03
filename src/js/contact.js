// Handles contact form submission for email and WhatsApp

document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('#contact form');
    if (!form) return;

    const nameInput = form.querySelector('input[placeholder="Full Name"]');
    const emailInput = form.querySelector('input[placeholder="Email Address"]');
    const subjectInput = form.querySelector('input[placeholder="Subject"]');
    const messageInput = form.querySelector('textarea[placeholder="Message"]');
    const emailBtn = form.querySelector('a[href^="mailto:"]');
    const whatsappBtn = form.querySelector('a[href*="whatsapp.com"]');

    function getFormData() {
        return {
            name: nameInput.value.trim(),
            email: emailInput.value.trim(),
            subject: subjectInput.value.trim(),
            message: messageInput.value.trim(),
        };
    }

    emailBtn.addEventListener('click', function (e) {
        const { name, email, subject, message } = getFormData();
        const mailto = `mailto:info@rs-protection.co.za?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent('Full Name: ' + name + '\nEmail Address: ' + email + '\n\n' + message)}`;
        emailBtn.setAttribute('href', mailto);
    });

    whatsappBtn.addEventListener('click', function (e) {
        const { name, email, subject, message } = getFormData();
        const text = `Full Name: ${name}%0AEmail Address: ${email}%0ASubject: ${subject}%0A%0A${encodeURIComponent(message)}`;
        const phone = '27674986937';
        const whatsappUrl = `https://api.whatsapp.com/send/?phone=${phone}&text=${text}`;
        whatsappBtn.setAttribute('href', whatsappUrl);
    });
});
