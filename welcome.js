document.addEventListener('contextmenu', event => event.preventDefault()); //Right Click Disabled

function Open() {
  document.querySelectorAll(".Open")[0].style.animation = "OpenL 3s forwards";
  document.querySelectorAll(".Open")[1].style.animation = "OpenR 3s forwards";
  document.querySelectorAll(".Open")[2].style.animation = "OpenL 3s forwards";
  document.querySelectorAll(".Open")[3].style.animation = "OpenR 3s forwards";
  setTimeout(newmap,4500);
}


function newmap() {
  location.replace("tutorial.html");
}

document.body.addEventListener('contextmenu', (event) => {
  event.preventDefault();
});