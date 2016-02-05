angular.module('starter.controllers', ['starter.services'])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('SessionsCtrl', function($scope,Session) {
	$scope.sessions = Session.query()
})

.controller('SessionCtrl', function($scope, $stateParams, Session) {
	$scope.session = Session.get({sessionId: $stateParams.sessionId});
})

.controller('DocCtrl', function($scope){
	//$scope.httpHeaders = { Authorization: 'Bearer some-aleatory-token' };
	$scope.pdfName = 'Relativity: The Special and General Theory by Albert Einstein';
	//$scope.pdfUrl = 'http://192.168.1.28:8100/pdf/relativity.pdf';	
	$scope.pdfUrl = './pdf/relativity.pdf';
	$scope.scroll = 1;
	$scope.loading = 'loading';
  
	$scope.getNavStyle = function(scroll) {
	  if(scroll > 100) return 'pdf-controls fixed';
	  else return 'pdf-controls';
	}
  
	$scope.onError = function(error) {
	  console.log(error);
	}
  
	$scope.onLoad = function() {
	  $scope.loading = '';
	}
  
	$scope.onProgress = function(progress) {
	  console.log(progress);
	}
})
