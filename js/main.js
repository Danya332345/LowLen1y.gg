// ============================================================
// ОБЩАЯ ЛОГИКА САЙТА
// Плавное появление карточек при скролле и мелкие эффекты.
// ============================================================

document.addEventListener("DOMContentLoaded", () => {

    // ---------- АНИМАЦИЯ ПОЯВЛЕНИЯ КАРТОЧЕК ----------
    const cards = document.querySelectorAll(".card");

    // IntersectionObserver — встроенный в браузер "наблюдатель".
    // Он срабатывает, когда элемент появляется в поле зрения.
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
                observer.unobserve(entry.target); // отключаем наблюдение — карточка уже показалась
            }
        });
    }, { threshold: 0.15 }); // срабатывает, когда 15% карточки видно

    // Изначально карточки спрятаны и сдвинуты вниз,
    // чтобы потом "всплыть"
    cards.forEach((card, index) => {
        card.style.opacity = "0";
        card.style.transform = "translateY(20px)";
        card.style.transition = `opacity 0.5s ease ${index * 0.05}s, transform 0.5s ease ${index * 0.05}s`;
        observer.observe(card);
    });

    // ---------- ПЛАВНЫЙ СКРОЛЛ ПО ЯКОРЯМ ----------
    // На случай, если на странице будут ссылки вида #section
    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener("click", (e) => {
            const targetId = link.getAttribute("href");
            if (targetId.length > 1) {
                const target = document.querySelector(targetId);
                if (target) {
                    e.preventDefault();
                    target.scrollIntoView({ behavior: "smooth" });
                }
            }
        });
    });
});