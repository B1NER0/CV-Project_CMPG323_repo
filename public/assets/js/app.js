


let https = new XMLHttpRequest();

var nasaImg = document.getElementById('nasaImg');
var nasaDate = document.getElementById('dateNasa');
var nasaBtn = document.getElementById('nasabtn');
var loadingImg = document.getElementById('loadingImg');
var img = document.getElementById('TheNasaImgPar');

let today = new Date().toISOString().substr(0,10);
  
    nasaDate.value = today;
  
  
  loadingImg.style.display = 'none';
  loadingImg.style.width= '30px';
  
  getNasa(today);

nasaBtn.onclick = function () {
    getNasa(nasaDate.value);
  }


function getNasa (date) {
  

//function getNasa () { //USING XMLHttpRequest
  
  //img.style.backgroundImage = 'block';
  // nasaImg.style.display = 'none';
  // nasaImg.src = '';

  loadingImg.style.display = 'block';
   if(date == "")
    {
      let today = new Date().toISOString().substr(0,10);
      nasaDate.value = today;
      
      date = new Date();
    }
    else
    {
      date = new Date(nasaDate.value)
    }
  
    
    var year = date.getFullYear();
    var day = date.getDate();
    var month = date.getMonth()+1;
    
    var getYear = "date=" + year + "-" + month + "-" + day;
    
    https.open("GET", "https://api.nasa.gov/planetary/apod?api_key=zuOehZm6hq1Rt9cufqw36ADo0kZT3mfq5dGmCPNo" + "&" + getYear);
    https.send();
  
    https.onload = () => {
      
    if(https.status === 200){
      var vals = JSON.parse(https.response);
      //img.style.display = 'block';
      img.style.backgroundImage = "url("+ vals["url"] + ")";
    //  nasaImg.src = vals["url"];
     // nasaImg.style.height = 'auto';
    //  nasaImg.style.width = '100%';
   // console.log(vals["url"]);
     
      
    }else{
      console.log(`error ${https.status} ${https.statusText}`);
    }
    
   // console.log(vals);
   // console.log(vals["url"]);
   // console.log(vals["explanation"]);
    loadingImg.style.display = 'none';
    
}
}

var theIP;
var lat = -26.69300;
var long = 27.08720;
var city = "Potcehfstroom";
var country = "South Africa";
var state;

var imgHome = document.getElementById('imgHome');
var imgEarth = document.getElementById('imgEarth');
var lblHome = document.getElementById('lblCity');
var lblEarth = document.getElementById('lblEarth');

lblHome.innerHTML = city + "<br><center>North-West";
lblEarth.innerHTML = country


/*
let locHttp = new XMLHttpRequest();
locHttp.open("GET", "https://api.ipgeolocation.io/ipgeo?apiKey=915847f6671c4197986fa24a8765e90b");
    locHttp.send();
  
    locHttp.onload = () => {
      
    if(locHttp.status === 200){
        var locRes = JSON.parse(locHttp.response);
        theIP = locRes["ip"];
        lat = locRes["latitude"];
        long = locRes["longitude"];
        city = locRes["city"];
        state = locRes["state_prov"];
        country = locRes["country_name"];
    }else{
      console.log(`error ${locHttp.status} ${locHttp.statusText}`);
    }
    }
   */ 





//fetch(url)
 // .then(response => response.json())
  //.then(commits => console.log(commits));
  
  


var map = L.map('mapid').setView([lat, long], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([lat, long]).addTo(map)
    .bindPopup('You are here')
    .openPopup();

/*
var mymap = L.map('mapid').setView([51.505, -0.09], 13);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'your.mapbox.access.token'
}).addTo(mymap);

//weather api



let wet = new XMLHttpRequest();

const lat = 45.7;
const lng = -6.0;
//const params = [
 // 'airTemperature', 'cloudCover',
 // 'gust', 'humidity', 'precipitation',
 // 'snowDepth', 'visiblity', 'windDirection',
 // 'windSpeed'
//].join(',');

const par = "airTemperature";

wet.open("GET","https://api.stormglass.io/v2/weather/point?lat=45.7&lng=-6.0&params=airTemperature");

wet.setRequestHeader('Authorization', '534fd578-079d-11eb-af9a-0242ac130002-534fd64a-079d-11eb-af9a-0242ac130002');
wet.send();

wet.onload = () => {
      
    if(wet.status === 200){
      var val = JSON.parse(wet.response);
      
    console.log(val);
     
      
    }else{
      console.log(`error ${wet.status} ${wet.statusText}`);
    }


}









*/
    
