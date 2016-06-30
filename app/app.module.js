import angular from 'angular';
import uiRouter  from 'angular-ui-router';
import { homeController } from './home/home.controller.js';
import home from './home/home.html';

var app = angular.module('app', [uiRouter]);
app.controller('homeController', homeController);

app.config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider
        // route for the home page
        .state('home', {
            url: '/home', 
            template: home,
            onEnter : function() {
                console.log('Entering state home');
            },
            onExit: function() {
                console.log('Exiting state home');
            }
        });
});


