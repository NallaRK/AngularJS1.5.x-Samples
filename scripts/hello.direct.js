
/*

.directive("helloWorld", function(){
    return{

        template:"<h1> Hello, World!</h1>"

    }

});


*/




















(function() {
    'use strict';

    angular
        .module('CPSCards.directives')
        .directive('helloWorld', helloWorld);

    helloWorld.$inject = [];

    function helloWorld() {
        var directive = {
            bindToController: true,
            controller: helloWorldCtrl,
            controllerAs: 'vm',
            link: link,
            restrict: 'EA',
            scope: {
            },
            template : "<h1>Hello, World!!!</h1>"
        };
        return directive;
        
        function link(scope, element, attrs) {
        }
    }
    /* @ngInject */
    function helloWorldCtrl () {
        
    }
})();

