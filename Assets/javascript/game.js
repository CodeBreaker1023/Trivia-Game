// Declare variables
var clockRunning = false;
var intervalId;

// Create start button
$("#start").click(timer.start);
$("#reset").click(timer.reset);
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
        
        var currentTime = stopwatch.timeConverter(timer.time)
    
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



