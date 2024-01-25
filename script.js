const quizData = [
    {
        question: " What is HTML?",
        options: [
            "HTML describes the structure of a webpage",
            " HTML is the standard markup language mainly used to create web pages",
            "HTML consists of a set of elements that helps the browser how to view the content",
            "All of the mentioned"
        ],
       correct:3,
    },
    {
        question: "Who is the father of HTML?",
        options: [
            "Rasmus Lerdorf",
            "Tim Berners-Lee",
            " Brendan Eich",
            " Sergey Brin"
        ],
       correct:1,
    },
    {
        question: " HTML stands for __________",
        options: [
            "HyperText Markup Language",
            " HyperText Machine Language",
            " HyperText Marking Language",
            "HighText Marking Language",
        ],
       correct:0,
    },
    {
        question: "What is the correct syntax of doctype in HTML5?",
        options: [
            "</doctype html>",
            " <doctype html>",
            " <doctype html!>",
            " <!doctype html>",
        ],
       correct:3,
    },
]

const quiz = document.querySelector('#quiz');
const answerElm = document.querySelectorAll(".answer");

const [questionElm, option_1, option_2, option_3, option_4, option_5] = 
document.querySelectorAll(
    "#question, .option_1, .option_2, .option_3, .option_4, .option_5"
    );

const submitBtn = document.querySelector("#submit");

let currentQuiz = 0;
let score = 0;
    
const loadquiz = () => {
    const { question, options} = quizData[currentQuiz];
    console.log(question)

    questionElm.innerText = question

    options.forEach(
        (curOption, index) => 
       (window[`option_${index + 1}`].innerText = curOption)
       );
};

loadquiz()

const getSelectedOption = () =>{

    let answerElement = Array.from(answerElm);
    return answerElement.findIndex((curElem) => curElem.checked);
}

const deselectedAnswers = () => {
    return answerElm.forEach((curElem) => curElem.checked = false);
}

submitBtn.addEventListener('click', () => {
    const selectedOptionIndex = getSelectedOption();
    console.log(selectedOptionIndex);

    if(selectedOptionIndex === quizData[currentQuiz].correct){
        // score += 1
        score = score +1
    }

    currentQuiz++

    if(currentQuiz < quizData.length){
        deselectedAnswers();
        loadquiz()
    }else{
        quiz.innerHTML = `
        <div className="result">
        <h2> your score : ${score}/${quizData.length} correct answer</h2>
         <p> congratulation🎉</p>
         <button class ="reload-button" onclick ="location.reload()">"play again🔁"</button>
        </div>
        ` }
})