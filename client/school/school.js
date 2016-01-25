Template.courses.rendered = function(){
	Meteor.subscribe('courses');
	Session.set('')
}

Template.courses.helpers({
	'course': function(){
		return Courses.find().fetch();
	}
});