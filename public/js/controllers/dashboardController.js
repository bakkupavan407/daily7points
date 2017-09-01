controllerModule.controller('dashboardController', function($scope, dashboardService) {
	console.log(dashboardService);
	console.log("test");
	$scope.data = dashboardService.getPoints();
});