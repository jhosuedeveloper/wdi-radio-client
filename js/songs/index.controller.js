angular
.module('wdiRadioClient')
.controller('SongIndexController', [
  'SongFactory',
  SongIndexControllerFunction
])

function SongIndexControllerFunction(SongFactory){
  this.songs = SongFactory.query()
}
