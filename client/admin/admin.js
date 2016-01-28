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
		return Schools.find({},{sort: {name: 1}}).fetch();
	},
	cats: function() {
		return Categories.find({},{sort: {name: 1}}).fetch();
	}
});

Template.adminrem.helpers({
	schools: function () {
		return Schools.find({},{sort: {name: 1}}).fetch();
	},
	courses: function() {
		return Courses.find({},{sort: {name: 1}}).fetch();
	},
	cats: function() {
		return Categories.find({},{sort: {name: 1}}).fetch();
	}
});

Template.adminrem.events({
	'click .schoollist li': function(){
       if (window.confirm("Are you sure you want to remove this school?")) {
            Schools.remove(this._id);
        }
	},
	'click .courselist li': function(){
       if (window.confirm("Are you sure you want to remove this course?")) {
            Courses.remove(this._id);
        }
	},
	'click .catlist li': function(){
       if (window.confirm("Are you sure you want to remove this category?")) {
            Categories.remove(this._id);
        }
	}
});