
var React = require('react');
var ReactDOM = require('react-dom');


var CanList = require('./containers/CandidateList');
var IntList = require('./containers/InterviewerList');
var UpcomingInterviews = require('./containers/UpcomingInterviews');
//var ModalAdd = require('./containers/ModalAdd');

/*

var data =  [{"phone":"+1 (893) 489-2666","email":"josefina.ramos@assistix.name","company":"ASSISTIX","name":{"last":"Ramos","first":"Josefina"},"picture":"https://randomuser.me/api/portraits/med/men/58.jpg"},{"phone":"+1 (964) 549-3935","email":"kathleen.rojas@intrawear.com","company":"INTRAWEAR","name":{"last":"Rojas","first":"Kathleen"},"picture":"https://randomuser.me/api/portraits/med/men/20.jpg"},{"phone":"+1 (800) 441-2514","email":"blair.peck@ecolight.biz","company":"ECOLIGHT","name":{"last":"Peck","first":"Blair"},"picture":"https://randomuser.me/api/portraits/med/men/85.jpg"},{"phone":"+1 (882) 440-3969","email":"alford.tran@isosphere.net","company":"ISOSPHERE","name":{"last":"Tran","first":"Alford"},"picture":"https://randomuser.me/api/portraits/med/men/70.jpg"},{"phone":"+1 (909) 524-2609","email":"tran.stewart@exospace.org","company":"EXOSPACE","name":{"last":"Stewart","first":"Tran"},"picture":"https://randomuser.me/api/portraits/med/men/11.jpg"},{"phone":"+1 (804) 520-2434","email":"glenn.bishop@melbacor.biz","company":"MELBACOR","name":{"last":"Bishop","first":"Glenn"},"picture":"https://randomuser.me/api/portraits/med/men/6.jpg"},{"phone":"+1 (926) 505-2045","email":"brigitte.cabrera@elita.info","company":"ELITA","name":{"last":"Cabrera","first":"Brigitte"},"picture":"https://randomuser.me/api/portraits/med/men/18.jpg"},{"phone":"+1 (811) 569-2176","email":"paul.cain@nixelt.ca","company":"NIXELT","name":{"last":"Cain","first":"Paul"},"picture":"https://randomuser.me/api/portraits/med/men/76.jpg"},{"phone":"+1 (816) 510-2768","email":"greta.keith@balooba.tv","company":"BALOOBA","name":{"last":"Keith","first":"Greta"},"picture":"https://randomuser.me/api/portraits/med/men/50.jpg"},{"phone":"+1 (840) 448-3143","email":"gwen.estrada@luxuria.us","company":"LUXURIA","name":{"last":"Estrada","first":"Gwen"},"picture":"https://randomuser.me/api/portraits/med/men/37.jpg"}];

var data2 = [{"phone":"+1 (941) 425-2012","email":"cooke.daugherty@shadease.me","company":"SHADEASE","name":{"last":"Daugherty","first":"Cooke"},"picture":"https://randomuser.me/api/portraits/med/men/59.jpg"},{"phone":"+1 (912) 464-3435","email":"gutierrez.langley@indexia.co.uk","company":"INDEXIA","name":{"last":"Langley","first":"Gutierrez"},"picture":"https://randomuser.me/api/portraits/med/men/75.jpg"},{"phone":"+1 (845) 450-3920","email":"deirdre.wagner@yogasm.biz","company":"YOGASM","name":{"last":"Wagner","first":"Deirdre"},"picture":"https://randomuser.me/api/portraits/med/men/12.jpg"},{"phone":"+1 (913) 517-3994","email":"morrison.sutton@remotion.tv","company":"REMOTION","name":{"last":"Sutton","first":"Morrison"},"picture":"https://randomuser.me/api/portraits/med/men/74.jpg"},{"phone":"+1 (927) 419-2395","email":"saundra.burt@quotezart.ca","company":"QUOTEZART","name":{"last":"Burt","first":"Saundra"},"picture":"https://randomuser.me/api/portraits/med/men/19.jpg"}];
*/


var App = React.createClass({

 /* getDefaultProps: function () {
    return {Data:data, Data2: data2}
  },
  getInitialState: function(){
      return {Data:[], Data2: []}
  },*/
  componentDidMount: function(){},
  toggleX: function(id,id1)
  {

    $('#contact-list-search').focus();
    $('#'+id).toggleClass('hide-search');

    if ($('#'+id).hasClass('hide-search')) 
     $('#'+id1).closest('.row').slideUp(100);
   else
     $('#'+id1).closest('.row').slideDown(100);

   
 },

render: function () {
  
   return (



         <section id="main">

            <div className="">

               <div className="col-md-3">


                  <div className="row">
                     <div className="col-xs-12 col-sm-12">
                        <div className="panel panel-default">
                           <div className="panel-heading c-list">
                              <span className="title">Candidates</span>
                              <ul className="pull-right c-controls">
                                 <li><a href="#modal-add" data-toggle="tooltip" data-placement="top" title="Add Candidate"><i className="glyphicon glyphicon-plus"></i></a></li>
                                 <li><a href="#" id="c1" className="hide-search"  data-command="toggle-search"  onClick={this.toggleX.bind(this,'c1','cx1')} data-toggle="tooltip" data-placement="top" title="Toggle Search"><i className="fa fa-search"></i></a></li>
                              </ul>
                           </div>

                           <div className="row" id="inpSt">
                              <div className="col-xs-12">
                                 <div className="input-group c-search" id="cx1">
                                    <input type="text" placeholder="Search for candidate" className="form-control" id="contact-list-search" tabIndex="1"/>
                                    <span className="input-group-btn">
                                       <button className="btn btn-default" type="button"><span className="glyphicon glyphicon-search text-muted"></span></button>
                                    </span>
                                 </div>
                              </div>
                           </div>
                                 <ul  className="list-group" id="contact-list">
                                  <CanList/>
                                 </ul>

                           
                        </div>
                     </div>
                  </div>









               </div>



               <div className="col-md-6">
                  <div className="row">
                     <div className="col-md-6">
                        <div className="drop-zone" id="drop-zone-can">
                           Drag and Drop Candidates
                        </div>
                     </div>
                     <div className="col-md-6">
                        <div className="drop-zone" id="drop-zone-int">
                           Drag and Drop Interviewer
                        </div>
                     </div>
                  </div>
                  
                    <br/>
                  <div className="row">
                    <UpcomingInterviews/>
                  </div>



               </div>


               <div className="col-md-3">

                  <div className="row">
                     <div className="col-xs-12 col-md-12">
                        <div className="panel panel-default">
                           <div className="panel-heading c-list">
                              <span className="title">Interviewers</span>
                              <ul className="pull-right c-controls">
                                 <li><a href="#" id="c2" className="hide-search"  data-command="toggle-search" onClick={this.toggleX.bind(this,'c2','cx2')} data-toggle="tooltip" data-placement="top" title="Toggle Search"><i className="fa fa-search"></i></a></li>
                              </ul>
                           </div>

                           <div className="row" id="inpSt">
                              <div className="col-xs-12">
                                 <div className="input-group c-search" id="cx2">
                                    <input type="text" placeholder="Search for Interviewer" className="form-control" id="contact-list-search2"/>
                                    <span className="input-group-btn">
                                       <button className="btn btn-default" type="button"><span className="glyphicon glyphicon-search text-muted"></span></button>
                                    </span>
                                 </div>
                              </div>
                           </div>

                           <ul className="list-group" id="contact-list2">
                              <IntList id="interviewer"/>                    

                           </ul>
                        </div>
                     </div>
                  </div>






               </div>

            </div>

      

         </section>

    );
  }
});



module.exports = App;