/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/script.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/parts/calc.js":
/*!******************************!*\
  !*** ./src/js/parts/calc.js ***!
  \******************************/
/*! exports provided: calc */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "calc", function() { return calc; });
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



/***/ }),

/***/ "./src/js/parts/form.js":
/*!******************************!*\
  !*** ./src/js/parts/form.js ***!
  \******************************/
/*! exports provided: form */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "form", function() { return form; });
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



/***/ }),

/***/ "./src/js/parts/modal.js":
/*!*******************************!*\
  !*** ./src/js/parts/modal.js ***!
  \*******************************/
/*! exports provided: modal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "modal", function() { return modal; });
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



/***/ }),

/***/ "./src/js/parts/scroll.js":
/*!********************************!*\
  !*** ./src/js/parts/scroll.js ***!
  \********************************/
/*! exports provided: scroll */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scroll", function() { return scroll; });
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



/***/ }),

/***/ "./src/js/parts/slider.js":
/*!********************************!*\
  !*** ./src/js/parts/slider.js ***!
  \********************************/
/*! exports provided: slider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slider", function() { return slider; });
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



/***/ }),

/***/ "./src/js/parts/tabs.js":
/*!******************************!*\
  !*** ./src/js/parts/tabs.js ***!
  \******************************/
/*! exports provided: tabs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tabs", function() { return tabs; });
function tabs() {
     let tab = document.querySelectorAll(".info-header-tab"),
        info = document.querySelector(".info-header"),
        tabContent = document.querySelectorAll(".info-tabcontent");

    const hideTabContent = (a) => {
        for (let i = a; i < tabContent.length; i++) {
            tabContent[i].classList.remove('show');
            // show - класс, который возвращает наш блок
            tabContent[i].classList.add('hide');
            // hide - класс, содержащий удаляет  наш блок
        }
    }
    hideTabContent(1);
    /* Функция скрывает все элементы, кроме элемента 0, так как счет
    начинается с элемента 1 */

    const showTabContent = (b) => {
        if (tabContent[b].classList.contains("hide")) {
            // проверяет на наличие класса "скрыть"
            tabContent[b].classList.remove('hide');
            tabContent[b].classList.add('show');
        }
    }
    /* С помощью этой функции, указав элемент b, мы можем показать какой-то
    определенный элемент */

    info.addEventListener("click", (event) => {
        // с помощью event мы определяе, куда мы кликаем
        let target = event.target;
        if (target && target.classList.contains("info-header-tab")) {
            // первый элемент проверяем, что такой элемент вообще есть, а 
            // во втором условии проверяем наличие класса info-header-tab
            // и, если да, то:
            for (let i = 0; i < tab.length; i++) {
                if (target == tab[i]) {
                    // если тот элемент, на который мы нажали
                    // полностью совпадает с опред. .info-header-tab по номеру
                    hideTabContent(0);
                    // мы выполним функцию скрытия вообще всех табов
                    showTabContent(i);
                    // покажем только тот .info-header-tab, который
                    // совпал с нашим условием, т.е.
                    // совпал по нумерации
                    break;
                    // останавливаем наш цикл, когда элемент будет найден
                }
            }
            /* С помощью этого цикла мы перебираем все наши табы и сравниваем с
            тем, куда мы кликнули. И как только наш таргет совпадет с тем табом,
            то только в том случае мы выполним какие-то действия */
        }
    });
}



/***/ }),

/***/ "./src/js/parts/timer.js":
/*!*******************************!*\
  !*** ./src/js/parts/timer.js ***!
  \*******************************/
/*! exports provided: timer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "timer", function() { return timer; });
function timer() {
    let deadline = "2019-06-15";

    const getTimeRemaining = (endtime) => {
        let t = Date.parse(endtime) - Date.parse(new Date()),
            seconds = Math.floor((t / 1000) % 60),
            // Math.floor() - только целые числа
            // t - миллисекунды, чтобы получить секунды, надо разделить на 1000
            // % 60 - так мы получаем остаток от деления на 60
            minutes = Math.floor((t / 1000 / 60) % 60),
            // тут мы получим количество часов, а хвост - это минуты
            hours = Math.floor((t / (1000 * 60 * 60)));
        return {
            "total": t,
            "hours": hours,
            "minutes": minutes,
            "seconds": seconds
        };
    };
   
    const setClock = (id, endtime) => {
        let timer = document.querySelector(id),
            hours = document.querySelector(".hours"),
            minutes = document.querySelector(".minutes"),
            seconds = document.querySelector(".seconds");


        const updateClock = () => {
            let t = getTimeRemaining(endtime);

            hours.textContent = addZero(t.hours);
            minutes.textContent = addZero(t.minutes);
            seconds.textContent = addZero(t.seconds);

            if (t.total <= 0) {
                clearInterval(timeInterval);

                hours.textContent = "00";
                minutes.textContent = "00";
                seconds.textContent = "00";
            }
        };
        let timeInterval = setInterval(updateClock, 1000);
    };

    const addZero = (number) => {
        if (number >= 0 && number < 10) {
            return `0${number}`;
            // Интерполяция 
        } else {
            return number;
        }
    }

    setClock("timer", deadline);
    // Теперь я пишу таймер
}

// module.exports = timer;



/***/ }),

/***/ "./src/js/script.js":
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _parts_calc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./parts/calc */ "./src/js/parts/calc.js");
/* harmony import */ var _parts_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./parts/form */ "./src/js/parts/form.js");
/* harmony import */ var _parts_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./parts/modal */ "./src/js/parts/modal.js");
/* harmony import */ var _parts_scroll__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./parts/scroll */ "./src/js/parts/scroll.js");
/* harmony import */ var _parts_slider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./parts/slider */ "./src/js/parts/slider.js");
/* harmony import */ var _parts_tabs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./parts/tabs */ "./src/js/parts/tabs.js");
/* harmony import */ var _parts_timer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./parts/timer */ "./src/js/parts/timer.js");








window.addEventListener("DOMContentLoaded", () => {
    Object(_parts_calc__WEBPACK_IMPORTED_MODULE_0__["calc"])();
    Object(_parts_form__WEBPACK_IMPORTED_MODULE_1__["form"])();
    Object(_parts_modal__WEBPACK_IMPORTED_MODULE_2__["modal"])();
    Object(_parts_scroll__WEBPACK_IMPORTED_MODULE_3__["scroll"])();
    Object(_parts_slider__WEBPACK_IMPORTED_MODULE_4__["slider"])();
    Object(_parts_tabs__WEBPACK_IMPORTED_MODULE_5__["tabs"])();
    Object(_parts_timer__WEBPACK_IMPORTED_MODULE_6__["timer"])();
});



/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map