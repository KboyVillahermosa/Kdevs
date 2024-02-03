
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
  