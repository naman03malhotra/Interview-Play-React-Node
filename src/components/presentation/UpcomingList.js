/**
 * Component for Rendering upcoming list.
 */

var React = require('react');
var ReactTooltip = require('react-tooltip');
var validUrl = require('valid-url');



var UpcomingList = React.createClass({

    render: function(){
    
        var listMapped = this.props.listData.map(function(list, index){
           var date = new Date(list.timeOfInterview).toGMTString();
           list.picture = (validUrl.isUri(list.picture))?list.picture:window.location.origin+'images/dummy.png';

            return (
                
                                    <li  key={index} id={list._id} className="list-group-item card_org">
                                        <div className="col-xs-12 col-sm-2">
                                            <img src={list.picture} alt={list.name.first + ' '+ list.name.last} className="img-responsive img-circle" />
                                        </div>
                                        <div className="col-xs-12 col-sm-3">
                                            <span className="name">{list.name.first + ' '+ list.name.last}</span><br/>

                                            <a data-tip data-for={list._id+list.company}><span className="glyphicon glyphicon-map-marker text-muted c-info" ></span></a>
                                            <ReactTooltip id={list._id+list.company}>
                                              <span>{list.company}</span>
                                            </ReactTooltip>
                                            <span className="visible-xs"> <span className="text-muted">{list.company}</span><br/></span>
                                            
                                            <a data-tip data-for={list._id+list.phone}><span className="glyphicon glyphicon-earphone text-muted c-info" ></span></a>
                                            <ReactTooltip id={list._id+list.phone}>
                                              <span>{list.phone}</span>
                                            </ReactTooltip>
                                           
                                            <span className="visible-xs"> <span className="text-muted">{list.phone}</span><br/></span>

                                             <a data-tip data-for={list._id+list.email}><span className="fa fa-envelope text-muted c-info" ></span></a>
                                            <ReactTooltip id={list._id+list.email}>
                                              <span>{list.email}</span>
                                            </ReactTooltip>
                                            <span className="visible-xs"> <span className="text-muted">{list.email}</span><br/></span>
                                        </div>
                                        <div className="col-xs-12 col-sm-2"><p>{date}</p></div>
                                        <div className="col-xs-12 col-sm-3">
                                            <span className="name">{list.interviewer.name.first + ' '+ list.interviewer.name.last}</span><br/>

                                            <a data-tip data-for={list.interviewer._id+list.interviewer.company}><span className="glyphicon glyphicon-map-marker text-muted c-info" ></span></a>
                                            <ReactTooltip id={list.interviewer._id+list.interviewer.company}>
                                              <span>{list.interviewer.company}</span>
                                            </ReactTooltip>
                                            <span className="visible-xs"> <span className="text-muted">{list.interviewer.company}</span><br/></span>
                                            
                                            <a data-tip data-for={list.interviewer._id+list.interviewer.phone}><span className="glyphicon glyphicon-earphone text-muted c-info" ></span></a>
                                            <ReactTooltip id={list.interviewer._id+list.interviewer.phone}>
                                              <span>{list.interviewer.phone}</span>
                                            </ReactTooltip>
                                           
                                            <span className="visible-xs"> <span className="text-muted">{list.interviewer.phone}</span><br/></span>

                                             <a data-tip data-for={list.interviewer._id+list.interviewer.email}><span className="fa fa-envelope text-muted c-info" ></span></a>
                                            <ReactTooltip id={list.interviewer._id+list.interviewer.email}>
                                              <span>{list.interviewer.email}</span>
                                            </ReactTooltip>
                                            <span className="visible-xs"> <span className="text-muted">{list.interviewer.email}</span><br/></span>
                                        </div>
                                        <div className="col-xs-12 col-sm-2">
                                            <img src={list.interviewer.picture} alt={list.interviewer.name.first + ' '+ list.interviewer.name.last} className="img-responsive img-circle" />
                                        </div>
                                        <div className="clearfix"></div>
                                    </li>
               


                );

        }.bind(this));
    return (
       <div id={this.props.listType}>
                {listMapped}            
       </div>
        );
    }
});

module.exports = UpcomingList;
