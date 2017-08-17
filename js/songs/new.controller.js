angular
.module('wdiRadioClient')
.controller('SongNewController',[
  '$state',
  'SongFactory',
  SongNewControllerFunction
])



function SongNewControllerFunction($state, SongFactory){
  this.song = new SongFactory()
  this.create = function () {
    this.song.$save(() => {
      $state.go('songIndex')
    })
  }
}
