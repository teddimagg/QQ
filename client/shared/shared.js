Template.shared.events({  
    'click .btnlogout': function(event){
        event.preventDefault();
        Meteor.logout();
        Router.go('/');
        $('#profiledrop').css("right","-300px");
		Session.set('login', false);
    }
});