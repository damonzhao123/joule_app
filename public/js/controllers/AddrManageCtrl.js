/**
 * Created by damon on 2017/1/18.
 */
define(['app'], function (app) {
    app.controller('AddrManageCtrl', ['$scope', '$rootScope', function ($scope, $rootScope) {
        $rootScope.title = '地址管理'

        $scope.toAddNewAddr = function () {
            window.location = '#/add_new_addr'
        }
    }])
})