const toggleBar = document.querySelector(".toggle-bar");

const panelElems = document.querySelectorAll(".panel-heading");

panelElems.forEach((item) => {
  item.addEventListener("click", function (e) {
    for (let i = 0; i < panelElems.length; i++) {
      panelElems[i].classList.remove("active");
    }
    console.log(e.target);
    e.target.parentNode.classList.toggle("active");
  });
});
