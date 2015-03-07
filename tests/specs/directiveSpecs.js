/**
 * Created by Navaneeth on 2/3/2015.
 */
describe('Input validation specs', function () {
    var $scope, $compile;
    beforeEach(module('helpers'));
    beforeEach(inject(function (_$compile_, _$rootScope_) {
        $scope = _$rootScope_.$new();
        $compile = _$compile_;

    }));
    beforeEach(function () {

    });

    it('Should do some sh*t', function () {
        $scope.inputModel = 20;
        var ele = $compile('<input type="text" ng-model="inputModel" input-validator />')($scope);
        $scope.$digest();
        var e = $.Event("keypress");
        e.which = 51;
        ele.trigger(e);
        //expect(ele.val()).toBe(203);
    });
})