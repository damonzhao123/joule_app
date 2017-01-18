/**
 * Created by damon on 2017/1/18.
 */
define(['app'], function (app) {
    app.controller('HomeCtrl', ['$scope', '$rootScope', function ($scope, $rootScope) {
        $rootScope.title = '首页'
    }])
})