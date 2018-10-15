// Declare variables
var clockRunning = false;
var intervalId;
var counter = 0;
var correct = 0;
var incorrect = 0;
var clickCounter = 0;
var questionArray = [
    {
        prompt: "Who is Snow White's Prince?",
        // 1: "(a) Prince Phillip",
        // 2: "(b) Prince Florian",
        // 3: "(c) Prince Charming",
        choices: ["(a) Prince Phillip", "(b) Prince Florian", "(c) Prince Charming"],
        answer: "(b) Prince Florian",
        image: "assets/images/prince_phillip.jpg"
    },
    {
        prompt: "In the Lion King, what is Simba's mother's name?",
        // 1: "(a) Sarabi",
        // 2: "(b) Prince Florian",
        // 3: "(c) Prince Charming",
        choices: ["(a) Sarabi", "(b) Prince Florian", "(c) Prince Charming"],
        answer: "(a) Sarabi",
        image: "assets/images/sarabi.jpg"
    },
    {
        prompt: "In Aladin, how long was Genie stuck in the lamp?",
        // 1: "(a) 1,000 year",
        // 2: "(b) 5,000 years",
        // 3: "(c) 10,000 years",
        choices: ["(a) 1,000 year", "(b) 5,000 years", "(c) 10,000 years"],
        answer: "(c) 10,000 years",
        image: "assets/images/genie.png"
    },
    {
        prompt: "In the Jungle Book, who teaches Mowgli the Bare Necessities?",
        // 1: "(a) Maguera",
        // 2: "(b) Baloo",
        // 3: "(c) King Louie",
        choices: ["(a) Maguera", "(b) Baloo", "(c) King Louie",],
        answer: "(b) Baloo",
        image: "assets/images/baloo.jpg"
    },
    {
        prompt: "Cruella de Vil is the villian in which Disney movie?",
        // 1: "(a) The Rescuers",
        // 2: "(b) 101 Dalmations",
        // 3: "(c) The Aristocats",
        choices: ["(a) The Rescuers", "(b) 101 Dalmations", "(c) The Aristocats"],
        answer: "(b) 101 Dalmations",
        image: "assets/images/cruela.jpg"
    },
    {
        prompt: "In Finding Nemo, what's the name of the turtle that Nemo\n\
                rides the East Australian Current with?",
        // 1: "(a) Curl",
        // 2: "(b) Surf",
        // 3: "(c) Crush",
        choices: ["(a) Curl", "(b) Surf", "(c) Crush",],
        answer: "(c) Crush",
        image: "assets/images/crush.jpg"
    },
    {
        prompt: "In the Disney movie Robin Hood, what type of animal was Robin?",
        // 1: "(a) fox",
        // 2: "(b) bear",
        // 3: "(c) stork",
        choices: ["(a) fox", "(b) bear", "(c) stork"],
        answer: "(a) fox",
        image: "assets/images/robin.jpg"
    },
    {
        prompt:  "What is the owl's name in The Sword in the Stone?",
        // 1: "(a) Merlin",
        // 2: "(b) Archimedes",
        // 3: "(c) Socretes",
        choices: ["(a) Merlin", "(b) Archimedes", "(c) Socretes"],
        answer: "(b) Archimedes",
        image: "assets/images/archimedes.jpg"
    },
    {
        prompt: "In the Emperor's New Groove, what animal does Kuzco turn into?",
        // 1: "(a) donkey",
        // 2: "(b) monkey",
        // 3: "(c) llama",
        choices: ["(a) donkey", "(b) monkey", "(c) llama"],
        answer: "(c) llama",
        image: "assets/images/kusko.jpg"
    },
    {
        prompt: "In what year did Alice in Wonderland debut?",
        // 1: "(a) 1941\n(b) 1951\n(c) 1961",
        // 2: "(b) 1951",
        // 3: "(c) 1961",
        choices: ["(a) 1941",
                  "(b) 1951", 
                  "(c) 1961"],
        answer: "(b) 1951",
        image: "assets/images/alice.jpg"
    }];

// Create timer with :30 for every question
var timerId;
var timeLeft = 30;

//onclick function to start game
$("#start").click(function () {
    console.log("Start CLICKED!")
    // $("#res_div").hide();
    timerId = setInterval(countdown, 1000);
    function countdown() 
    {
        if (timeLeft === -1) {
            clearTimeout(timerId);
            //resultCount();
    }
        else {
            $("#display").text(timeLeft);
            timeLeft--;
        };
    };
    printQuestion();
    printAnswers();
});

// Print question function
function printQuestion() {
    $("#questionnaire").append(questionArray[counter].prompt);
};
   
function printAnswers() {
    for (i=0; i < 3; i++){
        var answerChoices = questionArray[counter].choices[i];
        $(".answerBox").append(questionArray[counter].choices[i]);
        console.log(answerChoices);
    }
    counter++;
    console.log("Counter Number: " + counter);
}

function checkAnswer() {
    var guess = document.getElementById('guess');
    var guessValue = guess.value;   
    console.log(guessValue);
    
    // check guess with answer
    if (guessValue === ) {
    }
}

$("#submit").on("click", function {
    checkAnswer();
})







// function printQuestion(){
//     // for (var i = 0; i < questionArray[this.clickCounter].length;i++){
//         document.forms.radioAnswers.elements.choices[clickCounter].checked = false;
//         var questionPrompt = document.text(questionArray[clickCounter].prompt);
//         $("#questionnaire").text(questionPrompt);
//         clickCounter++;
//         countdown();
//         console.log("hello");
//     }
//     var prompt = document.getElementById("prompt");
//     prompt.innerHTML = questionArray[this.clickCounter].prompt;
//     var point  = document.getElementById("point");
//     point.innerHTML="<span>score: " + score + "</span>";
//     printChoices();
// }
//        function arrayAppend() {
//             // Create for loop to run through questionArray
//             // for(var i=0; i < questionArray.length; i) {
//             var question = questionArray[clickCounter].prompt;
//             console.log(question);
//             //     i++;
//             // $("#questionnaire").text(questionArray[i]);
//             // console.log(questionArray[i].prompt);
//             // };
//             // for (var i =0; i < letters.length; i++) {
//             //     var question = $("<div>");
//             //     question.addClass("letter-button letter letter-button-color");
//             //     question.attr("data-letter", questionArray[i].prompt);
//             //     question.text(questionArray[i].prompt);
//             //     $("#qestionnaire").append(question);
//        };
// });
// // // Create for loop to run through questionArray
// // for(var i=1; i < questionArray.length; i++) {
// //     questionArray[i-1].prompt;
// //     $("#questionnaire").html(questionArray[i-1].prompt);
// //     console.log(questionArray[i-1].prompt);




