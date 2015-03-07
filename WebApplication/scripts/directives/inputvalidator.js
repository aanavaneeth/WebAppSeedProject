/**
 * Created by Navaneeth on 2/3/2015.
 */

angular.module('helpers')
    .directive("inputValidator", function () {
        return {
            restrict: "A",
            require : "ngModel",
            link    : function (scope, ele, attr, controllers) {
                var regex = new RegExp('/^\d+$/');
                $(ele[0]).on("keypress", function (evt) {
                    if (evt.which !== 8 && evt.which !== 0 && (evt.which < 48 || evt.which > 57)) {
                        return false;
                    }
                });
            }
        };
    });