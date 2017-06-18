var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var sass        = require('gulp-less');

// Compile sass into CSS & auto-inject into browsers
gulp.task('less', function() {
    return gulp.src(['app/less/*.less'])
        .pipe(sass())
        .pipe(gulp.dest("app/css"))
        .pipe(browserSync.stream());
});

// Static Server + watching scss/html files
gulp.task('serve', ['less'], function() {

    browserSync.init({
        server: "./app"  
    });

    gulp.watch(['app/less/*.less'], ['less']);
    gulp.watch("app/*.html").on('change', browserSync.reload);
});

gulp.task('default', ['serve']);