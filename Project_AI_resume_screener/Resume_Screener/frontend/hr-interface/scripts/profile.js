const profilePic = document.getElementById('profilePic');
const imageUpload = document.getElementById('imageUpload');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const phoneInput = document.getElementById('phone');
const saveBtn = document.getElementById('saveBtn');

// Load profile from localStorage
window.addEventListener('DOMContentLoaded', () => {
  const savedProfile = JSON.parse(localStorage.getItem('userProfile'));
  if(savedProfile) {
    profilePic.src = savedProfile.image || '../images/default-profile.png';
    nameInput.value = savedProfile.name || '';
    emailInput.value = savedProfile.email || '';
    phoneInput.value = savedProfile.phone || '';
  }
});

// Image preview in profile card
imageUpload.addEventListener('change', (e) => {
  const file = e.target.files[0];
  if(file) {
    const reader = new FileReader();
    reader.onload = function(event) {
      profilePic.src = event.target.result;
    };
    reader.readAsDataURL(file);
  }
});

// Save profile info to localStorage
saveBtn.addEventListener('click', () => {
  const profileData = {
    image: profilePic.src,
    name: nameInput.value,
    email: emailInput.value,
    phone: phoneInput.value
  };
  localStorage.setItem('userProfile', JSON.stringify(profileData));

  alert('Profile saved successfully!');
});
