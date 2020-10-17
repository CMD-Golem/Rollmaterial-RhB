function siteSearch() {
  var input, filter, table, elements, keyword, i, group;
  input = document.getElementById("Site_Search");
  filter = input.value.toUpperCase();
  table = document.getElementById("data_table");
  elements = table.getElementsByTagName("tr");
  group = table.getElementsByClassName("group");


  for (i = 0; i < elements.length; i++) {
    keyword = elements[i].getElementsByClassName("table_6")[0];
    if (keyword.innerHTML.toUpperCase().indexOf(filter) > -1) {
      elements[i].style.display = "";
    }
    else {
      elements[i].style.display = "none";
    }
  }
  
  for (i = 0; i < group.length; i++) {
    keyword2 = group[i].getElementsByClassName("list")[0];
    if (keyword2.innerHTML.toUpperCase().indexOf(filter) > -1) {
      group[i].style.display = "";
    }
    else {
      group[i].style.display = "none";
    }
  }
}