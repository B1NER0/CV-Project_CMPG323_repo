


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
 
 var lblEna = document.getElementById('enableLoc');
 
 //lblEna.style.display = "block";
 
 
 
 
function getLocation() {
  
    var city = "Potcehfstroom";
    var country = "South Africa";
    var state;
    
    var mapShow = document.getElementById('mapid');
    mapShow.style.height = "0";
    
    var imgHome = document.getElementById('imgHome');
    var imgEarth = document.getElementById('imgEarth');
    var lblHome = document.getElementById('lblCity');
    var lblEarth = document.getElementById('lblEarth');
  
  
      if (!navigator.geolocation) {
        // This browser doesn't support Geolocation, show an error
        onError();
      } else {
        // Get the current position of the user!
        //lblEna.style.display = "none";
        navigator.geolocation.getCurrentPosition(onSuccess, onError);
        
      }
      
  

    function onError() {
        lblHome.innerHTML = 'Unable to locate you';
        lblEarth.innerHTML = 'Unable to locate you';
      }
      
    function onSuccess(position) {
        //console.log(`Latitude: ${position.coords.latitude} °, Longitude: ${position.coords.longitude} °`);
        
        var apiLoc = position.coords.latitude + "," + position.coords.longitude;
        lblEna.style.display = "none";
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
        
        mapShow.style.height = "300px";
        
        var map = L.map('mapid').setView([position.coords.latitude, position.coords.longitude], 13);
    
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);
        
        L.marker([position.coords.latitude, position.coords.longitude]).addTo(map)
            .bindPopup('You are here')
            .openPopup();
       
    
  }

  
  
  
}

getLocation();




//Superhero api

var comicl = document.getElementById('comic');
var seriel = document.getElementById('serie');
var eventl = document.getElementById('event');
var storiel = document.getElementById('book');
var strengthl = document.getElementById('strength');
var supName = document.getElementById('supName');
var supImage = document.getElementById('superImg');



let supHttp = new XMLHttpRequest();
    
    var randomOfset = Math.floor(Math.random() * 1000);
    //console.log(randomOfset);
    
    
    
    
    supHttp.open("GET", "https://gateway.marvel.com:443/v1/public/characters?apikey=0f842d9cf22f8dbcc6941093d1cd4150&offset=" + randomOfset);
    supHttp.send();
  
    supHttp.onload = () => {
      
    if(supHttp.status === 200){
        var supRes = JSON.parse(supHttp.response);
        
        var randomId = Math.floor(Math.random() * 20);  
        
        var charID = randomId;
        
        var comics = supRes["data"]["results"][charID]["comics"]["available"];
        var events = supRes["data"]["results"][charID]["events"]["available"];
        var stories = supRes["data"]["results"][charID]["stories"]["available"];
        var series = supRes["data"]["results"][charID]["series"]["available"];
        var name = supRes["data"]["results"][charID]["name"];
        var thumb = supRes["data"]["results"][charID]["thumbnail"]["path"];
        var ex = supRes["data"]["results"][charID]["thumbnail"]["extension"];
        
     //   console.log("Events: " + events);
      //  console.log("comics: " + comics);
      //  console.log("stories: " + stories);
      //  console.log("series: " + series);
      //  console.log("Name: " + name);
      //  console.log("Image: " + thumb + "."+ex);
       
      
        supImage.src = thumb + "."+ ex;
        supName.innerHTML = name;
        comicl.innerHTML = comics;
        eventl.innerHTML = events;
        storiel.innerHTML = stories;
        seriel.innerHTML = series;
        
       // console.log(supRes);
        
    }else{
      console.log(`error ${supHttp.status} ${supHttp.statusText}`);
    }
}