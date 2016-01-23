Meteor.subscribe("schools");
Meteor.subscribe("courses");

Template.admin.events({
	'submit .addschool': function(){
		event.preventDefault();

		var name = event.target.name.value;
		var url = event.target.url.value;
		var country = event.target.country.value;
		
		Schools.insert({name: name, img: url, country: country});
		event.target.reset();
	},
	'submit .addcourse': function(){
		event.preventDefault();

		var name = event.target.name.value;
		var id = event.target.id.value;

		var sel = event.target.school;
		var school = sel.options[sel.selectedIndex].getAttribute('data-id');

		Courses.insert({name: name, courseid: id, school: school});
		event.target.reset();
	}
});

Template.admin.onRendered(function(){
    $('.addschool').validate();
});

Template.admin.helpers({
	schools: function () {
		return Schools.find().fetch();
	}
});