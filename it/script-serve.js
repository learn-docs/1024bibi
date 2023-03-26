document.addEventListener('DOMContentLoaded', function() {
  var cards = document.querySelectorAll('.service-card');
  var windowHeight = window.innerHeight;

  function checkPosition() {
    for (var i = 0; i < cards.length; i++) {
      var card = cards[i];
      var positionFromTop = card.getBoundingClientRect().top;

      if (positionFromTop - windowHeight <= 0) {
        card.classList.add('animated', 'fadeInUp');
      }
    }
  }

  window.addEventListener('scroll', checkPosition);
  window.addEventListener('resize', checkPosition);

  checkPosition();
});
