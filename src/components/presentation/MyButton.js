/**
 * Button Component
 */

var React = require('react');

var MyButton = React.createClass({

	
	render : function(){
		
		return (<div className="row text-center">
					<button onClick={this.props.attributes.onClick} className={'btn btn-lg '+this.props.attributes.color+' '+((this.props.attributes.block)?this.props.attributes.block:'')}>{this.props.attributes.text}</button>
				</div>);
	}


	});


module.exports = MyButton;