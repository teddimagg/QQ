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