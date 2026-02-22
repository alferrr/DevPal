addEventListener("DOMContentLoaded", () => {
  const euri = document.getElementById("euri");
  const jenny = document.getElementById("jenny");
  const charles = document.getElementById("charles");

  const onPc = window.matchMedia("(min-width: 1024px)");

  if (onPc.matches) {
    pcAnimation();
  }
  function pcAnimation() {
    euri.addEventListener("mouseover", () => {
      jenny.classList.remove("active");
      eurissa();
    });

    jenny.addEventListener("mouseover", () => {
      euri.classList.remove("active");

      jennyM();
    });

    euri.addEventListener("mouseout", () => {
      euri.classList.remove("active");

      setTimeout(() => {
        charles.classList.remove("euriActive");
      }, 100);
    });

    jenny.addEventListener("mouseout", () => {
      jenny.classList.remove("active");
      charles.classList.remove("jennyActive");
    });

    function eurissa() {
      charles.classList.add("euriActive");

      setTimeout(() => {
        euri.classList.add("active");
      }, 100);
    }
    function jennyM() {
      charles.classList.add("jennyActive");

      setTimeout(() => {
        jenny.classList.add("active");
      }, 100);
    }
  }
});
