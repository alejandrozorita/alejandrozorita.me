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

  <script>
  (function (i, s, o, g, r, a, m) {
    i['GoogleAnalyticsObject'] = r;
    i[r] = i[r] || function () {
      (i[r].q = i[r].q || []).push(arguments)
    }, i[r].l = 1 * new Date();
    a = s.createElement(o),
      m = s.getElementsByTagName(o)[0];
    a.async = 1;
    a.src = g;
    m.parentNode.insertBefore(a, m)
  })(window, document, 'script', '//www.google-analytics.com/analytics.js', 'ga');

  ga('create', 'UA-55017936-1', 'auto');
  ga('send', 'pageview');

  </script>
  <!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-GE58H7DDN5"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-GE58H7DDN5');
</script>

  {!! htmlScriptTagJsApi(['action' => 'contacto']) !!}
  <meta name="csrf-token" content="{{ csrf_token() }}">

</head>
<body>
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
