(function(){
'use strict';


document.addEventListener('DOMContentLoaded', function() {
    var c = document.getElementById('current-time');
    var day = document.getElementById('current-date');

    setInterval(updateTime, 1000);

    function updateTime() {
        var d = new Date();

        var hours = d.getHours(),
        minutes = d.getMinutes(),
        ampm = 'AM',
        currentDay = d.getDay(),
        dayString = '';

        switch(currentDay) {
            case 0:
            dayString = 'January' + ' ';
            break;
            case 1:
            dayString = 'February' + ' ';
            break;
            case 2:
            dayString = 'Mars' + ' ';
            break;
            case 3:
            dayString = 'April' + ' ';
            break;
            case 4:
            dayString = 'Maj' + ' ';
            break;
            case 5:
            dayString = 'June' + ' ';
            break;
            case 6:
            dayString = 'July' + ' ';
            break;
            case 7:
            dayString = 'August' + ' ';
            break;
            case 8:
            dayString = 'September' + ' ';
            break;
            case 9:
            dayString = 'October' + ' ';
            break;
            case 10:
            dayString = 'November' + ' ';
            break;
            case 11:
            dayString = 'December' + ' ';
            break;
        }

        if (hours > 12) {
            hours -= - 12;
            ampm = 'PM';
        } else if (hours === 0) {
            hours = 12;
        }

        if (minutes < 10) {
            minutes = '0' + minutes;
        }

        var sepClass = '';
        if (d.getSeconds() % 2 === 1) sepClass = 'trans';

        var sep = '<span class="' + sepClass + '">:</span>';

        day.innerHTML = dayString + currentDay;
        c.innerHTML = hours + sep + minutes + ' ' + ampm;
        
    }
});
})();