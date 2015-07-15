app.directive('taskItem', function() {
    return {
        restrict: 'E',
        scope: {
            info: '=',
            index: '@'
        },
        templateUrl: 'js/directives/taskItem.html'
    };
});