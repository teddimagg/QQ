Meteor.publish("schools", function () {
	return Schools.find();
});

Meteor.publish("courses", function() {
	return Courses.find();
});

Meteor.publish("categories", function() {
	return Categories.find();
});