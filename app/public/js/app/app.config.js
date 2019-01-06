(function() {
  'use strict';

  angular.module('app')
    .config(config);

  config.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];

  function config($stateProvider, $urlRouterProvider, $locationProvider){

    $locationProvider.html5Mode(true);

    $stateProvider
      .state({
        name: 'app',
        abstract: true,
        component: 'app',
      })
      .state({
        name: 'landing',
        url: '/',
        parent: 'app',
        component: 'landing'
      })
      .state({
        name: 'dayview',
        url: '/dayview/:id',
        parent: 'app',
        component: 'dayview'
      })
      .state({
        name: 'weekview',
        url: '/weekview/:id',
        parent: 'app',
        component: 'weekview'
      })
      .state({
        name: 'passwordreset',
        url: '/passwordreset/:id',
        parent: 'app',
        component: 'passwordreset'
      })
      .state({
        name: 'monthview',
        url: '/monthview/:id',
        parent: 'app',
        component: 'monthview'
      })
      .state({
        name: 'userprofile',
        url: '/userprofile/:id',
        parent: 'app',
        component: 'userprofile'
      });
      // .state({
      //   name: 'resume',
      //   url: '/resume',
      //   parent: 'app',
      //   component: 'resume'
      // })
      // .state({
      //   name: 'projects',
      //   url: '/projects',
      //   parent: 'app',
      //   component: 'projects'
      // })
      // .state({
      //   name: 'hurdaudio',
      //   url: '/hurdaudio',
      //   parent: 'app',
      //   component: 'hurdaudio'
      // })
      // .state({
      //   name: 'hurdreads',
      //   url: '/hurdreads',
      //   parent: 'app',
      //   component: 'hurdreads'
      // })
      // .state({
      //   name: 'contact',
      //   url: '/contact',
      //   parent: 'app',
      //   component: 'contact'
      // })
      // .state({
      //   name: 'adminlogin',
      //   url: '/adminlogin',
      //   parent: 'app',
      //   component: 'adminlogin'
      // })
      // .state({
      //   name: 'admin',
      //   url: '/admin',
      //   parent: 'app',
      //   component: 'admin'
      // })
      // .state({
      //   name: 'hurdreadlist',
      //   url: '/hurdreadlist',
      //   parent: 'app',
      //   component: 'hurdreadlist'
      // })
      // .state({
      //   name: 'blog',
      //   url: '/blog',
      //   parent: 'app',
      //   component: 'blog'
      // })
      // .state({
      //   name: 'singleblog',
      //   url: '/singleblog/:id',
      //   parent: 'app',
      //   component: 'singleblog'
      // })
      // .state({
      //   name: 'harmonictheory',
      //   url: '/harmonictheory',
      //   parent: 'app',
      //   component: 'harmonictheory'
      // })
      // .state({
      //   name: 'techreadinglist',
      //   url: '/techreadinglist',
      //   parent: 'app',
      //   component: 'techreadinglist'
      // })
      // .state({
      //   name: 'harmonictheoryintroduction',
      //   url: '/harmonictheoryintroduction',
      //   parent: 'app',
      //   component: 'harmonictheoryintroduction'
      // })
      // .state({
      //   name: 'singlebookcube',
      //   url: '/singlebookcube/:id',
      //   parent: 'app',
      //   component: 'singlebookcube'
      // })
      // .state({
      //   name: 'hurdaudiorotation',
      //   url: '/hurdaudiorotation',
      //   parent: 'app',
      //   component: 'hurdaudiorotation'
      // })
      // .state({
      //   name: 'harmonictheorychapter1',
      //   url:'/harmonictheorychapter1',
      //   partent: 'app',
      //   component: 'harmonictheorychapter1'
      // });


  }

}());
