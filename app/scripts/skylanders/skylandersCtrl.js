'use strict';
app.controller('SkylandersCtrl', function ($scope, skylandersFactory) {
     $scope.skylanders = [];
     $scope.skylander = {};

     //$scope.skylanders = skylandersFactory.getSkylanders();
    var getSkylandersSuccessCallback = function (data, status) {
               $scope.skylanders = data;
               //$scope.close();
    };

    var errorCallback = function (data, status, headers, config) {
            console.log(data.ExceptionMessage);
        };

    var successPostCallback = function (data, status, headers, config) {
                successCallback(data, status, headers, config).success(function () {
                    $scope.skylander = {};
                    $scope.close();
                });
            };

    var successCallback = function (data, status, headers, config) {
        return skylandersFactory.getSkylanders().success(getSkylandersSuccessCallback).error(errorCallback);
    };
     //Call the Facotry and react to the data (fail or success)       
     skylandersFactory.getSkylanders().success(getSkylandersSuccessCallback).error(errorCallback);

     $scope.addSkylander = function(){
        //Create the image name
        var image = $scope.skylander.name.toLowerCase();
        $scope.skylander.image = image.replace(/\s+/g, '') + ".jpg";
        
        //Convert the strings to ints
        $scope.skylander.power =  parseInt($scope.skylander.power);
        $scope.skylander.speed =  parseInt($scope.skylander.speed);
        $scope.skylander.shield = parseInt($scope.skylander.shield);
        $scope.skylander.luck =   parseInt($scope.skylander.luck);


        //Call the skylanders factory and submit the post request
        skylandersFactory.addSkylander($scope.skylander).success(successPostCallback).error(errorCallback);
       
     };

     $scope.showSkylander = function(skylander){
        
        //$scope.open();
     }

     $scope.updateSkylander = function(){
        alert("Update");
     }

     $scope.deleteSkylander = function(skylander){
        console.log(skylander);
        skylandersFactory.deleteSkylander(skylander).success(successCallback).error(errorCallback);
     }

    //For the modals
    /* $scope.open = function () {
        modalCtrl.shouldBeOpen = true;
    };

    $scope.close = function () {
        //$scope.closeMsg = 'I was closed at: ' + new Date();
        $scope.shouldBeOpen = false;
    };

    $scope.opts = {
        backdropFade: true,
        dialogFade:true,
        controller: "SkylandersCtrl"
    };*/

 });
