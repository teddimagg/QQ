Meteor.subscribe("schools");
Meteor.subscribe("courses");
Meteor.subscribe("categories");

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
		sel = event.target.cat;
		var cat = sel.options[sel.selectedIndex].getAttribute('data-id');

		Courses.insert({name: name, courseid: id, school: school, category: cat});
		event.target.reset();
	},
	'submit .addcat': function(){
		event.preventDefault();

		var name = event.target.name.value;
		var icon = event.target.icon.value;
		Categories.insert({name: name, icon: icon});
		event.target.reset();

	}
});

Template.admin.onRendered(function(){
    $('.addschool').validate();
});

Template.admin.helpers({
	schools: function () {
		return Schools.find().fetch();
	},
	cats: function() {
		return Categories.find().fetch();
	}
});

Template.adminrem.helpers({
	schools: function () {
		return Schools.find().fetch();
	},
	courses: function() {
		return Courses.find().fetch();
	},
	cats: function() {
		return Categories.find().fetch();
	}
});

Template.adminrem.events({
	'click .catlist li': function(){
       if (window.confirm("Are you sure you want to remove this category?")) {
            Categories.remove(this._id);
        }
	}
});