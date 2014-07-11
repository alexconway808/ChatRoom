
$( document ).ready(function() {
  // console.log( "ready!" );

  $('#submitButton').click(function() {
  // console.log("It works");
  
    createUsername();
    createMessages();
    appendNameandChat();
    clearstuff();
  });

  var usernametext = "";
  var chattext = "";

  function createUsername(){
    usernametext = $('#username').val();
    // console.log(usernametext);
  };

  function createMessages(){
    chattext = $('#messages').val();
    // console.log(chattext);
  };

  function appendNameandChat(){
    $('#chatLog').append('<li>' + usernametext + chattext +'</li>');
  };

  function clearstuff(){
    $('#username').val('');
    $('#messages').val('');
  };

  });

// });
// 
