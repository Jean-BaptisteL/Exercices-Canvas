let canvas = document.getElementById('canvas');
let house = canvas.getContext('2d');

house.translate(200, 50);
house.rotate(Math.PI / 4);
house.rect(0, 0, 71, 71);
house.fillStyle = '#D7823E';
house.fill();
house.setTransform(1, 0, 0, 1, 0, 0);

house.beginPath();
house.rect(150,100,100,100);
house.fillStyle = '#A1D8E6';
house.fill();

house.beginPath();
house.rect(190,160,20,40);
house.fillStyle = '#C9C9C9';
house.fill();

house.beginPath();
house.rect(160,110,20,20);
house.fillStyle = '#C9C9C9';
house.fill();

house.beginPath();
house.rect(220,110,20,20);
house.fillStyle = '#C9C9C9';
house.fill();
