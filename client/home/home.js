Meteor.subscribe("categories");

Template.category.helpers({
	cats: function() {
		return Categories.find({},{sort: {name: 1} }).fetch();
	}
});