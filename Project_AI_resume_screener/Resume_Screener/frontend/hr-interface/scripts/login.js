const navbarMenu = document.querySelector(".navbar .links");
const menuBtn = document.querySelector(".menu-btn");
const hideMenuBtn = navbarMenu.querySelector(".close-btn");
const showPopupBtn = document.querySelector(".login-btn");
const formPopup = document.querySelector(".form-popup");
const hidePopupBtn = document.querySelector(".form-popup .close-btn");
const loginSignupLink = document.querySelectorAll(".form-box .bottom-link a");
const loginForm = document.querySelector(".login form"); // target login form

// Toggle mobile menu
menuBtn.addEventListener("click", () => {
    navbarMenu.classList.toggle("show-menu");
});

// Hide menu
hideMenuBtn.addEventListener("click", () => menuBtn.click());

// Show form popup
showPopupBtn.addEventListener("click", () => {
    document.body.classList.toggle("show-popup");
});

// Hide form popup
hidePopupBtn.addEventListener("click", () => showPopupBtn.click());

// Switch between login and signup
loginSignupLink.forEach(link => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        formPopup.classList[
            link.id === "signup-link" ? "add" : "remove"
        ]("show-signup");
    });
});

// ✅ Login form functionality
if (loginForm) {
    loginForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const email = loginForm.querySelector('input[type="text"]').value.trim();
        const password = loginForm.querySelector('input[type="password"]').value.trim();

        if (email === "" || password === "") {
            showAlert("Please enter both email and password!", "error");
            return;
        }

        // Example static validation — replace with real API call if needed
        if (email === "admin" && password === "1234") {
            showAlert("Login Successful!", "success");

            // Redirect to HR Dashboard after short delay
            setTimeout(() => {
                window.location.href = "dashboard.html";
            }, 2000);
        } else {
            showAlert("Invalid email or password!", "error");
        }
    });
}

// ✅ Function to show alert popup at top
function showAlert(message, type = "success") {
    // Remove existing alert if present
    const existingAlert = document.querySelector(".top-alert");
    if (existingAlert) existingAlert.remove();

    // Create alert div
    const alertDiv = document.createElement("div");
    alertDiv.className = `top-alert ${type}`;
    alertDiv.textContent = message;
    document.body.appendChild(alertDiv);

    // Animate + remove after 3s
    setTimeout(() => {
        alertDiv.style.opacity = "0";
        setTimeout(() => alertDiv.remove(), 500);
    }, 3000);
}
