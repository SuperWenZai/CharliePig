var gulp = require("gulp");
var less = require('gulp-less');
var del = require("del");
var autoprefixer = require("gulp-autoprefixer");
var livereload = require('gulp-livereload');


gulp.task("default", function() {
    console.log(123)
});


gulp.task("less", function() {
    console.log('less');
});

gulp.task("min", function() {
    console.log("min");
});

gulp.task("hollo", function() {
    console.log("Hollo gulp!");
});

gulp.task("less", function() {
    return gulp.src('./src/assets/css/awui.less')
        .pipe(less())
        .pipe(gulp.dest('./static'))
});

gulp.task("less", function() {
    return gulp.src('./src/assets/css/awui.less')
        .pipe(less())
        .pipe(gulp.dest('./static'))
});


gulp.task("clean", c =>
    del([
        './static/awui.css'
    ], c)
);

gulp.task("autoprefixer", () =>
    gulp.src('./src/assets/css/public_styles.css')
    .pipe(autoprefixer({
        browsers: ['last 2 versions'],
        cascade: false
    }))
    .pipe(gulp.dest('./static'))
);

gulp.task('taless', () => gulp.watch('./src/assets/**/*.less', ['less']))



gulp.task("dev", ["default", "less"]);
gulp.task('build', ['default', 'less', 'min']);