angular.module('demoApp')
.controller('intermediateControlsDemoCtrl', function ($scope) {
    
    /* ========== FORM MODELS ========== */
    $scope.simple = {
        userEmail: '',
        // TODO: use isNameRequired for rxFieldName "required" midway tests
        // TODO: remove this comment after completed
        isNameRequired: true,
        volumeName: ''
    };
});

// A dummy directive only used within the rxForm demo page.
// It's used to check that some string contains 'foo', and works
// with ngForm to set the appropriate `.$error` value
// Note: This code is easier to write in Angular 1.3, because
// you can use `.$validators` instead of `.$parsers`
angular.module('encore.ui.elements')
.directive('foocheck', function () {
    return {
        require: 'ngModel',
        link: function (scope, elm, attrs, ctrl) {
            // Put a new validator on the beginning
            ctrl.$parsers.unshift(function (viewValue) {
                if (_.contains(viewValue, 'foo')) {
                    ctrl.$setValidity('foocheck', true);
                    return viewValue;
                } else {
                    ctrl.$setValidity('foocheck', false);
                    return undefined;
                }
            });
        }
    };
});
