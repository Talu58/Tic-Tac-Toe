$( document ).ready(function() {

  let player = 1;
  let table = $('table');
  let message = $('#message');
  let turn = $('#turn');
  displayPlayer(player);

  $('td').click(function() {
    td = $(this);
    if (!alreadyPlayed(td)) {
      message.html('');
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

  $('#reset').click(function() {
    player = 1;
    message.html('');
    reset(table);
    displayPlayer(player);
  })


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

  function reset(table) {
    table.find('td').each(function() {
      $(this).removeClass('cross').removeClass('circle');
    })
  }

  function checkIfPlayerWon(table, pattern) {
    if (table.find('#1').hasClass(pattern) && table.find('#2').hasClass(pattern) && table.find('#3').hasClass(pattern)) {
      return true;
    } else if (table.find('#4').hasClass(pattern) && table.find('#5').hasClass(pattern) && table.find('#6').hasClass(pattern)) {
      return true;
    } else if (table.find('#7').hasClass(pattern) && table.find('#8').hasClass(pattern) && table.find('#9').hasClass(pattern)) {
      return true;
    } else if (table.find('#1').hasClass(pattern) && table.find('#4').hasClass(pattern) && table.find('#7').hasClass(pattern)) {
      return true;
    } else if (table.find('#2').hasClass(pattern) && table.find('#5').hasClass(pattern) && table.find('#8').hasClass(pattern)) {
      return true;
    } else if (table.find('#3').hasClass(pattern) && table.find('#6').hasClass(pattern) && table.find('#9').hasClass(pattern)) {
      return true;
    } else if (table.find('#1').hasClass(pattern) && table.find('#5').hasClass(pattern) && table.find('#9').hasClass(pattern)) {
      return true;
    } else if (table.find('#7').hasClass(pattern) && table.find('#5').hasClass(pattern) && table.find('#3').hasClass(pattern)) {
      return true;
    } else {
      return false;
    }
  }


})