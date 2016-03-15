/*
    ng-textarea-enter v0.1.0
    Copyright (c) 2016 Arun Michael Dsouza (amdsouza92@gmail.com)
    Licence: MIT
*/

"use strict";
angular.module('ng-textarea-enter', []).directive('enterSubmit', function() {
	return {
		restrict: 'A',
		link: function(scope, elem, attrs) {

			// Detecting key down event
			elem.bind('keydown', function(event) {
		    	var code = event.keyCode || event.which;

		    	// Detecting enter key press
		       	if (code === 13) {


		       		if(elem[0].type == 'textarea') {
		       			if(scope[attrs.ngModel] != undefined && scope[attrs.ngModel] != '') {

		       				// Detecting shift/ctrl/alt key press
				       		if (!event.shiftKey && !event.ctrlKey && !event.altKey) {
				           		event.preventDefault();
				               	scope.$apply(attrs.enterSubmit);
				            }

		       			}
		       		}
		       	}
		    });
		}
	}
});