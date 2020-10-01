
//var idx = Math.floor((new Date().getHours()));
//var body = document.getElementsByTagName("body")[0];
//body.className = "heaven-" + idx;






// Get the canvas node and the drawing context
const canvas = document.getElementById('matrix-hero');
const ctx = canvas.getContext('2d');

// set the width and height of the canvas
const w = canvas.width = window.innerWidth;
const h = canvas.height = window.innerHeight;

 canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// draw a black rectangle of width and height same as that of the canvas
ctx.fillStyle = '#000';
ctx.fillRect(0, 0, w, h);

var cols = Math.floor(w / 3) + 1;
var ypos = Array(cols).fill(0);

function matrix () {
  // Draw a semitransparent black rectangle on top of previous drawing
  ctx.fillStyle = '#0001';
  ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);
  //  navi.style.top = canvas.height + 'px';
  // Set color to green and font to 15pt monospace in the drawing context
  ctx.fillStyle = '#0f0';
  ctx.font = '12pt monospace';

  // for each column put a random character at the end
  ypos.forEach((y, ind) => {
    // generate a random character
    const text = String.fromCharCode(Math.random() * 128);

    // x coordinate of the column, y coordinate is already given
    const x = ind * 20;
    // render the character at (x, y)
    ctx.fillText(text, x, y);

    // randomly reset the end of the column if it's at least 100px high
    if (y > 100 + Math.random() * 10000) ypos[ind] = 0;
    // otherwise just move the y coordinate for the column 20px down,
    else ypos[ind] = y + 20;
  });
}


    window.onresize = function test(){
            
            ctx.clearRect(0,0, canvas.width, canvas.height);
            // set the width and height of the canvas
           // w = canvas.width = window.innerWidth;
            //h = canvas.height = window.innerHeight;
            
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            
            // draw a black rectangle of width and height same as that of the canvas
            ctx.fillStyle = '#000';
            ctx.fillRect(0, 0, w, h);
            
            cols = Math.floor(w / 3) + 1;
            ypos = Array(cols).fill(0);
            canvas.height = window.innerHeight;
            canvas.width = window.innerWidth;
            
            ctx.fillStyle = '#0001';
            ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);
          
           
            // Set color to green and font to 15pt monospace in the drawing context
            ctx.fillStyle = '#0f0';
            ctx.font = '12pt monospace';
                      
           //cols = canvas.width/3;
            
             for(var x = 0; x < cols; x++)
            ypos[x] = 1;
            
           
            
           
        }

// render the animation at 20 FPS.

/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
} 

setInterval(matrix, 50);
 

