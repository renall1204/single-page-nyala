document.addEventListener("DOMContentLoaded", function () {
  var playButtons = document.querySelectorAll(".play-button");
  var videoPopup = document.getElementById("videoPopup");
  var closeBtn = document.getElementById("closeBtn");

  playButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      videoPopup.style.display = "flex";
    });
  });

  closeBtn.addEventListener("click", function () {
    videoPopup.style.display = "none";
  });

  // Close the popup when clicking outside the video
  videoPopup.addEventListener("click", function (event) {
    if (event.target === videoPopup) {
      videoPopup.style.display = "none";
    }
  });
});
