module.exports = function (grunt) {
	"use strict";
	
	require("matchdep").filterDev("grunt-*").forEach(grunt.loadNpmTasks);
	
	var settings = {srcBase: 'http://www.example.com'};
	var data = grunt.file.readJSON('data.json');
	var files = [];
	var handlebarslayouts = {};
	
	data.forEach(function (item, index) {
		item.src = item.src.split(settings.srcBase)[1].replace(/\/$/, "");
		
		handlebarslayouts['home' + index] = {
			files: {
				['dist' + item.src + '/index.html']: 'src/index.hbs'
			},
			options: {
				basePath: 'src/',
				context: {
					destinationUrl: item.dest
				}
			}
		}
	});
	
	grunt.initConfig({
		pkg: grunt.file.readJSON("package.json"),
		handlebarslayouts
	});
	
	grunt.registerTask(
		'default',
		[
			'handlebarslayouts',
		]
	);
};