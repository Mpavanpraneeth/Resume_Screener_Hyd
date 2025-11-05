document.addEventListener("DOMContentLoaded", () => {
  const darkModeToggle = document.getElementById("darkMode");
  const successMsg = document.getElementById("successMsg");
  const saveBtn = document.getElementById("saveSettingsBtn");

  const darkModeEnabled = localStorage.getItem("darkMode") === "true";

  if (darkModeEnabled) {
    document.body.classList.add("dark-mode");
    darkModeToggle.checked = true;
  } else {
    document.body.classList.remove("dark-mode");
  }

  darkModeToggle.addEventListener("change", () => {
    if (darkModeToggle.checked) {
      document.body.classList.add("dark-mode");
      localStorage.setItem("darkMode", "true");
    } else {
      document.body.classList.remove("dark-mode");
      localStorage.setItem("darkMode", "false");
    }
  });

  saveBtn.addEventListener("click", saveSettings);
});

function saveSettings() {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const role = document.getElementById("role").value;
  const successMsg = document.getElementById("successMsg");

  console.log("Settings saved:", { name, email, role });

  successMsg.style.display = "block";
  successMsg.style.opacity = 1;

  setTimeout(() => {
    successMsg.style.opacity = 0;
    setTimeout(() => {
      successMsg.style.display = "none";
    }, 500);
  }, 2000);
}
