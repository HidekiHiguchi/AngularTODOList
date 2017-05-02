var app = angular.module('TodoList', ['ngRoute']);

app.config(function($routeProvider, $locationProvider) {
  $routeProvider
    .when('/cadastro', {
      templateUrl: 'cadastro.html',
      controller: 'TaskController'
    })
    .when('/edit/:id', {
      templateUrl: 'cadastro.html',
      controller: 'TaskController'
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


app.service('Incremento', function() {
  var incremento = 1;

  return {
    getNewID: function() {
      incremento++;
      return incremento;
    }
  };
});


app.service('TaskService', function() {
  var tasks = [{
      id: 0,
      name: 'Comprar pao',
      descricao: 'ir ate a padaria e comprar pao',
      ativData: '28/04',
    },
    {
      id: 1,
      name: 'Estudar angular',
      descricao: 'ler a documentacao denovo',
      ativData: '28/04',
    }
  ];

  return {
    getTasks: function() {
      return tasks;
    },
    add: function(task) {
      tasks.push(task);
    },

    remove: function(id) {

      var i = 0;
      for (t of tasks) {
        if (t.id == id) {
          tasks.splice(i, 1);
        }
        i++;
      }


    },

    edit: function(task) {
      var i = 0;
      for (t of tasks) {
        if (t.id == task.id)
          tasks[i] = task;
        i++;
      }

    },
    getTaskByID: function(id) {
      var i = 0;
      for (t of tasks) {
        if (t.id == id)
          return tasks[i];
        i++;
      }
      return null;
    }
  };
});
