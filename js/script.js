document.addEventListener("DOMContentLoaded", function(event) {
    setOrderFormDateRange();
});

function setOrderFormDateRange() {
    let today = new Date();

    let start = new Date();
    start.setDate(today.getDate() + 2);

    let end = new Date();
    end.setDate(today.getDate() + 60);

    let startDay = start.getDate();
    let startMonth = start.getMonth() + 1; //January is 0!
    let startYear = start.getFullYear();

    if (startDay < 10) {
        startDay = '0' + startDay;
    }

    if (startMonth < 10) {
        startMonth = '0' + startMonth;
    }

    let dateInput = document.getElementById("date");

    let minValue = startYear + '-' + startMonth + '-' + startDay;
    dateInput.setAttribute("min", minValue);

    let endDay = end.getDate();
    let endMonth = end.getMonth() + 1; //January is 0!
    let endYear = end.getFullYear();

    if (endDay < 10) {
        endDay = '0' + endDay;
    }

    if (endMonth < 10) {
        endMonth = '0' + endMonth;
    }

    let maxValue = endYear + '-' + endMonth + '-' + endDay;
    dateInput.setAttribute("max", maxValue);
}
