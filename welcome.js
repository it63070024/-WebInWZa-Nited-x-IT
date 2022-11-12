

function Open() {
  document.querySelector(".OpenL").style.animation = "OpenL 3s forwards";
  document.querySelector(".OpenR").style.animation = "OpenR 3s forwards";
  setTimeout(newmap,5000);
}


function newmap() {
  location.replace("tutorial.html");
}

