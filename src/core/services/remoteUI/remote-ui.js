
angular.module('material.core')
    .service('$mdRemoteUI', RemoteUI);


function RemoteUI($mdComponentRegistry) {


  function register(ctrl, mdComponentId, api) {
    // Skip registration if the component does not have an md-component-id attribute.
    if (!mdComponentId) {
      return;
    }

    ctrl._remoteAPI = api;
    ctrl.destroy = $mdComponentRegistry.register(ctrl, mdComponentId);
  }


  function getRemoteAPI(mdComponentId) {
    var ctrl = $mdComponentRegistry.get(mdComponentId);
    var api = (ctrl && ctrl._remoteAPI);
    
    if (!api) {
      throw new Error('Element does not have a remote API (id: ' + mdComponentId + ')');
    }
    
    return api;
  }


  return {
    register: register,
    getRemoteAPI: getRemoteAPI
  };
}

