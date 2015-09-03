(function () {
  'use strict';
  angular
      .module('selectDemoRemoteAPI', ['ngMaterial'])
      .controller('AppCtrl', function($scope, $mdRemoteUI) {

        $scope.options = ['A', 'B'];
        
        $scope.openSelect = function() {
          $mdRemoteUI.getRemoteAPI('remote-select').open();
        }
      });
})();
