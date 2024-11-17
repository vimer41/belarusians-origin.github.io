function togglePopup(hypothesis) {
    const popup = document.getElementById(`popup-${hypothesis}`);
    popup.style.display = popup.style.display === "block" ? "none" : "block";
}

// Smooth transition for modals
document.querySelectorAll('.popup').forEach(popup => {
    popup.addEventListener('transitionend', () => {
        if (popup.style.display === "none") popup.style.opacity = 0;
    });
});
