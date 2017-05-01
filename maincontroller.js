app.controller('MainController', function($scope, $route, $routeParams, $location, TaskService) {
    $scope.$route = $route;
    $scope.$location = $location;
    $scope.$routeParams = $routeParams;

    $scope.newTask = null;
    $scope.descricao = null;
    $scope.ativData = null;
    $scope.status = null;

    $scope.tasks = TaskService.getTasks();

    $scope.setUrlToEdit = function(id) {

    $location.path("/edit/"+id);

  }

  $scope.removeFromList = function (id) {

    TaskService.remove(id);
    
  }

  $scope.setUrlToCadastro = function() {
    $location.path("/cadastro");
  }



});
