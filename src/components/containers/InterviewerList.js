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