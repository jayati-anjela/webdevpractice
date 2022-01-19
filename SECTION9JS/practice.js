var inputtext = prompt("Write your tweet: ");
var remnum = 240 - inputtext.length;
alert("You have written " + inputtext.length + " characters. You have " + remnum + " characters remaining.")

// day 2 of JS -> 20:17

var name = "Juno";
var nickname = name.slice(0, 3); // to show slice function
alert(nickname);

// tweeter character counter (140 characters)

var inputtext = prompt("Write your tweet: ");
var remnum = 240 - inputtext.length;
var tweet = inputtext.slice(0,140);
alert("Your tweet is: " + tweet + " any missing part goes beyond the character limit.");
alert("You have written " + inputtext.length + " characters. You have " + remnum + " characters remaining.")

// compact code for the above ^

var inputtext = prompt("Write your tweet: ");
alert("Your tweet is: " + inputtext.slice(0,140) );
