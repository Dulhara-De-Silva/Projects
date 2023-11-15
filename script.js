// Declaring HTML id tags to JavaScrit Costants


//Getting date, time, timezone for the time widget
const timeEl = document.getElementById('time');
const dateEl = document.getElementById('date');
const timezone = document.getElementById('time-zone');

//Getting data for the today weather widget
const humidityEl = document.getElementById('humidity');
const pressureEl = document.getElementById('pressure');
const feelslikeEl = document.getElementById('feels_like');
const speedEl = document.getElementById('speed');
const mainEl = document.getElementById('main');
const iconEl = document.getElementById('icon');
const countryEl = document.getElementById('country');
const nameEl = document.getElementById('name');

//Getting data(forecast) for the tomorrow weather widget
const humidityFEl = document.getElementById('humidityF');
const pressureFEl = document.getElementById('pressureF');
const feelslikeFEl = document.getElementById('feels_likeF');
const speedFEl = document.getElementById('speedF');
const mainFEl = document.getElementById('mainF');
const iconFEl = document.getElementById('iconF');

//Getting data(forecast) for day after tomorrow weather widet
const humidityF2El = document.getElementById('humidityF2');
const pressureF2El = document.getElementById('pressureF2');
const feelslikeF2El = document.getElementById('feels_likeF2');
const speedF2El = document.getElementById('speedF2');
const mainF2El = document.getElementById('mainF2');
const iconF2El = document.getElementById('iconF2');

//Getting the day name for today, tomorrow and day after tomorrow
const date0El = document.getElementById("day0");
const date1El = document.getElementById("day1");
const date2El = document.getElementById("day2");

//Declaring names for the days of the week and months
const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

//Declaring the API KEY and city
const API_KEY = 'f633154c20aef3652fdc0560f22c5387';
var city = 'Dehiwala'


//Declaring variables to get the date and time and update every 1000 milliseconds
setInterval(() => {
    const time = new Date();
    const year = time.getFullYear();
    const month = time.getMonth();
    const date = time.getDate();
    const day = time.getDay();
    const hours = time.getHours();
    const hoursin12hourformat = hours >= 13 ? hours %12: hours;
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
    const ampm = hours >= 12 ? 'PM' : 'AM';

 
    //Displaying the date, time and day names
    timeEl.innerHTML = (hoursin12hourformat < 10 ? '0' + hoursin12hourformat : hoursin12hourformat) + ':' + (minutes < 10 ? '0' + minutes : minutes) + ' ' + ampm;
    dateEl.innerHTML = days[day] + ', ' + date + ' ' + months[month] + ' ' + year;
    date0El.innerHTML = days[day];
    date1El.innerHTML = days[(day+1) % days.length];
    date2El.innerHTML = days[(day+2) % days.length];   

}, 1000);


//Obtaining today weather data in an array
getWeatherData()
function getWeatherData(){

        fetch('https://api.openweathermap.org/data/2.5/weather?q=Dehiwala&appid=f633154c20aef3652fdc0560f22c5387').then(res => res.json()).then(data => {
            console.log(data)
            showWeatherData(data);
        })
}


//Assigning today weather data and passing via javascript id to display in the HTML code
function showWeatherData(data){

    let { humidity, pressure, feels_like } = data.main;
    let { speed } = data.wind;
    let { main, icon } = data.weather[0];
    let { country } = data.sys;

    humidityEl.innerHTML = humidity + '%';
    pressureEl.innerHTML = pressure + ' hPa';

    // Converting Kelvin Temperature to Celcius Temperature and Rounding Off to 1 Decimal Place
    feelslikeEl.innerHTML = (feels_like - 273).toFixed(1) + ' &#8451';  
                     
    speedEl.innerHTML = speed + ' m/s';
    mainEl.innerHTML = main;
    iconEl.innerHTML = `<img src="http://openweathermap.org/img/wn/${icon}@4x.png">`
    countryEl.innerHTML = country;
    timezone.innerHTML = data.name;
    
}




//Obtaining tomorrow(forecast) weather data in an array
getForecastWeatherData()
function getForecastWeatherData(){

        fetch('https://api.openweathermap.org/data/2.5/forecast?lat=6.8513&lon=79.866&appid=f633154c20aef3652fdc0560f22c5387').then(res => res.json()).then(data => {
            console.log(data)
            showForecastWeatherData(data);           
        })     
    
}

//Assigning tomorrow weather data and passing via javascript id to display in the HTML code
function showForecastWeatherData(data){
    
    let { humidity, pressure, feels_like } = data.list[9].main;
    let { speed } = data.list[9].wind;
    let { main, icon } = data.list[9].weather[0];

    humidityFEl.innerHTML = humidity + '%';
    pressureFEl.innerHTML = pressure + ' hPa';

    // Converting Kelvin Temperature to Celcius Temperature and Rounding Off to 1 Decimal Place
    feelslikeFEl.innerHTML = (feels_like - 273).toFixed(1) + ' &#8451';  
                     
    speedFEl.innerHTML = speed + ' m/s';
    mainFEl.innerHTML = main;
    iconFEl.innerHTML = `<img src="http://openweathermap.org/img/wn/${icon}@4x.png">`
    
}




// Obtaining day after tomorrow(forecast) weather data in an array
getForecastWeatherData2()
function getForecastWeatherData2(){

        fetch('https://api.openweathermap.org/data/2.5/forecast?lat=6.8513&lon=79.866&appid=f633154c20aef3652fdc0560f22c5387').then(res => res.json()).then(data => {
            console.log(data)
            showForecastWeatherData2(data);
        })
        
}

//Assigning day after tomorrow weather data and passing via javascript id to display in the HTML code
function showForecastWeatherData2(data){

    let { humidity, pressure, feels_like } = data.list[17].main;
    let { speed } = data.list[17].wind;
    let { main, icon } = data.list[17].weather[0];

    humidityF2El.innerHTML = humidity + '%';
    pressureF2El.innerHTML = pressure + ' hPa';

    // Converting Kelvin Temperature to Celcius Temperature and Rounding Off to 1 Decimal Place
    feelslikeF2El.innerHTML = (feels_like - 273).toFixed(1) + ' &#8451';  
                     
    speedF2El.innerHTML = speed + ' m/s';
    mainF2El.innerHTML = main;
    iconF2El.innerHTML = `<img src="http://openweathermap.org/img/wn/${icon}@4x.png">`
}





// Code for the popup pdf file and downloading process


//Daily Detailed Report
const dailyBtn = document.getElementById('daily');
dailyBtn.addEventListener('click', () => {
    const url = 'dailydetails.php'; 
    const windowFeatures = 'height=600,width=800,resizable=yes,scrollbars=yes,status=yes';
    const newWindow = window.open(url, '_blank', windowFeatures); //Open the report in a new window
    newWindow.focus();
});

//Weekly Detailed Report
const weeklyBtn = document.getElementById('weekly');
weeklyBtn.addEventListener('click', () => {
    const url = 'weeklydetails.php'; 
    const windowFeatures = 'height=600,width=800,resizable=yes,scrollbars=yes,status=yes';
    const newWindow = window.open(url, '_blank', windowFeatures); //Open the report in a new window
    newWindow.focus();
});

//Monthly Detailed Report
const monthlyBtn = document.getElementById('monthly');
monthlyBtn.addEventListener('click', () => {
    const url = 'monthlydetails.php'; 
    const windowFeatures = 'height=600,width=800,resizable=yes,scrollbars=yes,status=yes';
    const newWindow = window.open(url, '_blank', windowFeatures); //Open the report in a new window
    newWindow.focus();
});

//Seasonal Detailed Report
const seasonalBtn = document.getElementById('seasonal');
seasonalBtn.addEventListener('click', () => {
    const url = 'seasonaldetails.php'; 
    const windowFeatures = 'height=600,width=800,resizable=yes,scrollbars=yes,status=yes';
    const newWindow = window.open(url, '_blank', windowFeatures); //Open the report in a new window
    newWindow.focus();
});

//Yearly Detailed Report
const yearlyBtn = document.getElementById('yearly');
yearlyBtn.addEventListener('click', () => {
    const url = 'yearlydetails.php'; 
    const windowFeatures = 'height=600,width=800,resizable=yes,scrollbars=yes,status=yes';
    const newWindow = window.open(url, '_blank', windowFeatures); //Open the report in a new window
    newWindow.focus();
});

//Yield Report
const yieldBtn = document.getElementById('yield');
yieldBtn.addEventListener('click', () => {
    const url = 'yield.php';
    const windowFeatures = 'height=600,width=800,resizable=yes,scrollbars=yes,status=yes';
    const newWindow = window.open(url, '_blank', windowFeatures); //Open the report in a new window
    newWindow.focus();
});

//Acreage Report
const acreageBtn = document.getElementById('acreage');
acreageBtn.addEventListener('click', () => {
    const url = 'acreage.php'; 
    const windowFeatures = 'height=600,width=800,resizable=yes,scrollbars=yes,status=yes';
    const newWindow = window.open(url, '_blank', windowFeatures); //Open the report in a new window
    newWindow.focus();
});