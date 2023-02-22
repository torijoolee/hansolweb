(() => {
  const blogBar = document.querySelectorAll(".blog .bar-lg");
  const container = document.querySelector(".scroll-con");

  let current = 0;

  for (let i = 0; i < blogBar.length; i++) {
    blogBar[i].dataset.link = i;

    blogBar.forEach((bar) => {
      bar.addEventListener("click", (e) => {
        blogBar[i].classList.remove("active");
        // console.log(e.target.dataset.link);
        current = parseInt(e.target.dataset.link);
        blogBar[current].classList.add("active");
        if (current == 0) {
          container.style.transform = `translateX(0vw)`;
          container.style.transition = `0.5s`;
        }
        if (current == 1) {
          container.style.transform = `translateX(-80vw)`;
          container.style.transition = `0.5s`;
        }
        if (current == 2) {
          container.style.transform = `translateX(-161vw)`;
          container.style.transition = `0.5s`;
        }
      });
    });
  }
})();
