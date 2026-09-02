const progressBars = document.querySelectorAll(".progress-bar");

progressBars.forEach(function (bar) {
  const target = Number(bar.getAttribute("data-target"));
  const percentage = bar.closest(".skill-item").querySelector(".percentage");

  let current = 0;

  const animation = setInterval(function () {
    if (current >= target) {
      clearInterval(animation);
      return;
    }

    current++;

    bar.style.width = current + "%";
    percentage.textContent = current + "%";
  }, 20);
});
