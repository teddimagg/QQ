Template.shared.events({  
    'click .btnlogout': function(event){
        event.preventDefault();
        Meteor.logout();
        Router.go('/');
    }
});