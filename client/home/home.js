Meteor.subscribe("schools");

Template.schools.helpers({
	schools: function () {
		return Schools.find().fetch();
	}
});