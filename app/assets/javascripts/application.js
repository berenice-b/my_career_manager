// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery3
//= require jquery_ujs
//= require jquery-ui/widget
//= require jquery-ui/sortable
//= require activestorage
//= require_tree .
//= require turbolinks

//= require assets/js/app.min
//= require assets/js/dragula.min
//= require assets/js/component.dragula
//= require assets/js/demo.toastr

//= require assets/js/demo.typehead
//= require assets/js/handlebars.min
//= require assets/js/typeahead.bundle.min

$(document).ready(function() {
setTimeout(function() {
        $(".alert").alert('close');
    }, 2000);
})