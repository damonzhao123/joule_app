/**
 * Created by damon on 2017/1/19.
 */
define(['app'], function (app) {
    return app.factory('serverService', ['$q', '$http', function ($q, $http) {

        function sendCode(phone) {
            let defer = $q.defer()
            $http.get('http://localhost:4000/sendcode?phone='+phone)
                .success(result => {
                    defer.resolve(result)
                })
            return defer.promise
        }

        function login(user) {
            let defer = $q.defer()
            $http({
                method: 'POST',
                url: 'http://localhost:4000/login',
                data: 'phone='+user.phone+'&&code='+user.code,
                headers :  {'Content-Type': 'application/x-www-form-urlencoded'}
            })
            .success(result => {
                defer.resolve(result)
            })
            .error(() => {
                alert('登录异常')
            })

            return defer.promise
        }
        
        function feedback(feedback) {
            let defer = $q.defer()
            $http({
                method: 'GET',
                url: 'http://localhost:4000/feedback',
                params: {data: feedback}
            })
            .success(result => {
                defer.resolve(result)
            })
            .error(function () {
                alert('提交意见反馈异常')
            })
            return defer.promise
        }

        return {sendCode, login, feedback}
    }])
})