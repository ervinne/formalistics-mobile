
/* global angular, SQLiteDataAccessService, UsersAPIFactory, PortalPostsAPI, FormsAPI, DocumentsDAO */

angular.module('starter.models', ['ionic', 'ngCordova'])

    .service('SQLiteDAS', ['$cordovaSQLite', '$http', SQLiteDataAccessService])

    //  <editor-fold desc="API" defaultstate="collapsed">

    .factory('$usersAPIFactory', ['$http', UsersAPIFactory])

    .factory('PortalPostsAPI', ['$http', PortalPostsAPI])

    .factory('FormsAPI', ['$http', FormsAPI])

    //  </editor-fold>

    //  <editor-fold desc="DAO" defaultstate="collapsed">

    .factory('DocumentsDAO', ['$http', DocumentsDAO])

    //  </editor-fold>

    ;
