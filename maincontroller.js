app.controller("MainController", function($scope){
  $scope.tasks = [
    { id: 0, name: 'Comprar pao', descricao: 'ir ate a padaria e comprar pao', data: '28/04', status: 'ativo', },
    { id: 1, name: 'Estudar angular', descricao: 'ler a documentacao denovo', data: '28/04', status: 'ativo', }];
  $scope.newTask = null;
  $scope.descricao = null;
  $scope.data = null;
  $scope.status = null;
  $scope.hide = true;
  $scope.setHide = function() {
    $scope.hide = !$scope.hide;
    $scope.newTask = null;
    $scope.descricao = null;
    $scope.data = null;
  }
  $scope.addNew = function() {
    if ($scope.newTask != null && $scope.newTask != "") {
      $scope.tasks.push({ id: $scope.tasks.length, name: $scope.newTask, descricao: $scope.descricao, data: $scope.data, status: 'ativo'});
      $scope.setHide();
    }
  }
});
