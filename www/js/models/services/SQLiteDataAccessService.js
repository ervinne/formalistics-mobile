/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var SQLiteDataAccessService = function ($cordovaSQLite, $http) {

    var DB_CONFIG = {
        name: "formalistics.db",
        version: "1.0"
    };

    var database;

    this.initializeDatabase = function () {

        try {
            if (window.cordova) {
                console.log('Cordova is available');
                database = $cordovaSQLite.openDB(DB_CONFIG.name);
            } else {
                console.log('Cordova is not available');
                database = window.openDatabase(DB_CONFIG.name, DB_CONFIG.version, 'database', -1);
            }

            $http.get('assets/create_tables.sql').then(function (response) {
                console.log(response);
                $cordovaSQLite.execute(database, response.data);
                console.log('Executed: ' + response.data);
            }, function (response) {
                console.error(response);
            });
        } catch (e) {
            console.error('DataAccessService', 'Failed to open database ' + DB_CONFIG.name + ': ' + e);
        }

    };

    this.getDatabase = function () {
        if (database) {
            return database;
        } else {
            throw "Database not yet initialized!";
        }

    };

};