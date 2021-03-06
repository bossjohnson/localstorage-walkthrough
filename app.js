window.onload = function() {

    var submitButton = document.querySelector('form div:last-child input');
    var inputColors = document.querySelectorAll('input');
    var body = document.querySelector('body');

    var currentdate = new Date(Date.now());
    var today = currentdate.getDay();

    document.querySelector('#today').innerText = currentdate;

    var dayColors = {};



    getDayColorsFromLocalStorage()

    submitButton.addEventListener("click", function(event) {
        event.preventDefault();

        updateDayColors();

        setColors();

        addToLocalStorage();
    })

    function setColors() {
        var todaysColor = dayColors[today];
        body.style.backgroundColor = todaysColor;
    }

    function getDayColorsFromLocalStorage() {
        if (window.localStorage.colorData) {
            var colorData = JSON.parse(window.localStorage.colorData);
            var todaysColor = colorData[today];
            body.style.backgroundColor = todaysColor;
            setColorPreferences(colorData);
        }
    }

    function setColorPreferences(data) {
        for (var i = 1; i < inputColors.length; i++) {

            inputColors[i-1].value = data[i.toString()];
        }
    }

    function updateDayColors() {
        for (var i = 0; i < inputColors.length - 1; i++) {
            var colorValue = inputColors[i].value;
            var day = inputColors[i].id;
            dayColors[day] = colorValue;
        }
    }

    function addToLocalStorage() {
        data = JSON.stringify(dayColors);
        window.localStorage.colorData = data;
    }

};
