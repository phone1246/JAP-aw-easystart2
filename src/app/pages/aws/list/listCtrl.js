(function () {
  'use strict';

  angular.module('BlurAdmin.pages.aws')
      .controller('awslistCtrl', awslistCtrl);

  /** @ngInject */
  function awslistCtrl($scope,$http,Instances,$timeout,aws_service,$interval) {

    $interval(function () {
        new aws_service.list_Instances().success(function(response){
          console.log(response.data);
          $scope.rowCollection = response.data;
        });
      },2000);

    $scope.smartTablePageSize=25;
    var list_Instances = Instances.data;
    //console.log(list_Instances);
    if(list_Instances.code === 200){
      $scope.rowCollection=list_Instances.data;
      //console.log($scope.rowCollection);

    }

    $scope.startEC2 = function(InstanceIDs) {
      $http({
      url: "URL HERE",
      skipAuthorization: true,
      method: 'POST',
      headers: {'X-Api-Key': 'application/x-www-form-urlencoded'},
      data: {
         "Instances":[
            {"id":InstanceIDs}
         ]
       }
     }).success(function(response){
      if (response.action ==="Starting" && response.Code === 80){

      }
      });


    };



  }
})();
