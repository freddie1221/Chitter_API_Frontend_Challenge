
describe('Controller', function(){

  var controller = new controller()

  describe('getPeep', function(){
    it('returns a Peep', function(){
      expect(controller.getPeep(30)).toEqual(ExamplePeep)
    });
  });

});

