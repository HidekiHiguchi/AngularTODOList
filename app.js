var app = angular.module('TodoList',['ngRoute']);

app.config(function($routeProvider, $locationProvider) {
  $routeProvider
   .when('/cadastro', {
    templateUrl: 'cadastro.html',
    controller: 'CadastroController'
  })
  .when('/edit', {
    templateUrl: 'edit.html',
    controller: 'EditController'
  })
  .otherwise({
    templateUrl: 'main.html',
    controller: 'MainController'
  });

  $locationProvider.html5Mode({
    enabled: true,
    requireBase: false
  });
});

app.service('variaveis', function () {
    var edit = null

    return {
        getEdit: function () {
            return edit;
        },
        setEdit: function(value) {
            edit = value;
        }
    };
});
