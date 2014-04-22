Meteor.subscribe('profiles');

Template.menu.menusInMyArea = function() {
	var allRestos = getAllRestos();
	var origin = getMyGeolocation(Meteor.userId());
	var service = new google.maps.DistanceMatrixService();
	var destinations = [];
	var menus = {};
	var today = moment().format('dddd').toLowerCase();

	for(var i=0; i<allRestos.length; i++) {
		destinations.push(new google.maps.LatLng(allRestos[i].pos.lat, allRestos[i].pos.lon));
	}

	service.getDistanceMatrix({
	    origins: [new google.maps.LatLng(origin.pos.k, origin.pos.A)],
	    destinations: destinations,
	    travelMode: google.maps.TravelMode.DRIVING,
	    avoidHighways: false,
	    avoidTolls: false
	}, function(res, status) {
		var elements = res.rows[0].elements;
		for(var i=0; i<elements.length; i++) {
			if (elements[i].distance.value < 5000) {
				_.extend(menus, allRestos[i].menu[today]);
			}
		}
		console.log(menus)
		var menuArray = [];
		for(dish in menus) {
			menuArray.push(menus[dish]);
		}
		console.log(menuArray)
		Session.set('menusInMyArea', menuArray);
	});

	return Session.get('menusInMyArea');
},

Template.menu.test = function() {
	console.log(this)
}
