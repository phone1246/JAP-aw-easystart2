/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.aws', [])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('aws', {
          url: '/aws',
          template : '<ui-view></ui-view>',
          abstract: true,
          title: 'AWS',
          sidebarMeta: {
            icon: 'ion-compose',
            order: 250,
          },
        })
        .state('aws.list', {
          url: '/instances',
          templateUrl: 'app/pages/aws/list/view.html',
          title: 'Instances',
          controller: 'awslistCtrl',
          sidebarMeta: {
            order: 0,
          },
          resolve:{
            Instances:function($http,config,aws_service){
              return  aws_service.list_Instances().success(function(response){
                return response.data;
              });
            }
          }
        });
  }
})();
