app.controller('CadastroController', function($scope, $routeParams, $location) {
     $scope.name = 'CadastroController';
     $scope.params = $routeParams;
     $scope.addNew = function() {
       if ($scope.newTask != null && $scope.newTask != "") {
         $scope.tasks.push({ id: $scope.tasks.length, name: $scope.newTask, descricao: $scope.descricao, ativData: $scope.ativData});
         $location.path('/lista');
       }
     }
 })
