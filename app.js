angular.module("app", ['ui.router'])
    .config(function($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/');

        $stateProvider

            .state('home', {
                url: "/",
                templateUrl: "./components/home/homeView.html",
                controller: "homeCtrl"
            //     resolve: {
            //         quizList: function(quizService) {
            //             return quizService.getQuizNames();
            //         }
            //     }
            });

    });
