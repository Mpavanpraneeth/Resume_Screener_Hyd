document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");
  const sidebarLinks = document.querySelectorAll(".sidebar a");
  const searchBar = document.querySelector(".search-bar input");

  const currentPage = window.location.pathname.split("/").pop();
  sidebarLinks.forEach((link) => {
    if (link.getAttribute("href") === currentPage) {
      link.classList.add("active");
    }
  });

  searchBar?.addEventListener("keyup", (e) => {
    if (e.key === "Enter") {
      alert(`Searching for "${searchBar.value}"...`);
    }
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();

    if (!validateEmail(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    if (password.length < 6) {
      alert("Password must be at least 6 characters long.");
      return;
    }

    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (
      storedUser &&
      storedUser.email === email &&
      storedUser.password === password
    ) {
      alert("Login successful! Redirecting to dashboard...");
      window.location.href = "index.html";
    } else {
      alert("Invalid credentials. Please try again or sign up first.");
    }
  });

  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }
});
