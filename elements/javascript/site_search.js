var data_table = document.getElementById("data_table")
var elements = data_table.getElementsByClassName("table_6");

function siteSearch() {
	var input = document.getElementById("Site_Search");
	var filter = input.value.toUpperCase();

	for (var i = 0; i < elements.length; i++) {
		var filterwords = elements[i].innerHTML;
		filterwords = filterwords.replace(/(\&shy;|­|&#173;)/gi, "");
		if (filterwords.toUpperCase().indexOf(filter) > -1) {
			elements[i].parentElement.classList.remove("hide_search");
		} else {
			elements[i].parentElement.classList.add("hide_search");
		}
	}
	notFound();
};

function notFound() {
	// Hide Groups
	var group = data_table.getElementsByClassName("group");
	for (var i = 0; i < group.length; i++) {
		var group_hide_search = group[i].getElementsByClassName("hide_search").length;
		var group_elements = group[i].getElementsByClassName("table_6").length;

		if (group_elements - group_hide_search <= 0) {
			group[i].style.display = "none";
		}
		else {
			group[i].style.display = "block";
		}
	}

	// No results
	var hide_search = document.getElementsByClassName("hide_search").length;

	try {
		if (elements.length - hide_search <= 0) {
			document.getElementById("not_found").style.display = "block";
		}
		else {
			document.getElementById("not_found").style.display = "none";
		}
	}
	catch (e) {
		console.log("Keine Resultate");
	}
}