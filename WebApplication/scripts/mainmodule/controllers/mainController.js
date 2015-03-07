/**
 * Created by Navaneeth on 1/15/2015.
 */
angular.module('main')
    .controller("mainController", ["$scope", "mathHelpers", function ($scope, mathHelpers) {
        "use strict";
        this.Add = function () {
            this.result = mathHelpers.addTwoNumbers(this.arg1, this.arg2);
        };

        this.inputModel = 10; //initialize

    }]);