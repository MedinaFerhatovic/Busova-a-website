//Reference
let timeLeft = document.querySelector(".time-left");
let quizContainer = document.getElementById("container");
let nextBtn = document.getElementById("next-button");
let countOfQuestion = document.querySelector(".number-of-question");
let displayContainer = document.getElementById("display-container");
let scoreContainer = document.querySelector(".score-container");
let restart = document.getElementById("restart");
let userScore = document.getElementById("user-score");
let startScreen = document.querySelector(".start-screen");
let startButton = document.getElementById("start-button");
let questionCount;
let scoreCount = 0;
let count = 11;
let countdown;

//Nizovi pitanja, opcija i tačnih odgovora

const quizArray = [
    {
        id: "0",
        question: "Kako se zove džamija u centru Busovače?",
        options: ["Ferhadija", "Sulejman-begova", "Ferhat-pašina", "Nema naziv"],
        correct: "Sulejman-begova",
    },
    {
        id: "1",
        question: "Koliko naselja spada pod selo Lugovi?",
        options: ["13", "1", "6", "20"],
        correct: "13",
    },
    {
        id: "2",
        question: "Koja je vladajuća stranka u Busovači?",
        options: ["HDZ", "SNSD", "SDA", "SDP"],
        correct: "SDA",
    },
    {
        id: "3",
        question: "Koja planina se ne nalazi u Busovači?",
        options: ["Hum", "Čvrsnica", "Busovačka planina", "Pridolci"],
        correct: "Čvrsnica",
    },
    {
        id: "4",
        question: "Najpoznatiji restoran u Busovači?",
        options: ["Restoran kod Fehre", "Sarajlić", "Manes", "Oskar"],
        correct: "Restoran kod Fehre",
    },
    {
        id: "5",
        question: "Najstarija tekija na Balkanu, koja se nalazi u Busovači je kojeg tarikata: ",
        options: ["kadirijski", "nakšibendijski", "šazilijski", "desukijski"],
        correct: "nakšibendijski",
    }, {
        id: "6",
        question: "Koliko srednjih škola ima Busovača?",
        options: ["5", "1", "2", "9"],
        correct: "2",
    },
    {
        id: "7",
        question: "Kafić u Busovači kojeg obavezno morate posjetiti za najbolje iskustvo je: ",
        options: ["Luna", "Epic", "Lens", "Chillout"],
        correct: "Lens",
    },
    {
        id: "8",
        question: "Zatvor poluotvorenog tipa, u Busovači se nalazi gdje: ",
        options: ["u Kaćunima", "u Šudinama", "na Kaoniku", "u Mihaljevićima"],
        correct: "na Kaoniku",
    },
    {
        id: "9",
        question: "Najbrojnije mjesto u Busovači?",
        options: ["Podstijena", "Kaćuni", "Mehurići", "Dobraljevo"],
        correct: "Kaćuni",
    },
];

//Restartovanje Kviza
restart.addEventListener("click", () => {
    initial();
    displayContainer.classList.remove("hide");
    scoreContainer.classList.add("hide");
});

//Next dugme
nextBtn.addEventListener(
    "click",
    (displayNext = () => {
        //povećanje broja pitanja
        questionCount += 1;
        //ako je posljednje pitanje
        if (questionCount == quizArray.length) {
            //sakriti kontejner pitanja i prikazati rezultat
            displayContainer.classList.add("hide");
            scoreContainer.classList.remove("hide");
            //Korisnikov rezultat
            userScore.innerHTML =
                "Tvoj rezultat je " + scoreCount + " od " + questionCount;
        } else {
            //prikaži broj pitanja
            countOfQuestion.innerHTML =
                questionCount + 1 + " od " + quizArray.length + " pitanja";
            //prikaz kviza
            quizDisplay(questionCount);
            count = 11;
            clearInterval(countdown);
            timerDisplay();
        }
    })
);

//Tajmer
const timerDisplay = () => {
    countdown = setInterval(() => {
        count--;
        timeLeft.innerHTML = `${count}s`;
        if (count == 0) {
            clearInterval(countdown);
            displayNext();
        }
    }, 1000);
};

//Prikaz kviza
const quizDisplay = (questionCount) => {
    let quizCards = document.querySelectorAll(".container-mid");
    //Sakrij druge karte
    quizCards.forEach((card) => {
        card.classList.add("hide");
    });
    //prikazati trenutnu karticu pitanja
    quizCards[questionCount].classList.remove("hide");
};

//Kreiranje kviza
function quizCreator() {
    //nasumično sortiraj pitanja
    quizArray.sort(() => Math.random() - 0.5);
    //generiraj kviz
    for (let i of quizArray) {
        //opcije nasumično sortiranja
        i.options.sort(() => Math.random() - 0.5);
        //kreiranje kartice za kviz
        let div = document.createElement("div");
        div.classList.add("container-mid", "hide");
        //broj pitanja
        countOfQuestion.innerHTML = 1 + " od " + quizArray.length + " pitanja";
        //pitanja
        let question_DIV = document.createElement("p");
        question_DIV.classList.add("question");
        question_DIV.innerHTML = i.question;
        div.appendChild(question_DIV);
        //opcije
        div.innerHTML += `
    <button class="option-div" onclick="checker(this)">${i.options[0]}</button>
     <button class="option-div" onclick="checker(this)">${i.options[1]}</button>
      <button class="option-div" onclick="checker(this)">${i.options[2]}</button>
       <button class="option-div" onclick="checker(this)">${i.options[3]}</button>
    `;
        quizContainer.appendChild(div);
    }
}

//Checker Funkcija za provjeru da li je opcija ispravna ili ne
function checker(userOption) {
    let userSolution = userOption.innerText;
    let question =
        document.getElementsByClassName("container-mid")[questionCount];
    let options = question.querySelectorAll(".option-div");

    //ako je korisnik kliknuo odgovor == ispravna opcija pohranjena u objektu
    if (userSolution === quizArray[questionCount].correct) {
        userOption.classList.add("correct");
        scoreCount++;
    } else {
        userOption.classList.add("incorrect");
        //Za označavanje ispravne opcije
        options.forEach((element) => {
            if (element.innerText == quizArray[questionCount].correct) {
                element.classList.add("correct");
            }
        });
    }

    //brisanje intervala (zaustavljanje tajmera)
    clearInterval(countdown);
    //onemogućite sve opcije
    options.forEach((element) => {
        element.disabled = true;
    });
}

//početno podešavanje
function initial() {
    quizContainer.innerHTML = "";
    questionCount = 0;
    scoreCount = 0;
    count = 11;
    clearInterval(countdown);
    timerDisplay();
    quizCreator();
    quizDisplay(questionCount);
}

//kada korisnik klikne na dugme za pokretanje
startButton.addEventListener("click", () => {
    startScreen.classList.add("hide");
    displayContainer.classList.remove("hide");
    initial();
});

//sakriti kviz i prikazati početni ekran
window.onload = () => {
    startScreen.classList.remove("hide");
    displayContainer.classList.add("hide");
};