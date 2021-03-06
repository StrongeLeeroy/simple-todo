app.controller('TodoController', ['$scope', '$log', 'storageService', function($scope, $log, storage) {
    
    // Task-list format examples
	/*
       $scope.tasks = [
		  { name: 'Sample task 1', due: new Date(), description: 'Task description number one!', status: 1 },
		  { name: 'Sample task 2', due: new Date(), description: 'Task description number two!', status: 0},
		  { name: 'Sample longer task 3', due: new Date(), description: 'Task description number three!', status: 1}
	   ];
    */
    
    $scope.appTitle = 'ng-tasklist';
    $scope.appSubTitle = 'an AngularJS to-do app.';
    
    // Get tasklist from local storage:
    $scope.tasks = storage('GET', 'angularTodoApp');
    $scope.jsonData = 0;
    $scope.toggleJSON = function() {
        $scope.jsonData = $scope.jsonData === 0 ? 1 : 0;
    }
    
    /*  Reorders the array by date NYI. Will probably run it after every update to localStorage.
            $scope.tasks.sort(function(a, b){
                return new Date(a.due) - new Date(b.due);
            });
    */
    
    // Task methods
    // Marks a task as complete.
    $scope.changeStatus = function(index) {
        $log.info('Changing task status for index ' + index + ').');
        $scope.tasks[index].status ? $scope.tasks[index].status = 0 : $scope.tasks[index].status = 1;
        storage('PUT', 'angularTodoApp', $scope.tasks);
    };
    
    // Adds a new task to the array, by taking values from the input form.
    $scope.addNewTask = function(newTask) {
        var dueDate = new Date(newTask.due);
        $log.info('Adding new task to task-list.');
        if (isNaN(dueDate.getDay())) {
            dueDate = 'Sometime. Somewhere.';
        }
        $scope.tasks.push({ name: newTask.name, due: dueDate, description: newTask.description, status: 0 });
        storage('PUT', 'angularTodoApp', $scope.tasks);
    };
    
    // Removes a task from the array.
    $scope.removeTask = function(index) {
        $log.info('Removing task from task list at index ' + index);
        $scope.tasks.splice(index, 1);
        storage('PUT', 'angularTodoApp', $scope.tasks);
    };
    $scope.checkDate = function() {
        if ($scope.newTask.due && ($scope.newTask.due.length == 4 || $scope.newTask.due.length == 7) && $scope.newTask.due[$scope.newTask.due.length - 1] !== '/') {
            console.log();
            $scope.newTask.due += '/';
        }
    };
}]);