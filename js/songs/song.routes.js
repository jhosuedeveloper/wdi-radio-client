angular
.module('wdiRadioClient')
.config([
  '$stateProvider',
  '$urlRouterProvider',
  RouterFunction
])


function RouterFunction($stateProvider, $urlRouterProvider){
  $stateProvider
  .state('songIndex', {
    url: '/songs',
    templateUrl: 'js/songs/index.html',
    controller: 'SongIndexController',
    controllerAs: 'vm'
  })
  .state('songNew',{
    url: '/songs/new',
    templateUrl: 'js/songs/new.html',
    controller: 'SongNewController',
    controllerAs: 'vm'
  })
  .state('songEdit',{
    url: '/songs/:id/edit',
    templateUrl: 'js/songs/edit.html',
    controller: 'SongEditController',
    controllerAs: 'vm'
  })
  .state('songShow',{
    url: '/songs/:id',
    templateUrl: 'js/songs/show.html',
    controller: 'SongShowController',
    controllerAs: 'vm'
  })
  $urlRouterProvider.otherwise('/songs')
}
