app.controller('TodoController', ['$scope', function($scope) {
    
    // JSON Array - Task info storage. //
	/*$scope.tasks = [
		{ name: 'Sample task 1', due: new Date(), description: 'Task description number one!', status: 1 },
		{ name: 'Sample task 2', due: new Date(), description: 'Task description number two!', status: 0},
		{ name: 'Sample longer task 3', due: new Date(), description: 'Task description number three!', status: 1}
	];*/
    $scope.tasks = localStorage.getItem('angularJSTodoTasks') ? JSON.parse(localStorage['angularJSTodoTasks']) : [];
    console.log()
    
    // Task methods: Complete / Add / Delete //
    $scope.markComplete = function(index) {
        $scope.tasks[index].status = 1;
    };
    $scope.markDue = function(index) {
        $scope.tasks[index].status = 0;
    };
    $scope.addNewTask = function(newTask) {
        $scope.tasks.push({ name: newTask.name, due: newTask.due, description: newTask.description, status: 0 });
        updateStorage();
    };
    $scope.removeTask = function(index) {
        $scope.tasks.splice(index, 1);
        updateStorage();
    };
    function updateStorage() {
        localStorage['angularJSTodoTasks'] = JSON.stringify($scope.tasks);
    }
}]);