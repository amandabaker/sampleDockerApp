// public/js/controllers/MainCtrl.js

angular.module('MainCtrl', []).controller('MainController', ['$scope', 'Nerd', function ($scope, Nerd) {
  $scope.tagline = 'To the moon and back!'
  $scope.randomText = ''
  $scope.reverse = ''
  $scope.nerds = []
  $scope.getReverse = function (randomText) {
    console.log('Starting getReverse')
    $scope.tagline = 'Anything other than what it said before!'
    Nerd.create($scope.randomText)
      .then(function (createdObject) {
        createdObject = createdObject.data
        console.log(createdObject)
        Nerd.getOne(createdObject._id)
          .then(function (nerd) {
            nerd = nerd.data
            console.log(nerd)
            $scope.reverse = reverseString(nerd.name)
            console.log($scope.reverse)
            console.log($scope.reverse)
          }, function (err) {
            console.log('Could not fetch the string')
          })
      }, function (err) {
        console.log('Could not save the string')
      })
  }
  function reverseString (s) {
    return s.split('').reverse().join('')
  }
}])
