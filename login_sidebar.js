// login_sidebar.js

// Hardcoded default login credentials (for testing purposes)
const defaultUsername = "user123";
const defaultPassword = "password123";

// DOM elements
const loginForm = document.getElementById("login-form");
const loginPage = document.querySelector(".login-page");
const mainContent = document.querySelector(".main-content");
const errorMessage = document.getElementById("error-message");

// Login form submit event
loginForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const enteredUsername = document.getElementById("username").value.trim();
    const enteredPassword = document.getElementById("password").value.trim();

    // Check if the entered credentials match the default ones
    if (enteredUsername === defaultUsername && enteredPassword === defaultPassword) {
        // Hide login page and show main content if credentials are correct
        loginPage.classList.add("hidden");
        mainContent.classList.remove("hidden");
        errorMessage.style.display = "none"; // Hide error message if it was shown
    } else {
        // Show error message if credentials are incorrect
        errorMessage.style.display = "block";
    }
});

// Sidebar toggle functionality (if needed)
const toggleSidebarBtn = document.querySelector(".toggle-sidebar-btn");
const sidebar = document.querySelector(".sidebar");

toggleSidebarBtn?.addEventListener("click", () => {
    sidebar.classList.toggle("active");
});
