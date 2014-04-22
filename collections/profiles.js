profiles = new Meteor.Collection('profiles');

profiles.allow({
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
	recordPosition: function(options) {
		if (profiles.findOne({uid: options.id})) {
			profiles.update(
				{ uid: options.id}, 
				{ 
					$set : {
						pos: options.pos
					}
				}
			);
		} else {
			profiles.insert({
				uid: options.id,
				pos: options.pos
			});
		}
	}
});

getMyGeolocation = function(userid) {
	return profiles.findOne({uid: userid});
}


