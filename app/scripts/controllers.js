angular.module('app')
    .controller('MainController', ($scope, FileService, $timeout, ngAudio) => {
        $scope.activeFile = undefined

        $scope.selectedFolder = undefined

        let currentIndex 


        function isMusicFile(file) {
            let extension = file.name.split('.').pop()
            return extension === 'mp3'
        }

        $scope.onFolderSelected = (event) => {
            $scope.showMusicsInFolder(event.target.files[0].path)
            $scope.selectedFolder = event.target.files[0].path
        }

        $scope.showMusicsInFolder = (path) => {

            FileService.getFiles(path)
                .filter(file => file.type === 'File')
                .filter(isMusicFile)
                .then(function(data) {
                    $timeout(function() {
                        $scope.musicFiles = data
                    })
                })
        }

        $scope.playMusic = (file, index) => {
            $scope.activeFile = file
            currentIndex = index

            if ($scope.activeSound) {
                $scope.activeSound.stop()
            }

            $scope.activeSound = ngAudio.load(file.path);
            $scope.activeSound.play()
        }

        $scope.playPause = () => {
            if ($scope.activeSound) {
                if ($scope.isPlaying()) {
                    $scope.activeSound.pause()
                } else {
                    $scope.activeSound.play()
                }
            }
        }

        $scope.nextSound = () => {
          currentIndex++
          if($scope.musicFiles[currentIndex]){

            $scope.playMusic($scope.musicFiles[currentIndex], currentIndex)
          }
        }

        $scope.prevSound = () => {
          currentIndex--
          if($scope.musicFiles[currentIndex]){
            $scope.playMusic($scope.musicFiles[currentIndex], currentIndex)
          }
        }

        $scope.isPlaying = () => {
            if ($scope.activeSound) {
                return !$scope.activeSound.paused
            }

        }

    })