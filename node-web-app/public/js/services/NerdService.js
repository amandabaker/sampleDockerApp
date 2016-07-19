// public/js/services/NerdService.js

angular.module('NerdService', []).factory('Nerd', ['$http', function ($http) {
  return {
    // call to get all nerds
    get: function () {
      return $http.get('/api/nerds')
    },
    // call to a specific nerd
    getOne: function (id) {
      return $http.get('/api/nerds/' + id)
    },
    // these will work when more API routes are defined on the Node side of things
    // call to POST and create a new nerd
    create: function (nerdData) {
      var config = {
        method: 'POST',
        data: nerdData
      }
      return $http.post('/api/nerds', config)
    },

    // call to DELETE a nerd
    delete: function (id) {
      return $http.delete('/api/nerds/' + id)
    }
  }
}])
