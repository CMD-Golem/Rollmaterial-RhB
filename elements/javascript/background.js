var numimages=3;

rndimg = new Array("elements/background/1.jpg", "elements/background/2.jpg", "elements/background/3.jpg"); 
x = (Math.floor(Math.random()*numimages));
randomimage=(rndimg[x]);
document.getElementById("background").style.backgroundImage = "url("+ randomimage +")"; 