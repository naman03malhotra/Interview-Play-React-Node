/**
 * Renders Interviewers List
 */

var React = require('react');
var MyList = require('../presentation/MyList');
var APIManager = require('../../utils');

var intList = React.createClass({

	getInitialState: function(){
		return {Data:[]}
	},
	componentDidMount: function(){

		var that = this;
		APIManager.get('/api/int/', null,  function(res) {
			that.setState({
				Data: res.results
			})

			$('#contact-list2').searchable({
				searchField: '#contact-list-search2',
				selector: 'li',
				childSelector: '.col-xs-12',
				show: function( elem ) {
					elem.slideDown(100);
				},
				hide: function( elem ) {
					elem.slideUp( 100 );
				}
			})
		});
		

	},
	render : function(){
		 var canType = 'int';
		return (<div >
                    <MyList id="interviewer" listData = {this.state.Data} listType= {canType} />
				</div>);
	}


	});


module.exports = intList;