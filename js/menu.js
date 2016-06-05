(function(){
  var toggler = document.getElementById('toggle');

    toggler.onclick = function(evt){
      evt.preventDefault();
      toggler.classList.toggle('main-nav__toggle--close');
      document.getElementById('main-nav-list').classList.toggle('main-nav__list--visible');
    }
})()
