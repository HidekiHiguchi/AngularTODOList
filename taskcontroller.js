app.controller('TaskController', function($scope, $routeParams, $location, TaskService, Incremento) {
  $scope.name = 'TaskController';
  $scope.params = $routeParams;

$scope.taskCtrl = taskCtrl;

$scope.editAtiv = editAtiv;

$scope.addNew = addNew;


  function taskCtrl() {
    if ($routeParams.id) {
      $scope.editAtiv();
    } else {
      $scope.addNew();
    }

  }

  $scope.task = TaskService.getTaskByID($routeParams.id);

  function editAtiv() {

    TaskService.edit($scope.task);
    $location.path('/lista');

  }

  function addNew() {

      if ($scope.task && $scope.task.name) {
        TaskService.add({
          id: Incremento.getNewID(),
          name: $scope.task.name,
          descricao: $scope.task.descricao,
          ativData: $scope.task.ativData
        })
        $scope.sucessMessage = "Task: "+$scope.task.name+" foi adicionada com sucesso!";
        $scope.errorMessage = null;
        $scope.task.name = null;
        $scope.task.descricao = null;
        $scope.task.ativData = null;
      } else {
        $scope.errorMessage = "Pelo menos o nome deve ser preenchido";
        $scope.sucessMessage = null;
      }




  }


})
