app.controller('EditController', function($scope, $routeParams, $location, variaveis) {
     $scope.name = 'EditController';
     $scope.params = $routeParams;


     $scope.editAtiv = function() {

        $scope.tasks[variaveis.getEdit()].name = $scope.editNome;
        $scope.tasks[variaveis.getEdit()].descricao = $scope.editDescricao;
        $scope.tasks[variaveis.getEdit()].ativData = $scope.editAtivData;

        $location.path('/lista');

     }
 })
