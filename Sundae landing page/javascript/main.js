function main() {
  $('.showcase').addClass('double');

  $('.showcase img').click(function() {
    $(this).effect( "bounce", {times:2}, 'slow');
  });

  $('#double-btn').click(function() {
    $('.showcase').removeClass('banana granola smarties sprinkles strawberry');
    $('.showcase').addClass('double')
  });

  $('#banana-btn').click(function() {
    $('.showcase').removeClass('double granola smarties sprinkles strawberry');
    $('.showcase').addClass('banana')
  });

  $('#granola-btn').click(function() {
    $('.showcase').removeClass('double banana smarties sprinkles strawberry');
    $('.showcase').addClass('granola')
  });

  $('#smarties-btn').click(function() {
    $('.showcase').removeClass('double banana granola sprinkles strawberry');
    $('.showcase').addClass('smarties')
  });

  $('#sprinkles-btn').click(function() {
    $('.showcase').removeClass('double banana granola smarties strawberry');
    $('.showcase').addClass('sprinkles')
  });

  $('#strawberry-btn').click(function() {
    $('.showcase').removeClass('double banana granola smarties sprinkles');
    $('.showcase').addClass('strawberry')
  });

}

$(document).ready(main);
