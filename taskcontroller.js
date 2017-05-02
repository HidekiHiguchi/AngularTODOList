app.controller('TaskController', function($scope, $routeParams, $location, TaskService, Incremento) {
  $scope.name = 'TaskController';
  $scope.params = $routeParams;


  $scope.taskCtrl = function() {
    if ($routeParams.id) {
      $scope.editAtiv();
    } else {
      $scope.addNew();
    }

  }

  $scope.task = TaskService.getTaskByID($routeParams.id);

  $scope.editAtiv = function() {

    TaskService.edit($scope.task);
    $location.path('/lista');

  }



  $scope.addNew = function() {
    if ($scope.task) {
      TaskService.add({
        id: Incremento.getNewID(),
        name: $scope.task.name,
        descricao: $scope.task.descricao,
        ativData: $scope.task.ativData
      })
    }
    $location.path('/lista');
  }


})
