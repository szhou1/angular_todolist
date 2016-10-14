var app = angular.module('todoApp', []);

app.controller('todoController', function($scope) {
  $scope.todos = [];

  $scope.addTodo = function(newTodo) {
    $scope.todos.push($scope.newTodo);
  }

  $scope.removeTodo = function(index) {
    $scope.todos.splice(index, 1);
  }
});