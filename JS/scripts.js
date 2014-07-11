
$( document ).ready(function() {
  //console.log( "ready!" );
});

  $('#submitButton').on('click',function() {
  createUsername();
  createMessages();
  appendNameandChat();
  clearstuff();
  });

  function createUsername(){
    var usernametext = $('#username').val();
  };

  function createMessages(){
    var chattext = $('#messages').val();
  };

  function appendNameandChat(usernametext, chattext){
    $('#chatLog').append(usernametext + chattext);
  };

  function clearstuff(){
    $('#username').val('');
    $('#messages').val('');
  };
