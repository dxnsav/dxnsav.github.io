function toggleDarkLight() {
  var body = document.getElementById("body");
  var currentClass = body.className;

  //body.className = currentClass == "dark-mode" ? ("light-mode") : ("dark-mode");

  if (currentClass == "dark-mode") {
    trans();
    body.className = "light-mode";
  } else {
    trans();
    body.className = "dark-mode";
  }
 }

let trans = () => {
  document.documentElement.classList.add("transition");
  window.setTimeout(() => {
    document.documentElement.classList.remove("transition");
  }, 1000);
};