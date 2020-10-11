function headerImg() {
	if (window.innerWidth < 1200) {
	      document.getElementById("header").style.backgroundImage = header_img;
	}
	if (window.innerWidth >= 1200) {
		document.getElementById("header").style.backgroundImage = "";
	}
}


window.addEventListener("load", function(){
    headerImg();
});

window.addEventListener("resize", function(){
    headerImg();
});