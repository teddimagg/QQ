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

Router.route('/category/:_id', {
	template: 'category',
	data: function(){
		var current = this.params._id;
		return Categories.findOne({ _id: current});
	}
});