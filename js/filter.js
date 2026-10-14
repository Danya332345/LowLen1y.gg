// ============================================================
// ФИЛЬТРАЦИЯ, ПОИСК И СОРТИРОВКА КАТАЛОГА
// Работает только на platforms.html — проверяем наличие элементов.
// ============================================================

document.addEventListener("DOMContentLoaded", () => {

    const grid = document.getElementById("enginesGrid");
    // Если сетки нет — значит мы не на странице каталога. Выходим.
    if (!grid) return;

    const cards = Array.from(grid.querySelectorAll(".card"));
    const searchInput = document.getElementById("searchInput");
    const sortSelect = document.getElementById("sortSelect");
    const resultCount = document.getElementById("resultCount");
    const noResults = document.getElementById("noResults");

    // Текущее состояние фильтров
    const state = {
        search: "",
        type: "all",
        price: "all",
        difficulty: "all",
        sort: "name-asc"
    };

    // ---------- ОБРАБОТКА КНОПОК-ФИЛЬТРОВ ----------
    document.querySelectorAll(".filter-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            const filterKey = btn.dataset.filter; // type / price / difficulty
            const value = btn.dataset.value;

            // Снимаем активность со всех кнопок этой группы
            document.querySelectorAll(`.filter-btn[data-filter="${filterKey}"]`).forEach(b => {
                b.classList.remove("filter-btn--active");
            });
            // Активируем нажатую
            btn.classList.add("filter-btn--active");

            // Обновляем состояние и перерисовываем
            state[filterKey] = value;
            applyFilters();
        });
    });

    // ---------- ПОИСК ----------
    searchInput.addEventListener("input", () => {
        state.search = searchInput.value.trim().toLowerCase();
        applyFilters();
    });

    // ---------- СОРТИРОВКА ----------
    sortSelect.addEventListener("change", () => {
        state.sort = sortSelect.value;
        applyFilters();
    });

    // ---------- ПРОВЕРКА СОВПАДЕНИЙ ----------
    // Возвращает true, если карточка проходит все фильтры
    function matchesFilters(card) {
        // 1. Поиск по названию
        if (state.search) {
            const name = (card.dataset.name || "").toLowerCase();
            if (!name.includes(state.search)) return false;
        }

        // 2. Тип
        if (state.type !== "all") {
            const types = (card.dataset.type || "").split(" ");
            if (!types.includes(state.type)) return false;
        }

        // 3. Цена
        if (state.price !== "all") {
            const prices = (card.dataset.price || "").split(" ");
            if (!prices.includes(state.price)) return false;
        }

        // 4. Сложность
        if (state.difficulty !== "all") {
            if (card.dataset.difficulty !== state.difficulty) return false;
        }

        return true;
    }

    // ---------- СОРТИРОВКА ----------
    // Вес сложности для числового сравнения
    const difficultyWeight = { easy: 1, medium: 2, hard: 3 };

    function sortCards(list) {
        const sorted = [...list];
        sorted.sort((a, b) => {
            switch (state.sort) {
                case "name-asc":
                    return a.dataset.name.localeCompare(b.dataset.name);
                case "name-desc":
                    return b.dataset.name.localeCompare(a.dataset.name);
                case "difficulty-asc":
                    return (difficultyWeight[a.dataset.difficulty] || 0)
                         - (difficultyWeight[b.dataset.difficulty] || 0);
                case "difficulty-desc":
                    return (difficultyWeight[b.dataset.difficulty] || 0)
                         - (difficultyWeight[a.dataset.difficulty] || 0);
                default:
                    return 0;
            }
        });
        return sorted;
    }

    // ---------- ГЛАВНАЯ ФУНКЦИЯ ----------
    // Фильтрует, сортирует, переставляет карточки в DOM.
    function applyFilters() {
        // 1. Отбираем подходящие
        const visible = cards.filter(matchesFilters);

        // 2. Сортируем
        const sorted = sortCards(visible);

        // 3. Скрываем все карточки
        cards.forEach(card => card.style.display = "none");

        // 4. Показываем нужные и вставляем по порядку
        sorted.forEach(card => {
            card.style.display = "";
            grid.appendChild(card); // appendChild перемещает элемент в конец — так выстраивается порядок
        });

        // 5. Обновляем счётчик
        resultCount.textContent = sorted.length;

        // 6. Показываем/скрываем сообщение "ничего не найдено"
        noResults.style.display = sorted.length === 0 ? "block" : "none";
    }

    // Стартовый запуск — на случай, если у <select> стоит не первая опция
    applyFilters();
});