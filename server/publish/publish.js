Meteor.publish("schools", function () {
	return Schools.find();
});

Meteor.publish("courses", function() {
	return Courses.find();
});