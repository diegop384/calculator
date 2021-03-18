let changeButton = document.getElementById('trackButton');
let mode = 0;

changeButton.addEventListener('click', 
    function() {
        if (mode){
            //darkMode
            document.documentElement.style.setProperty('--back-color', 'linear-gradient(10.83deg, #1776DD -14.74%, #626D7A 5.46%, #485461 48.38%, #28313B 94.01%)');
            document.documentElement.style.setProperty('--button-color', '#BDC5CD');
            document.documentElement.style.setProperty('--font-color', '#B8C6DB');
            document.documentElement.style.setProperty('--calc-button-color', '#28313B');
            document.documentElement.style.setProperty('--thumb-color', '#3E4D5E');
            changeButton.style.padding = '0 0 0 22px'
            mode--
        } else {
            document.documentElement.style.setProperty('--back-color', ' linear-gradient(11.35deg, #BCFEDE -11.05%, #F5F7FA 9.85%, #C3CBE1 155.22%, #F2E1FA 157.45%, #B8C6DB 171.78%)');
            document.documentElement.style.setProperty('--button-color', '#B8C6DB');
            document.documentElement.style.setProperty('--font-color', '#5F6671');
            document.documentElement.style.setProperty('--calc-button-color', '#E6EBF3');
            document.documentElement.style.setProperty('--thumb-color', '#F5F7FA');
            changeButton.style.padding = '0 22px 0 5px'
            mode ++
        }
});

