/* global StatusBar, cordova, angular */

// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.controllers', 'starter.models'])

    .run(function ($ionicPlatform, SQLiteDAS, $usersAPIFactory) {
        $ionicPlatform.ready(function () {
            // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
            // for form inputs)
            if (window.cordova && window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
                cordova.plugins.Keyboard.disableScroll(true);

            }
            if (window.StatusBar) {
                // org.apache.cordova.statusbar required
                StatusBar.styleDefault();
            }

            SQLiteDAS.initializeDatabase();

            var usersAPI = $usersAPIFactory.createInstance();
            var usersAPI2 = $usersAPIFactory.createInstance();

        });
    })

    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider

//            .state('app', {
//                url: '/app',
//                abstract: true,
//                templateUrl: 'templates/menu.html',
//                controller: 'AppCtrl'
//            })

            // setup an abstract state for the tabs directive
            .state('tab', {
                url: '/tab',
                abstract: true,
                templateUrl: 'templates/tabs.html'
            })

            .state('login', {
                url: '/login',
                templateUrl: 'templates/login.html',
                controller: 'LoginCtrl'
            })

            .state('tab.form-fields', {
                url: '/form-fields',
                views: {
                    menuContent: {
                        templateUrl: 'templates/form-fields.html'
                    }
                }
            })

            .state('tab.home', {
                url: '/home',
                views: {
                    'tab-home': {
                        templateUrl: 'templates/tab-home.html',
                        controller: 'HomeCtrl',
                    }
                }
            })

            .state('tab.forms', {
                url: '/forms',
                views: {
                    'tab-forms': {
                        templateUrl: 'templates/tab-forms.html',
                        controller: 'FormsCtrl'
                    }
                }
            })
            .state('tab.form-detail', {
                url: '/forms/:form_id',
                views: {
                    'tab-forms': {
                        templateUrl: 'templates/form-detail.html',
                        controller: 'FormDetailCtrl'
                    }
                }
            })

            .state('tab.myrequests', {
                url: '/myrequests',
                views: {
                    'tab-myrequests': {
                        templateUrl: 'templates/tab-myrequests.html',
                        controller: 'MyRequestsCtrl'
                    }
                }
            })

            .state('tab.myrequest', {
                url: '/myrequests/:ID',
                views: {
                    'tab-myrequests': {
                        templateUrl: 'templates/tab-myrequest.html',
                        controller: 'MyRequestsCtrl'
                    }
                }
            })

            .state('tab.me', {
                url: '/me',
                views: {
                    'tab-me': {
                        templateUrl: 'templates/tab-me.html'
                    }
                }
            });
        // if none of the above states are matched, use this as the fallback
        $urlRouterProvider.otherwise('/login');
    });
