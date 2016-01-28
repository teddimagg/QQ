Meteor.subscribe("categories");

Template.categories.helpers({
	cats: function() {
		return Categories.find({},{sort: {name: 1} }).fetch();
	}
});