(function(exports) {
  function PeepsView() {};

  PeepsView.prototype.returnHTML = function(json) {
    return json.map(peep => new SinglePeepView().returnHTML(peep)).join("");
  }

  exports.PeepsView = PeepsView;
})(this);

// passes each individual Peep object into SinglePeepView




// function View(){

// }

// View.prototype.showPeep = function(peep){
//   var bodyText = peep["body"]
//   return `<div>${bodyText}</div>`
// }