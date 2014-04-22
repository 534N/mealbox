menus = new Meteor.Collection('menus');

menus.allow({
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
	getAllRestos: function(options) {

	}
});


// getBizMatchThis = function(keyword) {
// 	var updates = [];
// 	var menusRecords = businesses.find({
// 		"params.value": { $regex: keyword, $options: 'i' }
// 	});
// 	businessesRecords.forEach(function(rec) {
// 		updates.push(rec);
// 	})
// 	return updates;
// };


// getAllBusinesses = function() {
// 	var updates = [];
// 	var businessesRecords = businesses.find();
// 	businessesRecords.forEach(function(rec) {
// 		updates.push(rec);
// 	})
// 	return updates;
// };

