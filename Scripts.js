var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var texto = this.nextElementSibling;
    if (texto.style.display === "block") {
      texto.style.display = "none";
    } else {
      texto.style.display = "block";
    }
  });
}