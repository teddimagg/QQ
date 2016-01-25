Router.configure({
	layoutTemplate:'shared'
});

Router.route('/register', function () {
    this.render('register');
});
 
Router.route('/login', function () {
    this.render('login');
});
 
Router.route('/', function () {
    this.render('home');
});

Router.route('/admin', function () {
    this.render('admin');
});

Router.route('/school/:_id', {
	template: 'school',
	data: function(){
		var currentEvent = this.params._id;
		return Schools.findOne({ _id: currentEvent});
	}
});