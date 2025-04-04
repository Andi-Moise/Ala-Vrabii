const answerStart = document.getElementById("answerStart");
const answers = document.querySelectorAll(".answerV");

answerStart.addEventListener("click", () => {
    answers.forEach(answer => {
        answer.classList.toggle("hidden");
    });
});