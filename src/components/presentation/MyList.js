/**
 * Component for Rendering candidate and Interview list
 */

var React = require('react');
var ReactDOM = require('react-dom')
var dragula = require('react-dragula');
var ReactTooltip = require('react-tooltip');
var validUrl = require('valid-url');



var MyList = React.createClass({

    render: function(){
       
        var listMapped = this.props.listData.map(function(list, index){

            list.picture = (validUrl.isUri(list.picture))?list.picture:window.location.origin+'/images/dummy.png';

            return (
                
                                    <li onClick={this.props.onClick} key={index} id={list._id} className="list-group-item card_org">
                                        <div className="col-xs-12 col-sm-5">
                                            <img src={list.picture} alt={list.name.first + ' '+ list.name.last} className="img-responsive img-circle" />
                                        </div>
                                        <div className="col-xs-12 col-sm-7">
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
                                        <div className="clearfix"></div>
                                    </li>
               


                );

        }.bind(this));
    return (
       <div id={this.props.listType}>
                {listMapped}
         </div>
        );
    },
    /**
     * Adding Drag and drop functionality using dragula.
     */
  componentDidMount: function () {
    // if source is candidate list
    if(this.props.listType == 'can')
    {
        var containerCan = ReactDOM.findDOMNode(this);
        var dropCandidate =  document.getElementById('drop-zone-can');
        var drake_can = dragula({
          copy: false
        });
        drake_can.containers.push(containerCan, dropCandidate);
       
    }
    else // if source is Interviewer list
    {
        var containerInt = ReactDOM.findDOMNode(this);
        var dropInterviewers =  document.getElementById('drop-zone-int');
        var drake_int = dragula({
          copy: function (el, source) {           
            return source == containerInt;
        },
         
        accepts: function (el, target) {
          //  console.log(target.id);
            if(target.id == 'int')
                return false;
            else
                return true;
        },
           revertOnSpill: true,
           removeOnSpill: true

        });
        drake_int.containers.push(containerInt,dropInterviewers);
        drake_int.on('drop', function(el){
           // console.log($(el).parent(), $(el).parent().children.length);
            if($('#drop-zone-int')[0].children.length > 1 && $(el).parent()[0].id=='drop-zone-int')
            {
                drake_int.cancel();
                alert('You can add only one Interviewer at a time.');                
            }           
        });      
       
    }
  }
});

module.exports = MyList;
