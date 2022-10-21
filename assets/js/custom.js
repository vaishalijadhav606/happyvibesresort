fetch("./assets/data/data.json")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    appendData(data.gallery);
    appendAboutData(data.about);
  })
  .catch(function (err) {
    console.log("error: " + err);
  });
function appendData(data) {
  console.log(data);
  for (var i = 0; i < data.length; i++) {
    const element =
      '<div class="col-6 h-50 gallery-img-container"><img class="img-fluid object-fit-cover w-100 h-100" alt="image-' +
      data[i].id +
      '" src="' +
      data[i].img +
      '"></div>';
    document.getElementById("galleryData").innerHTML += element;
  }
}

function appendAboutData(data) {
  document.getElementById("about-data").innerHTML += data;
}
