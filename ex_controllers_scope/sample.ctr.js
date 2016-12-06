(function () {
    'use strict';

    angular
        .module('CPSCards.controllers')
        .controller('SampleController', SampleController);


    SampleController.$inject = ['$rootScope', '$scope'];

    function SampleController($rootScope, $scope) {
        console.warn("SampleController instantiated");
        var vm = this;

        activate();

        ////////////////

        function activate() {

            vm.name = "Controller Scope";
            $rootScope.data = "This is from  $rootScope";

            $scope.$watch(function () {
                return $rootScope.fromRoot
            }, function (value) {
                vm.fromRoot = $rootScope.fromRoot;
                $scope.fromRoot = $rootScope.fromRoot;
            });



        }



    }
})();


(function () {
    'use strict';

    angular
        .module('CPSCards.controllers')
        .controller('SampleControllerOne', SampleControllerOne);

    SampleControllerOne.$inject = ['$rootScope'];

    function SampleControllerOne($rootScope) {

        console.warn("SampleControllerOne instantiated");

        var vm = this;



        activate();

        ////////////////

        function activate() {

            $rootScope.fromRoot = "Inherited from $rootScope."
        }
    }
})();






(function () {
    'use strict';

    angular
        .module('CPSCards.controllers')
        .controller('formController', formController);

    // formController.$inject = [];
    function formController() {

        console.warn("formController instantiated");
        var vm = this;



        activate();

        ////////////////

        function activate() {

            vm.name = "Ramakrishna Nalla";

            vm.setDefaultName = function () {

                vm.name = "Rakhi";
            }

        }
    }
})();