(function () {
    'use strict';

    angular
        .module('CPSCards.controllers')
        .controller('cardsController', cardsController);

    cardsController.$inject = ['$http'];

    function cardsController($http) {
        var vm = this;
        activate();

        ////////////////
        function activate() {

             $http.get("./scripts/cards.json").then(sucess, failure);
            function sucess(response) {
                console.log("Sucess...");
                console.log(response.data);
                vm.list = response.data;


            }

            function failure(response) {


            }


        }
    }


})();