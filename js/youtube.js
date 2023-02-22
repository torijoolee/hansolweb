(() => {
  const youtubeBar = document.querySelectorAll(".youtube .bar-lg");
  const container = document.querySelector(".youtube-container");

  let current = 0;

  for (let i = 0; i < youtubeBar.length; i++) {
    youtubeBar[i].dataset.link = i;
  }

  youtubeBar.forEach((bar) => {
    bar.addEventListener("click", (e) => {
      // console.log(e.target.dataset.link);
      current = parseInt(e.target.dataset.link);
      console.log(current);
      if (current == 0) {
        container.style.transform = `translateX(0vw)`;
        container.style.transition = `0.5s`;
      }
      if (current == 1) {
        container.style.transform = `translateX(-80vw)`;
        container.style.transition = `0.5s`;
      }
      if (current == 2) {
        container.style.transform = `translateX(-160vw)`;
        container.style.transition = `0.5s`;
      }
    });
  });
})();
