// Footer - current year & last modified
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;

// Weather variables (static)
const temp = parseFloat(document.getElementById("temp").textContent);
const speed = parseFloat(document.getElementById("speed").textContent);

// Wind chill calculation (Celsius formula)
function calculateWindChill(t, s){
  return (13.12 + 0.6215*t - 11.37*Math.pow(s,0.16) + 0.3965*t*Math.pow(s,0.16)).toFixed(1);
}

let windchill = "N/A";
if(temp <= 10 && speed > 4.8){
  windchill = calculateWindChill(temp, speed) + " °C";
}

document.getElementById("windchill").textContent = windchill;
