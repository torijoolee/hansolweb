(() => {
  if (matchMedia("screen and (min-width: 640px)").matches) {
    // 640px 이상에서 사용할 JavaScript
    // viewport

    const youtubeBar = document.querySelectorAll(".youtube .bar-lg");
    let container = document.querySelector(".youtube-container");
    const itemWidth = document.querySelector(".you-item").offsetWidth;
    let current = 0;
    let firstView = (container.style.transform = `translateX(${
      itemWidth / 2
    }px)`);
    const viewport = document.querySelector(".you-viewport");

    container.style.transform = `translateX(${0}px)`;
    viewport.style.background = "transparent";
    viewport.style.width = `${itemWidth * 4}px`;
    viewport.style.transform = `${firstView}`;

    // moving
    for (let i = 0; i < youtubeBar.length; i++) {
      youtubeBar[i].dataset.link = i;
      youtubeBar.forEach((bar) => {
        bar.addEventListener("click", (e) => {
          youtubeBar[i].classList.remove("active");
          current = parseInt(e.target.dataset.link);
          youtubeBar[current].classList.add("active");

          if (current == 0) {
            container.style.transform = `translateX(${0}px)`;
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
  } else {
    // 640px 미만에서 사용할 JavaScript
    console.log(document.querySelector(".youtube").offsetWidth);

    const smallView = document.querySelector(".you-viewport");
    const smallyouItem = document.querySelector(".you-item").offsetWidth;

    smallView.style.transform = `translateX(${32}px)`;
    console.log(smallyouItem);
    smallView.style.width = `${smallyouItem * 2}px`;
  }

  window.onresize = function () {
    document.location.reload();
  };
})();
