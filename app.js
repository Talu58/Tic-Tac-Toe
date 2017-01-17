$(function() {

  var player = 1;
  var table = $('table');
  var message = $('#message');
  var turn = $('#turn');


  $('td').click(function() {
    td = $('this');
    if (!alreadyPlayed(td)) {
      var pattern = crossOrCircle(player);
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


  var setNextPlayer = (player) => {
    if (player === 1) {
      player = 2;
    } else {
      player = 1;
    }
  };

  var crossOrCircle = (player) => {
    if (player === 1) {
      return 'cross';
    } else {
      return 'circle';
    }
  };

  var displayPlayer = (player) => {
    turn.html('Player turn: ' + player);
  };

  var alreadyPlayed = (td) => {
    if (td.hasClass('cross') || td.hasClass('circle')) {
      return true;
    } else {
      return false;
    }
  }

  var addClass = (td, pattern) => {
    return td.addClass(pattern);
  }


})