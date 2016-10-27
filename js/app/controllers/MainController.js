function MainController() {
    this.name = 'Steve Jobs';
}

function addNumbers(x, y){
  return parseFloat(x, 10) + parseFloat(y, 10);
}

angular
    .module('app')
    .controller('MainController', MainController);