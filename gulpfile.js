// Формируем build
//

const postcss = require('gulp-postcss')
const precss = require('precss')
const cssnext = require('postcss-cssnext')
const gulp = require('gulp')
const cssModules = require('postcss-modules')
const importRgx = /^import\s+([^\s]+)\s+from\s+['"]([^\n\s]+\.css)['"]$/
const path = require('path')
const rootDir = path.resolve('./src')

gulp.task('build:css', function () {
  const processors = [
    precss(),
    cssnext(),
    cssModules({
      generateScopedName: (name/* , filename, css */) => 'rui-' + name
    })
  ]
  return gulp.src([
      './src/**/*.css',
      '!src/**/__doc__/**/*.css'
    ])
    .pipe(postcss(processors))
    .pipe(gulp.dest('./build'))
})
