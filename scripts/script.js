function toggleDarkLight() {
  var body = document.getElementById("body");
  var currentClass = body.className;

  if (currentClass == "dark-mode") {
    trans();
    btn.textContent = "@light";
    body.className = "light-mode";
  } else {
    trans();
    btn.textContent = "@dark";
    body.className = "dark-mode";
  }
 }

let trans = () => {
  document.documentElement.classList.add("transition");
  window.setTimeout(() => {
    document.documentElement.classList.remove("transition");
  }, 1000);
};