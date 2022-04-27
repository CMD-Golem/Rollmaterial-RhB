var input = document.getElementById("Site_Search");
var data_table = document.getElementById("data_table");
var group = data_table.getElementsByClassName("group");
var elements = data_table.getElementsByClassName("table_6");
var not_found = document.getElementById("not_found");

function siteSearch() {
	var filter = input.value.toUpperCase();

	for (var i = 0; i < elements.length; i++) {
		var filterwords = elements[i].innerHTML;
		filterwords = filterwords.replace(/(\&shy;||&#173;)/gi, "");
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
			not_found.style.display = "block";
		}
		else {
			not_found.style.display = "none";
		}
	}
	catch (e) {
		console.log("Keine Resultate");
	}
}