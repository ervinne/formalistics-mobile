
//  Stateless
var FormsAPI = function ($http, $q) {

    function allForms() {
        return $http.get('json/form.json')
            .then(function (response) {
                if (typeof response.data === 'object') {
                    return response.data;
                } else {
                    return $q.reject(response.data);
                }
            }, function (response) {
                return $q.reject(response.data);
            });
    }

    function getForm() {
        return $http.get('json/form.json')
            .then(function (response) {
                if (typeof response.data === 'object') {
                    return response.data;
                }
                ;
            });
    }

    return {
        allForms: allForms,
        getForm: getForm
    };

};
