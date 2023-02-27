<!DOCTYPE html5>
<!--[if lt IE 7 ]>
<html class="ie ie6 no-js" lang="en"> <![endif]-->
<!--[if IE 7 ]>
<tml class="ie ie7 no-js" lang="en"> <![endif]-->
<!--[if IE 8 ]>
<html class="ie ie8 no-js" lang="en"> <![endif]-->
<!--[if IE 9 ]>
<html class="ie ie9 no-js" lang="en"> <![endif]-->
<!--[if gt IE 9]><!-->
<html class="no-js" lang="es"><!--<![endif]-->
<head>
  <meta charset="UTF-8"/>
  <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
  <title>Alejandro Zorita - Laravel Back-End Developer</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <!--main style-->
  <meta name="Title" content="Alejandro Zorita - Laravel Back-End Developer">
  <meta name="description"
        content="Alejandro Zorita - Laravel Back-End Developer. Desarrollador Laravel - Desarrollador en Madrid, España. Metodologías TDD, GIT, SCRUM, DevOps.">

  <meta name=”robots” content="Follow, Index">

  <meta name="keywords"
        content="Alejandro Zorita, Laravel, Back-end, Madrid, España, php, scrum, tdd, git, programador laravel">

  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"
        integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
  <link rel="stylesheet" type="text/css" media="screen" href="{{ asset('css/style.css') }}">
  <!--background slider style-->
  <link rel="stylesheet" type="text/css" href="{{ asset('css/slideshow.css') }}"/>
  <!--google font style-->
  <link
    href='http://fonts.googleapis.com/css?family=Open+Sans:300italic,400italic,600italic,700italic,800italic,400,600,700,800,300'
    rel='stylesheet' type='text/css'>
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
  <!--font-family: 'Open Sans', sans-serif;-->
  <!-- font css style-->
  <link rel="stylesheet" href="{{ asset('css/font-awesome.css') }}">
  <!--for slider style-->

  <link rel="shortcut icon" type="image/png" href="{{ asset('images/alejandro-zorita.jpg') }}"/>
  <noscript>
    <link rel="stylesheet" type="text/css" href="{{ asset('css/fallback.css') }}"/>
  </noscript>
<!--[if lt IE 9]>
    <link rel="stylesheet" type="text/css" href="{{ asset('css/fallback.css') }}" />
    <![endif]-->

<!-- Google Tag Manager -->
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-N2FCM9N');</script>
<!-- End Google Tag Manager -->
  {!! htmlScriptTagJsApi(['action' => 'contacto']) !!}
  <meta name="csrf-token" content="{{ csrf_token() }}">

</head>
<body>
<!-- Google Tag Manager (noscript) -->
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-N2FCM9N"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<!-- End Google Tag Manager (noscript) -->
<!--wrapper start-->
<div class="wrapper" id="wrapper">
  <header>
    <!--banner start-->
    <div class="banner row" id="banner">
      <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 noPadd" style="height:100%">
        <!--background slide show start-->
        <ul class="cb-slideshow">
          <li><span>Alejandro Zorita Laravel</span></li>
          <li><span>Alejandro Zorita TDD</span></li>
          <li><span>Alejandro Zorita DevOps</span></li>
        </ul>
        <!--background slide show end-->
      </div>
    </div>
    <!--banner end-->
    <div class="bannerText container">
      <h1>Alejandro Zorita</h1>
      <h2>Laravel Back-End Developer & DevOps</h2>
    </div>
    <!--menu start-->
  @include('includes.menu')
  <!--menu end-->
  </header>
