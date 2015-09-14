var app = angular.module('todoApp', []);

app.controller('taskCtrl',[ '$scope', '$http', function($scope, $http){
	$scope.getData = function(){
		$http({
			type: 'GET',
        	url: '/api/todos'
		}).then(function(response){
			$scope.items = response.data;
			console.log($scope.items);
		})
	};

	$scope.createTask = function(task){
		console.log(task);
		task.complete=false;
		$http({
			method: 'POST',
			url: '/api/todos',
			data: task,
			datatype: JSON
		}).then(function(response){
			console.log(response.data);
			$scope.items = response.data;
		})
	};

	$scope.deleteTask = function(item){
		$http({
			method: 'DELETE',
			url: '/api/todos/' + item.id
		}).then(function(response){
			console.log(response.data);
			$scope.items = response.data;
		})
	};

	}

]);
