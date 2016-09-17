var myModule = angular.module('myApp');
myModule.factory('objektService', function($http) {

    var host = 'http://localhost:3000';
    
    var currentObjekt = undefined;

    var kategorien = {
        "Möbel und eigene Effekte": {
            zuHause: {
                feuerElementar: "G1",
                raubEinbruch: "G2",
                diebstahl: "G2",
                wasser: "G3",
                glasbruch: "Z4"
            },
            auswärts: {
                feuerElementar: "g1",
                raubEinbruch: "g2",
                diebstahl: "g2",
                wasser: "g3",
                glasbruch: false
            },
            übrigeRisiken: false,
        },
        "Schmuck, Arband- und Taschenuhren": {
            zuHause: {
                feuerElementar: "Z1",
                raubEinbruch: "Z1",
                diebstahl: "Z1",
                wasser: "Z1",
                glasbruch: "Z1"
            },
            auswärts: {
                feuerElementar: "z1",
                raubEinbruch: "z1",
                diebstahl: "z1",
                wasser: "z1",
                glasbruch: false
            },
            übrigeRisiken: "Z17",
        },
        "Schmuck, Arband- und Taschenuhren": {
            zuHause: {
                feuerElementar: "Z1",
                raubEinbruch: "Z1",
                diebstahl: "Z1",
                wasser: "Z1",
                glasbruch: "Z1"
            },
            auswärts: {
                feuerElementar: "z1",
                raubEinbruch: "z1",
                diebstahl: "z1",
                wasser: "z1",
                glasbruch: false
            },
            übrigeRisiken: "Z17",
        },
        "Bargeld": {
            zuHause: {
                feuerElementar: "Z2",
                raubEinbruch: "Z2",
                diebstahl: false,
                wasser: false,
                glasbruch: "Z2"
            },
            auswärts: {
                feuerElementar: "z2",
                raubEinbruch: "z2",
                diebstahl: false,
                wasser: false,
                glasbruch: "z2"
            },
            übrigeRisiken: false,
        },
        "Wertpapiere, Sparheft und Reisechecks": {
            zuHause: {
                feuerElementar: "Z2",
                raubEinbruch: "Z2",
                diebstahl: false,
                wasser: false,
                glasbruch: "Z2"
            },
            auswärts: {
                feuerElementar: "z2",
                raubEinbruch: "z2",
                diebstahl: false,
                wasser: false,
                glasbruch: "z2"
            },
            übrigeRisiken: false,
        },

        "Münzen und Medaillen": {
            zuHause: {
                feuerElementar: "Z2",
                raubEinbruch: "Z2",
                diebstahl: false,
                wasser: false,
                glasbruch: "Z2"
            },
            auswärts: {
                feuerElementar: "z2",
                raubEinbruch: "z2",
                diebstahl: false,
                wasser: false,
                glasbruch: "z2"
            },
            übrigeRisiken: false,
        },

        "Edelmetalle (Goldbarren)": {
            zuHause: {
                feuerElementar: "Z2",
                raubEinbruch: "Z2",
                diebstahl: false,
                wasser: false,
                glasbruch: "Z2"
            },
            auswärts: {
                feuerElementar: "z2",
                raubEinbruch: "z2",
                diebstahl: false,
                wasser: false,
                glasbruch: "z2"
            },
            übrigeRisiken: false,
        },

        "ungefasste Edelsteine und Perlen": {
            zuHause: {
                feuerElementar: "Z2",
                raubEinbruch: "Z2",
                diebstahl: false,
                wasser: false,
                glasbruch: "Z2"
            },
            auswärts: {
                feuerElementar: "z2",
                raubEinbruch: "z2",
                diebstahl: false,
                wasser: false,
                glasbruch: "z2"
            },
            übrigeRisiken: false,
        },

        "Gebäudeverglasung": {
            zuHause: {
                feuerElementar: "G1",
                raubEinbruch: "G2",
                diebstahl: "G2",
                wasser: "G3",
                glasbruch: "Z4"
            },
            auswärts: {
                feuerElementar: false,
                raubEinbruch: false,
                diebstahl: false,
                wasser: false,
                glasbruch: false
            },
            übrigeRisiken: false,
        },

        "Mobiliarverglasungen": {
            zuHause: {
                feuerElementar: "G1",
                raubEinbruch: "G2",
                diebstahl: "G2",
                wasser: "G3",
                glasbruch: "Z4"
            },
            auswärts: {
                feuerElementar: "g1",
                raubEinbruch: "g2",
                diebstahl: "g2",
                wasser: "g3",
                glasbruch: false
            },
            übrigeRisiken: false,
        },
        "Fahrnisbauten": {
            zuHause: {
                feuerElementar: "G1",
                raubEinbruch: "G2",
                diebstahl: "G2",
                wasser: "G3",
                glasbruch: "Z4"
            },
            auswärts: {
                feuerElementar: false,
                raubEinbruch: false,
                diebstahl: false,
                wasser: false,
                glasbruch: false
            },
            übrigeRisiken: false,
        },
        "Haustiere": {
            zuHause: {
                feuerElementar: "G1",
                raubEinbruch: "G2",
                diebstahl: "G2",
                wasser: "G3",
                glasbruch: "Z4"
            },
            auswärts: {
                feuerElementar: "g1",
                raubEinbruch: "g2",
                diebstahl: "g2",
                wasser: "g3",
                glasbruch: false
            },
            übrigeRisiken: false,
        },
        "Effekte von Gästen": {
            zuHause: {
                feuerElementar: "G1",
                raubEinbruch: "G2",
                diebstahl: "G2",
                wasser: "G3",
                glasbruch: "Z4"
            },
            auswärts: {
                feuerElementar: "g1",
                raubEinbruch: "g2",
                diebstahl: "g2",
                wasser: "g3",
                glasbruch: false
            },
            übrigeRisiken: false,
        },
        "Reisegepäck": {
            zuHause: {
                feuerElementar: "G1",
                raubEinbruch: "G2",
                diebstahl: "G2",
                wasser: "G3",
                glasbruch: "Z4"
            },
            auswärts: {
                feuerElementar: "g1",
                raubEinbruch: "g2",
                diebstahl: "g2",
                wasser: "g3",
                glasbruch: false
            },
            übrigeRisiken: false,
        },
        "Elektro- Haushaltgeräte inkl. Zubehör": {
            zuHause: {
                feuerElementar: "G1",
                raubEinbruch: "G2",
                diebstahl: "G2",
                wasser: "G3",
                glasbruch: "Z4"
            },
            auswärts: {
                feuerElementar: "g1",
                raubEinbruch: "g2",
                diebstahl: "g2",
                wasser: "g3",
                glasbruch: false
            },
            übrigeRisiken: "Z17",
        },
        "Sportgeräte inkl. Zubehör": {
            zuHause: {
                feuerElementar: "G1",
                raubEinbruch: "G2",
                diebstahl: "G2",
                wasser: "G3",
                glasbruch: "Z4"
            },
            auswärts: {
                feuerElementar: "g1",
                raubEinbruch: "g2",
                diebstahl: "g2",
                wasser: "g3",
                glasbruch: false
            },
            übrigeRisiken: "Z17",
        },
        "Hi-Fi- und Homecinemageräge": {
            zuHause: {
                feuerElementar: "G1",
                raubEinbruch: "G2",
                diebstahl: "G2",
                wasser: "G3",
                glasbruch: "Z4"
            },
            auswärts: {
                feuerElementar: "g1",
                raubEinbruch: "g2",
                diebstahl: "g2",
                wasser: "g3",
                glasbruch: false
            },
            übrigeRisiken: "Z17",
        },
        "Computer alle Art (Tablets und e-Readers)": {
            zuHause: {
                feuerElementar: "G1",
                raubEinbruch: "G2",
                diebstahl: "G2",
                wasser: "G3",
                glasbruch: "Z4"
            },
            auswärts: {
                feuerElementar: "g1",
                raubEinbruch: "g2",
                diebstahl: "g2",
                wasser: "g3",
                glasbruch: false
            },
            übrigeRisiken: "Z17",
        },
        "Mobiltelefone": {
            zuHause: {
                feuerElementar: "G1",
                raubEinbruch: "G2",
                diebstahl: "G2",
                wasser: "G3",
                glasbruch: "Z4"
            },
            auswärts: {
                feuerElementar: "g1",
                raubEinbruch: "g2",
                diebstahl: "g2",
                wasser: "g3",
                glasbruch: false
            },
            übrigeRisiken: false,
        },
        "Musikinstrumente": {
            zuHause: {
                feuerElementar: "G1",
                raubEinbruch: "G2",
                diebstahl: "G2",
                wasser: "G3",
                glasbruch: false
            },
            auswärts: {
                feuerElementar: "g1",
                raubEinbruch: "g2",
                diebstahl: "g2",
                wasser: "g3",
                glasbruch: false
            },
            übrigeRisiken: "Z17",
        },
        "Pelze": {
            zuHause: {
                feuerElementar: "G1",
                raubEinbruch: "G2",
                diebstahl: "G2",
                wasser: "G3",
                glasbruch: false
            },
            auswärts: {
                feuerElementar: "g1",
                raubEinbruch: "g2",
                diebstahl: "g2",
                wasser: "g3",
                glasbruch: false
            },
            übrigeRisiken: "Z17",
        },
        "Bilder": {
            zuHause: {
                feuerElementar: "G1",
                raubEinbruch: "G2",
                diebstahl: "G2",
                wasser: "G3",
                glasbruch: "Z4"
            },
            auswärts: {
                feuerElementar: "g1",
                raubEinbruch: "g2",
                diebstahl: "g2",
                wasser: "g3",
                glasbruch: false
            },
            übrigeRisiken: "Z17",
        },
        "Höhrgeräte": {
            zuHause: {
                feuerElementar: "G1",
                raubEinbruch: "G2",
                diebstahl: "G2",
                wasser: "G3",
                glasbruch: false
            },
            auswärts: {
                feuerElementar: "g1",
                raubEinbruch: "g2",
                diebstahl: "g2",
                wasser: "g3",
                glasbruch: false
            },
            übrigeRisiken: "Z17",
        },
        "Video- Film und Fotokameras": {
            zuHause: {
                feuerElementar: "G1",
                raubEinbruch: "G2",
                diebstahl: "G2",
                wasser: "G3",
                glasbruch: false
            },
            auswärts: {
                feuerElementar: "g1",
                raubEinbruch: "g2",
                diebstahl: "g2",
                wasser: "g3",
                glasbruch: false
            },
            übrigeRisiken: "Z17",
        },
        "Feldstecher und Fernröhre": {
            zuHause: {
                feuerElementar: "G1",
                raubEinbruch: "G2",
                diebstahl: "G2",
                wasser: "G3",
                glasbruch: false
            },
            auswärts: {
                feuerElementar: "g1",
                raubEinbruch: "g2",
                diebstahl: "g2",
                wasser: "g3",
                glasbruch: false
            },
            übrigeRisiken: "Z17",
        },
        "Heimwerkzeug": {
            zuHause: {
                feuerElementar: "G1",
                raubEinbruch: "G2",
                diebstahl: "G2",
                wasser: "G3",
                glasbruch: false
            },
            auswärts: {
                feuerElementar: "g1",
                raubEinbruch: "g2",
                diebstahl: "g2",
                wasser: "g3",
                glasbruch: false
            },
            übrigeRisiken: "Z17",
        },
        "Rasenmäher": {
            zuHause: {
                feuerElementar: "G1",
                raubEinbruch: "G2",
                diebstahl: "G2",
                wasser: "G3",
                glasbruch: false
            },
            auswärts: {
                feuerElementar: "g1",
                raubEinbruch: "g2",
                diebstahl: "g2",
                wasser: "g3",
                glasbruch: false
            },
            übrigeRisiken: "Z17",
        },
        "Optische- und Brillengläser": {
            zuHause: {
                feuerElementar: "G1",
                raubEinbruch: "G2",
                diebstahl: "G2",
                wasser: "G3",
                glasbruch: false
            },
            auswärts: {
                feuerElementar: "g1",
                raubEinbruch: "g2",
                diebstahl: "g2",
                wasser: "g3",
                glasbruch: false
            },
            übrigeRisiken: false,
        },
        "Glasgeschirr": {
            zuHause: {
                feuerElementar: "G1",
                raubEinbruch: "G2",
                diebstahl: "G2",
                wasser: "G3",
                glasbruch: false
            },
            auswärts: {
                feuerElementar: "g1",
                raubEinbruch: "g2",
                diebstahl: "g2",
                wasser: "g3",
                glasbruch: false
            },
            übrigeRisiken: false,
        },
        "Hohlgläser, z.B. Vasen": {
            zuHause: {
                feuerElementar: "G1",
                raubEinbruch: "G2",
                diebstahl: "G2",
                wasser: "G3",
                glasbruch: false
            },
            auswärts: {
                feuerElementar: "g1",
                raubEinbruch: "g2",
                diebstahl: "g2",
                wasser: "g3",
                glasbruch: false
            },
            übrigeRisiken: false,
        },
        "Beleuchtungskörper": {
            zuHause: {
                feuerElementar: "G1",
                raubEinbruch: "G2",
                diebstahl: "G2",
                wasser: "G3",
                glasbruch: false
            },
            auswärts: {
                feuerElementar: "g1",
                raubEinbruch: "g2",
                diebstahl: "g2",
                wasser: "g3",
                glasbruch: false
            },
            übrigeRisiken: false,
        },

        "Motorfahrzeuge inkl. Anhänger": false,
        "Zubehör von Motorfahrzeugen": false,
        "Wohnwagen, Mobilheime": false,
        "Wasserfahrzeuge": false,
        "Luftfahrzeuge": false
    }


    var policeCoverageForRisk = function(objekt, police, categoryRiskDetails, categoryType, fixRisk) {
      var risk = categoryRiskDetails ? categoryRiskDetails[categoryType] : fixRisk;
      
      var policeRisikoDeckung = police[risk];
      var isGedeckt = !(policeRisikoDeckung === false || policeRisikoDeckung === undefined);
      
      var diff = policeRisikoDeckung - objekt.price;
      var unterdeckung = diff < 0 ? diff : false;
      
      return {
        gedeckt :  isGedeckt,
        versicherbar : risk === false,
        unterdeckung : unterdeckung,
        risk : risk
      }
    }
    
    var policeCoverageForCategory = function(objekt, police, categoryDetails, categoryType, categoryName, fixRisk) {
      return {
          name : categoryName,
          home : policeCoverageForRisk(objekt, police, categoryDetails ? categoryDetails.zuHause : null, categoryType, fixRisk),
          travel : policeCoverageForRisk(objekt, police, categoryDetails ? categoryDetails.auswärts : null, categoryType, fixRisk)
        }
    }

    var resolveDeckung = function resolveDeckung(objekt) {

      var police = {
        G1 : 150000,
        g1 : 10000,
        G2 : 125000,
        g2 : 3000,
        G3 : 125000,
        g3 : 10000,
        Z4 : 10000,
        Z14 : 25000,
        Z17 : 3000,
        z1 : 10000,
        z1 : 3000,
        Z2 : 1000,
        z2 : 1000
      };

      var categoryDescription = kategorien[objekt.category];

      var result = {};
      result.feuerElementar = policeCoverageForCategory(objekt, police, categoryDescription, "feuerElementar", "Feuer/Elementar");
      result.diebstahl = policeCoverageForCategory(objekt, police, categoryDescription, "diebstahl", "Diebstahl");
      result.raubEinbruch = policeCoverageForCategory(objekt, police, categoryDescription, "raubEinbruch", "Raub/Einbruch");
      result.wasser = policeCoverageForCategory(objekt, police, categoryDescription, "wasser", "Wasser");
      result.glasbruch = policeCoverageForCategory(objekt, police, categoryDescription, "glasbruch", "Glasbruch");
      result.uebrige = policeCoverageForCategory(objekt, police, null, "glasbruch", "Übrige risiken", categoryDescription.übrigeRisiken);
      return result;
    }
    
    return {
				kategorien: function() {
					return kategorien;
				},
        addObjekt: function(objekt) {
            currentObjekt = objekt;
        },
        getCurrentObjekt: function() {
            return currentObjekt;
        },
        postObjektToInventory: function(objekt) {
            return $http.post(host + '/items', objekt || currentObjekt);
        },
        fetchObjekte: function() {
            return $http.get(host + '/items');
        },
        deckung: function() {
          return resolveDeckung(currentObjekt);
        }
    };
});
