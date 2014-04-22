restos = new Meteor.Collection('restos');

restos.allow({
	insert: function(bname) {
		return false;
	},
	update: function(bname) {
		return true;
	},
	remove: function(bname) {
		return true;
	}
});

Meteor.methods({

});


getAllRestos = function() {
	var allRestos = [];

	restos.find({}).forEach(function(rec) {
		allRestos.push(rec);
	});

	return allRestos;
}