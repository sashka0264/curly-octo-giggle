function slider() {
    let slideIndex = 1,
        // Тот слайд, который показывается в текущий момент
        slides = document.querySelectorAll(".slider-item"),
        prev = document.querySelector(".prev"),
        next = document.querySelector(".next"),
        dotsWrap = document.querySelector(".slider-dots"),
        dots = document.querySelectorAll(".dot");

    let showSlides = (n) => {
        if (n > slides.length) {
            slideIndex = 1;
        }

        if (n < 1) {
            slideIndex = slides.length;
        }

        slides.forEach((item) => {
            item.style.display = "none";
        });

        dots.forEach((item) => {
            item.classList.remove("dot-active");
        });

        slides[slideIndex - 1].style.display = "block";
        dots[slideIndex - 1].classList.add("dot-active");
    };
    showSlides();

    let plusSlides = (n) => {
        showSlides(slideIndex += n);
    };

    let currentSlide = (n) => {
        showSlides(slideIndex = n);
    };

    prev.addEventListener("click", () => {
        plusSlides(-1);
    });

    next.addEventListener("click", () => {
        plusSlides(1);
    });

    // Решаем проблему с точками

    dotsWrap.addEventListener("click", (event) => {
        for (let i = 0; i < dots.length + 1; i++) {
            if (event.target.classList.contains("dot") &&
                event.target == dots[i - 1]) {
                currentSlide(i);
            }
        }
    });
}

export {slider};