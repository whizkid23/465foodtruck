angular.module('starter.controllers', ['starter.services'])

.controller('DashCtrl', function($scope) {
})

.controller('FriendsCtrl', function($scope, Friends) {
  $scope.friends = Friends.all();
})

.controller('FriendDetailCtrl', function($scope, $stateParams, Friends) {
  $scope.friend = Friends.get($stateParams.friendId);
})

.controller('AccountCtrl', function($scope, $ionicLoading, Geo) {
	console.log("AccountCtrl");
	$scope.initialise = function () {
		console.log("In Google.maps.event.addDomListener");
		var myLatlng = new google.maps.LatLng(40.107260, -88.215225);
		var mapOptions = {
			center: myLatlng,
	                zoom: 16,
	                mapTypeId: google.maps.MapTypeId.ROADMAP
		};
		   
		var map = new google.maps.Map(document.getElementById("map"), mapOptions);
		var image = 'img/marker.png';

		// To add the marker to the map, use the 'map' property
        var marker1 = new google.maps.Marker({
            position: new google.maps.LatLng(40.107260,-88.215225),
            map: map,
            animation: google.maps.Animation.DROP,
            icon: image,
            title:"Marker1"
        });

        var marker2 = new google.maps.Marker({
            position: new google.maps.LatLng(40.112545,-88.225577),
            map: map,
            animation: google.maps.Animation.DROP,
            icon: image,
            title:"Marker2"
        });

        var marker3 = new google.maps.Marker({
            position: new google.maps.LatLng(40.109534,-88.232057),
            map: map,
            animation: google.maps.Animation.DROP,
            icon: image,
            title:"Marker3"
        });
		
		Geo.getLocation().then(function(position) {
			console.log(position);
			map.setCenter(new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude));
			var myLocation = new google.maps.Marker({
				position: new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude),
				map: map,
				title: "My Location"
			});
		});

		     
		navigator.geolocation.getCurrentPosition(function(pos) {
			console.log(pos);
			map.setCenter(new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude));
			var myLocation = new google.maps.Marker({
				position: new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude),
				map: map,
				title: "My Location"
			});
		}, function() { console.log("Cannot find location");});

		$scope.map = map;
	};
	google.maps.event.addDomListener(document.getElementById("map"), 'load', $scope.initialise());
   	     
});

