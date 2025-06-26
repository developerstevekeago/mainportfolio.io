document.addEventListener("DOMContentLoaded", function () {
        // Mobile Navigation
        const hamburger = document.querySelector(".hamburger");
        const navLinks = document.querySelector(".nav-links");
        const navLinksItems = document.querySelectorAll(".nav-links a");

        hamburger.addEventListener("click", function () {
          this.classList.toggle("active");
          navLinks.classList.toggle("active");
        });

        navLinksItems.forEach((item) => {
          item.addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = this.getAttribute("href");
            const targetSection = document.querySelector(targetId);

            // Close mobile menu if open
            hamburger.classList.remove("active");
            navLinks.classList.remove("active");

            // Smooth scroll to section
            window.scrollTo({
              top: targetSection.offsetTop - 80,
              behavior: "smooth",
            });
          });
        });

        // Sticky Navigation
        window.addEventListener("scroll", function () {
          const navbar = document.querySelector(".navbar");
          const backToTop = document.querySelector(".back-to-top");

          if (window.scrollY > 100) {
            navbar.classList.add("scrolled");
            backToTop.classList.add("active");
          } else {
            navbar.classList.remove("scrolled");
            backToTop.classList.remove("active");
          }
        });

        // Back to Top Button
        const backToTop = document.querySelector(".back-to-top");
        backToTop.addEventListener("click", function () {
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          });
        });

        // Scroll Reveal Animation
        const hiddenElements = document.querySelectorAll(".hidden");
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                entry.target.classList.add("show");
              }
            });
          },
          {
            threshold: 0.1,
          }
        );

        hiddenElements.forEach((el) => observer.observe(el));

        // Portfolio Filter
        const filterBtns = document.querySelectorAll(".filter-btn");
        const portfolioItems = document.querySelectorAll(".portfolio-item");

        filterBtns.forEach((btn) => {
          btn.addEventListener("click", function () {
            // Remove active class from all buttons
            filterBtns.forEach((btn) => btn.classList.remove("active"));
            // Add active class to clicked button
            this.classList.add("active");

            const filterValue = this.getAttribute("data-filter");

            portfolioItems.forEach((item) => {
              if (
                filterValue === "all" ||
                item.getAttribute("data-category") === filterValue
              ) {
                item.style.display = "block";
              } else {
                item.style.display = "none";
              }
            });
          });
        });

        // Testimonial Slider
        const testimonialSlides =
          document.querySelectorAll(".testimonial-slide");
        const sliderDots = document.querySelectorAll(".slider-dot");
        let currentSlide = 0;

        function showSlide(index) {
          testimonialSlides.forEach((slide) =>
            slide.classList.remove("active")
          );
          sliderDots.forEach((dot) => dot.classList.remove("active"));

          testimonialSlides[index].classList.add("active");
          sliderDots[index].classList.add("active");
          currentSlide = index;
        }

        sliderDots.forEach((dot) => {
          dot.addEventListener("click", function () {
            const slideIndex = parseInt(this.getAttribute("data-slide"));
            showSlide(slideIndex);
          });
        });

        // Auto slide change
        setInterval(() => {
          currentSlide = (currentSlide + 1) % testimonialSlides.length;
          showSlide(currentSlide);
        }, 5000);

        // Form Submission
        const form = document.getElementById("form");
        form.addEventListener("submit", function (e) {
          e.preventDefault();
          alert("Thank you for your message! We will get back to you soon.");
          form.reset();
        });

        // Parallax Effect for Hero Section
        window.addEventListener("scroll", function () {
          const hero = document.querySelector(".hero");
          const scrollPosition = window.scrollY;
          hero.style.backgroundPositionY = scrollPosition * 0.5 + "px";
        });
      });