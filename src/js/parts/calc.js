function calc() {
    let persons = document.querySelectorAll(".counter-block-input")[0],
        restDays = document.querySelectorAll(".counter-block-input")[1],
        place = document.querySelector("#select"),
        totalValue = document.querySelector("#total"),
        personsSum = 0,
        daysSum = 0,
        total = 0;

    totalValue.innerHTML = 0;

    persons.addEventListener("input", function () {
        personsSum = +this.value;
        total = (daysSum + personsSum) * 4000;

        if (restDays.value == "" || persons.value == "" ||
            persons.value % 1 !== 0 || restDays.value % 1 !== 0) {
            totalValue.innerHTML = 0;
        } else {
            let a = total;
            totalValue.innerHTML = a * place.options[place.selectedIndex].value;
        }
    });

    restDays.addEventListener("input", function () {
        daysSum = +this.value;
        total = (daysSum + personsSum) * 4000;

        if (restDays.value == "" || persons.value == "" ||
            persons.value % 1 !== 0 || restDays.value % 1 !== 0) {
            totalValue.innerHTML = 0;
        } else {
            let a = total;
            totalValue.innerHTML = a * place.options[place.selectedIndex].value;
        }
    });


    place.addEventListener("change", function () {
        if (restDays.value == "" || persons.value == "") {
            totalValue.innerHTML = 0;
        } else {
            let a = total;
            totalValue.innerHTML = a * this.options[this.selectedIndex].value;
        }
    });

    persons.addEventListener("keypress", event => {
        if (!/[\d]/.test(event.key)) {
            event.preventDefault();
        }
    });

    restDays.addEventListener("keypress", event => {
        if (!/[\d]/.test(event.key)) {
            event.preventDefault();
        }
    });
}

export {calc};