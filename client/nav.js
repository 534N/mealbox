Meteor.subscribe('profiles');


Template.nav.geolocated = function() {
	var myPos = getMyGeolocation(Meteor.userId());
	// console.log(myPos)
	if (myPos.pos != null) {
		return "fa fa-location-arrow";
	}
}	