
function validateForm() {
    var fullname = document.getElementById('fullname').value.trim();
    var lastname = document.getElementById('lastname').value.trim();
    var mobileno = document.getElementById('mobileno').value;
    var email = document.getElementById('email').value.trim();
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirmPassword').value;


    if (fullname === '' || lastname=== '' || mobileno=== '' || email === '' || password === '' || confirmPassword === '') {
        alert('All fields are required');
        return false;
    }

    if (password !== confirmPassword) {
        alert('Passwords do not match');
        return false;
    }

    return true;
}
