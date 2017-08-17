/* global angular */
angular
.module('wdiRadioClient')
.controller('SongShowController',[
  '$stateParams',
  'SongFactory',
  SongShowControllerFunction
])



function SongShowControllerFunction($stateParams, SongFactory){
this.song = SongFactory.get({id: $stateParams.id})
}
