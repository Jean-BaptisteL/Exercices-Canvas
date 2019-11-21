let canvas = document.getElementById('canvas');
let house = canvas.getContext('2d');

house.beginPath();
house.rect(0,0,300,300);
house.fillStyle = '#0000FF';
house.fill();

house.beginPath();
house.moveTo(108,150);
house.quadraticCurveTo(150,50,183,150);
house.fillStyle = 'white';
house.fill();

house.beginPath();
house.moveTo(75,150);
house.quadraticCurveTo(150,200,225,150);
house.quadraticCurveTo(150,100,75,150);
house.fillStyle = '#E0E1F3';
house.fill();
