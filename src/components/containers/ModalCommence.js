var React = require('react');
var CommenceList = require('../presentation/CommenceList');


var ModalCommence = React.createClass({

	
	render : function(){
		//console.log(this.props.listData);
		 
		return (	
						<div id="modal-commence" className="modal fade bs-example-modal-sm" role="dialog"  aria-hidden="true">
							<div className="modal-dialog modal-lg">
								<div className="modal-content">
									<div className="modal-header">
										<button type="button" className="close" data-dismiss="modal" aria-hidden="true">X</button>
										<h4 className="modal-title" id="mySmallModalLabel">Confirm Interview</h4>
									</div>
									<div className="modal-body">
												<CommenceList listDataUsers = {this.props.listData.users} listDataInterviewer = {this.props.listData.interviewer} buttonData={this.props.listData.attributes} listType='ComList'/>									
									</div>
								</div>
							</div>
						</div>
		);
	}


	});


module.exports = ModalCommence;