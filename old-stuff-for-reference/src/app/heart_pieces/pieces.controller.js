class PiecesController {
  constructor ($scope, $localStorage, HeartPieces, _) {
    'ngInject';

    $scope.HeartPieces = HeartPieces;
    $scope.storage = $localStorage;

    $scope.storage.foundPieces = $scope.storage.foundPieces || [];

    _.each($scope.HeartPieces.sections, function(section) {
      _.each(section.pieces, function(piece) {
        var foundPiece = _.find($scope.storage.foundPieces, function(num) {
          return num === piece.number;
        });

        piece.found = piece.check = !!foundPiece;
      });
    });

    $scope.totalPieces = _.reduce($scope.HeartPieces.sections, function(result, section) {
      return result + section.pieces.length;
    }, 0);

    $scope.toggleFound = function(piece) {
      if (piece.found) {
        piece.found = piece.check = false;
        _.remove($scope.storage.foundPieces, function(num) {
          return num === piece.number;
        });
      } else {
        piece.found = piece.check = true;
        $scope.storage.foundPieces.push(piece.number);
      }
    };
  }
}

export default PiecesController;
