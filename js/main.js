(() => {
  // header carusel
  const prevBtn = document.querySelector(".prev");
  const nextBtn = document.querySelector(".next");
  const visualElems = document.querySelectorAll(".img-con .slide");
  const headerBg = ["main01.jpg", "main02.jpg", "main03.jpg", "main04.jpg"];

  function slideImage() {
    visualElems.style.background = "`url${}`";
  }
  slideImage();
})();
