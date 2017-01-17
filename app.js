$( document ).ready(function() {

  let player = 1;
  let table = $('table');
  let message = $('#message');
  let turn = $('#turn');
  displayPlayer(player);

  $('td').click(function() {
    td = $('this');
    console.log('hello');
    if (!alreadyPlayed(td)) {
      const pattern = crossOrCircle(player);
      addClass(td, pattern);
      if (checkIfPlayerWon(table, pattern)) {
        message.html('Player ' + player + ' has won!!!');
        turn.html('');
      } else {
        player = setNextPlayer(player);
        displayPlayer(player);
      }
    } else {
      message.html('This box is already checked!!!');
    }
  });


  function setNextPlayer(player) {
    if (player == 1) {
      return 2;
    } else {
      return 1;
    }
  };

  function crossOrCircle(player) {
    if (player === 1) {
      return 'cross';
    } else {
      return 'circle';
    }
  };

  function displayPlayer(player) {
    turn.html('Player turn: ' + player);
  };

  function alreadyPlayed(td) {
    if (td.hasClass('cross') || td.hasClass('circle')) {
      return true;
    } else {
      return false;
    }
  }

  function addClass(td, pattern) {
    return td.addClass(pattern);
  }

  function checkIfPlayerWon() {

  }


})