var hamburger = $('#hamburger-icon');
var navbarLinks = $('.navbar-links');
var navHeaderWrapper = $('.navHeaderWrapper');
var navHeaderTop = $('.navHeaderTop');

hamburger.click(function () {
  navbarLinks.toggle();
  navHeaderWrapper.toggleClass('menu-open'); // Toggle the background class
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

function closer() {
  if ($(window).width() <= 768) {
    navbarLinks.hide(); // Hide the navbar links only for smaller screens
    navHeaderWrapper.removeClass('menu-open');
    hamburger.removeClass('active');
  }
}

/* Open when someone clicks on the span element */
function openNav() {
  // This seems to be handling a separate overlay menu, which may not be needed
  // if you are toggling the .navbar-links visibility instead
  // You may need to adjust this part depending on how your overlay menu should work
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
};
