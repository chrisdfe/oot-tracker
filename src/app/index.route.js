function routerConfig ($stateProvider, $urlRouterProvider) {
  'ngInject';
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'app/main/main.html',
      controller: 'MainController',
      controllerAs: 'main'
    })
    .state('pieces', {
      url: '/pieces/',
      templateUrl: '/app/heart_pieces/pieces.html',
      controller: 'PiecesController',
    });

  $urlRouterProvider.otherwise('/');
}

export default routerConfig;
