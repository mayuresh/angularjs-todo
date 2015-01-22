/**
 * Created by mayureshp on 1/22/2015.
*/
angular.module("todoApp", []).
    controller("TaskListCtrl", function($scope) {
        $scope.todos = [];

        $scope.addTodo = function() {
            $scope.newTask.completed = false;
            $scope.todos.push($scope.newTask);
            $scope.newTask = {};

        }

        $scope.remove = function (item) {
            var index = $scope.todos.indexOf(item);
            $scope.todos.splice(index, 1);
        }

        $scope.removeCompleted = function () {
            $scope.todos = $scope.todos.filter(function (i) {
                return(!i.completed);
            });
        }
    })
