


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

/*
var theIP;
var lat = -26.367;
var long = 27.4025;
var city = "Potcehfstroom";
var country = "South Africa";
var state;

var imgHome = document.getElementById('imgHome');
var imgEarth = document.getElementById('imgEarth');
var lblHome = document.getElementById('lblCity');
var lblEarth = document.getElementById('lblEarth');


var xmlhttp = new XMLHttpRequest();
var ip_address = '196.252.171.126';
var auth = '853766cd-c1ae-4157-a700-1e13f2f0fbfe';
var url = "https://ipfind.co/?auth=" + auth + "&ip=" + ip_address;

xmlhttp.onreadystatechange = function() {
if (this.readyState == 4 && this.status == 200) {
      var result = JSON.parse(this.responseText);
     // console.log(result);
    }
};

xmlhttp.open("GET", url, true);
xmlhttp.send();

var ds = xmlhttp.response ;
console.log(ds);


   







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
        
      //  lblHome.innerHTML = city + "<br><center>" + state + "</center>";
       // lblEarth.innerHTML = "<center>" + country + "</center>";
        
      //  var map = L.map('mapid').setView([-26.6928, 27.0925], 13);

       // L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
       //     attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
       // }).addTo(map);
      //  
      //  L.marker([-26.6928, 27.0925]).addTo(map)
      //      .bindPopup('You are here')
      //      .openPopup();
        
    }else{
      console.log(`error ${locHttp.status} ${locHttp.statusText}`);
    }
}
 */
 
 
function getLocation() {
  
    var city = "Potcehfstroom";
    var country = "South Africa";
    var state;
    
    var imgHome = document.getElementById('imgHome');
    var imgEarth = document.getElementById('imgEarth');
    var lblHome = document.getElementById('lblCity');
    var lblEarth = document.getElementById('lblEarth');
  

    function onError() {
        lblHome.innerHTML = 'Unable to locate you';
        lblEarth.innerHTML = 'Unable to locate you';
      }
      
    function onSuccess(position) {
        console.log(`Latitude: ${position.coords.latitude} °, Longitude: ${position.coords.longitude} °`);
        
        var apiLoc = position.coords.latitude + "," + position.coords.longitude;
        
        let locHttp = new XMLHttpRequest();
        locHttp.open("GET", "https://api.opencagedata.com/geocode/v1/json?q="+apiLoc+"&key=4bfc55aa57c74a0d9a4a945bff871ce0");
            locHttp.send();
          
            locHttp.onload = () => {
      
            if(locHttp.status === 200){
                
                var locResults = JSON.parse(locHttp.response)
                var theRes = locResults["results"][0]["components"];
                //console.log(theRes);
                
                lblHome.innerHTML = theRes["county"] + "<br><center>" + theRes["state"] + "</center>";
                lblEarth.innerHTML = theRes["country"];
                
                
            }else{
                console.log(`error ${locHttp.status} ${locHttp.statusText}`);
            }
        
        
        }
        
        var map = L.map('mapid').setView([position.coords.latitude, position.coords.longitude], 13);
    
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);
        
        L.marker([position.coords.latitude, position.coords.longitude]).addTo(map)
            .bindPopup('You are here')
            .openPopup();
       
    
  }

  if (!navigator.geolocation) {
    // This browser doesn't support Geolocation, show an error
    onError();
  } else {
    // Get the current position of the user!
    navigator.geolocation.getCurrentPosition(onSuccess, onError);
  }
  
  
  
}

getLocation();