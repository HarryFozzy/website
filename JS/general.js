
var sub = document.getElementsByClassName("submitted");
var i;

for (i = 0; i < sub.length; i++) {
  sub[i].addEventListener("click", function() {
    var overlay = document.getElementById('form-overlay');
    if (overlay.style.display === "block") {
      overlay.style.display = "none";
    } else {
      overlay.style.display = "block";
    }
  });
}