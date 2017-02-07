var app = angular.module('myApp',[]);

app.controller('myCtrl',function($scope,$interval){
	$scope.pause = true;
	$scope.timeGone = 0-8*60*60*1000;
	

	$scope.runTimer = function(){	
					$scope.pause = !$scope.pause;
					
					if($scope.pause){//暂停
						$interval.cancel($scope.timeoutId);
					}else{
						$scope.timeoutId = $interval(function(){
								$scope.timeGone = $scope.timeGone + 1000;
						},1000);
					}
	}	
								
});