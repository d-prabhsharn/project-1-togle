document.getElementById("toggle").onclick = function() {
  document.getElementById("main").classList.toggle("dark");
  this.classList.toggle("white");
  document.getElementById("sun-moon").classList.toggle("moon");
};