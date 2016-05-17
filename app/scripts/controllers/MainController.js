angular.module('app')
      .controller('MainController', ($scope, FileService, $timeout, ngAudio) => {
        $scope.activeFile = undefined

          var path = '/home/marwane/Music/musique_classique_mp3/Various Artists - Klassische Musik fur Dummies CD4'

          FileService.getFiles(path)
            .filter(file => file.type === 'File')
            .filter(isMusicFile)
            .then(function(data){
              $timeout(function(){
                $scope.musicFiles = data
              })
          })

          function isMusicFile(file){
            let extension =  file.name.split('.').pop()
            return extension === 'mp3'
          }

          $scope.playMusic = (file) => {
              $scope.activeFile = file

              if($scope.activeSound){
                $scope.activeSound.stop()
              }

              $scope.activeSound = ngAudio.load(file.path);
              $scope.activeSound.play()
          }

      })