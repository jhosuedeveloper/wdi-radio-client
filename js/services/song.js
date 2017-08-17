/* global angular */
angular.module('wdiRadioClient')
.factory('SongFactory',[
  '$resource',
  SongService
])


function SongService($resource){
  return $resource('http://localhost:3000/songs/:id.json', {}, {
    update: {
      method: 'PUT'
    }
  })
}
