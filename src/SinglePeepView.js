(function(exports) {
  function SinglePeepView() {};

  SinglePeepView.prototype.returnHTML = function(peep) {
    return peepUser(peep)
  };

  function peepUser(peep) {
    return `<div class='peep_user'>@ ${peep.user.handle}</div>`
  };

  

  exports.SinglePeepView = SinglePeepView;
})(this);