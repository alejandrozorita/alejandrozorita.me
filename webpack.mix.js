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

mix.setPublicPath('public');

mix
  .js('resources/js/app.js', 'public/js')
  .extract(['jquery', 'axios', 'lodash'])
  .sass('resources/sass/app.scss', 'public/css')
  .sass('resources/sass/fallback.scss', 'public/css')
  .copy('resources/js/modernizr.custom.26633.js', 'public/js/modernizr.custom.26633.js')
  .copyDirectory('resources/images', 'public/images')
  .copyDirectory('resources/fonts', 'public/fonts')
  .version();

