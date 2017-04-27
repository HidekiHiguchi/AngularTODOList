app.controller("MainController", function($scope){
  $scope.tasks = [
    { id: 0, name: 'Comprar pao', descricao: 'ir ate a padaria e comprar pao', ativ_data: '28/04',},
    { id: 1, name: 'Estudar angular', descricao: 'ler a documentacao denovo', ativ_data: '28/04',}];
  $scope.newTask = null;
  $scope.descricao = null;
  $scope.ativ_data = null;
  $scope.status = null;
  $scope.hide = true;
  $scope.setHide = function() {
    $scope.hide = !$scope.hide;
    $scope.newTask = null;
    $scope.descricao = null;
    $scope.ativ_data = null;
  }
  $scope.addNew = function() {
    if ($scope.newTask != null && $scope.newTask != "") {
      $scope.tasks.push({ id: $scope.tasks.length, name: $scope.newTask, descricao: $scope.descricao, ativ_data: $scope.ativ_data});
      $scope.setHide();
    }
  }
  $scope.removeFromList = function(id) {
    $scope.tasks.splice(id, 1);
    // var i = 0;
    // for (i; i < $scope.tasks.length; i++) {
    //   $scope.tasks[i].id = i;
    // }
  }



});
