app.controller('MainController', function($scope, $route, $routeParams, $location, variaveis) {
    $scope.$route = $route;
    $scope.$location = $location;
    $scope.$routeParams = $routeParams;

  if(!$scope.tasks) {
    $scope.tasks = [
      { id: 0, name: 'Comprar pao', descricao: 'ir ate a padaria e comprar pao', ativData: '28/04',},
      { id: 1, name: 'Estudar angular', descricao: 'ler a documentacao denovo', ativData: '28/04',}];
    }
    $scope.newTask = null;
    $scope.descricao = null;
    $scope.ativData = null;
    $scope.status = null;

  $scope.removeFromList = function(id) {
    $scope.tasks.splice(id, 1);
    // var i = 0;
    // for (i; i < $scope.tasks.length; i++) {
    //   $scope.tasks[i].id = i;
    // }
  }

  $scope.setUrlToEdit = function(id) {

    variaveis.setEdit(id);

    $location.path("/edit");

  }

  $scope.setUrlToCadastro = function() {
    $location.path("/cadastro");
  }



});
