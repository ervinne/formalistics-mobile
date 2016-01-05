
var UsersAPIFactory = function ($http, $localDAS) {

    var UsersAPI = (function () {
        console.log('UsersAPI initialized');

        this.login = function (server, email, password, callbacks) {
            callbacks = Callbacks.typeSafeHttpCallbacks(callbacks);

            var url = server + '/api/login';
            var data = {
                email: email,
                password: password
            };

            var req = {
                method: 'POST',
                url: url,
                data: Object.toparams(data),
                headers: {'Content-Type': 'application/x-www-form-urlencoded'}
            };

            $http(req).success(function (data) {
                if (data.status == "SUCCESS") {
                    $localDAS.set('server', server);
                    $localDAS.setObject('current_user', data.results);

                    callbacks.onSuccess(data);
                } else {
                    callbacks.onError(data.error_message);
                }

            }).error(callbacks.onError);

        };

    });

    var factory = {};
    factory.createInstance = function () {
        return new UsersAPI();
    };
    return factory;

};
