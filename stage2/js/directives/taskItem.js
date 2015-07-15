app.directive('taskItem', function() {
    return {
        restrict: 'E',
        replace: true,
        scope: false,
        templateUrl: 'js/directives/taskItem.html'
    };
});