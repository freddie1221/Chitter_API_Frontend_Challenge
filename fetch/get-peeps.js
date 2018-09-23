
function getPeeps() {
  fetch('https://chitter-backend-api.herokuapp.com/peeps')
    .then(function(response) {
      return response.json();
    })
    .then(function(myJson) {
      document
        .getElementById('content')
        .innerHTML = new PeepsView().returnHTML(myJson);
    });
};