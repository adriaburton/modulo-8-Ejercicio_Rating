var radios = document.querySelectorAll('input[name=rate]');

document.addEventListener("click", function(event) {
  var targ = event.target.parentElement;
  if (!(targ && targ.classList.contains('rating'))) {
    radios.forEach(e => {
      if (e.checked) {
        e.checked = false;
      }
    });
  }
});