<!DOCTYPE html5>
<!--[if lt IE 7 ]> <html class="ie ie6 no-js" lang="en"> <![endif]-->
<!--[if IE 7 ]>    <html class="ie ie7 no-js" lang="en"> <![endif]-->
<!--[if IE 8 ]>    <html class="ie ie8 no-js" lang="en"> <![endif]-->
<!--[if IE 9 ]>    <html class="ie ie9 no-js" lang="en"> <![endif]-->
<!--[if gt IE 9]><!-->
<html class="no-js" lang="es"><!--<![endif]-->
<head>
  <meta charset="UTF-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
  <title>Alejandro Zorita - Laravel Back-End Developer</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <!--main style-->
  <meta name=”robots” content="NoFollow, NoIndex">
  <meta name="Title" content="Alejandro Zorita - Laravel Back-End Developer">
  <meta name="description" content="Alejandro Zorita - Laravel Back-End Developer. Desarrollador Laravel - Desarrollador en Madrid, España. Metodologías TDD, GIT, SCRUM, DevOps.">
  <meta name="keywords" content="Alejandro Zorita, Laravel, Back-end, Madrid, España, php, scrum, tdd, git, programador laravel">
  <link rel="stylesheet" href="{{ mix('css/app.css') }}">
  <link rel="shortcut icon" type="image/png" href="/images/alejandro-zorita.jpg"/>
  <noscript>
    <link rel="stylesheet" type="text/css" href="css/fallback.css" />
  </noscript>
  <!--[if lt IE 9]>
  <link rel="stylesheet" type="text/css" href="css/fallback.css" />
  <![endif]-->

  <script>
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-55017936-1', 'auto');
  ga('send', 'pageview');

  </script>
</head><body>
<!--wrapper start-->
<div class="wrapper" id="wrapper">
  <header>
    <!--menu start-->
    <div class="menu">
      <div class="navbar-wrapper">
        <div class="container">
          <div class="navwrapper">
            <div class="navbar navbar-inverse navbar-static-top">
              <div class="container">
                <div class="navbar-header">
                  <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse"> <span class="icon-bar"></span> <span class="icon-bar"></span> <span class="icon-bar"></span> </button>
                  <a class="navbar-brand" href="#">Menu</a> </div>
                <div class="navbar-collapse collapse">
                  <ul class="nav navbar-nav">
                    <li class="menuItem active"><a href="http://alejandrozorita.me/#wrapper">Inicio</a></li>
                    <li class="menuItem"><a href="http://alejandrozorita.me/#aboutme">Sobre mi</a></li>
                    <li class="menuItem"><a href="http://alejandrozorita.me/#technical">Skills</a></li>
                    <li class="menuItem"><a href="http://alejandrozorita.me/#exprience">Experiencia</a></li>
                    <li class="menuItem"><a href="http://alejandrozorita.me/#education">Educación</a></li>
                    <!--<li class="menuItem"><a href="#protfolio">Portfolio</a></li>-->
                    <li class="menuItem"><a href="http://alejandrozorita.me/#contact">Contacto</a></li>
                    <li class="menuItem"><a href="http://bytecode.es">Blog ByteCode</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <!-- End Navbar -->
        </div>
      </div>
    </div>
    <!--menu end-->
  </header>

  <section>

  </section>
  <section class="contact" id="contact">
    <div class="container topCon">
      <div class="heading">
        <h2>Vaya, no hemos podido encontrar la página solicitada.... Puedes navegar por le menú superior o bien, mandarme un mensaje!</h2>
      </div>
    </div>
    <!--
    <div class="row mapArea">
      <iframe frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/?ie=UTF8&amp;ll=-37.817682,144.957595&amp;spn=0.01134,0.026157&amp;t=m&amp;z=16&amp;output=embed"></iframe>
    </div>
    -->
  </section>
  <!--contact start-->
  <section class="contactDetails">
    <div class="container">
      <!--contact info start
      <div class="col-xs-12 col-sm-3 col-md-4 col-lg-4">
        <h4>Contact details</h4>
<p> <i class="fa fa-map-marker fa-lg"></i> Collins Street West Victoria 8007 Australia</p>
        <p> <i class="fa fa-mobile fa-lg"></i> +1800 1234 56789</p>
        <p> <i class="fa fa-envelope-o "></i> <a href="mailto:support@websitename.com">support@websitename.com</a></p>
        <p> <i class="fa fa-link "></i> <a href="www.websitename.com">www.websitename.com</a></p>
      </div>
      contact info end-->
      <!--contact form start-->
      <div class="col-xs-12 col-sm-1 col-md-2 col-lg-2"></div>
      <div class="col-xs-12 col-sm-9 col-md-8 col-lg-8 conForm">
        <div id="message"></div>
        <form method="post" action="php/contact.php" name="cform" id="cform">
          <input name="name" id="name" type="text" class="col-xs-12 col-sm-6 col-md-6 col-lg-6" placeholder="Tu nombre..." >
          <input name="email" id="email" type="email" class=" col-xs-12 col-sm-6 col-md-6 col-lg-6 noMarr" placeholder="Tu email..." >
          <textarea name="comments" id="comments" cols="" rows="" class="col-xs-12 col-sm-12 col-md-12 col-lg-12" placeholder="El mensaje..."></textarea>
          <input type="submit" id="submit" name="send" class="submitBnt" value="Envíamelo!">
          <div id="simple-msg"></div>
        </form>
      </div>
      <!--contact form end-->
    </div>
  </section>
  <!--contact end-->
  <!--footer start-->
  <section class="footer" id="footer">
    <div class="container">
      <ul>
        <li><a href="https://twitter.com/Alzort" rel="nofollow" target="_blank"><i class="fa fa-twitter fa-2x"></i></a></li>
        <li><a href="https://www.linkedin.com/in/alejandro-zorita-hernandez-21225b38" rel="nofollow" target="_blank"><i class="fa fa-linkedin fa-2x"></i></a></li>
      </ul>
    </div>
  </section>
  <!--footer end-->
</div>
<!--wrapper end-->
<!--modernizr js-->
<script type="text/javascript" src="js/modernizr.custom.26633.js"></script>
<script src="{{ mix('js/manifest.js') }}" defer></script>
<script src="{{ mix('js/vendor.js') }}" defer></script>
<script src="{{ mix('js/app.js') }}" defer></script>
</body>
</html>