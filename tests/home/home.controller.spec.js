/// <reference path="../../node_modules/jasmine-expect/index.js" />
/// <reference path="../../node_modules/jasmine-core/lib/jasmine-core/jasmine.js" />
/// <reference path="../../node_modules/jasmine-core/lib/jasmine-core/boot.js" />
/// <reference path="../../node_modules/angular/angular.js" />
/// <reference path="../../node_modules/angular-mocks/angular-mocks.js" />

describe("given a new HomeController", () => {

    var homeController;

    beforeEach(() => {
        angular.mock.module("app");
    });

    describe("when initialising has completed", () => {
        
        beforeEach(() => {
            inject(($rootScope, $controller) => {
                const scope = $rootScope.$new();
                homeController = $controller("homeController", { $scope: scope });
            });
        });

        it("then message should be set", () => {
            const expectedMessage = "the home controller";       
            expect(homeController.message).toEqual(expectedMessage);
        });
    });
});
