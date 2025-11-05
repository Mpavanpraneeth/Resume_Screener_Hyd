document.addEventListener("DOMContentLoaded", () => {
  const analyseBtn = document.getElementById("analyseBtn");
  const progressContainer = document.getElementById("progressContainer");
  const progressBar = document.getElementById("progressBar");
  const uploadStatus = document.getElementById("uploadStatus");
  const candidateList = document.getElementById("candidate-list");

  analyseBtn.addEventListener("click", () => {
    const resumeFiles = document.getElementById("resumeUpload").files;
    const jdFile = document.getElementById("jdUpload").files[0];

    if (!resumeFiles.length || !jdFile) {
      alert("Please upload both candidate resumes and a job description before analysing.");
      return;
    }

    // Show and initialize progress bar
    progressContainer.style.display = "block";
    progressBar.style.width = "0%";
    uploadStatus.textContent = "Analyzing resumes...";

    let progress = 0;
    const interval = setInterval(() => {
      progress += 10;
      progressBar.style.width = `${progress}%`;

      if (progress >= 100) {
        clearInterval(interval);
        setTimeout(() => analyzeResumes(resumeFiles), 500);
      }
    }, 200);
  });

  function analyzeResumes(resumeFiles) {
    candidateList.innerHTML = "";
    const candidates = [];

    // Generate simulated candidate data
    for (let i = 0; i < resumeFiles.length; i++) {
      const file = resumeFiles[i];
      const matchPercent = Math.floor(Math.random() * 41) + 60; // Random 60–100%
      const expYears = Math.floor(Math.random() * 10) + 1; // Random 1–10 yrs

      candidates.push({
        name: file.name.replace(/\.[^/.]+$/, ""),
        match: matchPercent,
        experience: `${expYears} yrs`,
        skills: generateRandomSkills(),
        resumeFile: URL.createObjectURL(file),
        resumeName: file.name
      });
    }

    // Render table rows
    candidates.forEach((candidate, index) => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${candidate.name}</td>
        <td>${candidate.match}%</td>
        <td>${candidate.experience}</td>
        <td>
          <button class="view-btn" data-index="${index}">View</button>
        </td>
      `;
      candidateList.appendChild(row);
    });

    // Attach event listeners to "View" buttons
    document.querySelectorAll(".view-btn").forEach(btn => {
      btn.addEventListener("click", (e) => {
        const index = e.target.getAttribute("data-index");
        showCandidateDetails(candidates[index]);
      });
    });

    // Update summary cards
    const totalResumes = candidates.length;
    const topMatch = Math.max(...candidates.map(c => c.match));
    const avgFit = (candidates.reduce((sum, c) => sum + c.match, 0) / totalResumes).toFixed(1);

    document.getElementById("totalResumes").textContent = totalResumes;
    document.getElementById("topMatches").textContent = `${topMatch}%`;
    document.getElementById("avgFit").textContent = `${avgFit}%`;

    uploadStatus.textContent = "Analysis complete ✅";
    progressContainer.style.display = "none";
  }

  function generateRandomSkills() {
    const skillPool = [
      "Python", "JavaScript", "React", "Node.js", "SQL", "Machine Learning",
      "Data Analysis", "C#", "Java", "HTML", "CSS", "AWS", "Azure", "Docker", "TensorFlow"
    ];
    const selected = [];
    while (selected.length < 4) {
      const skill = skillPool[Math.floor(Math.random() * skillPool.length)];
      if (!selected.includes(skill)) selected.push(skill);
    }
    return selected.join(", ");
  }

  // Modal Display for Candidate Details
  function showCandidateDetails(candidate) {
    const modal = document.getElementById("candidateModal");
    const modalContent = document.getElementById("modalContent");

    modalContent.innerHTML = `
      <h3>${candidate.name}</h3>
      <p><strong>Match:</strong> ${candidate.match}%</p>
      <p><strong>Experience:</strong> ${candidate.experience}</p>
      <p><strong>Skills:</strong> ${candidate.skills}</p>
      <p><strong>Resume File:</strong> ${candidate.resumeName}</p>
      <button class="download-resume-btn" onclick="downloadResume('${candidate.resumeFile}','${candidate.resumeName}')">Download Resume</button>
    `;
    modal.style.display = "flex";
  }

  // Resume download
  window.downloadResume = function(url, fileName) {
    const link = document.createElement("a");
    link.href = url;
    link.download = fileName;
    link.click();
  };

  // Modal close logic
  document.getElementById("closeModal").addEventListener("click", () => {
    document.getElementById("candidateModal").style.display = "none";
  });

  window.addEventListener("click", (e) => {
    const modal = document.getElementById("candidateModal");
    if (e.target === modal) modal.style.display = "none";
  });
});
