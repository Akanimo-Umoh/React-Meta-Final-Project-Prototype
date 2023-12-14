var prevScrollpos = window.scrollY;
window.onscroll = function() {
  var currentScrollPos = window.scrollY;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-100px";
  }
  // document.querySelector(".togglenav.active").style.top = "0";
  prevScrollpos = currentScrollPos;
}
 
function toggleMenu() {
  const menuToggle = document.querySelector('.menuToggle');
  const secondary_nav = document.querySelector('.secondary-nav');
  menuToggle.classList.toggle('active')
  secondary_nav.classList.toggle('active')
  // document.querySelector(.)
}