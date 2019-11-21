let canvas = document.getElementById('canvas');
let gingerbread = canvas.getContext('2d');

gingerbread.beginPath();
gingerbread.moveTo(50,100);
gingerbread.lineTo(350,100);
gingerbread.quadraticCurveTo(375,125,350,150);
gingerbread.lineTo(275,150);
gingerbread.lineTo(275,350);
gingerbread.quadraticCurveTo(250,375,225,350);
gingerbread.lineTo(225,275);
gingerbread.quadraticCurveTo(200,250,175,275);
gingerbread.lineTo(175,350);
gingerbread.quadraticCurveTo(150,375,125,350);
gingerbread.lineTo(125,150);
gingerbread.lineTo(50,150);
gingerbread.quadraticCurveTo(25,125,50,100);
gingerbread.fillStyle = '#976F0F';
gingerbread.fill();

gingerbread.beginPath();
gingerbread.arc(200,55,55,0,Math.PI*2,true);
gingerbread.fillStyle = '#976F0F';
gingerbread.fill();

gingerbread.beginPath();
gingerbread.arc(200,175,13,0,Math.PI*2,true);
gingerbread.arc(200,212,13,0,Math.PI*2,true);
gingerbread.fillStyle = '#7A2A73';
gingerbread.fill();

gingerbread.beginPath();
gingerbread.moveTo(175,74);
gingerbread.quadraticCurveTo(200,87,225,74);
gingerbread.quadraticCurveTo(200,112,175,74);
gingerbread.strokeStyle = 'red';
gingerbread.lineWidth = 3;
gingerbread.stroke();

gingerbread.beginPath();
gingerbread.arc(175,50,10,0,Math.PI*2,true);
gingerbread.arc(225,50,10,0,Math.PI*2,true);
gingerbread.fillStyle = 'white';
gingerbread.fill();

gingerbread.beginPath();
gingerbread.moveTo(165,30);
gingerbread.quadraticCurveTo(175,20,185,30);
gingerbread.moveTo(215,30);
gingerbread.quadraticCurveTo(225,20,235,30);
gingerbread.strokeStyle = 'white';
gingerbread.stroke();
