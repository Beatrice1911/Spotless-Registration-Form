let myForm = document.getElementById('myForm');
myForm.addEventListener('submit', function (event) {
    event.preventDefault();

    let fname = document.getElementById('fname').value;
    let lname = document.getElementById('lname').value;
    let email = document.getElementById('email').value;
    let emailError = document.getElementById('emailError');
    let phone = document.getElementById('phone').value;
    let phoneError = document.getElementById('phoneError');
    let pwd = document.getElementById('pwd').value;
    let pwdError = document.getElementById('pwdError');
    let cpwd = document.getElementById('cpwd').value;
    let cpwdError = document.getElementById('cpwdError')
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\d{11}/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&_-])[A-Za-z\d@.#$!%*?&_-]{8,}$/;

    if (fname == '') {
        alert('Input your First Name');
    }

    if (lname == '') {
        alert('Input your Last Name');
    }

    if (!emailRegex.test(email)) {
        emailError.style.display = 'block';
    } else {
        emailError.style.display = 'none';
    }

    if (phoneRegex.test(phone)) {
        phoneError.style.display = 'none';
    } else {
        phoneError.style.display = 'block';
    }
    if (pwd.length < 8) {
        alert('Password must be at least 8 characters long');
    }
    if (pwd.length > 15) {
        alert('Password must be at most 15 characters long');
    }
    
    if (!passwordRegex.test(pwd)) {
        pwdError.style.display = 'block';
    } else {
        pwdError.style.display = 'none';
    }
    if (cpwd != pwd) {
        cpwdError.style.display = 'block';
    } else {
        cpwdError.style.display = 'none'
    }
    if (fname && lname && emailRegex.test(email) && phoneRegex.test(phone) 
        && pwd.length && passwordRegex.test(pwd) && cpwd) {
        alert('Your details has been submitted successfully')
        myForm.reset();
    }
    
})