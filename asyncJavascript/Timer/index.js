    let timer;
    let timeInput = document.getElementById('time');
    let timeArray = [0, 0, 0]; // [hours, minutes, seconds]

    function startTimer() {
        parseTimeInput();
        timer = setInterval(updateTimer, 1000);
    }

    function pauseTimer() {
        clearInterval(timer);
    }

    function resetTimer() {
        clearInterval(timer);
        timeInput.value = '00:00:00';
        timeArray = [0, 0, 0];
    }

    function updateTimer() {
        let seconds = timeArray[2];
        let minutes = timeArray[1];
        let hours = timeArray[0];

        if (hours === 0 && minutes === 0 && seconds === 0) {
            clearInterval(timer);
            alert('Timer finished!');
            return;
        }

        if (seconds === 0) {
            if (minutes === 0) {
                if (hours !== 0) {
                    hours--;
                    minutes = 59;
                }
            } else {
                minutes--;
            }
            seconds = 59;
        } else {
            seconds--;
        }

        timeArray = [hours, minutes, seconds];
        timeInput.value = formatTime(hours) + ':' + formatTime(minutes) + ':' + formatTime(seconds);
    }

    function parseTimeInput() {
      
        // -----------------------------------------------------
        let timeString = timeInput.value;

        // Determine the length of the input string
        let length = timeString.length;
    
        // Initialize variables for hours, minutes, and seconds
        let hours = 0;
        let minutes = 0;
        let seconds = 0;
    
        // Extract hours, minutes, and seconds based on the length of the input string
        if (length >= 2) {
            seconds = parseInt(timeString.substring(length - 2, length)) || 0;
        }
        if (length >= 4) {
            minutes = parseInt(timeString.substring(length - 4, length - 2)) || 0;
        }
        if (length >= 6) {
            hours = parseInt(timeString.substring(0, length - 4)) || 0;
        }
    
        // Assign the extracted values to the timeArray
        timeArray = [hours, minutes, seconds];

    }

    function formatTime(time) {
        return time.toString().padStart(2, '0');
    }