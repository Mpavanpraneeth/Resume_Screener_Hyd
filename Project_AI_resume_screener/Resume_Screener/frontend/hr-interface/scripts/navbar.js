function initNavbar() {
  const profileDropdown = document.querySelector(".profile-dropdown");
  if (!profileDropdown) return;

  const toggle = profileDropdown.querySelector(".profile-toggle");
  const menu = profileDropdown.querySelector(".dropdown-menu");
  const logoutBtn = document.getElementById("logoutBtn");

  // ✅ Toggle dropdown open/close
  toggle.addEventListener("click", (e) => {
    e.stopPropagation();
    profileDropdown.classList.toggle("active");
  });

  // ✅ Close dropdown when clicking outside
  document.addEventListener("click", (e) => {
    if (!profileDropdown.contains(e.target)) {
      profileDropdown.classList.remove("active");
    }
  });

  // ✅ Logout action
  if (logoutBtn) {
    logoutBtn.addEventListener("click", (e) => {
      e.preventDefault();
      alert("Logging out...");
      window.location.href = "../pages/login.html";
    });
  }

  // ✅ Search logic
  const searchBtn = document.getElementById("searchBtn");
  const searchInput = document.getElementById("searchInput");
  if (searchBtn && searchInput) {
    searchBtn.addEventListener("click", () => {
      alert("Searching for: " + searchInput.value);
    });
  }
}

// ✅ Update navbar profile name and image from localStorage
function updateNavbarProfile() {
  const savedProfile = JSON.parse(localStorage.getItem("userProfile"));
  const navbarProfilePic = document.querySelector(".profile-toggle .profile-pic");
  const navbarProfileName = document.querySelector(".profile-toggle .profile-name");

  if (savedProfile) {
    if (navbarProfilePic) navbarProfilePic.src = savedProfile.image || navbarProfilePic.src;
    if (navbarProfileName) navbarProfileName.textContent = savedProfile.name || "User";
  }
}

// ✅ Re-initialize after navbar HTML is loaded dynamically
document.addEventListener("DOMContentLoaded", () => {
  // If navbar is loaded dynamically
  const navbarContainer = document.getElementById("navbar-container");
  if (navbarContainer) {
    const observer = new MutationObserver(() => {
      if (navbarContainer.querySelector(".profile-dropdown")) {
        initNavbar();
        updateNavbarProfile();
        observer.disconnect(); // Stop once initialized
      }
    });
    observer.observe(navbarContainer, { childList: true, subtree: true });
  } else {
    // If navbar is already in DOM
    initNavbar();
    updateNavbarProfile();
  }
});
