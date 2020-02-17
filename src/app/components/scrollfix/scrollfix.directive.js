class ScrollfixDirective {
  constructor () {
    'ngInject';

    let $window = angular.element(window),
        $parent,
        $element,
        $spacer,
        scrollOffset;

    let directive = {
      restrict: 'EA',
      scope: {
          scrollfix: '='
      },
      link: onLink,
    };

    return directive;

    function setSpacerHeight() {
      $spacer.height($element.outerHeight());
    }

    function createSpacer() {
      $spacer = angular.element('<div></div>')
                       .addClass('spacer');

      setSpacerHeight();

      return $spacer;
    }

    function onScroll() {
      console.log('scrollOffset', scrollOffset);

      if ($window.scrollTop() > scrollOffset) {
        $element.addClass('scrollfix-fixed');
        $element.parent().prepend($spacer);
        setSpacerHeight();
      } else {
        $element.removeClass('scrollfix-fixed');
        $spacer.detach();
      }
    }

    function onResize() {
      setSpacerHeight();
    }

    function onLink(scope, element, attrs) {
      angular.element(document).ready(function(){
        scrollOffset = element.offset().top;
        $element = element;
        createSpacer();

        if (scope.scrollfix) {
          scrollOffset += scope.scrollfix;
        }

        // Bind scroll events
        $window.on('scroll', onScroll);
        $window.on('resize', onResize);

        scope.$on('destroy', function() {
          $window.off('scroll', onScroll);
          $window.off('resize', onResize);
        });
      });
    }
  }
}

export default ScrollfixDirective;
