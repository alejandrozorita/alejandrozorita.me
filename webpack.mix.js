const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/js/app.js', 'public/js')
  .js('resources/js/bootstrap.js', 'public/js')
  .js('resources/js/custom.js', 'public/js')
  .js('resources/js/jquery.contact.js', 'public/js')
  .js('resources/js/jquery.easing.min.js', 'public/js')
  .js('resources/js/jquery.gridrotator.js', 'public/js')
  .js('resources/js/jquery.isotope.js', 'public/js')
  .js('resources/js/jquery.min.js', 'public/js')
  .js('resources/js/jquery.placeholder.js', 'public/js')
  .js('resources/js/jquery.ui.rlightbox.js', 'public/js')
  .js('resources/js/jquery.ui.widget.min.js', 'public/js')
  .js('resources/js/modernizr.custom.26633.js', 'public/js')
  .js('resources/js/stickUp.js', 'public/js')
  .sass('resources/sass/bootstrap.scss', 'public/css')
  .sass('resources/sass/fallback.scss', 'public/css')
  .sass('resources/sass/font-awesome.scss', 'public/css')
  .sass('resources/sass/jquery-ui-1.8.16.custom.scss', 'public/css')
  .sass('resources/sass/lightbox.min.scss', 'public/css')
  .sass('resources/sass/slideshow.scss', 'public/css')
  .sass('resources/sass/style.scss', 'public/css')
  .copyDirectory('resources/images', 'public/images')
  .copyDirectory('resources/fonts', 'public/fonts')
  .copy('resources/js/jquery.easypiechart.js', 'public/js');

