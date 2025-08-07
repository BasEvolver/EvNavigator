// js/auth.js

(function() {
    const LOGGED_IN_KEY = 'navigator_is_logged_in';
    const currentPage = window.location.pathname.split('/').pop();

    // --- Insecure User List (For Demo Purposes Only) ---
    // MODIFIED: Added the new list of users with the password 'Sunshine'
    const USERS = [
        { username: 'navigator', password: 'demoday' },
        { username: 'Bas', password: 'Sunshine' },
        { username: 'Matt', password: 'Sunshine' },
        { username: 'Juergen', password: 'Sunshine' },
        { username: 'Michiel', password: 'Sunshine' },
        { username: 'Vishaal', password: 'Sunshine' },
        { username: 'Mario', password: 'Sunshine' },
        { username: 'Connor', password: 'Sunshine' },
        { username: 'Luis', password: 'Sunshine' },
        { username: 'Nicola', password: 'Sunshine' },
        { username: 'Neil', password: 'Sunshine' },
        { username: 'Marcus', password: 'Sunshine' }
    ];

    // If we are not on the login page, check if the user is authenticated
    if (currentPage !== 'login.html') {
        if (sessionStorage.getItem(LOGGED_IN_KEY) !== 'true') {
            window.location.href = 'login.html';
            return; // Stop further script execution
        }
    }

    // If we are on the login page, check if the user is *already* logged in
    if (currentPage === 'login.html') {
        if (sessionStorage.getItem(LOGGED_IN_KEY) === 'true') {
            window.location.href = 'index.html'; // Redirect to home
            return;
        }
    }

    // Add login form submission logic only if the form exists
    document.addEventListener('DOMContentLoaded', () => {
        const loginForm = document.getElementById('login-form');
        if (loginForm) {
            loginForm.addEventListener('submit', function(event) {
                event.preventDefault();
                const username = document.getElementById('username').value;
                const password = document.getElementById('password').value;
                const errorMessage = document.getElementById('error-message');

                // Check if the entered credentials match any user in the list
                const foundUser = USERS.find(user => user.username === username && user.password === password);

                if (foundUser) {
                    sessionStorage.setItem(LOGGED_IN_KEY, 'true');
                    window.location.href = 'index.html';
                } else {
                    errorMessage.textContent = 'Invalid username or password.';
                    errorMessage.style.display = 'block';
                }
            });
        }
    });

    // --- Global Logout Function ---
    window.logout = function() {
        sessionStorage.removeItem(LOGGED_IN_KEY);
        window.location.href = 'login.html';
    };

})();