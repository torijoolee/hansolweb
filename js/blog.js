(() => {
  const blogBar = document.querySelectorAll(".blog .bar-lg");
  const container = document.querySelector(".blog-contents");
  const blogItem = document.querySelector(".blog-item");

  const itemWidth = blogItem.offsetWidth;

  let current = 0;

  // viewport
  const blogViewport = document.querySelector(".viewport");
  blogViewport.style.background = "transparent";
  blogViewport.style.width = `${itemWidth * 4}px`;
  blogViewport.style.height = "500px";
  blogViewport.style.transform = `translateX(${itemWidth / 2}px)`;

  // moving
  for (let i = 0; i < blogBar.length; i++) {
    blogBar[i].dataset.link = i;

    blogBar.forEach((bar) => {
      bar.addEventListener("click", (e) => {
        blogBar[i].classList.remove("active");
        // console.log(e.target.dataset.link);
        current = parseInt(e.target.dataset.link);
        blogBar[current].classList.add("active");
        if (current == 0) {
          container.style.transform = `translateX(0)`;
          container.style.transition = `0.5s`;
        }
        if (current == 1) {
          container.style.transform = `translateX(${-itemWidth * 4}px)`;
          container.style.transition = `0.5s`;
        }
        if (current == 2) {
          container.style.transform = `translateX(${-itemWidth * 8}px)`;
          container.style.transition = `0.5s`;
        }
      });
    });
  }
})();
