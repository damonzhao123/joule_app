/**
 * Created by damon on 2017/1/18.
 */
define(['app', 'storageUtil'], function (app, storageUtil) {
    app.controller('FeedbackCtrl', ['$scope', '$rootScope', 'serverService',
        function ($scope, $rootScope, serverService) {
        $rootScope.title = '意见反馈'

        let user = storageUtil.local.get(storageUtil.KEYS.USER)
        $scope.feedback = {
            user_id: user._id,
            phone: user.phone
        }

        $scope.submit = function () {
            serverService.feedback(this.feedback)
                .then(result => {
                    if(result.code === 0){
                        alert('吐槽成功')
                        window.location = '#/personal'
                    }
                })
        }
    }])
})