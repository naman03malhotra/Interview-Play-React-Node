/**
 * Component for rendering Commence List, the list you see after hitting commence Interview.
 */

var React = require('react');
var MyButton = require('./MyButton');


var CommenceList = React.createClass({
    
    render: function(){
        var listMapped = this.props.listDataUsers.map(function(list, index){
            return (
                
                                    <li  key={index} id={list._id+'-'+this.props.listDataInterviewer._id} className="list-group-item card_org">
                                        <div className="col-xs-12 col-sm-4">
                                            <img src={list.picture} style={{display:'block',margin:'auto'}} alt={list.name.first + ' '+ list.name.last} className="img-responsive img-circle" />
                                             <span className="name">{list.name.first + ' '+ list.name.last}</span>
                                        </div>
                                        
                                        <div className="col-xs-12 col-sm-4">
                                            <input class="form-control" type="datetime-local" id={list._id} is data_user={list._id} data_int={this.props.listDataInterviewer._id}/>
                                        </div>
                                        
                                        <div className="col-xs-12 col-sm-4">
                                        
                                            <img src={this.props.listDataInterviewer.picture} style={{display:'block',margin:'auto'}} alt={this.props.listDataInterviewer.name.first + ' '+ this.props.listDataInterviewer.name.last} className="img-responsive img-circle" />
                                            <span className="name">{this.props.listDataInterviewer.name.first + ' '+ this.props.listDataInterviewer.name.last}</span>
                                        </div>
                                        <div className="clearfix"></div>
                                    </li> 


                );

        }.bind(this));


    return (
       <div id={this.props.listType}>
                {listMapped}      
                <MyButton attributes= {this.props.buttonData}/>
         </div>
        );
    }
});

module.exports = CommenceList;
