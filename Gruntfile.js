module.exports = function(grunt) {
    // 配置
    grunt.initConfig({
        mochacli: {
            options: {
                require: ['should'],
                files: 'test/*.js'
            },
            spec: {
                options: {
                    reporter: 'spec'
                }
            },
            nyan: {
                options: {
                    reporter: 'nyan'
                }
            },
            doc: {
                options: {
                    reporter: 'doc'
                }
            }
        }
    });
    grunt.loadNpmTasks('grunt-mocha-cli');
    grunt.registerTask('test', ['mochacli:doc']);
    grunt.registerTask('default', ['mochacli:doc']);
};