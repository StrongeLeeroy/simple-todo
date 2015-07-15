app.controller('TodoController', ['$scope', function($scope) {
	$scope.tasks = [
		{ name: 'Sample task 1', due: new Date(), status: 'Done' },
		{ name: 'Sample task 2', due: new Date(), status: 'Pending'},
		{ name: 'Sample longer task 3', due: new Date(), status: 'Done'}
	];
    $scope.markComplete = function(index) {
        $scope.tasks[index].status = 'Done';
    }
    $scope.addNewTask = function(newTask) {
        $scope.tasks.push({ name: newTask.name, due: newDate(newTask.date), status: 'Pending' });
    }
}]);