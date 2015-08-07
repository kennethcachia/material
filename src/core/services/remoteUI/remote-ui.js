
angular.module('material.core')
    .service('$mdRemoteUI', RemoteUI);


function RemoteUI() {

  function getCtrl(element, ctrlName) {
    return element.controller(ctrlName);
  }


  function openSelect(element) {
    getCtrl(element, 'mdSelect').open();
  }


  return {
    openSelect: openSelect
  };
}

