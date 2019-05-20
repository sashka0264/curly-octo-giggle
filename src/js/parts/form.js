function form() {
    
    let message = {
        loading: "Загрузка...",
        success: "Спасибо. Cкоро мы с вами свяжемся.",
        failure: "Что-то пошло не так."
    };

    let form = document.querySelector(".main-form"),
        input = document.querySelectorAll("input"),
        tel = document.querySelector("#tel"),
        tel2 = document.querySelector("#tel2"),
        formLast = document.querySelector("#form"),
        statusMessage = document.createElement("div");

    statusMessage.classList.add("status");
    // добавляем класс status

    tel.addEventListener("keypress", event => {
        if (!/[+\d]/.test(event.key)) {
            event.preventDefault();
        }
    });


    let gif = document.createElement("img");
    gif.setAttribute("src", "img/wow.gif");
    gif.style.cssText = "margin-left: auto; margin-right: auto;" +
    "display: flex; margin-top: 20px;";


    form.addEventListener("submit", (event) => {
        event.preventDefault();
        form.appendChild(statusMessage);
        let formData = new FormData(form);

        function postData(data) {

            return new Promise(function (resolve, reject) {
                let request = new XMLHttpRequest();

                request.open("POST", "server.php");

                request.setRequestHeader("Content-type", +
                    "application/json; charset=utf-8");

                request.onreadystatechange = () => {
                    if (request.readyState < 4) {
                        resolve();
                    } else if (request.readyState === 4 && request.status == 200) {
                        reject();
                    } else {
                        reject();
                    }
                };
                request.send(data);
            });
        }

        const clearInput = () => {
            for (let i = 0; i < input.length; i++) {
                input[i].value = "";
            }
        };

        postData(formData)
            .then(() => statusMessage.innerHTML = message.loading)
            .then(() => {
                statusMessage.innerHTML = "";
                form.appendChild(gif);
            })
            .catch(() => statusMessage.innerHTML = message.failure)
            .then(clearInput);
    });

    tel2.addEventListener("keypress", event => {
        if (!/[+\d]/.test(event.key)) {
            event.preventDefault();
        }
    });



    formLast.addEventListener("submit", (event) => {
        event.preventDefault();
        formLast.appendChild(statusMessage);
        let formData = new FormData(formLast);

        let request = new XMLHttpRequest();

        function postData(data) {

            return new Promise(function (resolve, reject) {
                let request = new XMLHttpRequest();

                request.open("POST", "server.php");

                request.setRequestHeader("Content-type", +
                    "application/json; charset=utf-8");

                request.onreadystatechange = () => {
                    if (request.readyState < 4) {
                        resolve();
                    } else if (request.readyState === 4 && request.status == 200) {
                        reject();
                    } else {
                        reject();
                    }
                };
                request.send(data);
            });
        }

        const clearInput = () => {
            for (let i = 0; i < input.length; i++) {
                input[i].value = "";
            }
        };

        postData(formData)
            .then(() => statusMessage.innerHTML = message.loading)
            .then(() => {
                statusMessage.innerHTML = "";
                formLast.appendChild(gif);
            })
            .catch(() => statusMessage.innerHTML = message.failure)
            .then(clearInput);
    });
}

export {form};