(() => {
  // header carusel
  const prevBtn = document.querySelector(".prev");
  const nextBtn = document.querySelector(".next");
  const visualElem = document.querySelector(".img-con .slide");
  const headerBg = ["main01.jpg", "main02.jpg", "main03.jpg", "main04.jpg"];
  const barElems = document.querySelectorAll(".visual .control .bar");
  console.log(barElems);

  let currentPage = 0;
  let totalPage = headerBg.length;

  prevBtn.addEventListener("click", function () {
    if (currentPage > 0) {
      currentPage--;
    } else {
      currentPage = totalPage - 1;
    }
    console.log(currentPage);
    changeImage();
  });

  nextBtn.addEventListener("click", function () {
    if (currentPage < totalPage - 1) {
      currentPage++;
    } else {
      currentPage = 0;
    }
    console.log(currentPage);
    changeImage();
  });

  function changeImage() {
    visualElem.style.background = `url(/image/${headerBg[currentPage]}) no-repeat 0 0 `;
    visualElem.style.transition = `0.5s`;
    barActive();
  }
  changeImage();

  function barActive() {
    barElems.forEach((bar) => {
      bar.classList.remove("active");
    });
    barElems[currentPage].classList.add("active");
  }
})();
