Meteor.subscribe("courses");
Meteor.subscribe("schools");

Template.category.helpers({
	courses: function () {
		return Courses.find({category: this._id},{sort: {name: 1} }).fetch();
	},
	findschool: function(school) {
		var sme = Schools.findOne({_id: this.school},{fields: {name: 1}});
		return sme.name;
	},
	noques: function() {
		return Math.floor((Math.random() * 300) + 1);
	}
});