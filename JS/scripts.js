
$( document ).ready(function() {
  console.log( "ready!" );

  $('#submit').click(function() {
    console.log("whatup"); When click submit button, something will happen
    var usernametext = username.value;
    var chattext = textarea.value  
    add usernametext + chattext
    append the result to the chat log area  
    
  });   
});

//Tasks:

//Build box for text area (HTML)
//Build box for username
//Create button
//Build chat log for username and text to appear

//Within the box allow text to be written and "moved" over, 
//with username to chat log on submit button click

// (function(){

//   var textarea = document.getElementById("textarea");
//   var username = document.getElementById("username");

// })();

//Clear textarea after submit button is clicked