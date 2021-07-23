// Spoiler
var acc = document.getElementsByClassName("spoiler");
var i;

for (i = 0; i < acc.length; i++) {
	acc[i].onclick = function() {
		this.classList.toggle("active");
		var panel = this.nextElementSibling;
		if (panel.style.maxHeight){
			panel.style.maxHeight = null;
		} else {
			panel.style.maxHeight = panel.scrollHeight + "px";
		} 
	}
}

// Header img
var header_img = document.getElementsByClassName("left_space")[0].getElementsByTagName("img")[0].src

function headerImg() {
	if (window.innerWidth < 1200) {
		document.getElementById("header").style.backgroundImage = "url('" + header_img + "')";
	}
	if (window.innerWidth >= 1200) {
		document.getElementById("header").style.backgroundImage = "";
	}
}

window.addEventListener("resize", headerImg);
headerImg();