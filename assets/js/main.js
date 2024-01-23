var hamburger = $('#hamburger-icon');
var navbarLinks = $('.navbar-links');
var navHeaderWrapper = $('.navHeaderWrapper');
var navHeaderTop = $('.navHeaderTop');

hamburger.click(function () {
  navbarLinks.toggle(); // Toggle the visibility of the navbar links
  navHeaderWrapper.toggleClass('menu-open'); // Toggle the background class
  if(navHeaderWrapper.hasClass('menu-open')) {
    navHeaderTop.show(); // Show the logo if menu is open
  } else {
    navHeaderTop.hide(); // Hide the logo if menu is closed
  }
  hamburger.toggleClass('active');
  return false;
});

function closer() {
  navbarLinks.hide(); // Hide the navbar links
  navHeaderWrapper.removeClass('menu-open'); // Ensure the background class is removed
  navHeaderTop.hide(); // Hide the logo
  hamburger.removeClass('active');
}

/* Open when someone clicks on the span element */
function openNav() {
  if (isOn) {
    document.getElementById("myNav").style.height = "100%";
    $(".line").css("background", "white");
    isOn = false;
  } else {
    document.getElementById("myNav").style.height = "0%";
    $(".line").css("background", "black");
    isOn = true;
  }
}

window.onscroll = function() {
  var navHeaderWrapper = document.querySelector('.navHeaderWrapper');
  if (window.scrollY > 350) {
      navHeaderWrapper.classList.add('scrolled');
  } else {
      navHeaderWrapper.classList.remove('scrolled');
  }
};

