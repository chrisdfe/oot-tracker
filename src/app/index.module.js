/* global malarkey:false, toastr:false, moment:false, _:falshe */
import config from './index.config';

import routerConfig from './index.route';

import runBlock from './index.run';
import MainController from './main/main.controller';
import GithubContributorService from '../app/components/githubContributor/githubContributor.service';
import WebDevTecService from '../app/components/webDevTec/webDevTec.service';

import NavbarDirective from '../app/components/navbar/navbar.directive';
import MalarkeyDirective from '../app/components/malarkey/malarkey.directive';

import HeartPieces from './heart_pieces/heart_pieces.service';
import PiecesController from './heart_pieces/pieces.controller';

import ScrollfixDirective from '../app/components/scrollfix/scrollfix.directive';

angular.module('zelda', [
  'ngAnimate',
  'ngCookies',
  'ngTouch',
  'ngSanitize',
  'ngResource',
  'ui.router',
  'ui.bootstrap',
  'ngStorage',
])
  .constant('malarkey', malarkey)
  .constant('toastr', toastr)
  .constant('moment', moment)
  .constant('_', _)
  .constant('HeartPieces', HeartPieces)
  .config(config)

  .config(routerConfig)

  .run(runBlock)
  .service('githubContributor', GithubContributorService)
  .service('webDevTec', WebDevTecService)
  .controller('MainController', MainController)
  .controller('PiecesController', PiecesController)
  .directive('acmeNavbar', () => new NavbarDirective())
  .directive('acmeMalarkey', () => new MalarkeyDirective(malarkey))
  .directive('scrollfix', () => new ScrollfixDirective());
