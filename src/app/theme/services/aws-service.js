/**
 * @author a.demeshko
 * created on 12/21/15

 */
(function () {
  'use strict';

  angular.module('BlurAdmin.theme')
    .factory('aws_service', aws_service);

  /** @ngInject */
  function aws_service($http,config) {
    return {
      list_Instances :  function(){

        return $http({url: "URL HERE",
                skipAuthorization: true,
                method: 'POST',
                headers: {'X-Api-Key': 'application/x-www-form-urlencoded'},
                data: { "Instances": config.Instance

                              }
                          }).success(function(response){
                            return response;
                          });
      },

    };
  }

})();
