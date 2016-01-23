Template.shared.rendered = function(){
	Session.set('login', false);
};

Template.shared.events({
	'click .profile': function(){
		if(Session.get('login'))
		{
			$('#profiledrop').css("right","-300px");
			Session.set('login', false);
		}
		else
		{
			$('#profiledrop').css("right","0px");
			Session.set('login', true);
		}
	},
	'click body': function(){
		$('#profiledrop').css("right","-300px");
		Session.set('login', false);
	}
});