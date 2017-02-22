/**
 * Api Manager Module
 * Used ES6 arrow function
 */

module.exports = {

	get: (url, params, callback) => {
		var datax = (params != null)? params : '';
		$.ajax({
			url: url,
			type: 'GET',
			data: datax,
			dataType: 'json',
			success: callback,
			error: function( req, status, err ) {
				console.log( 'something went wrong', status, err );
			}
		});

	},
	post: (url, params, callback) => {
		
		$.ajax({
			url: url,
			type: 'POST',
			data: JSON.stringify(params),
			dataType: 'json',
			contentType: "application/json; charset=utf-8",
			success: callback,
			error: function( req, status, err ) {
				console.log( 'something went wrong', status, err );
			}
		});
	},
	put: (url, params, callback) => {
		
		$.ajax({
			url: url,
			type: 'PUT',
			data: JSON.stringify(params),
			dataType: 'json',
			contentType: "application/json; charset=utf-8",
			success: callback,
			error: function( req, status, err ) {
				console.log( 'something went wrong', status, err );
			}
		});
	},
	delete: (url, callback) => {
		
		$.ajax({
			url: url,
			type: 'DELETE',
			dataType: 'json',
			contentType: "application/json; charset=utf-8",
			success: callback,
			error: function( req, status, err ) {
				console.log( 'something went wrong', status, err );
			}
		});
	},

}