function modal() {
    let more = document.querySelector(".more"),
        overlay = document.querySelector(".overlay"),
        close = document.querySelector(".popup-close"),
        descriptionBtn = document.querySelectorAll(".description-btn");

    more.addEventListener("click", () => {
        overlay.style.display = "block";
        more.classList.add("more-splash");
        document.body.style.overflow = "hidden";
        // запрещает прокрутку при вызове модального окна
    });

    close.addEventListener("click", () => {
        overlay.style.display = "none";
        more.classList.remove("more-splash");
        document.body.style.overflow = "";
    });

    descriptionBtn.forEach(descriptionBtn =>
        descriptionBtn.addEventListener("click", () => {
            overlay.style.display = "block";
            more.classList.add("more-splash");
            document.body.style.overflow = "hidden";
        }));
}

export {modal};