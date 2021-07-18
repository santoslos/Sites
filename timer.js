const timer = () => setInterval(() => {
    let seconds = parseInt(sessionStorage.getItem('sec'));
    let minute = parseInt(sessionStorage.getItem('min'));
    let hour = parseInt(sessionStorage.getItem('h'));

    console.log(seconds)

    if (seconds > 59) {

        seconds = 0;
        minute += 1;

        if (minute > 59) {
            hour += 1;
            minute = 0;
            if (hour > 23) {
                hour = 0
                seconds = 0;
                minute = 0;
                sessionStorage.setItem('min', `${minute}`);
                sessionStorage.setItem('sec', `${seconds}`)
                sessionStorage.setItem('h', `${hour}`);
                document.getElementById('hour').innerText = `${hour}`;
            }
            sessionStorage.setItem('min', `${minute}`);
            sessionStorage.setItem('h', `${hour}`);
            if (hour < 10) {
                document.getElementById('hour').innerText = `0${hour} `;
            } else {
                document.getElementById('hour').innerText = `${hour} `;
            }
        }
        sessionStorage.setItem('min', `${minute}`);
        sessionStorage.setItem('sec', `${seconds}`)
        if (minute < 10) {

            document.getElementById('min').innerText = `0${minute} `;

        } else {

            document.getElementById('min').innerText = `${minute} `;
        }
    }


    seconds += 1;
    sessionStorage.setItem('sec', `${seconds}`)
    if (seconds < 10) {
        document.getElementById('sec').innerText = `0${seconds} `;
    } else {
        document.getElementById('sec').innerText = `${seconds}`;
    }

}, 1000)
timer()