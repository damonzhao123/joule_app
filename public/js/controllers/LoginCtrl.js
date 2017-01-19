/**
 * Created by damon on 2017/1/18.
 */
define(['app', 'storageUtil'], function (app, storageUtil) {
    app.controller('LoginCtrl', ['$scope', '$rootScope', '$interval',
        'serverService',
        function ($scope, $rootScope, $interval, serverService) {
        $rootScope.title = '登录'

        $scope.isTiming = false
        $scope.btnText = '获取验证码'

        $scope.startTime = function () {
            //验证手机号是否合法
            if(this.loginForm.tel.$invalid){
                this.loginForm.tel.$dirty = true
                return
            }

            this.isTiming = true
            let time = 60
            this.btnText = `${time}s后重新获取`

            let stop = $interval(() => {
                time--
                $scope.btnText = `${time}s后重新获取`
                if(time === 0){
                    $interval.cancel(stop)
                    $scope.btnText = '获取验证码'
                    $scope.isTiming = false
                    $scope.code = ''
                }
            }, 1000)

            serverService.sendCode($scope.user.phone)
                .then(result => {
                    if(result.code === 0){

                    }
                })
        }

        $scope.login = function () {
            serverService.login(this.user)
                .then(result => {
                    if(result.code === 1){
                        alert('验证码不正确')
                    } else {
                        alert('登录成功')
                        const user = result.data
                        storageUtil.local.set(storageUtil.KEYS.USER, user)
                        window.location = '#/home'
                    }
                })
        }
    }])
})