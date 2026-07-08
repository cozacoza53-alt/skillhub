const questions = [
    {
        question: "Що є основною функцією менеджменту?",
        answers: [
            "Планування",
            "Малювання",
            "Продаж товарів",
            "Виробництво"
        ],
        correct: 0
    },

    {
        question: "Хто такий менеджер?",
        answers: [
            "Працівник, який керує людьми та процесами",
            "Покупець",
            "Водій",
            "Програміст"
        ],
        correct: 0
    },

    {
        question: "Що означає SWOT-аналіз?",
        answers: [
            "Аналіз сильних і слабких сторін",
            "Метод продажу",
            "Фінансовий звіт",
            "Вид реклами"
        ],
        correct: 0
    },

    {
        question: "Мотивація в менеджменті — це:",
        answers: [
            "Процес стимулювання працівників",
            "Покарання працівників",
            "Звільнення персоналу",
            "Ведення документації"
        ],
        correct: 0
    },

    {
        question: "Що таке лідерство?",
        answers: [
            "Здатність впливати на людей",
            "Контроль грошей",
            "Робота з документами",
            "Виготовлення товарів"
        ],
        correct: 0
    }
];


let currentQuestion = 0;
let time = 60;


let timer = setInterval(()=>{

    time--;

    document.getElementById("time").innerHTML = time;


    if(time <= 0){

        clearInterval(timer);


        localStorage.setItem(
            "score",
            score
        );


        alert("Час вийшов!");

        window.location.href =
        "result.html";

    }


},1000);


const questionTitle = document.querySelector(".question h2");
const answersBlock = document.querySelector(".question");
const progress = document.querySelector(".progress");
const button = document.querySelector(".button");


function showQuestion(){

    let q = questions[currentQuestion];

    questionTitle.innerHTML =
    (currentQuestion + 1) + ". " + q.question;


    progress.innerHTML =
    "Питання " + (currentQuestion + 1) +
    " з " + questions.length;


    let html = "";

    q.answers.forEach((answer,index)=>{

        html += `
        <label>
        <input type="radio" name="answer" value="${index}">
        ${answer}
        </label>
        `;

    });


    answersBlock.innerHTML =
    "<h2>" + q.question + "</h2>" + html;

}


button.onclick = function(){

    let selected =
    document.querySelector(
    'input[name="answer"]:checked'
    );


    if(selected){

        if(
        Number(selected.value)
        === questions[currentQuestion].correct
        ){

            score++;

        }


        currentQuestion++;


        if(currentQuestion < questions.length){

            showQuestion();

        }
        else{

            localStorage.setItem(
                "score",
                score
            );

            window.location.href =
            "result.html";

        }

    }
    else{

        alert("Оберіть відповідь!");

    }

};


showQuestion();