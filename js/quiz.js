// ============================================================
// LowLen1y.gg — мини-опросник
// 3 вопроса → рекомендация движка
// ============================================================

document.addEventListener("DOMContentLoaded", () => {

    // ---------- СБОР ЭЛЕМЕНТОВ ----------
    const steps = document.querySelectorAll(".quiz__step");
    const resultBox = document.getElementById("quizResult");
    const restartBtn = document.getElementById("quizRestart");

    // Если опросника на странице нет — выходим
    if (!resultBox || steps.length === 0) return;

    // ---------- СОСТОЯНИЕ ОПРОСНИКА ----------
    let answers = {
        type: null,       // 2d / 3d / mobile
        experience: null, // newbie / mid / pro
        budget: null      // free / paid
    };

    // ---------- КАРТА ДВИЖКОВ ----------
    // file — точное имя файла без .html (совпадает с файлами в папке engines/)
    // tags — по каким ответам движок подходит
    const engines = [
        { name: "Godot",         file: "godot",      tags: ["2d", "3d", "newbie", "mid", "free"] },
        { name: "GameMaker",     file: "gamemaker",  tags: ["2d", "newbie", "mid", "paid"] },
        { name: "Construct 3",   file: "construct",  tags: ["2d", "newbie", "free", "paid"] },
        { name: "GDevelop",      file: "gdevelop",   tags: ["2d", "newbie", "free"] },
        { name: "Stencyl",       file: "stencyl",    tags: ["2d", "newbie", "free"] },
        { name: "RPG Maker",     file: "rpgmaker",   tags: ["2d", "newbie", "paid"] },
        { name: "Unity",         file: "unity",      tags: ["2d", "3d", "mobile", "mid", "pro", "free", "paid"] },
        { name: "Unreal Engine", file: "unreal",     tags: ["3d", "pro", "free", "paid"] },
        { name: "CryEngine",     file: "cryengine",  tags: ["3d", "pro", "paid"] },
        { name: "Defold",        file: "defold",     tags: ["2d", "mobile", "mid", "free"] }
    ];

    // ---------- ОБРАБОТКА КЛИКА ПО ВАРИАНТУ ----------
    document.querySelectorAll(".quiz__option").forEach(btn => {
        btn.addEventListener("click", () => {
            const step = btn.closest(".quiz__step");
            const stepNumber = parseInt(step.dataset.step);
            const value = btn.dataset.value;

            // Запоминаем ответ
            if (stepNumber === 1) answers.type = value;
            if (stepNumber === 2) answers.experience = value;
            if (stepNumber === 3) answers.budget = value;

            // Переходим к следующему шагу
            goToStep(stepNumber + 1);
        });
    });

    // ---------- ПЕРЕКЛЮЧЕНИЕ ШАГОВ ----------
    function goToStep(n) {
        steps.forEach(s => s.style.display = "none");

        if (n <= 3) {
            const nextStep = document.querySelector(`.quiz__step[data-step="${n}"]`);
            if (nextStep) nextStep.style.display = "block";
        } else {
            showResult();
        }
    }

    // ---------- ПОКАЗ РЕЗУЛЬТАТА ----------
    function showResult() {
        // Считаем баллы для каждого движка
        const scored = engines.map(engine => {
            let score = 0;
            if (answers.type && engine.tags.includes(answers.type)) score++;
            if (answers.experience && engine.tags.includes(answers.experience)) score++;
            if (answers.budget && engine.tags.includes(answers.budget)) score++;
            return { name: engine.name, file: engine.file, score };
        });

        // Сортируем по убыванию баллов
        scored.sort((a, b) => b.score - a.score);

        // Берём топ-3
        const top = scored.slice(0, 3);

        // Формируем HTML со ссылками на страницы движков
        resultBox.innerHTML = top.map(e =>
            `<a href="engines/${e.file}.html">${e.name}</a>`
        ).join("");

        // Показываем блок результата
        steps.forEach(s => s.style.display = "none");
        document.querySelector(".quiz__result").style.display = "block";
    }

    // ---------- ПЕРЕЗАПУСК ----------
    restartBtn.addEventListener("click", () => {
        answers = { type: null, experience: null, budget: null };
        document.querySelector(".quiz__result").style.display = "none";
        goToStep(1);
    });
});