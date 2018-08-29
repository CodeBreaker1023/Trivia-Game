// Declare variables
var clockRunning = false;
var intervalId;
var questionArray = [
    {
        prompt: "Who is Snow White's Prince?",
        1: "(a) Prince Phillip",
        2: "(b) Prince Florian",
        3: "(c) Prince Charming",
        answer: "(b) Prince Florian"
    },
    {
        prompt: "In the Lion King, what is Simba's mother's name?",
        1: "(a) Sarabi",
        2: "(b) Prince Florian",
        3: "(c) Prince Charming",
        answer: "(a) Sarabi"
    },
    {
        prompt: "In Aladin, how long was Genie stuck in the lamp?",
        1: "(a) 1,000 years\n(b) 5,000 years\n(c) 10,000 years",
        2: "(b) 5,000 years",
        3: "(c) 10,000 years",
        answer: "(c) 10,000 years"
    },
    {
        prompt: "In the Jungle Book, who teaches Mowgli the Bare Necessities?",
        1: "(a) Maguera",
        2: "(b) Baloo",
        3: "(c) King Louie",
        answer: "(b) Baloo"
    },
    {
        prompt: "Cruella de Vil is the villian in which Disney movie?",
        1: "(a) The Rescuers",
        2: "(b) 101 Dalmations",
        3: "(c) The Aristocats",
        answer: "(b) 101 Dalmations"
    },
    {
        prompt: "In Finding Nemo, what's the name of the turtle that Nemo\n\
                rides the East Australian Current with?",
        1: "(a) Curl",
        2: "(b) Surf",
        3: "(c) Crush",
        answer: "(c) Crush"
    },
    {
        prompt: "In the Disney movie Robin Hood, what type of animal was Robin?",
        1: "(a) fox",
        2: "(b) bear",
        3: "(c) rabbit",
        answer: "(a) fox"
    },
    {
        promt:  "What is the owl's name in The Sword in the Stone?",
        1: "(a) Merlin",
        2: "(b) Archimedes",
        3: "(c) Socretes",
        answer: "b"
    },
    {
        prompt: "In the Emperor's New Groove, what animal does Kuzco turn into?",
        1: "(a) donkey",
        2: "(b) monkey",
        3: "(c) llama",
        answer: "(c) llama"
    },
    {
        prompt: "In what year did Alice in Wonderland debut?",
        1: "(a) 1941\n(b) 1951\n(c) 1961",
        2: "(b) 1951",
        3: "(c) 1961",
        answer: "(b) 1951"
    }];
    
// Create for loop to run through questionArray
for(var i=0; i < questionArray.length; i++) {
    $("#questionnaire").text(questionArray[i].prompt);
    $()

}

var timerId;
   var timeLeft = 30;
   $("#start").click(function () {
      // $("#res_div").hide();
       timerId = setInterval(countdown, 1000);
       function countdown() {
           if (timeLeft === -1) {
               clearTimeout(timerId);
               //resultCount();
           }
           else {
               $("#display").text(timeLeft);
               timeLeft--;
               console.log(timeLeft);
           }
       }
   });


// make sure only one answer can be selected



