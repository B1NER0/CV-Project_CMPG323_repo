
import fetch from 'cross-fetch';
let https = new XMLHttpRequest();

var nasaImg = document.getElementById('nasaImg');
var nasaDate = document.getElementById('dateNasa');
var nasaBtn = document.getElementById('nasabtn');


nasaBtn.onclick = function () {
  
   fetch('https://api.nasa.gov/planetary/apod?api_key=zuOehZm6hq1Rt9cufqw36ADo0kZT3mfq5dGmCPNo')
  .then(res => {
    if (res.status >= 400) {
      throw new Error("Bad response from server");
    }
    
    return res.json();
  })
  .then(user => {
    console.log(user);
  })
  .catch(err => {
    console.error(err);
  });
}

function getNasa () { //USING XMLHttpRequest
  
    var d = new Date(nasaDate.value);
    
    
    
    var year = d.getFullYear();
    var day = d.getDate();
    var month = d.getMonth()+1;
    
   
    
    
    var getYear = "date=" + year + "-" + month + "-" + day;
    
    https.open("GET", "https://api.nasa.gov/planetary/apod?api_key=zuOehZm6hq1Rt9cufqw36ADo0kZT3mfq5dGmCPNo");
    https.send();
  
    https.onload = () => {
      
    if(https.status === 200){
      var vals = JSON.parse(https.response);
    }else{
      console.log(`error ${https.status} ${https.statusText}`);
    }
    
    console.log(vals);
    console.log(vals["url"]);
    console.log(vals["explanation"]);
    
    nasaImg.src = vals["url"];
    nasaImg.style.width = '500px';
    nasaImg.style.height = 'auto';
    
  }
}
