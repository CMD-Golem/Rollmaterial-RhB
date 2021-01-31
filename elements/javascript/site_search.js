function siteSearch() {
	var input, filter, table, elements, keyword, i, group;
	input = document.getElementById("Site_Search");
	filter = input.value.toUpperCase();
	table = document.getElementById("data_table");
	elements = table.getElementsByTagName("tr");
	group = table.getElementsByClassName("group");

	for (i = 0; i < elements.length; i++) {
		keyword = elements[i].getElementsByClassName("table_6")[0].innerHTML;
		keyword = keyword.replace(/(\&shy;|­|&#173;)/gi, "");
		if (keyword.toUpperCase().indexOf(filter) > -1) {
			elements[i].style.display = "";
		}
		else {
			elements[i].style.display = "none";
		}
	}
	
	for (i = 0; i < group.length; i++) {
		keyword2 = group[i].getElementsByClassName("list")[0].innerHTML;
		keyword2 = keyword2.replace(/(\&shy;|­|&#173;)/gi, "");
		if (keyword2.toUpperCase().indexOf(filter) > -1) {
			group[i].style.display = "";
		}
		else {
			group[i].style.display = "none";
		}
	}
}


//
group = document.getElementsByClassName("group");
var i
for (i = 0; i < group.length; i++) {
	list = group[i].getElementsByClassName("table_6");
	var p, empty
	var array = [];
	for (p = 0; p < list.length; p++) {
		item = list[p].innerHTML;
		item = item.replace(/(\&shy;|­|&#173;)/gi, "");
		array = array.concat(item);
		
	};
	group[i].getElementsByClassName("list")[0].innerHTML = array;
};