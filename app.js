// Get elements
const contactBtn = document.getElementById('contact-btn');
const contactPopup = document.getElementById('contact-popup');
const closeBtn = document.querySelector('.close-btn');

// Show the pop-up when the button is clicked
contactBtn.addEventListener('click', () => {
    console.log('Button clicked'); // Debugging
    contactPopup.classList.remove('hidden');
});

// Hide the pop-up when the close button is clicked
closeBtn.addEventListener('click', () => {
    console.log('Close button clicked'); // Debugging
    contactPopup.classList.add('hidden');
});

// Hide the pop-up when clicking outside the content
window.addEventListener('click', (e) => {
    if (e.target === contactPopup) {
        console.log('Clicked outside pop-up'); // Debugging
        contactPopup.classList.add('hidden');
    }
});