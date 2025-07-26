document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('.contact-form');

    form.addEventListener('submit', function (event) {
        let isValid = true;

        const firstName = document.getElementById('firstName');
        if (!firstName.value) {
            alert('Please fill the First Name field');
            isValid = false;
        }

        const lastName = document.getElementById('lastName');
        if (!lastName.value) {
            alert('Please fill the Last Name field');
            isValid = false;
        }

        const email = document.getElementById('email');
        if (!email.value) {
            alert('Please fill the Email Address field');
            isValid = false;
        }

        const subject = document.getElementById('subject');
        if (!subject.value) {
            alert('Please fill the Subject field');
            isValid = false;
        }

        const message = document.getElementById('message');
        if (!message.value) {
            alert('Please fill the Message field');
            isValid = false;
        }

        if (!isValid) {
            event.preventDefault();
        }
    });
});
