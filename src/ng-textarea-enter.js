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

			elem.bind('keydown', function(event) {
		    	var code = event.keyCode || event.which;

		       	if (code === 13) {
		       		if (!event.shiftKey && !event.ctrlKey && !event.altKey) {
		           		event.preventDefault();
		               	scope.$apply(attrs.enterSubmit);
		            }
		       	}
		    });
		}
	}
});