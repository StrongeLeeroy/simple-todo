app.factory('storageService', ['$log', function($log) {
    return function(method, key, data) {
        if (!window.localStorage) {
            $log.error('Your browser does not support localStorage. Aplication data will not be saved.');
        } else {
            if (method === 'put') {
                $log.log('Updating localStorage.');
                localStorage.setItem(key, JSON.stringify(data));
            } else if (method === 'get') {
                $log.log('Getting localStorage data.');
                return localStorage.getItem(key) ? JSON.parse(localStorage.getItem(key)) : [];
            } else {
                $log.error('Invalid method: \'' + method + '\' in storage service call. Use \'get\' or \'put\'.');
            }
        }
    };
}]);