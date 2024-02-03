
/// scroll up
const scrollUpContainer = document.getElementById('scroll-up-container');

window.addEventListener('scroll', () => {
  if (window.pageYOffset > 0) {
    scrollUpContainer.classList.add('active');
  } else {
    scrollUpContainer.classList.remove('active');
  }
});


///loader
document.addEventListener("DOMContentLoaded", function () {
  showLoader();
});

window.addEventListener("load", function () {
  setTimeout(hideLoader, 1500);
});

function showLoader() {
  document.querySelector(".loader-container").style.display = "flex";
}

function hideLoader() {
  document.querySelector(".loader-container").style.display = "none";
}
