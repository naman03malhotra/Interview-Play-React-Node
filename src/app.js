/**
 * Require jQuery
 */
 $ = jQuery = require('jquery');

/**
 * Load jQuery Searchable
 */ 
 var searchable = require('jquery.searchable');


/**
 * Nprogress loading bar
 */

 var NProgress = require('NProgress');

/**
 * Require IntroJs
 */

 var introjs = require('intro.js');

/**
 * Bootstrap loading
 */

 var bootstrap = require('bootstrap');


$(function () {
   
    $('a[href="#modal-add"]').on('click', function(event) {
        event.preventDefault();
        $('#modal-add').modal('show');
    });
    $('#demo-start').on('click', function(event) {
        event.preventDefault();
        introjs.introJs().start();
    });


});

/**
 * Initalizing React App
 */



 var React = require('react');
 var ReactDOM = require('react-dom');
 var App = require('./components/Main');



 ReactDOM.render(<App/>, document.getElementById('app'));




/**
 *  Enable if you want to drag the dom using mouse.
 */

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
