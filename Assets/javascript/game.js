// Declare variables
var clockRunning = false;
var intervalId;
var questionArray = [
    {
        prompt: "Who is Snow White's Prince?\n(a) Prince Phillip \n\
                (b) Prince Florian\n(c) Prince Charming",
        answer: "b"
    },
    {
        prompt: "In the Lion King, what is Simba's mother's name?\n\
                (a) Sarabi\n(b) Nala\n(c) Marembe",
        answer: "a"
    },
    {
        prompt: "In Aladin, how long was Genie stuck in the lamp?\n\
                (a) 1,000 years\n(b) 5,000 years\n(c) 10,000 years",
        answer: "c"
    },
    {
        prompt: "In the Jungle Book, who teaches Mowgli the Bare Necessities?\n\
                (a) Maguera\n(b) Baloo\n(c) King Louie",
        answer: "b"
    },
    {
        prompt: "Cruella de Vil is the villian in which Disney movie?\n\
                (a) The Rescuers\n(b) 101 Dalmations\n(c) The Aristocats",
        answer: "b",
    },
    {
        prompt: "In Finding Nemo, what's the name of the turtle that Nemo\n\
                rides the East Australian Current with? (a) Curl\n(b) Surf\n\
                (c) Crush",
        answer: "c"
    },
    {
        prompt: "In the Disney movie Robin Hood, what type of animal was Robin?\n\
                (a) fox\n(b) bear\n(c) rabbit",
        answer: "a"
    },
    {
        promt:  "What is the owl's name in The Sword in the Stone?\n\
                (a) Merlin\n(b) Archimedes\n(c) Bernard",
        answer: "b"
    },
    {
        prompt: "In the Emperor's New Groove, what animal does Kuzco turn into?\n\
                (a) donkey\n(b) elephant\n(c) llama",
        answer: "c"
    },
    {
        prompt: "In what year did Alice in Wonderland debut? (a) 1941\n\
                (b) 1951\n(c) 1961",
        prompt: "b"
    }
    }
        
    }
    }
var answerArray = ["a. Prince Charming b. "]

// Create start button
$("#start").on("click", function() {
    timer.start;
});
$("#reset").on("click", function() {
    timer.reset;
});
// multiple choice or true/false

// declare timer as a object variable with a start and stop function
var timer = {
    // start time
    time: 5,
    // reset function to start a new game
    newGame: function() {
  
      timer.time = 5;
  
      //  Reset timer to "05:00"
      $("#display").html("05:00");

    },
    
    //timer.start function
    start: function() {
        if (!clockRunning) {
          intervalId = setInterval(timer.count, -1000);
          clockRunning = true;
          console.log("start function");
        } else if (timer.time === 0){
            alert("Sorry you ran out of time!");
            clockRunning = false;
        }
    },

    //timer.counter function
    count: function() {

        //Decriment time by 1 second
            timer.time--;
        //  TODO: Get the current time, pass that into the stopwatch.timeConverter function,
        //        and save the result in a variable.
        
        var currentTime = timer.timeConverter(timer.time)
    
        //  TODO: Use the variable you just created to show the converted time in the "display" div.
        $("#display").html(currentTime);
    },
    
    timeConverter: function(t) {

        //  Takes the current time in seconds and convert it to minutes and seconds (mm:ss).
        var minutes = Math.floor(t / 60);
        var seconds = t - (minutes * 60);
    
        if (seconds < 10) {
          seconds = "0" + seconds;
        }
    
        if (minutes === 0) {
          minutes = "00";
        }
    
        else if (minutes < 10) {
          minutes = "0" + minutes;
        }
    
        return minutes + ":" + seconds;
      }
    };

// make sure only one answer can be selected



