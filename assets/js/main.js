var hamburger = $('#hamburger-icon');
var navbarLinks = $('.navbar-links');
var navHeaderWrapper = $('.navHeaderWrapper');
var navHeaderTop = $('.navHeaderTop');

hamburger.click(function () {
  navbarLinks.toggle();
  navHeaderWrapper.toggleClass('menu-open'); 
  if (navHeaderWrapper.hasClass('menu-open') || window.scrollY > 100) {
    // If the menu is open or the page is scrolled down, show the logo
    navHeaderTop.show();
  } else {
    // If the menu is closed and the page is not scrolled down, hide the logo
    navHeaderTop.hide();
  }
  hamburger.toggleClass('active');
  return false;
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});

function closer() {
  if ($(window).width() <= 768) {
    navbarLinks.hide(); // Hide the navbar links only for smaller screens
    navHeaderWrapper.removeClass('menu-open');
    hamburger.removeClass('active');
  }
}

window.onscroll = function() {
  var navHeaderWrapper = document.querySelector('.navHeaderWrapper');
  if (window.scrollY > 100) {
    navHeaderWrapper.classList.add('scrolled');
    $('.navHeaderTop').show(); // Ensure the logo is shown when scrolled down
  } else {
    navHeaderWrapper.classList.remove('scrolled');
    if (!navHeaderWrapper.classList.contains('menu-open')) {
      // Hide the logo only if the menu is not open
      $('.navHeaderTop').hide();
    }
  }

  var head = document.querySelector('.container-fluid');
  var distanceY = window.scrollY || document.documentElement.scrollTop;
  var shrinkOn = 50; // The number of pixels scrolled down before fading starts

  if (distanceY > shrinkOn) {
    head.style.opacity = 1 - (distanceY - shrinkOn) / shrinkOn;
  } else {
    head.style.opacity = 1;
  }
};
