document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();

    document.getElementById('nameError').textContent = '';
    document.getElementById('emailError').textContent = '';
    document.getElementById('passwordError').textContent = '';

    let isValid = true;

    if (name === '') {
        document.getElementById('nameError').textContent = 'Input your username';
        isValid = false;
    }

    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (email === '') {
        document.getElementById('emailError').textContent = 'Input your email';
        isValid = false;
    } else if (!emailPattern.test(email)) {
        document.getElementById('emailError').textContent = 'Invalid email format';
        isValid = false;
    }sdf

    if (password === '') {
        document.getElementById('passwordError').textContent = 'Input your password';
        isValid = false;
    }

    if (isValid) {
        console.log('Form successfully submitted');
        console.log({ name, email, password });

        document.getElementById('contactForm').reset();
    }
});