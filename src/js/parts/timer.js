export function timer() {
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

