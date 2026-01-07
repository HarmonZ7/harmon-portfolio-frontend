(function () {
  ("use strict");

  /* ------------------------------
     Mobile Menu Toggle
  ------------------------------ */
  const menuToggle = document.querySelector(".s-header__menu-toggle");
  const body = document.body;

  if (menuToggle) {
    menuToggle.addEventListener("click", function (e) {
      e.preventDefault();
      menuToggle.classList.toggle("is-clicked");
      body.classList.toggle("menu-is-open");
    });
  }

  /* ------------------------------
     Sticky Header on Scroll
  ------------------------------ */
  const header = document.querySelector(".s-header");
  const intro = document.querySelector("#intro");

  if (header && intro) {
    const triggerHeight = intro.offsetHeight - 100;

    window.addEventListener("scroll", function () {
      if (window.scrollY > triggerHeight) {
        header.classList.add("sticky");
      } else {
        header.classList.remove("sticky");
      }
    });
  }

  /* ------------------------------
     Back to Top Button
  ------------------------------ */
  const backToTop = document.querySelector(".ss-go-top");

  if (backToTop) {
    window.addEventListener("scroll", function () {
      if (window.scrollY > 600) {
        backToTop.classList.add("link-is-visible");
      } else {
        backToTop.classList.remove("link-is-visible");
      }
    });
  }

  /* ------------------------------
     Close Mobile Menu on Link Click
  ------------------------------ */
  const navLinks = document.querySelectorAll(".s-header__nav a");

  navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
      if (body.classList.contains("menu-is-open")) {
        body.classList.remove("menu-is-open");
        menuToggle.classList.remove("is-clicked");
      }
    });
  });

  /* ------------------------------
     Intro Fade-In / Slide-Up
  ------------------------------ */
  document.addEventListener("DOMContentLoaded", () => {
    if (intro) {
      intro.style.opacity = 0;
      intro.style.transform = "translateY(30px)";
      intro.style.transition = "opacity 0.8s ease-out, transform 0.8s ease-out";

      requestAnimationFrame(() => {
        intro.style.opacity = 1;
        intro.style.transform = "translateY(0)";
      });
    }
  });

  /* ------------------------------
   Smooth Scroll for Section Buttons
------------------------------ */
  const sectionButtons = document.querySelectorAll(
    ".s-intro__content-btns a, .s-header__menu-links a, .s-intro__scroll-down a, .ss-go-top a"
  );

  sectionButtons.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      e.preventDefault(); // stop default jump
      const targetId = btn.getAttribute("href"); // e.g., "#about"
      const targetSection = document.querySelector(targetId);
      if (targetSection) {
        targetSection.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  });
})();
