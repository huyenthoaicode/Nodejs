var app =  angular.module("app.todos", ["xeditable"]);

app.controller("todoController", ['$scope', 'svTodos', function($scope, svTodos){
    $scope.appName = "Danh Sách Bạn Gái Đi Chơi !!!";
    $scope.formData = {};
    $scope.todos = [];
    $scope.loading = true;
    svTodos.get().then(function(response) {
        $scope.todos = response.data;
        $scope.loading = false;
      });
    
    $scope.createTodos = function(){
        $scope.loading = true;
        var todo = {
            text: $scope.formData.text,
            isDone: false
        };
        svTodos.create(todo).then(function(response){
            $scope.todos = response.data;
            $scope.formData.text = '';
            $scope.loading = false;
        });
    }

    $scope.updateTodo = function(todo){
        console.log(todo);
        $scope.loading = true;
        svTodos.update(todo).then(function(response){
            $scope.todos = response.data;
            $scope.loading = false;
        }, err => { $scope.loading = false; alert('Sửa đổi không thành công') })
    }

    $scope.deleteTodo = function(todo){
        console.log(todo);
        $scope.loading = true;
        svTodos.delete(todo._id).then(function(response){
            $scope.todos = response.data;
            $scope.loading = false;
        }).catch(err => alert(err + ''));
    }
}]);
