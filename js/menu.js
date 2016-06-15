(function(){
  var toggler = document.getElementById('toggle');
  var nav = document.querySelectorAll('.main-nav__list');
  var i;

  toggler.addEventListener('click', function(evt) {
    evt.preventDefault();
    toggler.classList.toggle('main-nav__toggle--close');
    for(i = 0; i < nav.length; i++) {
      nav[i].classList.toggle('main-nav__list--visible');
    };
  });
})()
