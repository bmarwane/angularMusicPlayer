(
  function(){
    var fs = require('fs');
    var path = require('path');
    require('bluebird').promisifyAll(fs);

    angular.module('app')
            .factory('FileService', () => {
              return {
                getFiles: function(dirPath){
                  return fs.readdirAsync(dirPath)
                            .filter(file => file.substring(0, 1) !== '.')
                            .map(file => {
                                var filePath = path.join(dirPath, file);
                                return fs.statAsync(filePath)
                                        .then(stats => {
                                            return {
                                                name: file,
                                                size: stats.size,
                                                type: stats.isFile() ? 'File' : 'Directory',
                                                modified: stats.mtime.toLocaleString(),
                                                path: filePath
                                            }
                                        })
                            })
                }

              }
            })
  }
)()
