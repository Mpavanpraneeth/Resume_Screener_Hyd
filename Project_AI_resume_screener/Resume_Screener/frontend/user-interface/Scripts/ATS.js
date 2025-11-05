document.addEventListener("DOMContentLoaded", () => {
  const progressFill = document.querySelector(".progress-fill");
  const scoreText = document.querySelector(".ats-score").textContent;
  const scoreValue = parseInt(scoreText.split("/")[0].trim());

  progressFill.style.width = "0%";
  setTimeout(() => {
    progressFill.style.transition = "width 1s ease-in-out";
    progressFill.style.width = `${scoreValue}%`;
  }, 100);

  const keywords = document.querySelectorAll(".keyword");
  keywords.forEach((keyword) => {
    keyword.style.backgroundColor = "#e0f7fa";
    keyword.style.padding = "6px 10px";
    keyword.style.margin = "4px";
    keyword.style.borderRadius = "6px";
    keyword.style.display = "inline-block";
    keyword.style.fontWeight = "bold";
    keyword.style.color = "#0917daff";
  });

  const scoreItems = document.querySelectorAll(".card:nth-of-type(3) li");
  scoreItems.forEach((item) => {
    item.style.cursor = "pointer";
    item.addEventListener("click", () => {
      alert(`Viewing details for: ${item.textContent}`);
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const scoreElement = document.querySelector(".ats-score");
  const progressFill = document.querySelector(".progress-fill");

  if (scoreElement && progressFill) {
    const score = parseInt(scoreElement.textContent.split("/")[0].trim());
    progressFill.style.width = "0%";
    setTimeout(() => {
      progressFill.style.transition = "width 1s ease-in-out";
      progressFill.style.width = `${score}%`;
    }, 100);
  }

  const keywords = document.querySelectorAll(".keyword");
  keywords.forEach((keyword) => {
    keyword.style.backgroundColor = "#e0f7fa";
    keyword.style.padding = "6px 10px";
    keyword.style.margin = "4px";
    keyword.style.borderRadius = "6px";
    keyword.style.display = "inline-block";
    keyword.style.fontWeight = "bold";
    keyword.style.color = "#0a07b4ff";
  });

  const scoreItems = document.querySelectorAll(".card:nth-of-type(3) li");
  scoreItems.forEach((item) => {
    item.style.cursor = "pointer";
    item.addEventListener("click", () => {
      alert(`Viewing details for: ${item.textContent}`);
    });
  });
});
