// ============================================================
// LowLen1y.gg — словарь переводов RU/EN
// ============================================================

const translations = {
    ru: {
        // --- Навигация ---
        "nav.home": "Главная",
        "nav.platforms": "Платформы",
        "nav.tips": "Советы новичку",

        // --- Главный экран ---
        "hero.title1": "Выбери свой",
        "hero.title2": "движок",
        "hero.title3": "для разработки игр",
        "hero.subtitle": "Полный обзор платформ для создания компьютерных игр: от простых конструкторов до профессиональных движков.",
        "hero.btnPlatforms": "Все платформы",
        "hero.btnTips": "С чего начать",

        // --- Карточки на главной ---
        "engines.title": "Популярные движки",
        "engines.subtitle": "Наведи курсор на карточку, чтобы увидеть краткое описание. Кликни — чтобы открыть полный обзор.",
        "card.unity": "Универсальный движок для 2D и 3D. Язык: C#. Подходит для мобильных и ПК-игр.",
        "card.unreal": "Мощный 3D-движок от Epic Games. Язык: C++ и Blueprints. Для AAA-проектов.",
        "card.godot": "Полностью бесплатный движок с открытым кодом. Язык: GDScript. Отлично для новичков.",
        "card.gamemaker": "Движок для 2D-игр. Язык: GML. Простой старт, подходит для инди-проектов.",
        "card.construct": "Визуальный конструктор 2D-игр. Программирование не требуется. Работает в браузере.",
        "card.rpgmaker": "Специализированный движок для японских ролевых игр. Минимум программирования.",
        "card.cryengine": "Профессиональный 3D-движок с фотореалистичной графикой. Язык: C++ и Lua.",
        "card.defold": "Лёгкий бесплатный движок для 2D. Язык: Lua. Хорошо подходит для мобильных игр.",
        "card.gdevelop": "Бесплатный конструктор без кода. Идеален для самых первых проектов.",
        "card.stencyl": "Визуальная среда для 2D-игр на основе блоков. Лёгкий старт без кода.",

        // --- Опросник ---
        "quiz.title": "Не знаешь, что выбрать?",
        "quiz.subtitle": "Ответь на 3 вопроса — мы подскажем подходящий движок.",
        "quiz.q1": "Какую игру ты хочешь создать?",
        "quiz.q1.a": "2D-игру",
        "quiz.q1.b": "3D-игру",
        "quiz.q1.c": "Мобильную игру",
        "quiz.q2": "Какой у тебя опыт?",
        "quiz.q2.a": "Новичок",
        "quiz.q2.b": "Есть небольшой опыт",
        "quiz.q2.c": "Уверенный пользователь",
        "quiz.q3": "Готов ли платить за движок?",
        "quiz.q3.a": "Только бесплатное",
        "quiz.q3.b": "Готов платить",
        "quiz.result": "Тебе подойдёт:",
        "quiz.restart": "Пройти заново",

        // --- Каталог ---
        "catalog.title": "Все платформы для разработки игр",
        "catalog.subtitle": "Полный список движков с поиском, фильтрами и сортировкой. Выбери подходящий и изучи его подробнее.",
        "catalog.search": "Поиск по названию...",
        "catalog.type": "Тип:",
        "catalog.price": "Цена:",
        "catalog.difficulty": "Сложность:",
        "catalog.all": "Все",
        "catalog.mobile": "Мобильные",
        "catalog.free": "Бесплатные",
        "catalog.paid": "Платные",
        "catalog.easy": "Для новичков",
        "catalog.medium": "Средняя",
        "catalog.hard": "Для опытных",
        "catalog.sort": "Сортировка:",
        "catalog.sortNameAsc": "Название (А-Я)",
        "catalog.sortNameDesc": "Название (Я-А)",
        "catalog.sortDiffAsc": "Сложность (легко → сложно)",
        "catalog.sortDiffDesc": "Сложность (сложно → легко)",
        "catalog.found": "Найдено:",
        "catalog.empty": "Ничего не найдено. Попробуй изменить фильтры.",

        // --- Советы ---
        "tips.title": "С чего начать в геймдеве",
        "tips.subtitle": "Пошаговое руководство для тех, кто хочет создать свою первую игру, но не знает, с чего начать.",
        "tips.1.title": "Выбери простой движок для старта",
        "tips.1.text": "Не начинай с Unreal Engine или CryEngine. Для первой игры подойдут Godot, GDevelop или Construct 3 — они дружелюбны к новичкам и не требуют глубоких знаний программирования. Сложные движки дают огромные возможности, но порог входа в них высокий. Первая цель — не хит, а законченный проект.",
        "tips.2.title": "Начни с маленькой игры",
        "tips.2.text": "Не пытайся сразу делать RPG на 100 часов или шутер с открытым миром. Сделай простую игру: змейку, тетрис, платформер на 3 уровня или аркаду с одной механикой. Так ты освоишь базовые принципы: работу с персонажем, физику, коллизии, интерфейс, звук. Законченный маленький проект ценнее, чем незаконченный большой.",
        "tips.3.title": "Изучи язык программирования",
        "tips.3.text": "Почти каждый движок работает со своим языком. Unity использует C#, Godot — GDScript, GameMaker — GML. Не нужно учить всё сразу. Выбери один движок и один язык, доведи его до уверенного уровня. Основы синтаксиса, переменные, условия, циклы, функции — этого хватит для первых проектов. Остальное придёт с практикой.",
        "tips.4.title": "Используй бесплатные ресурсы",
        "tips.4.text": "Официальная документация движка — лучший источник знаний. Дополнительно помогут YouTube-каналы, форумы, сообщества в Discord и Telegram. Не стесняйся задавать вопросы: геймдев-сообщество одно из самых дружелюбных. Ошибки в коде — норма, их делают все, от новичков до профессионалов.",
        "tips.5.title": "Сделай первый прототип",
        "tips.5.text": "Прототип — это черновая версия игры без красивой графики и звука. Его задача — проверить, интересна ли сама механика. Управление персонажем, прыжки, стрельба, сбор предметов — всё это можно сделать квадратами и кружками. Если прототип играется весело даже без графики — значит, идея работает. Красоту наведёшь позже.",
        "tips.6.title": "Доведи проект до конца",
        "tips.6.text": "Самая частая ошибка новичков — бросать проект на середине и начинать новый. Это убивает мотивацию и не даёт опыта. Поставь себе правило: закончить текущую игру, даже если она кажется слабой. Опубликуй её на itch.io или в социальных сетях. Обратная связь от игроков даст больше, чем месяцы теории.",
        "tips.cta.title": "Готов выбрать движок?",
        "tips.cta.subtitle": "Посмотри полный список платформ и найди свой идеальный инструмент.",

        // --- Страница движка (общие) ---
        "engine.back": "← Назад к списку",
        "engine.about": "Описание",
        "engine.specs": "Характеристики",
        "engine.proscons": "Плюсы и минусы",
        "engine.pros": "Плюсы",
        "engine.cons": "Минусы",
        "engine.games": "Известные игры",
        "engine.official": "Официальный сайт",
        "engine.developer": "Разработчик",
        "engine.type": "Тип",
        "engine.language": "Язык программирования",
        "engine.price": "Цена",
        "engine.platforms": "Платформы экспорта",
        "engine.difficulty": "Сложность",
        "engine.diffEasy": "Низкая",
        "engine.diffMedium": "Средняя",
        "engine.diffHard": "Высокая",

        // --- Unity ---
        "unity.subtitle": "Универсальный движок для 2D и 3D-игр от Unity Technologies",
        "unity.about": "Unity — один из самых популярных игровых движков в мире. На нём созданы тысячи игр для ПК, мобильных устройств, консолей и веб-браузеров. Движок поддерживает как 2D, так и 3D-графику, имеет мощный редактор и огромное сообщество. Основной язык программирования — C#. Unity отлично подходит как для инди-разработчиков, так и для крупных студий.",
        "unity.price": "Бесплатно (Personal), от $2200/год (Pro)",
        "unity.pro.1": "Огромное сообщество и много обучающих материалов",
        "unity.pro.2": "Asset Store с тысячами готовых ассетов",
        "unity.pro.3": "Поддержка всех популярных платформ",
        "unity.pro.4": "Бесплатная версия для небольших проектов",
        "unity.con.1": "Большой размер сборки по сравнению с лёгкими движками",
        "unity.con.2": "Сложная система рендеринга для новичков",
        "unity.con.3": "Плавающая производительность на слабых устройствах",

        // --- Unreal Engine ---
        "unreal.subtitle": "Мощный 3D-движок от Epic Games для AAA-проектов",
        "unreal.about": "Unreal Engine — один из самых мощных игровых движков в мире, созданный компанией Epic Games. Изначально разработан для шутеров от первого лица, но сегодня используется в самых разных жанрах. Движок известен своей фотореалистичной графикой, продвинутой системой освещения и физики. Разработка ведётся на C++ или через визуальную систему Blueprints, которая позволяет создавать логику без написания кода.",
        "unreal.price": "Бесплатно, 5% роялти с дохода свыше $1 млн",
        "unreal.pro.1": "Лучшая графика среди бесплатных движков",
        "unreal.pro.2": "Система Blueprints без кода",
        "unreal.pro.3": "Бесплатный доступ к исходникам",
        "unreal.pro.4": "Множество готовых ассетов в Epic Store",
        "unreal.con.1": "Высокие требования к железу",
        "unreal.con.2": "Крутая кривая обучения",
        "unreal.con.3": "Большой размер проектов",

        // --- Godot ---
        "godot.subtitle": "Полностью бесплатный движок с открытым исходным кодом",
        "godot.about": "Godot — бесплатный игровой движок с открытым исходным кодом, разрабатываемый сообществом. Не требует лицензионных отчислений и не имеет ограничений по коммерческому использованию. Поддерживает как 2D, так и 3D-графику, работает на слабых компьютерах. Основной язык программирования — GDScript, похожий на Python. Благодаря простоте и лёгкости Godot часто рекомендуют новичкам для первой игры.",
        "godot.price": "Полностью бесплатно, без роялти",
        "godot.pro.1": "Абсолютно бесплатный без скрытых условий",
        "godot.pro.2": "Открытый исходный код",
        "godot.pro.3": "Лёгкий и быстрый, работает на слабых ПК",
        "godot.pro.4": "Простой язык GDScript",
        "godot.con.1": "Меньше готовых ассетов, чем у Unity",
        "godot.con.2": "Слабее инструменты для 3D-графики",
        "godot.con.3": "Меньше вакансий на рынке труда",

        // --- GameMaker ---
        "gamemaker.subtitle": "Движок для 2D-игр с простым стартом",
        "gamemaker.about": "GameMaker — движок, специализирующийся на создании 2D-игр. Разработан компанией YoYo Games и известен как один из самых простых инструментов для входа в геймдев. Позволяет создавать игры как с помощью визуального редактора, так и с использованием языка GML. Многие известные инди-хиты были сделаны именно на GameMaker, включая Undertale и Hotline Miami. Отличный выбор для тех, кто хочет быстро сделать первую 2D-игру.",
        "gamemaker.price": "Бесплатно, платные тарифы от $5/мес",
        "gamemaker.pro.1": "Очень простой старт для новичков",
        "gamemaker.pro.2": "Отлично подходит для 2D-игр",
        "gamemaker.pro.3": "Много готовых примеров и туториалов",
        "gamemaker.pro.4": "Быстрая сборка проектов",
        "gamemaker.con.1": "Слабая поддержка 3D",
        "gamemaker.con.2": "Платные тарифы для экспорта на консоли",
        "gamemaker.con.3": "Язык GML узкоспециализированный",

        // --- Construct 3 ---
        "construct.subtitle": "Визуальный конструктор 2D-игр, работающий в браузере",
        "construct.about": "Construct 3 — это визуальный конструктор игр, который работает прямо в браузере и не требует установки. Вся логика игры строится на системе событий: разработчик выбирает условие и действие, а движок сам выполняет нужные операции. Программировать на классическом языке не нужно, что делает Construct идеальным выбором для новичков и художников, которые хотят быстро превратить свою идею в работающий прототип.",
        "construct.price": "Бесплатный триал, подписка от $12/мес",
        "construct.pro.1": "Не требует программирования",
        "construct.pro.2": "Работает прямо в браузере",
        "construct.pro.3": "Очень быстрый старт проекта",
        "construct.pro.4": "Хорошо подходит для мобильных игр",
        "construct.con.1": "Только 2D, 3D-игры не сделать",
        "construct.con.2": "Платная подписка для публикации",
        "construct.con.3": "Ограничения для крупных проектов",

        // --- RPG Maker ---
        "rpgmaker.subtitle": "Специализированный движок для создания японских ролевых игр",
        "rpgmaker.about": "RPG Maker — серия движков от японской компании Gotcha Gotcha Games, заточенная под создание классических JRPG. Движок предоставляет готовые системы боя, диалогов, инвентаря и карт, что позволяет сосредоточиться на сюжете и дизайне, а не на программировании. Достаточно базового знания JavaScript, чтобы расширить возможности. Идеальный выбор для тех, кто мечтает сделать собственную ролевую игру в стиле старых Final Fantasy или Dragon Quest.",
        "rpgmaker.price": "Разово около $80 (за версию)",
        "rpgmaker.pro.1": "Готовые системы для RPG",
        "rpgmaker.pro.2": "Не нужно программировать",
        "rpgmaker.pro.3": "Большое сообщество и моды",
        "rpgmaker.pro.4": "Хорошо подходит для сюжетных игр",
        "rpgmaker.con.1": "Только жанр JRPG",
        "rpgmaker.con.2": "Платная лицензия",
        "rpgmaker.con.3": "Устаревшая графика в базе",

        // --- CryEngine ---
        "cryengine.subtitle": "Профессиональный 3D-движок с фотореалистичной графикой",
        "cryengine.about": "CryEngine — движок, разработанный немецкой компанией Crytek, известный своей передовой графикой. Изначально создавался для шутера Far Cry, а затем был использован в трилогии Crysis, которая долгое время считалась эталоном визуальной реалистичности. Движок поддерживает динамическое освещение, продвинутую физику и разрушаемость объектов. Разработка ведётся на C++ и Lua. CryEngine требует серьёзной подготовки и мощного железа, поэтому его выбирают опытные разработчики.",
        "cryengine.price": "Бесплатно для некоммерческого использования",
        "cryengine.pro.1": "Передовая графика и освещение",
        "cryengine.pro.2": "Мощная физика и разрушаемость",
        "cryengine.pro.3": "Бесплатная лицензия для обучения",
        "cryengine.con.1": "Высокие системные требования",
        "cryengine.con.2": "Мало обучающих материалов",
        "cryengine.con.3": "Маленькое сообщество по сравнению с Unity",

        // --- Defold ---
        "defold.subtitle": "Лёгкий бесплатный движок для 2D-игр от King",
        "defold.about": "Defold — бесплатный игровой движок, изначально разработанный компанией King для собственных мобильных игр, а затем открытый для широкой публики. Основной упор сделан на 2D-графику и кроссплатформенность. Игры, созданные в Defold, легко портируются на мобильные устройства, компьютеры и в веб. В качестве языка программирования используется Lua — компактный и быстрый язык, который часто применяют в геймдеве. Движок полностью бесплатный, без роялти и скрытых условий.",
        "defold.price": "Полностью бесплатно, без роялти",
        "defold.pro.1": "Полностью бесплатный без ограничений",
        "defold.pro.2": "Маленький размер сборок",
        "defold.pro.3": "Отличная поддержка мобильных платформ",
        "defold.pro.4": "Простой язык Lua",
        "defold.con.1": "Не подходит для 3D-игр",
        "defold.con.2": "Меньше обучающих материалов",
        "defold.con.3": "Редактор менее удобный, чем у Unity",

        // --- GDevelop ---
        "gdevelop.subtitle": "Бесплатный конструктор игр без программирования",
        "gdevelop.about": "GDevelop — бесплатный игровой движок с открытым исходным кодом, ориентированный на новичков. Вся логика строится на системе событий: разработчик создаёт условия и действия, а движок сам выполняет нужные операции. Программирование не требуется, хотя опытные пользователи могут добавлять JavaScript. GDevelop работает на всех платформах, включая веб-версию, что позволяет создавать игры даже с планшета или школьного компьютера. Идеальный выбор для самого первого знакомства с геймдевом.",
        "gdevelop.price": "Полностью бесплатно, без роялти",
        "gdevelop.pro.1": "Не требует программирования",
        "gdevelop.pro.2": "Полностью бесплатный и с открытым кодом",
        "gdevelop.pro.3": "Работает в браузере",
        "gdevelop.pro.4": "Подходит для обучения",
        "gdevelop.con.1": "Только 2D-игры",
        "gdevelop.con.2": "Ограничения для крупных проектов",
        "gdevelop.con.3": "Меньше возможностей, чем у профессиональных движков",

        // --- Stencyl ---
        "stencyl.subtitle": "Визуальная среда для 2D-игр на основе блоков",
        "stencyl.about": "Stencyl — визуальная среда для создания 2D-игр, вдохновлённая Scratch. Логика игры собирается из блоков, как в конструкторе: пользователь перетаскивает готовые элементы и соединяет их между собой. Это позволяет создавать игры без знания программирования. Для опытных разработчиков доступен язык Haxe, на котором можно писать собственные расширения. Stencyl отлично подходит для школьников, студентов и всех, кто хочет начать с самых простых проектов.",
        "stencyl.price": "Бесплатно, платные тарифы от $99/год",
        "stencyl.pro.1": "Блочная система без кода",
        "stencyl.pro.2": "Простой старт для новичков",
        "stencyl.pro.3": "Возможность писать код на Haxe",
        "stencyl.pro.4": "Много готовых шаблонов",
        "stencyl.con.1": "Только 2D-игры",
        "stencyl.con.2": "Платная лицензия для публикации",
        "stencyl.con.3": "Меньше сообщество, чем у крупных движков",

        // --- Подвал ---
        "footer.text": "LowLen1y.gg — учебный проект по МДК 02.01"
    },

    en: {
        // --- Navigation ---
        "nav.home": "Home",
        "nav.platforms": "Platforms",
        "nav.tips": "Beginner Tips",

        // --- Hero ---
        "hero.title1": "Choose your",
        "hero.title2": "engine",
        "hero.title3": "for game development",
        "hero.subtitle": "A complete overview of platforms for creating computer games: from simple constructors to professional engines.",
        "hero.btnPlatforms": "All platforms",
        "hero.btnTips": "Where to start",

        // --- Cards ---
        "engines.title": "Popular engines",
        "engines.subtitle": "Hover over a card to see a brief description. Click to open the full review.",
        "card.unity": "Versatile engine for 2D and 3D. Language: C#. Great for mobile and PC games.",
        "card.unreal": "Powerful 3D engine by Epic Games. Languages: C++ and Blueprints. For AAA projects.",
        "card.godot": "Completely free and open-source engine. Language: GDScript. Great for beginners.",
        "card.gamemaker": "Engine for 2D games. Language: GML. Easy start, ideal for indie projects.",
        "card.construct": "Visual 2D game constructor. No coding required. Runs in the browser.",
        "card.rpgmaker": "Specialized engine for Japanese-style role-playing games. Minimal coding.",
        "card.cryengine": "Professional 3D engine with photorealistic graphics. Languages: C++ and Lua.",
        "card.defold": "Lightweight free 2D engine. Language: Lua. Well-suited for mobile games.",
        "card.gdevelop": "Free no-code constructor. Perfect for your very first projects.",
        "card.stencyl": "Visual block-based environment for 2D games. Easy start without coding.",

        // --- Quiz ---
        "quiz.title": "Not sure what to pick?",
        "quiz.subtitle": "Answer 3 questions — we'll suggest a suitable engine.",
        "quiz.q1": "What game do you want to create?",
        "quiz.q1.a": "A 2D game",
        "quiz.q1.b": "A 3D game",
        "quiz.q1.c": "A mobile game",
        "quiz.q2": "What is your experience?",
        "quiz.q2.a": "Beginner",
        "quiz.q2.b": "Some experience",
        "quiz.q2.c": "Confident user",
        "quiz.q3": "Are you ready to pay for an engine?",
        "quiz.q3.a": "Free only",
        "quiz.q3.b": "Ready to pay",
        "quiz.result": "You should try:",
        "quiz.restart": "Start over",

        // --- Catalog ---
        "catalog.title": "All game development platforms",
        "catalog.subtitle": "Full list of engines with search, filters, and sorting. Choose the right one and explore it in detail.",
        "catalog.search": "Search by name...",
        "catalog.type": "Type:",
        "catalog.price": "Price:",
        "catalog.difficulty": "Difficulty:",
        "catalog.all": "All",
        "catalog.mobile": "Mobile",
        "catalog.free": "Free",
        "catalog.paid": "Paid",
        "catalog.easy": "For beginners",
        "catalog.medium": "Medium",
        "catalog.hard": "For advanced",
        "catalog.sort": "Sort:",
        "catalog.sortNameAsc": "Name (A-Z)",
        "catalog.sortNameDesc": "Name (Z-A)",
        "catalog.sortDiffAsc": "Difficulty (easy → hard)",
        "catalog.sortDiffDesc": "Difficulty (hard → easy)",
        "catalog.found": "Found:",
        "catalog.empty": "Nothing found. Try changing the filters.",

        // --- Tips ---
        "tips.title": "How to start in gamedev",
        "tips.subtitle": "A step-by-step guide for those who want to create their first game but don't know where to start.",
        "tips.1.title": "Choose a simple engine to start",
        "tips.1.text": "Don't start with Unreal Engine or CryEngine. Godot, GDevelop, or Construct 3 are great for your first game — they are beginner-friendly and don't require deep programming knowledge. Complex engines offer huge possibilities, but the entry barrier is high. Your first goal is a finished project, not a hit.",
        "tips.2.title": "Start with a small game",
        "tips.2.text": "Don't try to make a 100-hour RPG or an open-world shooter right away. Make a simple game: snake, tetris, a 3-level platformer, or an arcade with one mechanic. This way you'll learn the basics: character control, physics, collisions, UI, sound. A finished small project is worth more than an unfinished large one.",
        "tips.3.title": "Learn a programming language",
        "tips.3.text": "Almost every engine works with its own language. Unity uses C#, Godot — GDScript, GameMaker — GML. You don't need to learn everything at once. Pick one engine and one language, bring it to a confident level. Basics of syntax, variables, conditions, loops, functions — that's enough for your first projects. The rest will come with practice.",
        "tips.4.title": "Use free resources",
        "tips.4.text": "The official engine documentation is the best source of knowledge. YouTube channels, forums, Discord and Telegram communities will help as well. Don't hesitate to ask questions: the gamedev community is one of the friendliest. Bugs in code are normal — everyone makes them, from beginners to professionals.",
        "tips.5.title": "Make your first prototype",
        "tips.5.text": "A prototype is a draft version of the game without fancy graphics or sound. Its purpose is to test whether the mechanic itself is fun. Character control, jumps, shooting, item collection — all of this can be done with squares and circles. If the prototype is fun even without graphics, the idea works. You'll polish the visuals later.",
        "tips.6.title": "Finish the project",
        "tips.6.text": "The most common beginner mistake is abandoning a project halfway and starting a new one. This kills motivation and gives no experience. Set a rule for yourself: finish the current game, even if it seems weak. Publish it on itch.io or social media. Feedback from players will give you more than months of theory.",
        "tips.cta.title": "Ready to choose an engine?",
        "tips.cta.subtitle": "Check out the full list of platforms and find your perfect tool.",

        // --- Engine page (common) ---
        "engine.back": "← Back to list",
        "engine.about": "Description",
        "engine.specs": "Specifications",
        "engine.proscons": "Pros and cons",
        "engine.pros": "Pros",
        "engine.cons": "Cons",
        "engine.games": "Notable games",
        "engine.official": "Official website",
        "engine.developer": "Developer",
        "engine.type": "Type",
        "engine.language": "Programming language",
        "engine.price": "Price",
        "engine.platforms": "Export platforms",
        "engine.difficulty": "Difficulty",
        "engine.diffEasy": "Easy",
        "engine.diffMedium": "Medium",
        "engine.diffHard": "Hard",

        // --- Unity ---
        "unity.subtitle": "Versatile engine for 2D and 3D games by Unity Technologies",
        "unity.about": "Unity is one of the most popular game engines in the world. Thousands of games for PC, mobile, consoles, and web browsers have been made with it. The engine supports both 2D and 3D graphics, has a powerful editor and a huge community. The main programming language is C#. Unity is great for both indie developers and large studios.",
        "unity.price": "Free (Personal), from $2200/year (Pro)",
        "unity.pro.1": "Huge community and lots of learning materials",
        "unity.pro.2": "Asset Store with thousands of ready-made assets",
        "unity.pro.3": "Support for all popular platforms",
        "unity.pro.4": "Free version for small projects",
        "unity.con.1": "Large build size compared to lightweight engines",
        "unity.con.2": "Complex rendering system for beginners",
        "unity.con.3": "Inconsistent performance on weak devices",

        // --- Unreal Engine ---
        "unreal.subtitle": "Powerful 3D engine by Epic Games for AAA projects",
        "unreal.about": "Unreal Engine is one of the most powerful game engines in the world, created by Epic Games. Originally developed for first-person shooters, it is now used in a wide variety of genres. The engine is known for its photorealistic graphics, advanced lighting, and physics. Development is done in C++ or through the visual Blueprints system, which allows you to create logic without writing code.",
        "unreal.price": "Free, 5% royalty on revenue over $1M",
        "unreal.pro.1": "Best graphics among free engines",
        "unreal.pro.2": "Blueprint system without code",
        "unreal.pro.3": "Free access to source code",
        "unreal.pro.4": "Many ready-made assets in the Epic Store",
        "unreal.con.1": "High hardware requirements",
        "unreal.con.2": "Steep learning curve",
        "unreal.con.3": "Large project size",

        // --- Godot ---
        "godot.subtitle": "Completely free and open-source engine",
        "godot.about": "Godot is a free, open-source game engine developed by the community. It has no license fees and no restrictions on commercial use. It supports both 2D and 3D graphics and runs well on low-end computers. The main programming language is GDScript, similar to Python. Because of its simplicity and lightweight nature, Godot is often recommended to beginners for their first game.",
        "godot.price": "Completely free, no royalties",
        "godot.pro.1": "Absolutely free with no hidden conditions",
        "godot.pro.2": "Open source code",
        "godot.pro.3": "Lightweight and fast, runs on weak PCs",
        "godot.pro.4": "Simple GDScript language",
        "godot.con.1": "Fewer ready-made assets than Unity",
        "godot.con.2": "Weaker 3D graphics tools",
        "godot.con.3": "Fewer job openings on the market",

        // --- GameMaker ---
        "gamemaker.subtitle": "2D game engine with an easy start",
        "gamemaker.about": "GameMaker is an engine specialized in creating 2D games. Developed by YoYo Games, it is known as one of the easiest tools for entering gamedev. It allows you to create games both through a visual editor and using the GML language. Many famous indie hits were made with GameMaker, including Undertale and Hotline Miami. A great choice for those who want to quickly make their first 2D game.",
        "gamemaker.price": "Free, paid plans from $5/month",
        "gamemaker.pro.1": "Very easy start for beginners",
        "gamemaker.pro.2": "Perfect for 2D games",
        "gamemaker.pro.3": "Many ready-made examples and tutorials",
        "gamemaker.pro.4": "Fast project builds",
        "gamemaker.con.1": "Weak 3D support",
        "gamemaker.con.2": "Paid plans for console export",
        "gamemaker.con.3": "GML is a highly specialized language",

        // --- Construct 3 ---
        "construct.subtitle": "Visual 2D game constructor that runs in the browser",
        "construct.about": "Construct 3 is a visual game constructor that runs directly in the browser and requires no installation. All game logic is built on an event system: the developer selects a condition and an action, and the engine performs the necessary operations. There is no need to program in a classic language, which makes Construct an ideal choice for beginners and artists who want to quickly turn their idea into a working prototype.",
        "construct.price": "Free trial, subscription from $12/month",
        "construct.pro.1": "No programming required",
        "construct.pro.2": "Runs directly in the browser",
        "construct.pro.3": "Very fast project start",
        "construct.pro.4": "Well-suited for mobile games",
        "construct.con.1": "2D only, no 3D games",
        "construct.con.2": "Paid subscription for publishing",
        "construct.con.3": "Limitations for large projects",

        // --- RPG Maker ---
        "rpgmaker.subtitle": "Specialized engine for creating Japanese role-playing games",
        "rpgmaker.about": "RPG Maker is a series of engines from the Japanese company Gotcha Gotcha Games, tailored for creating classic JRPGs. The engine provides ready-made battle, dialogue, inventory, and map systems, allowing you to focus on story and design rather than programming. Basic knowledge of JavaScript is enough to extend its capabilities. An ideal choice for those who dream of making their own role-playing game in the style of old Final Fantasy or Dragon Quest.",
        "rpgmaker.price": "One-time payment of about $80 (per version)",
        "rpgmaker.pro.1": "Ready-made systems for RPGs",
        "rpgmaker.pro.2": "No programming needed",
        "rpgmaker.pro.3": "Large community and mods",
        "rpgmaker.pro.4": "Well-suited for story-driven games",
        "rpgmaker.con.1": "JRPG genre only",
        "rpgmaker.con.2": "Paid license",
        "rpgmaker.con.3": "Outdated base graphics",

        // --- CryEngine ---
        "cryengine.subtitle": "Professional 3D engine with photorealistic graphics",
        "cryengine.about": "CryEngine is an engine developed by the German company Crytek, known for its cutting-edge graphics. It was originally created for the Far Cry shooter, and then used in the Crysis trilogy, which for a long time was considered the gold standard of visual realism. The engine supports dynamic lighting, advanced physics, and destructible objects. Development is done in C++ and Lua. CryEngine requires serious preparation and powerful hardware, so it is chosen by experienced developers.",
        "cryengine.price": "Free for non-commercial use",
        "cryengine.pro.1": "Cutting-edge graphics and lighting",
        "cryengine.pro.2": "Powerful physics and destructibility",
        "cryengine.pro.3": "Free license for learning",
        "cryengine.con.1": "High system requirements",
        "cryengine.con.2": "Few learning materials",
        "cryengine.con.3": "Small community compared to Unity",

        // --- Defold ---
        "defold.subtitle": "Lightweight free 2D engine by King",
        "defold.about": "Defold is a free game engine originally developed by King for its own mobile games and later opened to the public. The main focus is on 2D graphics and cross-platform support. Games made with Defold are easily ported to mobile devices, computers, and the web. The programming language is Lua — a compact and fast language often used in gamedev. The engine is completely free, with no royalties or hidden conditions.",
        "defold.price": "Completely free, no royalties",
        "defold.pro.1": "Completely free with no restrictions",
        "defold.pro.2": "Small build size",
        "defold.pro.3": "Excellent mobile platform support",
        "defold.pro.4": "Simple Lua language",
        "defold.con.1": "Not suitable for 3D games",
        "defold.con.2": "Fewer learning materials",
        "defold.con.3": "Editor is less convenient than Unity's",

        // --- GDevelop ---
        "gdevelop.subtitle": "Free game constructor without programming",
        "gdevelop.about": "GDevelop is a free, open-source game engine aimed at beginners. All logic is built on an event system: the developer creates conditions and actions, and the engine performs the necessary operations. No programming is required, although experienced users can add JavaScript. GDevelop runs on all platforms, including a web version, allowing you to create games even from a tablet or a school computer. An ideal choice for your very first introduction to gamedev.",
        "gdevelop.price": "Completely free, no royalties",
        "gdevelop.pro.1": "No programming required",
        "gdevelop.pro.2": "Completely free and open-source",
        "gdevelop.pro.3": "Runs in the browser",
        "gdevelop.pro.4": "Great for learning",
        "gdevelop.con.1": "2D games only",
        "gdevelop.con.2": "Limitations for large projects",
        "gdevelop.con.3": "Fewer features than professional engines",

        // --- Stencyl ---
        "stencyl.subtitle": "Visual block-based environment for 2D games",
        "stencyl.about": "Stencyl is a visual environment for creating 2D games, inspired by Scratch. Game logic is assembled from blocks like in a constructor: the user drags ready-made elements and connects them together. This allows you to create games without programming knowledge. For experienced developers, the Haxe language is available for writing custom extensions. Stencyl is perfect for schoolchildren, students, and anyone who wants to start with the simplest projects.",
        "stencyl.price": "Free, paid plans from $99/year",
        "stencyl.pro.1": "Block-based system without code",
        "stencyl.pro.2": "Easy start for beginners",
        "stencyl.pro.3": "Ability to write code in Haxe",
        "stencyl.pro.4": "Many ready-made templates",
        "stencyl.con.1": "2D games only",
        "stencyl.con.2": "Paid license for publishing",
        "stencyl.con.3": "Smaller community than major engines",

        // --- Footer ---
        "footer.text": "LowLen1y.gg — academic project for MDK 02.01"
    }
};

// ============================================================
// ФУНКЦИЯ ПЕРЕКЛЮЧЕНИЯ ЯЗЫКА
// ============================================================

function applyLanguage(lang) {
    const dict = translations[lang] || translations.ru;

    document.querySelectorAll("[data-i18n]").forEach(el => {
        const key = el.getAttribute("data-i18n");
        if (dict[key]) {
            el.textContent = dict[key];
        }
    });

    document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
        const key = el.getAttribute("data-i18n-placeholder");
        if (dict[key]) {
            el.placeholder = dict[key];
        }
    });

    document.documentElement.lang = lang;

    document.querySelectorAll(".lang-btn").forEach(btn => {
        btn.classList.toggle("lang-btn--active", btn.dataset.lang === lang);
    });

    try {
        localStorage.setItem("siteLang", lang);
    } catch (e) { /* ignore */ }
}

// ============================================================
// ИНИЦИАЛИЗАЦИЯ
// ============================================================

document.addEventListener("DOMContentLoaded", () => {
    let savedLang = "ru";
    try {
        savedLang = localStorage.getItem("siteLang") || "ru";
    } catch (e) { /* ignore */ }

    applyLanguage(savedLang);

    document.querySelectorAll(".lang-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            applyLanguage(btn.dataset.lang);
        });
    });
});