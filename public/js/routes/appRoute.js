/**
 * Created by damon on 2017/1/18.
 */
define(['app'], function (app) {
    return app.config(['$routeProvider', function ($routeProvider) {
        $routeProvider
            .when('/home', {
                templateUrl: 'js/templates/home.html',
                controller: 'HomeCtrl'
            })
            .when('/personal', {
                templateUrl: 'js/templates/personalCenter.html',
                controller: 'PersonalCenterCtrl'
            })
            .when('/login', {
                templateUrl: 'js/templates/login.html',
                controller: 'LoginCtrl'
            })
            .when('/feedback', {
                templateUrl: 'js/templates/feedback.html',
                controller: 'FeedbackCtrl'
            })
            .when('/addr_manage', {
                templateUrl: 'js/templates/addrManage.html',
                controller: 'AddrManageCtrl'
            })
            .when('/add_new_addr', {
                templateUrl: 'js/templates/addNewAddr.html',
                controller: 'AddNewAddrCtrl'
            })
            .when('/choose_coordinate', {
                templateUrl: 'js/templates/chooseCoordinate.html',
                controller: 'ChooseCoordinateCtrl'
            })
            .when('/location_addr', {
                templateUrl: 'js/templates/locationAddr.html',
                controller: 'LocationAddrCtrl'
            })
            .when('/order_confirm', {
                templateUrl: 'js/templates/orderConfirm.html',
                controller: 'OrderConfirmCtrl'
            })
            .otherwise('/home')
    }])
})