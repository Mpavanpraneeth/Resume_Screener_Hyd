document.addEventListener("DOMContentLoaded", () => {
  const darkModeToggle = document.getElementById("darkMode");

  const darkModeEnabled = localStorage.getItem("darkMode") === "true";

  if (darkModeEnabled) {
    document.body.classList.add("dark-mode");
    if (darkModeToggle) darkModeToggle.checked = true;
  } else {
    document.body.classList.remove("dark-mode");
  }

  if (darkModeToggle) {
    darkModeToggle.addEventListener("change", () => {
      if (darkModeToggle.checked) {
        document.body.classList.add("dark-mode");
        localStorage.setItem("darkMode", "true");
      } else {
        document.body.classList.remove("dark-mode");
        localStorage.setItem("darkMode", "false");
      }
    });
  }
});
