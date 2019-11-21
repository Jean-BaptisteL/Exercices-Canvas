let canvas = document.getElementById('canvas');
let house = canvas.getContext('2d');
house.beginPath();
house.rect(100,100,200,50);
house.fillStyle = '#00A551';
house.fill();

house.beginPath();
house.rect(50,150,300,50);
house.fillStyle = '#00A551';
house.fill();

house.beginPath();
house.arc(75,225,25,0,Math.PI*2,true);
house.strokeStyle = "#747474";
house.fillStyle = "#CDCDCD";
house.fill();
house.stroke();

house.beginPath();
house.arc(325,225,25,0,Math.PI*2,true);
house.strokeStyle = "#747474";
house.fillStyle = "#CDCDCD";
house.fill();
house.stroke();
