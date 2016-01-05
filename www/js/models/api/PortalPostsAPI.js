/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

//  Stateless
var PortalPostsAPI = function ($http, $q) {

    function allPost() {
        return $http.get('json/post.json')
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

    return {
        allPost: allPost
    };
};