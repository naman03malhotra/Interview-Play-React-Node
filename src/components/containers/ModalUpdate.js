var React = require('react');



var ModalUpdate = React.createClass({

	
	render : function(){
		 
		return (	
						<div id="modal-update" className="modal fade bs-example-modal-sm" role="dialog"  aria-hidden="true">
							<div className="modal-dialog modal-lg">
								<div className="modal-content">
									<div className="modal-header">
										<button type="button" className="close" data-dismiss="modal" aria-hidden="true">X</button>
										<h4 className="modal-title" id="mySmallModalLabel">Update Info</h4>
									</div>
									<div className="modal-body">
												<div className="row text-center">
													<span id="error_up" className="bg-primary"> </span>
												</div>
													<div className="row">
													    <div className="col-xs-12 col-md-12">
													    	<form role="form">
																
																<div className="row">
																	<div className="col-xs-12 col-sm-6 col-md-6">
																		<div className="form-group">
													                        <input type="text" name="first_name" id="first_name_up" className="form-control input-lg" placeholder="First Name" tabIndex="1"/>
																		</div>
																	</div>
																	<div className="col-xs-12 col-sm-6 col-md-6">
																		<div className="form-group">
																			<input type="text" name="last_name" id="last_name_up" className="form-control input-lg" placeholder="Last Name" tabIndex="2"/>
																		</div>
																	</div>
																</div>
																<div className="form-group">
																	<input type="text" name="phone" id="phone_up" className="form-control input-lg" placeholder="phone No." tabIndex="3"/>
																
																	<input type="email" name="email" id="email_up" className="form-control input-lg" placeholder="Email Address" tabIndex="4"/>

																	<input type="text" name="org" id="org_up" className="form-control input-lg" placeholder="Current Org." tabIndex="5"/>

																	<input type="text" name="picture" id="picture_up" className="form-control input-lg" placeholder="Picture Url" tabIndex="6"/>
																</div>
																
																
																<div className="row">
																	<div className="col-xs-6 col-md-6"><a onClick={this.props.onClick_del} className="btn btn-danger btn-block btn-lg" tabIndex="8">Delete</a></div>

																	<div className="col-xs-6 col-md-6"><a onClick={this.props.onClick} className="btn btn-primary btn-block btn-lg" tabIndex="8">Update</a></div>
																</div>
															</form>
														</div>
													</div>

													


										
									</div>
								</div>
							</div>
						</div>
		);
	}


	});


module.exports = ModalUpdate;