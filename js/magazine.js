(() => {
  // magazine caresel
  const slideCon = document.querySelectorAll(".slide-box-item");
  const magPrevBtn = document.querySelector(".magazine .prev");
  const magNextBtn = document.querySelector(".magazine .next");

  let currnetpage = 0;

  for (let i = 0; i < slideCon.length; i++) {
    slideCon[i].dataset.index = i;
  }
  magPrevBtn.addEventListener("click", function () {});
})();
