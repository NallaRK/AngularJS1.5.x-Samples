(function () {
    'use strict';

    angular
        .module('CPSCards.controllers')
        .controller('cardsController', cardsController);

    cardsController.$inject = [];

    function cardsController() {
        var vm = this;
        activate();

        ////////////////
        function activate() {

            vm.card = {
                "title": "Gold Delta SkyMiles® Credit Card",
                "cardart": "./images/CardArts/GoldDeltaSkyMiles.png",
                "offer": "Earn 30,000 Bonus Miles",
                "desc": "after spending $1,000 in purchases on your new Card in your first 3 months and a $50 statement credit after you make a Delta purchase with your new Card within your first 3 months.†",
                "fee": "$0 introductory annual fee for the first year, then $95.†¤",
                "category": ["Partner Cards", "Airline Rewards", "Travel Rewards"]

            };

        }
    }


})();