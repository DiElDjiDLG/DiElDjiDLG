const btn = document.getElementById('quiz-btn');
const navBar = document.getElementById('navbar');
const text = document.getElementById('text');

const header = document.getElementById('header');
const title = document.getElementById('title');

let btnCount = 0;

const titleList = {
    0: "Date Quiz 💖",
    1: "Eerste vraag...",
    2: "Dit is gewoon een foto ;)",
    3: "Hmm... wel de juiste drukken"
}

const textList = {
    0: "Kies uit 1 van de volgende opties."
}

document.addEventListener("DOMContentLoaded", () => {
    titleText();
});

const titleText = () => {
    title.textContent = titleList[btnCount];
    console.log(titleText.textContent);
}

//can you change to other text later
const changeHeader = () => {

    if (btnCount !== 0) {
        header.style.visibility = "hidden";
    }
}

const changeQuiz = () => {
}

btn.addEventListener("click", () => {
    btnCount = btnCount + 1;
    console.log(btnCount);

    changeHeader();
    titleText();
})