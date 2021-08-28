// read db
var read = (id, collection) => {
  return fetch(`/.netlify/functions/read/${collection}/${id}`, {
    method: 'POST',
  }).then(response => {
    return response.json()
  })
}

// update db
var update = (id, collection, data) => {
  return fetch(`/.netlify/functions/update/${collection}/${id}`, {
    body: JSON.stringify(data),
    method: 'POST'
  }).then(response => {
    return response.json()
  })
}


// ###########################################################
// set id and collection name of counter
var id = "308175711959515721";
var collection = "counter";


// get counter from db
var counter

Promise.resolve( read(id, collection) ).then( function(value) {
  counter = value.data.count;

  // show counter in html
  try {
    document.getElementById("show_counter").innerHTML = counter;
  }
  catch (e) {
    console.log("Counter isn't shown on page");
  }
});


// update counter
function updateCounter() {
  update(id, collection, {
    count: counter + 1,
    date: new Date()
  })//.then((value) => { console.log(value); });
}