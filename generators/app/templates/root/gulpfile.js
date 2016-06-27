var gulp = require('gulp'),
    rimraf = require('rimraf'),
    plugins = require('gulp-load-plugins')({
        lazy: true
    }),
    runSequence = require('run-sequence');

var paths = {
    <% if (systemjs) { %>src: [
        'src/**/*.html',
        'src/**/*.js',
        'src/**/*.css',
        'src/favicon.ico'
    ],
    <% } %>dist: 'dist'
};<% if (systemjs) { %>

gulp.task('copy:src', function() {
    return gulp.src(paths.src).pipe(gulp.dest(paths.dist));
});<% } %>

gulp.task('clean:dist', function(cb) {
    rimraf(paths.dist, cb);
});
<% if (systemjs) { %>
gulp.task('server', plugins.shell.task('tsc && concurrently \"npm run tsc:w\" \"npm run lite\" '));
<% } %>
<% if (webpack) { %>gulp.task('server', plugins.shell.task('webpack-dev-server --inline --colors --progress --port 3000'));

gulp.task('build', plugins.shell.task([
    'rimraf dist',
    'webpack --config config/webpack.prod.js --progress --colors --profile --bail'
]));

<% } %>gulp.task('default', function(done) {
    runSequence('clean:dist', <% if (systemjs) { %>'copy:src', <% } %>'server', done);
});
