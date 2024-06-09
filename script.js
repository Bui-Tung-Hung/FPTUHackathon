// Example of a simple script to handle form submissions

document.addEventListener('DOMContentLoaded', () => {
    // Login Form Submission
    const loginForm = document.querySelector('#login form');
    loginForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const email = loginForm.querySelector('#email').value;
        const password = loginForm.querySelector('#password').value;
        console.log(`Login with email: ${email} and password: ${password}`);
        // Here, you would send the login request to your server
    });

    // Registration Form Submission
    const registerForm = document.querySelector('#register form');
    registerForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const name = registerForm.querySelector('#name').value;
        const email = registerForm.querySelector('#email').value;
        const password = registerForm.querySelector('#password').value;
        const confirmPassword = registerForm.querySelector('#confirm-password').value;
        console.log(`Register with name: ${name}, email: ${email}, password: ${password}, confirmPassword: ${confirmPassword}`);
        // Here, you would send the registration request to your server
    });

    // Account Settings Form Submission
    const settingsForm = document.querySelector('#settings form');
    settingsForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const name = settingsForm.querySelector('#profile-name').value;
        const email = settingsForm.querySelector('#profile-email').value;
        const currentPassword = settingsForm.querySelector('#current-password').value;
        const newPassword = settingsForm.querySelector('#new-password').value;
        const confirmNewPassword = settingsForm.querySelector('#confirm-new-password').value;
        console.log(`Update profile with name: ${name}, email: ${email}, currentPassword: ${currentPassword}, newPassword: ${newPassword}, confirmNewPassword: ${confirmNewPassword}`);
        // Here, you would send the update request to your server
    });

    // Support Form Submission
    const supportForm = document.querySelector('#support form');
    supportForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const name = supportForm.querySelector('#support-name').value;
        const email = supportForm.querySelector('#support-email').value;
        const message = supportForm.querySelector('#support-message').value;
        console.log(`Support request from name: ${name}, email: ${email}, message: ${message}`);
        // Here, you would send the support request to your server
    });
});
