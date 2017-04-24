'use strict';
angular.
  module('todoList').
  component('todoList', {
    template:
      '<table class="table table-striped"> '+
        '<thead>'+
          '<tr>' +
            '<th>Atividade</th>'+
            '<th>Descrição</th>'+
            '<th>Data</th>'+
            '<th>Status</th>'+
          '</tr>' +
        '</thead>'+
        '<tbody>'+
          '<tr ng-repeat="tarefa in $ctrl.tarefas">'+
            '<td>{{tarefa.atividade}}</td>'+
            '<td>{{tarefa.descricao}}</td>'+
            '<td>{{tarefa.data}}</td>'+
            '<td>{{tarefa.status}}'+
            '<button ng-if="tarefa.status == '+"'Pendente'"+'" type="button" class="btn-xs btn-success">feito</button>'+
            '<button ng-if="tarefa.status != '+"'Pendente'"+'" type="button" class="btn-xs btn-danger">desfazer</button>'+
            '</td>'+
          '</tr>'+
        '</tbody>'+
      '</table>' +
      '<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#myModal">Add</button>',
    controller: function TodoListController() {

      this.addAtiv = function() {
        this.tarefas.push("asd","asdasd","asdasd","wedwedf");
      }

      this.tarefas = [
        {
          atividade: 'Ir ao Mercado',
          descricao: 'comprar ovos',
          data: '15/06',
          status: 'Pendente'
        }, {
          atividade: 'Ir a padaria',
          descricao: 'comprar leite',
          data: '15/05',
          status: 'Completo'
        }
      ];
    }
});
