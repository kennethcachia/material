(function () {
  'use strict';
  angular
      .module('selectDemoRemoteAPI', ['ngMaterial'])
      .controller('AppCtrl', function($scope, $mdRemoteUI) {
        var element = angular.element(document.querySelector('#remote-select'));

        $scope.options = ['A', 'B'];
        
        $scope.openSelect = function() {
          $mdRemoteUI.openSelect(element)
        }
      });
})();
