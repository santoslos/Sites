const timer = () => setInterval(() => {
        let seconds = parseInt(sessionStorage.getItem('sec'));
        let minute = Math.floor(seconds / 60)
        let hour = Math.floor(minute / 60);
        if (document.getElementById('sec')) {
            if (seconds % 59 + 1 < 10) {
                document.getElementById('sec').innerText = `0${seconds % 59 + 1} `;
            } else {
                document.getElementById('sec').innerText = `${seconds % 59 + 1}`;
            }
        }
        seconds += 1;
        sessionStorage.setItem('sec', `${seconds}`)
        if (document.getElementById('min')) {

            if (minute % 60 < 10) {

                document.getElementById('min').innerText = `0${minute % 60} `;

            } else {
                document.getElementById('min').innerText = `${minute % 60} `;
            }
        }
        if (document.getElementById('hour')) {
            if (hour % 24 < 10) {
                document.getElementById('hour').innerText = `0${hour % 24} `;
            } else {
                document.getElementById('hour').innerText = `${hour % 24} `;
            }
        }


    },
    1000
)
timer()