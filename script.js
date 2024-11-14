function togglePopup(hypothesis) {
    const popup = document.getElementById(`popup-${hypothesis}`);
    popup.style.display = popup.style.display === "block" ? "none" : "block";
}
