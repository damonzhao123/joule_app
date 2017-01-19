/**
 * Created by damon on 2017/1/18.
 */
define(['app', 'storageUtil'], function (app, storageUtil) {
    app.controller('PersonalCenterCtrl', ['$scope', '$rootScope', function ($scope, $rootScope) {
        $rootScope.title = '个人中心'

        let user = storageUtil.local.get(storageUtil.KEYS.USER)
        if(user === null){
            alert('请先登录')
            window.location = '#/login'
        }

        $scope.user = user

        $scope.toAddrManage = function () {
            window.location = '#/addr_manage'
        }

        $scope.toFeedback = function () {
            window.location = '#/feedback'
        }
    }])
})