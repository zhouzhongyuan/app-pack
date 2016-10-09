const gulp = require('gulp');
const eslint = require('gulp-eslint');
const gulpIf = require('gulp-if');
// const file = ['./js/lib/yes/**/*.js', '!js/lib/yes/rsa/**/*.js', '!js/lib/yes/components/wechat/**/*.js', '!js/lib/yes/components/wechat/jweixin-1.0.0.js'];
const file = ['./src/client/app/modules/*.js'];
// const file = ['./app/**/*.js'];
const dest = 'src/client/app/modules';
gulp.task('lint', () =>
    gulp.src(file)
        .pipe(eslint())
        .pipe(eslint.format())
);
function isFixed(file) {
    return file.eslint && typeof file.eslint.output === 'string';
}
gulp.task('lint-fix', () => {
    return gulp.src(file)
        .pipe(eslint({ fix: true }))
        .pipe(eslint.format())
        .pipe(gulpIf(isFixed, gulp.dest(dest)));
});

gulp.task('default', function() {
    // place code for your default task here
});
