document.addEventListener("DOMContentLoaded", () => {
  const profileImg = document.querySelector(".profile-pic-navbar");
  profileImg.onerror = () => {
    profileImg.src = "";
  };
});

const searchInput = document.querySelector(".search-bar input");
searchInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    const query = searchInput.value.trim();
    if (query) {
      console.log("Search triggered for:", query);
    }
  }
});

const currentPage = location.pathname.split("/").pop();
document.querySelectorAll(".sidebar a").forEach((link) => {
  if (link.getAttribute("href") === currentPage) {
    link.classList.add("active");
  } else {
    link.classList.remove("active");
  }
});

function handleChatInput(event) {
  if (event.key === "Enter") {
    const inputField = document.getElementById("chatbot-input");
    const userMessage = inputField.value.trim();
    if (userMessage !== "") {
      displayMessage("user", userMessage);
      inputField.value = "";
      generateBotResponse(userMessage);
    }
  }
}

function displayMessage(sender, message) {
  const messagesContainer = document.getElementById("chatbot-messages");
  const messageDiv = document.createElement("div");
  messageDiv.className = sender === "user" ? "user-message" : "bot-message";
  messageDiv.textContent = message;
  messagesContainer.appendChild(messageDiv);
  messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

function generateBotResponse(userMessage) {
  // Simulated response logic (replace with actual AI integration)
  let response = "I'm here to help with resume tips!";
  if (userMessage.toLowerCase().includes("format")) {
    response =
      "A clean, reverse-chronological format works best for most resumes.";
  } else if (userMessage.toLowerCase().includes("skills")) {
    response = "Highlight relevant skills tailored to the job description.";
  } else if (userMessage.toLowerCase().includes("length")) {
    response = "Keep your resume to one page if you're early in your career.";
  }
  displayMessage("bot", response);
}
