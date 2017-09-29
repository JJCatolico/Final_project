(function() {
    window.onscroll = function(e) {
      var parallax = document.querySelectorAll(".parallax");

      var movement = (pageYOffset * 0.25)

      parallax.forEach(function(el, num) {
        var topValue = movement * (num * 5) * -1 + 'px';
        el.style.top = topValue;
      })
  }
})();
