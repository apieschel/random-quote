module.exports = function(grunt) {
	grunt.initConfig({
		name: 'Alex',
		watch: {
			files: ['*.js', '*.css'],
			tasks: ['updated']
		},
		uglify: {
			build: {
				src: ['index.js', 'logger.js'],
				dest: 'dist/bundle.js'
			}
		}
	});
	
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	
	grunt.registerTask('updated', () => {
		grunt.log.writeln(`It updated again!`);
	});
	
	grunt.registerTask('default', () => {
		grunt.log.writeln(`Hello, ${grunt.config.get('name')}!`);
	});
};

// wow