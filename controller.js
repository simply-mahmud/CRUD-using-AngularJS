var app = angular.module("myTodoList", []);

app.controller("myCtrl", function($scope){

    $scope.allTodos = ["xor bite","sleep","office","coding"];

    $scope.add = function(){
        $scope.errorInfo = "";
        $scope.allTodos.push($scope.addTodo);
        $scope.addTodo = "";
    }

    $scope.delete =  function(x){
        $scope.allTodos.splice(x,1);
    }

    $scope.editingData = function(x,index){
        $scope.addTodo = x;
        //console.log("test "+index);
        $scope.UpdateIndex = index;
    }

    $scope.update = function(){
        //console.log("test2 "+$scope.UpdateIndex);
        $scope.allTodos[$scope.UpdateIndex]=$scope.addTodo;
        $scope.addTodo = "";
    } 
});