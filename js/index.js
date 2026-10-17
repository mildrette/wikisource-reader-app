  // Active navigation link switching
  function updateActiveNavLink() {
    var scrollPosition = $(window).scrollTop();

    $('.navbar-nav .nav-link.scroll').each(function() {
      var section = $(this.hash);

      if (section.length) {
        var sectionTop = section.offset().top - 100;
        var sectionBottom = sectionTop + section.outerHeight();

        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
          $('.navbar-nav .nav-link').removeClass('active');
          $(this).addClass('active');
        }
      }
    });
  }

  $(window).on('scroll', updateActiveNavLink);
  updateActiveNavLink();


// Dark mode toggle
const defaultMode = "light-mode"; // if prefer scheme is not available
const body = document.querySelector("body");

const mode = checkSavedMode() ? checkSavedMode() : detectColorMode();
body.classList.add(mode);
const toggle = document.querySelector(".toggle-theme");
toggle.addEventListener("click", toggleClass);

function checkSavedMode() {
  return localStorage.getItem("color-mode");
}
function saveColorMode(value) {
  localStorage.setItem("color-mode", value);
}

function detectColorMode() {
  if ( window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
    return "dark-mode";
  } else if (window.matchMedia) {
    return "light-mode";
  }
  return defaultMode;
}


function toggleClass() {
  // toggle body class selector
  $('body').toggleClass('light-mode dark-mode')

  body.classList.contains("dark-mode")
    ? saveColorMode("dark-mode")
    : saveColorMode("light-mode");
}