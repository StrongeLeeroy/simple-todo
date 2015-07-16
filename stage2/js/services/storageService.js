app.factory('storageService', ['$log', '$cookies', function($log, $cookies) {
    return function(method, key, data) {
        if (!window.localStorage) {
            $log.warn('Your browser does not support localStorage. Falling back to cookie use.');
            if (method === 'PUT') {
                $log.log('Updating cookie data.');
                $cookies.putObject(key, JSON.stringify(data));
            } else if (method === 'GET') {
                $log.log('Getting cookie data.');
                return $cookies.getObject(key) ? JSON.parse($cookies.getObject(key)) : [];
            } else {
                $log.error('Invalid method: \'' + method + '\' in storage service call. Use \'get\' or \'put\'.');
            }
        } else {
            if (method === 'PUT') {
                $log.log('Updating localStorage.');
                localStorage.setItem(key, JSON.stringify(data));
            } else if (method === 'GET') {
                $log.log('Getting localStorage data.');
                return localStorage.getItem(key) ? JSON.parse(localStorage.getItem(key)) : [];
            } else {
                $log.error('Invalid method: \'' + method + '\' in storage service call. Use \'GET\' or \'PUT\'.');
            }
        }
    };
}]);