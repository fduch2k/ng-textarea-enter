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
		       		// Detecting shift/ctrl/alt key
		       		if (!event.shiftKey && !event.ctrlKey && !event.altKey) {
		           		event.preventDefault();
		               	scope.$apply(attrs.enterSubmit);
		            }
		       	}
		    });
		}
	}
});