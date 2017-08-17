angular
.module('wdiRadioClient')
.controller('SongEditController', [
  '$state',
  'SongFactory',
  SongEditControllerFunction
])


function SongEditControllerFunction($state, SongFactory){
  this.song = SongFactory.get({id: $state.params.id})

  this.update = function () {
    this.song.$update({id: $state.params.id}, (res) => {
      $state.go('songShow', { id: res.id })
    })
  }

  this.destroy = function () {
    this.song.$delete({id: $state.params.id}, () => {
      $state.go('songIndex')
    })
  }
}
