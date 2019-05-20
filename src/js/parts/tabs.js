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

export {tabs};