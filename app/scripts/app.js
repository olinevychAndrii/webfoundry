'use strict';

angular.module('profileApp', ['ui.router'])
.config(function($stateProvider, $urlRouterProvider) {
        $stateProvider
        
            // route for the home page
            .state('app', {
                url:'/',
                views: {
                    'header': {
                        templateUrl : 'views/header.html',
                    },
                    'content': {
                        templateUrl : 'views/profiles.html',
                        controller  : 'IndexController'
                    },
                    'footer': {
                        templateUrl : 'views/footer.html',
                    }
                }

            })
        
        
            .state('app.viewprofile', {
                url:'viewprofile/:registered',
                views: {
                    'content@': {
                        templateUrl : 'views/viewprofile.html',
                        controller  : 'ViewController'                  
                    }
                }
            })
        
           
            .state('app.editeprofile', {
                url:'editeprofile/:registered',
                views: {
                    'content@': {
                        templateUrl : 'views/editprofile.html',
                        controller  : 'EditController'                  
                    }
                }
            })

            // route for the menu page
            .state('app.creat', {
                url: 'creat',
                views: {
                    'content@': {
                        templateUrl : 'views/creatprofile.html',
                        controller  : 'CreatController'
                    }
                }
            }); 
    
        $urlRouterProvider.otherwise('/');
    })
;