'use strict';

angular.
  module('todoListApp').
  component('todoList', {
    template:
      '<table class="table table-hover"> '+
        '<thead>'+
          '<tr>Atividade</tr>'+
          '<tr>Descrição</tr>'+
          '<tr>Data</tr>'+
        '</thead>'+
        '<tbody>'+
          '<tr>'+
            '<td>Meracado</td>'+
            '<td>Ir ao mercado de manha</td>'+
            '<td>Data</td>'+
          '</tr>'+
        '</tbody>'+
      '</table>';
    controller: function TodoListController() {
      // this.phones = [
      //   {
      //     name: 'Nexus S',
      //     snippet: 'Fast just got faster with Nexus S.'
      //   }, {
      //     name: 'Motorola XOOM™ with Wi-Fi',
      //     snippet: 'The Next, Next Generation tablet.'
      //   }, {
      //     name: 'MOTOROLA XOOM™',
      //     snippet: 'The Next, Next Generation tablet.'
      //   }
      // ];
    }
});
