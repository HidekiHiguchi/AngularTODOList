app.controller('CadastroController', function($scope, $routeParams, $location, TaskService, Incremento) {
     $scope.name = 'CadastroController';
     $scope.params = $routeParams;
     $scope.addNew = function() {
        if($scope.newTask && $scope.descricao) {
          TaskService.add({ id: Incremento.getNewID(), name: $scope.newTask, descricao: $scope.descricao, ativData: $scope.ativData})
        }
         $location.path('/lista');
     }
 })
