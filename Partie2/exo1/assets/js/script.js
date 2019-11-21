let canvas = document.getElementById('canvas');
let house = canvas.getContext('2d');

house.beginPath();
house.moveTo(150,150);
house.lineTo(200,150);
house.lineTo(175,250);
house.lineTo(150,150);
house.fillStyle = '#AA6522';
house.fill();

house.beginPath();
house.moveTo(150,150);
house.quadraticCurveTo(175,100,200,150);
house.lineTo(150,150);
house.fillStyle = '#8A0908';
house.fill();
