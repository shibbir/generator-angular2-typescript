var gulp = require('gulp'),
    rimraf = require('rimraf'),
    plugins = require('gulp-load-plugins')({
        lazy: true
    }),
    runSequence = require('run-sequence');

var paths = {
    dist: 'dist'
};

gulp.task('clean:dist', function(done) {
    rimraf(paths.dist, done);
});

gulp.task('dev-server', plugins.shell.task('webpack-dev-server --inline --colors --progress --port 3000'));

gulp.task('build', plugins.shell.task([
    'rimraf dist',
    'webpack --config config/webpack.prod.js --progress --colors --profile --bail'
]));

gulp.task('serve', function(done) {
    runSequence('clean:dist', 'dev-server', done);
});
