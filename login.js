document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.getElementById("login-form");
    const loginPage = document.getElementById("loginPage");
    const chatbotPage = document.getElementById("chatbotPage");
    const errorMessage = document.getElementById("error-message");
    const logoutButton = document.getElementById("logout");
  
    // Hardcoded credentials
    const validUsername = "user";
    const validPassword = "password";
  
    // Handle login form submission
    loginForm.addEventListener("submit", function(event) {
      event.preventDefault();
  
      const enteredUsername = document.getElementById("username").value;
      const enteredPassword = document.getElementById("password").value;
  
      if (enteredUsername === validUsername && enteredPassword === validPassword) {
        // Show chatbot page and sidebar, hide login page
        loginPage.classList.add("hidden");
        chatbotPage.classList.remove("hidden");
      } else {
        errorMessage.style.display = "block";
      }
    });
  
    // Handle logout button
    logoutButton.addEventListener("click", function() {
      chatbotPage.classList.add("hidden");
      loginPage.classList.remove("hidden");
    });
  });
  