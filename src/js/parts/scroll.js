function scroll() {
    let about = document.querySelector("#about"),
        photo = document.querySelector("#photo"),
        price = document.querySelector("#price"),
        contacts = document.querySelector("#contacts");

    const timerId = (view) => {
        window.scroll({
            top: view,
            left: 0,
            behavior: 'smooth'
        });
    };

    about.addEventListener("click", () => {
        timerId(650);
    });
    // Срелочная функция без названия
    photo.addEventListener("click", () => {
        timerId(1933);
    });
    price.addEventListener("click", () => {
        timerId(4581);
    });
    contacts.addEventListener("click", () => {
        timerId(5162);
    });
}

export {scroll};