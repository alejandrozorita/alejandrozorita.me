
<section class="footer" id="footer">
  <div class="container">
    <ul>
      <li><a href="https://twitter.com/Alzort" rel="nofollow" target="_blank"><i class="fa fa-twitter fa-2x"></i></a>
      </li>
      <li><a href="https://www.linkedin.com/in/alejandro-zorita-hernandez-21225b38" rel="nofollow" target="_blank"><i
            class="fa fa-linkedin fa-2x"></i></a></li>
    </ul>
  </div>
</section>
<!--footer end-->
</div>
<!--wrapper end-->
<!--modernizr js-->
<script type="text/javascript" src="js/modernizr.custom.26633.js"></script>
<!--jquary min js-->
<script type="text/javascript" src="js/jquery.min.js"></script>
<script src="js/bootstrap.js"></script>
<script type="text/javascript" src="js/jquery.gridrotator.js"></script>
<!--for custom jquary-->
<script src="js/custom.js"></script>
<!--for placeholder jquary-->
<script type="text/javascript" src="js/jquery.placeholder.js"></script>
<!--for menu jquary-->
<script type="text/javascript" src="js/stickUp.js"></script>
<script type="text/javascript">
jQuery(function ($) {
  $(document).ready(function () {
    //enabling stickUp on the '.navbar-wrapper' class
    $('.navbar-wrapper').stickUp({
      parts: {
        0: 'banner',
        1: 'aboutme',
        2: 'technical',
        3: 'exprience',
        4: 'education',
        5: 'contact'
      },
      itemClass: 'menuItem',
      itemHover: 'active',
      topMargin: 'auto'
    });
  });

  $(".navbar.navbar-inverse.navbar-static-top a").click(function () {
    $(".navbar-collapse").addClass("hideClass");
  });


  $(".navbar.navbar-inverse.navbar-static-top a").click(function () {
    $(".navbar-collapse").addClass("collapse");
  });


  $(".navbar.navbar-inverse.navbar-static-top a").click(function () {
    $(".navbar-collapse").removeClass("in");
  });

  $(".navbar-toggle").click(function () {
    $(".navbar-collapse").removeClass("hideClass");
  });


});
</script>
<!--for portfoli filter jquary-->
<script src="js/jquery.isotope.js" type="text/javascript"></script>
<!--for portfoli lightbox -->
<link type="text/css" rel="stylesheet" id="theme" href="css/jquery-ui-1.8.16.custom.css">
<link type="text/css" rel="stylesheet" href="css/lightbox.min.css">
<script type="text/javascript" src="js/jquery.ui.widget.min.js"></script>
<script type="text/javascript" src="js/jquery.ui.rlightbox.js"></script>
<!--for skill chat jquary-->
<script src="js/jquery.easing.min.js"></script>
<script src="js/jquery.easypiechart.js"></script>

<script src="https://www.google.com/recaptcha/api.js" async defer></script>
</body>
</html>