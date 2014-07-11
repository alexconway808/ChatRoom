
$( document ).ready(function() {

  $('#submitButton').click(function() {
  
    getUsername(); getMessages(); appendNameandChat();
    clearstuff();
  });

  function getUsername(){
    Return $('#username').val();
  };

  function getMessages(){
    Return $('#messages').val();
  };

  function appendNameandChat(){
    $('#chatLog').append('<li>' + usernametext + ' : ' + chattext +'</li>');
  };

  function clearstuff(){
    $('#username').val('');
    $('#messages').val('');
  };

  });
