
$( document ).ready(function() {

  $('#submitButton').click(function() {
  
    createUsername();
    createMessages();
    appendNameandChat();
    clearstuff();
  });

  var usernametext = "";
  var chattext = "";

  function createUsername(){
    usernametext = $('#username').val();
  };

  function createMessages(){
    chattext = $('#messages').val();
  };

  function appendNameandChat(){
    $('#chatLog').append('<li>' + usernametext + ' ' + ':' + ' ' + chattext +'</li>');
  };

  function clearstuff(){
    $('#username').val('');
    $('#messages').val('');
  };

  });
