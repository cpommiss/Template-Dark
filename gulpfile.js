var gulp        = require( 'gulp' );
var sass        = require( 'gulp-sass' );
var sass_glob   = require( 'gulp-sass-glob' );
var css_clean   = require( 'gulp-clean-css' );
var css_maps    = require( 'gulp-sourcemaps' );
var env         = require( 'gulp-environments' );

gulp.task(  'sass',
            function() {
                return gulp.src( 'assets/scss/theme.scss' )
                    .pipe( sass_glob() )
                    .pipe( sass().on( 'error', sass.logError ) )
                    .pipe( gulp.dest( 'assets/css/build' ) );
            } );

gulp.task(  'sass:watch',
            function() {
                gulp.watch( 'assets/scss/**/*', [ 'sass' ] );
            } );

gulp.task(  'default', [ 'sass' ] );
