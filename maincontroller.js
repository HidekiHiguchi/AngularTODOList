app.controller("MainController", function($scope){
  $scope.tasks = [
    { id: 0, name: 'Comprar pao' },
    { id: 1, name: 'Estudar angular' }, ];
  $scope.newTask = null;
  $scope.addNew = function() {
    if ($scope.newTask != null && $scope.newTask != "") {
      $scope.tasks.push({ id: $scope.tasks.length, name: $scope.newTask});
    }
  }
});
