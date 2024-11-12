document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.getElementById("login-form");
    const errorMessage = document.getElementById("error-message");

    // Hardcoded credentials
    const validUsername = "user";
    const validPassword = "password";

    // Handle login form submission
    if (loginForm) {
        loginForm.addEventListener("submit", function(event) {
            event.preventDefault();

            const enteredUsername = document.getElementById("username").value;
            const enteredPassword = document.getElementById("password").value;

            if (enteredUsername === validUsername && enteredPassword === validPassword) {
                // Redirect to the chatbot page
                window.location.href = "chatbot.html";
            } else {
                errorMessage.style.display = "block";
            }
        });
    }
});
