// read db
var read = (id, collection) => {
  return fetch(`/.netlify/functions/read/${collection}/${id}`, {
    method: 'POST',
  }).then(response => {
    return response.json();
  })
}

// update db
var update = (id, collection) => {
  return fetch(`/.netlify/functions/update/${collection}/${id}`, {
    method: 'POST',
  }).then(response => {
    return response.json();
  })
}


// ###########################################################
// set id and collection name of counter
var id = "308175711959515721";
var collection = "counter";


// show counter in html
Promise.resolve( read(id, collection) ).then( function(value) {
  try {
    document.getElementById("show_counter").innerHTML = value.data.count;
  }
  catch (e) {
    console.log("Counter isn't shown on page");
  }
});


// update counter
function updateCounter() {
  update(id, collection)//.then((value) => { console.log(value); });
}
