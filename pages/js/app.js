document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll("main");
  const navItems = document.querySelectorAll("aside h4 + ul li");

  const removeActive = () => {
    navItems.forEach((item) => item.classList.remove("active"));
  };

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute("id");
          removeActive();
          const activeItem = Array.from(navItems).find((li) =>
            li.querySelector(`a[href="#${id}"]`),
          );
          if (activeItem) activeItem.classList.add("active");
        }
      });
    },
    {
      root: null,
      threshold: 0.3,
      rootMargin: "0px 0px -50% 0px",
    },
  );

  sections.forEach((section) => observer.observe(section));
});
