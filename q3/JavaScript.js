class Clock {
    constructor(hours, minutes, seconds, country) {
        this.hours = hours;
        this.minutes = minutes;
        this.seconds = seconds;
        this.country = country;
    }
    displayTime() {
        const formattedTime = `${String(this.hours).padStart(2, '0')}:${String(this.minutes).padStart(2, '0')}:${String(this.seconds).padStart(2, '0')}`;
        return `השעה ב${this.country}: ${formattedTime}`;
    }


    setTime(hours, minutes, seconds) {
        this.hours = hours;
        this.minutes = minutes;
        this.seconds = seconds;
    }

    //// (פונקציה להוספת שניות (עם טיפול במעבר לדקות/שעות)
    addSeconds(secondsToAdd) {
        this.seconds += secondsToAdd;

        while (this.seconds >= 60) {
            this.seconds -= 60;
            this.minutes++;
        }

        while (this.minutes >= 60) {
            this.minutes -= 60;
            this.hours++;
        }

        if (this.hours >= 24) {
            this.hours %= 24;
        }
    }

    ConverToSeconds() {
        return this.hours * 3600 + this.minutes * 60 + this.seconds;
    }

    show() {
        const pad = (num) => String(num).padStart(2, '0'); // פונקציה להוספת אפסים מובילים
        return `${pad(this.hours)}:${pad(this.minutes)}:${pad(this.seconds)}`;
    }
}
    const clocks = []; 

document.getElementById('clockForm').addEventListener('submit', (event) => {
    event.preventDefault();

    // קריאת הנתונים מהטופס
    const hours = parseInt(document.getElementById('hours').value, 10);
    const minutes = parseInt(document.getElementById('minutes').value, 10);
    const seconds = parseInt(document.getElementById('seconds').value, 10);
    const country = document.getElementById('country').value.trim();

    if (isNaN(hours) || isNaN(minutes) || isNaN(seconds) || !country) {
        alert("אנא מלא את כל השדות כראוי.");
        return;
    }

    // יצירת אובייקט Clock והוספה למערך
    const clock = new Clock(hours, minutes, seconds, country);
    clocks.push(clock);

    // ניקוי השדות
    document.getElementById('hours').value = '';
    document.getElementById('minutes').value = '';
    document.getElementById('seconds').value = '';
    document.getElementById('country').value = '';

    // הצגת השעונים אם יש 5 או יותר
    if (clocks.length === 5) {
        displayClocks();
    }
});

function displayClocks() {
    const clockContainer = document.getElementById('clocks');
    clockContainer.innerHTML = ''; // ניקוי תוכן קודם

    clocks.forEach((clock) => {
        const clockElement = document.createElement('div');
        clockElement.innerText = `המדינה: ${clock.country}, השעה: ${clock.show()}, בשניות: ${clock.ConverToSeconds()}`;
        clockContainer.appendChild(clockElement);
    });
}