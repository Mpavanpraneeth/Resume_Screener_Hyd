# 🧠 AI Resume Screener (Frontend + Backend Starter)

Automatically screen and rank resumes based on a Job Description using AI-powered similarity scoring.

---

## 🚀 Overview

**Goal:** Build a web app with two interfaces:
- **HR Interface:** Upload multiple resumes + 1 Job Description → View ranked candidates by % match.
- **User Interface:** Upload 1 resume + 1 JD → Instantly see match percentage and chatbot-style feedback.

---

## 🧱 Folder Structure

ai-resume-screener/
│
├── frontend/
│ ├── hr/
│ │ ├── dashboard.html
│ │ ├── dashboard.css
│ │ ├── dashboard.js
│ │ ├── profile.html
│ │ ├── profile.css
│ │ └── profile.js
│ │
│ ├── user/
│ │ ├── index.html
│ │ ├── index.css
│ │ └── index.js
│ │
│ ├── shared/
│ │ ├── navbar.html
│ │ ├── sidebar.html
│ │ └── styles.css
│ │
│ └── assets/
│ ├── images/
│ └── icons/
│
├── backend/
│ ├── app.py
│ ├── requirements.txt
│ └── utils/
│ ├── extract_text.py
│ ├── embeddings.py
│ └── match_scoring.py
│
└── README.md


---

## 👨‍💻 Tech Stack

**Frontend:**  
- HTML, CSS, JavaScript (Vanilla)  
- Optional: Bootstrap / Tailwind for styling

**Backend (later phase):**  
- Python, Flask (or FastAPI)  
- Libraries: `PyMuPDF`, `python-docx`, `SentenceTransformers`, `pytesseract`, `numpy`

---

## 🧩 Features (Planned)

### ✅ HR Interface
- Upload multiple resumes and one JD  
- View ranked candidates (sorted by % match)  
- Optional dashboard charts + filters  

### ✅ User Interface
- Upload one JD + one resume  
- Get instant match percentage  
- Chatbot-style feedback (“You are 72% fit for this role.”)

---

## 🛠️ Setup Instructions

### 1. Clone the Repository
```bash
git clone https://github.com/<your-username>/ai-resume-screener.git
cd ai-resume-screener
For Frontend Development

Open the project in VS Code and start building UI inside the frontend folder.

Example:

cd frontend/hr
open dashboard.html


You can use Live Server extension in VS Code to preview your pages easily.

3. For Backend (later phase)
cd backend
pip install -r requirements.txt
python app.py

🌿 Git Workflow for Team Collaboration

Create new branch for each feature:

git checkout -b feature/hr-dashboard


Make changes → then add, commit, and push:

git add .
git commit -m "Added HR dashboard layout"
git push origin feature/hr-dashboard


Open a Pull Request (PR) → review → merge to main.

👥 Suggested Team Task Division
Team Member	Task	Folder / Files
Member 1–2	HR Dashboard UI	/frontend/hr/dashboard.*
Member 3–4	HR Profile Page	/frontend/hr/profile.*
Member 5–6	User Interface (Upload + Results)	/frontend/user/
Member 7–8	Shared Components (Navbar, Sidebar)	/frontend/shared/
Member 9	CSS Styling & Responsiveness	/frontend/shared/styles.css
Member 10	Project Integration / GitHub Maintainer	Root + PR reviews
📈 Project Phases
Phase	Task	Description
1	Setup Repo + Structure	Create GitHub repo and folders
2	Frontend UI	HR & User static pages
3	Interactivity	JS for file uploads, filters, etc.
4	Backend Integration	Connect Flask APIs
5	Chatbot Feedback	Implement interactive responses
6	Polish & Deploy	Final testing and hosting
📚 References

SentenceTransformers Docs

Flask Documentation

PyMuPDF Docs

Tailwind CSS

✨ Tips

Keep commits small and descriptive (e.g., "Added upload form + styled cards").

Use branches for each feature to avoid code conflicts.

Test pages using Live Server in VS Code.

Keep UI simple and responsive — mobile-friendly designs are a plus.

🧠 Future Add-ons (After MVP)

Skill Gap Analyzer → show ✅ matched / ❌ missing skills

Job Fit Prediction → "Hire / Not Hire" suggestion

Candidate Comparison → side-by-side analysis

AI Cover Letter Generator

💬 Credits

Developed by Team of 10 Contributors
Frontend First → Backend Integration Next

Happy Coding 💻 — Let’s build something awesome!


---

✅ Just copy everything above ⬆️  
Paste it into your **`README.md`** file in VS Code (root folder).  

Would you like me to make a **version with your team’s names/roles** in the contrib
