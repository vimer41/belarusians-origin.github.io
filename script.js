function togglePopup(hypothesis) {
    const popup = document.getElementById(`popup-${hypothesis}`);
    if (popup.style.display === "block") {
        popup.style.opacity = 0;
        setTimeout(() => {
            popup.style.display = "none";
        }, 300); // Время совпадает с CSS-переходом
    } else {
        popup.style.display = "block";
        setTimeout(() => {
            popup.style.opacity = 1;
        }, 10); // Небольшая задержка для плавного появления
    }
}

// Убедитесь, что элементы начально скрыты
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.popup').forEach(popup => {
        popup.style.opacity = 0;
        popup.style.display = "none";
    });
});
