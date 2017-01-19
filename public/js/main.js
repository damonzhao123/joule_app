/**
 * Created by damon on 2017/1/18.
 */
require.config({
    baseUrl: 'js/',

    paths: {
        'angular': 'libs/angular',
        'angular-messages': 'libs/angular-messages',
        'angular-route': 'libs/angular-route',

        'app': 'app/app',

        'HomeCtrl': 'controllers/HomeCtrl',
        'PersonalCenterCtrl': 'controllers/PersonalCenterCtrl',
        'AddrManageCtrl': 'controllers/AddrManageCtrl',
        'FeedbackCtrl': 'controllers/FeedbackCtrl',
        'AddNewAddrCtrl': 'controllers/AddNewAddrCtrl',
        'OrderConfirmCtrl': 'controllers/OrderConfirmCtrl',
        'LoginCtrl': 'controllers/LoginCtrl',
        'ChooseCoordinateCtrl': 'controllers/ChooseCoordinateCtrl',
        'LocationAddrCtrl': 'controllers/LocationAddrCtrl',

        'appRoute': 'routes/appRoute'
    },

    shim : {
        'angular' : {
            exports : 'angular'
        },
        'angular-messages' : {
            exports : 'angular-messages',
            deps : ['angular']
        },
        'angular-route' : {
            exports : 'angular-route',
            deps : ['angular']
        }
    }

})

require(['angular', 'angular-messages', 'angular-route', 'app', 'appRoute',
        'HomeCtrl', 'PersonalCenterCtrl', 'AddNewAddrCtrl', 'AddrManageCtrl', 'FeedbackCtrl', 'OrderConfirmCtrl',
        'OrderConfirmCtrl', 'LoginCtrl', 'ChooseCoordinateCtrl', 'LocationAddrCtrl'], function (angular) {
        angular.bootstrap(document, ['jouleApp'])
})