angular.module('app')

.directive('fileChangeCallback', () => {
  return {
      restrict: 'A',
      link: function (scope, element, attrs) {
        let onChangeHandler = scope.$eval(attrs.fileChangeCallback)
        element.bind('change', onChangeHandler)
      }
    }
})