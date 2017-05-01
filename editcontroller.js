app.controller('EditController', function($scope, $routeParams, $location, TaskService) {
     $scope.name = 'EditController';
     $scope.params = $routeParams;

     $scope.task = TaskService.getTaskByID($routeParams.id);

     $scope.editAtiv = function() {

       TaskService.edit($scope.task);
       $location.path('/lista');

     }
 })
