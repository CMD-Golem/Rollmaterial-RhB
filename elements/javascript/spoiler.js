// Spoiler
var el_spoiler = document.getElementsByClassName("spoiler");
for (var i = 0; i < el_spoiler.length; i++) {
	el_spoiler[i].addEventListener("click", spoiler);
}

function spoiler(selected_spoiler) {
	selected_spoiler.target.classList.toggle("active");
	var spoiler_content = selected_spoiler.target.nextElementSibling;

	if (spoiler_content.style.maxHeight) {
		spoiler_content.lastElementChild.style.marginBottom = null;
		spoiler_content.style.maxHeight = null;
	}
	else {
		spoiler_content.lastElementChild.style.marginBottom = "50px"
		spoiler_content.style.maxHeight = spoiler_content.scrollHeight + "px";
	} 
}