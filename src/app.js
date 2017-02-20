/*
 Require Basic Modules
 */
$ = jQuery = require('jquery');

var searchable = require('jquery.searchable');


/**
Nprogress loading bar
*/
var NProgress = require('NProgress');



/**
 * Bootstrap loading
 */

 var bootstrap = require('bootstrap');






// device detection
var isMobile = false;
if (/Mobi/.test(navigator.userAgent))
    isMobile = true;






$("#con_hit").click(function(){
    console.log('Connect');

});






$(document).ready(function()
{


   // init(data,data2);
    /*mixpanel.track("Initial Hit");
  if (!document.cookie || !localStorage.getItem('data'))
  {
        //console.log('localStorage not set');
        d(displayData);

    }
     else
    {
        console.log('localStorage set');
        var data = localStorage.getItem('data');
        displayData(JSON.parse(data));
    }*/

});
/*
$(window).mousemove(function (e) {
    var x = $(window).innerHeight() - 50,
        y = $(window).scrollTop() + 50;
    if ($('.gu-transit').offset().top < x) {
        //Down
        $('html, body').animate({
            scrollTop: 300 // adjust number of px to scroll down
        }, 600);
    }
    if ($('.gu-transit').offset().top < y) {
        //Up
        $('html, body').animate({
            scrollTop: 0
        }, 600);
    } else {
        $('html, body').animate({

        });
    }
});
*/

$(function () {

    if (window.location == window.parent.location) {
        $('#back-to-bootsnipp').removeClass('hide');
    }


    $('[data-toggle="tooltip"]').tooltip();

    $('a[href="#modal-add"]').on('click', function(event) {
        event.preventDefault();
        $('#modal-add').modal('show');
    })
   

    $('#contact-list').searchable({
        searchField: '#contact-list-search',
        selector: 'li',
        childSelector: '.col-xs-12',
        show: function( elem ) {
            elem.slideDown(100);
        },
        hide: function( elem ) {
            elem.slideUp( 100 );
        }
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




var React = require('react');
var ReactDOM = require('react-dom');

var App = require('./components/Main');




ReactDOM.render(<App/>, document.getElementById('app'));

