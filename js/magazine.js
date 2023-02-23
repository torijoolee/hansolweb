(() => {
  // magazine caresel
  const slideBox = document.querySelector(".magazine .slide-box");
  const slideItem = document.querySelectorAll(".slide-box .slide-box-item");
  const prevBtn = document.querySelector(".mag-container .prev");
  const nextBtn = document.querySelector(".mag-container .next");

  let currentPage = 1;
  let totalPage = slideItem.length;
  const size = slideItem[0].clientWidth;
  console.log(size);

  for (let i = 1; i < totalPage; i++) {
    slideItem[i].style.left = i * size + "px";
  }
  slideBox.style.transform = `translateX( ${currentPage * -size}px) `;

  nextBtn.addEventListener("click", function () {
    slideBox.style.transition = "0.5s ease-in-out";
    currentPage++;
    console.log(currentPage);
    slideBox.style.transform = `translateX( ${currentPage * -size}px) `;
  });

  prevBtn.addEventListener("click", function () {
    slideBox.style.transition = "transform 0.5s ease-in-out";
    currentPage--;
    console.log(currentPage);

    slideBox.style.transform = `translateX( ${currentPage * -size}px) `;
  });

  // jump to first, last slide
  slideBox.addEventListener("transitionend", () => {
    if (slideItem[currentPage].id === "lastClone") {
      console.log("last");
      slideBox.style.transition = "none";
      currentPage = slideItem.length - 2;
      console.log(currentPage);
      slideBox.style.transform = `translateX( ${currentPage * -size}px) `;
    }
    if (slideItem[currentPage].id === "firstClone") {
      slideBox.style.transition = "none";
      currentPage = totalPage - currentPage;
      console.log(currentPage);
      slideBox.style.transform = `translateX( ${currentPage * -size}px) `;
    }
  });
})();
