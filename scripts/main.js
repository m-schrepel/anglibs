angular.module('anglibs', [])
.controller('LibsCtrl', function($scope){
	$scope.libs = {
		maleName: "",
		jobTitle: "",
		tediousTask: "",
		dirtyJob: "",
		celebrity: "",
		uselessSkill: "",
		obnoxiousCeleb: "",
		hugeNumber: "",
		adjective: "",
	}
	$scope.originalData = angular.copy($scope.libs)

	$scope.inputs = true;
	$scope.text = false;

	$scope.submit = function(){
		if($scope.libsform.$valid){
			$scope.inputs = false;
			$scope.text = true;
		}
	}
	$scope.startOver = function(){
		$scope.inputs = true;
		$scope.text = false;
		$scope.libsform.$setPristine();
		$scope.libs = angular.copy($scope.originalData)
	}
});

// $(function () {
//     var allInput = $('input');
//     $('input').focusout(function () {
//         for (var i = 0; i < allInput.length; i++) {
//             if (allInput[i].value.length === 0) {
//                 return;
//             }            
//         }
//         $('p').fadeIn(750);
//     });
// });