var UserController = require('./userController');
var IntController = require('./intController');
var upcominginterviews = require('./upcominginterviews');

module.exports = {
	users: UserController,
	int: IntController,
	intPlay: upcominginterviews
}