'use strict';
angular.
  module('addModal').
  component('addModal', {
    template:
'    <div class="modal fade" id="myModal" role="dialog">'+
'      <div class="modal-dialog modal-sm">'+
'        <div class="modal-content">'+
'          <div class="modal-header">'+
'            <button type="button" class="close" data-dismiss="modal">&times;</button>'+
'            <h4 class="modal-title">Nova Atividade</h4>'+
'          </div>'+
'          <div class="modal-body">'+
'          <div class="form-group">'+
'            <label for="atividade">Atividade:</label>'+
'            <input type="text" class="form-control" id="atividade">'+
'            <label for="desc">Descrição:</label>'+
'            <input type="text" class="form-control" id="desc">'+
'            <label for="data">Data:</label>'+
'            <input type="date" class="form-control" id="data">'+
'            <button type="button" ng-click="controller.addAtiv()" class="btn btn-success">add</button>'+
'          </div>'+
'          </div>'+
'          <div class="modal-footer">'+
'            <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>'+
'          </div>'+
'        </div>'+
'      </div>'+
'    </div>'
});
