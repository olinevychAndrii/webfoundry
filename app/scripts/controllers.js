'use strict';

angular.module('profileApp')

        .controller('IndexController', ['$scope','indexService', function($scope, indexService) {
            $scope.error = false;
             $scope.errorMessage ="Loading.."; 
            $scope.persons = indexService.getPersons.results; 
                   
        }])

        .controller('ViewController', ['$scope','$stateParams', 'indexService',  function($scope,$stateParams, indexService) {
             
            $scope.persons = indexService.getPersons.results;
            $scope.customFilter = parseInt($stateParams.registered, 10); 
            
            
            
        }])

        .controller('EditController', ['$scope','$stateParams', 'indexService', function($scope, $stateParams, indexService) {
            $scope.persons = indexService.getPersons.results;
            $scope.customFilter = parseInt($stateParams.registered, 10); 
            
            $scope.newUser = {"name":{"first":"", "last":""}, "email":"", "login":{"username":"", "password":""}, picture:{"large":""}}; 
            $scope.submitUser = function () {
                
             var pers = {};    
                pers = indexService.getPersons.results;   
                               
                console.log($scope.newUser);
                
                for(var i =0; i < pers.length; i++){

                    if(pers[i].registered === $scope.customFilter ){
                        if(!$scope.newUser.name.first){
                            pers[i].name.first = $scope.newUser.name.first;
                            
                        } else if (!$scope.newUser.name.last){
                             pers[i].name.last = $scope.newUser.name.last;
                            
                        } else if (!$scope.newUser.email){
                            
                             pers[i].email = $scope.newUser.email;
                        } else if (!$scope.newUser.login.username){
                            pers[i].login.username = $scope.newUser.login.username; 
                            
                        } else if (!$scope.newUser.login.password){
                           pers[i].login.password = $scope.newUser.login.password; 
                            
                        } else if (!$scope.newUser.picture.large) {
                            pers[i].picture.large = $scope.newUser.picture.large; 
                            
                        }
                    }
                }; 
                
                
                
                
                //$scope.userForm.$setPristine();
                $scope.newUser = {"name":{"first":"", "last":""}, "email":"", "login":{"username":"", "password":""}, picture:{"large":""}};
                alert('The User was updated successfully'); 
               
            }
            
        
         
        }])

        .controller('CreatController', ['$scope','indexService', function($scope, indexService) {
            
            $scope.newUser = {"name":{"first":"", "last":""}, "email":"", "login":{"username":"", "password":""}, picture:{"large":""}}; 
            $scope.submitUser = function () {
                
                $scope.persons = indexService.getPersons.results;
                               
                console.log($scope.newUser);
                $scope.persons.push($scope.newUser);

                
                $scope.userForm.$setPristine();
                $scope.newUser = {"name":{"first":"", "last":""}, "email":"", "login":{"username":"", "password":""}, picture:{"large":""}};
                alert('The User added successfully'); 
               
            }
                   
        }])

;


  
                