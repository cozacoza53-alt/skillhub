const questions = [
    {
        question: "Яка функція менеджменту передбачає визначення цілей та шляхів їх досягнення?",
        answers: ["Контроль", "Планування", "Мотивація", "Організація"],
        correct: 1
    },
    {
        question: "Яка функція менеджменту забезпечує розподіл ресурсів і обов'язків?",
        answers: ["Організація", "Контроль", "Мотивація", "Планування"],
        correct: 0
    },
    {
        question: "Хто вважається засновником наукового менеджменту?",
        answers: ["Анрі Файоль", "Пітер Друкер", "Фредерік Тейлор", "Макс Вебер"],
        correct: 2
    },
    {
        question: "Який рівень менеджменту відповідає за довгострокову стратегію підприємства?",
        answers: ["Нижчий", "Середній", "Оперативний", "Вищий"],
        correct: 3
    },
    {
        question: "Що є основною метою контролю?",
        answers: [
            "Оцінка результатів діяльності та їх відповідність планам",
            "Збільшення виробництва",
            "Пошук нових працівників",
            "Організація реклами"
        ],
        correct: 0
    },
    {
        question: "Який стиль керівництва характеризується одноосібним прийняттям рішень?",
        answers: ["Демократичний", "Ліберальний", "Авторитарний", "Колегіальний"],
        correct: 2
    },
    {
        question: "SWOT-аналіз використовується для:",
        answers: [
            "Оцінки фінансового стану",
            "Аналізу сильних і слабких сторін, можливостей та загроз",
            "Розрахунку прибутку",
            "Контролю якості продукції"
        ],
        correct: 1
    },
    {
        question: "До внутрішнього середовища організації належать:",
        answers: [
            "Конкуренти",
            "Постачальники",
            "Працівники підприємства",
            "Державні органи"
        ],
        correct: 2
    },
    {
        question: "Яка функція менеджменту стимулює працівників до ефективної роботи?",
        answers: ["Контроль", "Мотивація", "Організація", "Планування"],
        correct: 1
    },
    {
        question: "Який документ визначає місію та головні цілі підприємства?",
        answers: ["Баланс", "Штатний розпис", "Стратегічний план", "Накладна"],
        correct: 2
    },
    {
        question: "Який метод прийняття рішень передбачає колективне обговорення проблеми?",
        answers: ["Мозковий штурм", "Інструктаж", "Делегування", "Моніторинг"],
        correct: 0
    },
    {
        question: "Що таке делегування?",
        answers: [
            "Передача повноважень і відповідальності підлеглим",
            "Звільнення працівника",
            "Підвищення заробітної плати",
            "Перевірка документів"
        ],
        correct: 0
    },
    {
        question: "Який вид планування охоплює період понад 5 років?",
        answers: ["Оперативне", "Тактичне", "Стратегічне", "Поточне"],
        correct: 2
    },
    {
        question: "Що є основною метою мотивації персоналу?",
        answers: [
            "Зменшення кількості працівників",
            "Підвищення продуктивності праці",
            "Збільшення кількості звітів",
            "Посилення контролю"
        ],
        correct: 1
    },
    {
        question: "Який із перелічених принципів належить до принципів менеджменту Анрі Файоля?",
        answers: [
            "Поділ праці",
            "Інфляція",
            "Маркетинг",
            "Логістика"
        ],
        correct: 0
    }
];

let currentQuestion = 0;
let score = 0;
let time = 60;

let timer = setInterval(() => {
    time--;
    document.getElementById("time").innerHTML = time;

    if(time <= 0){
        clearInterval(timer);

        localStorage.setItem("score", score);
        localStorage.setItem("totalQuestions", questions.length);
        localStorage.setItem("timeLeft", time);

        alert("Час вийшов!");

        window.location.href = "result.html";
    }
}, 1000);

const questionTitle = document.querySelector(".question h2");
const answersBlock = document.querySelector(".question");
const progress = document.querySelector(".progress");
const button = document.querySelector(".button");

function showQuestion() {
    let q = questions[currentQuestion];

    progress.innerHTML =
        "Питання " + (currentQuestion + 1) + " з " + questions.length;

    let html = `<h2>${currentQuestion + 1}. ${q.question}</h2>`;

    q.answers.forEach((answer, index) => {
        html += `
        <label>
            <input type="radio" name="answer" value="${index}">
            ${answer}
        </label>
        `;
    });

    answersBlock.innerHTML = html;
}

button.onclick = function () {

    let selected = document.querySelector('input[name="answer"]:checked');

    if (!selected) {
        alert("Оберіть відповідь!");
        return;
    }

    if (Number(selected.value) === questions[currentQuestion].correct) {
        score++;
    }

    currentQuestion++;

    if (currentQuestion < questions.length) {
        showQuestion();
    } else {
        clearInterval(timer);

        localStorage.setItem("score", score);
        localStorage.setItem("totalQuestions", questions.length);
        localStorage.setItem("timeLeft", time);

        window.location.href = "result.html";
    }
};

showQuestion();
