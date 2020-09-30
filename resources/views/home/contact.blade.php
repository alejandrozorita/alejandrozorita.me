<section class="contact" id="contact">
  <div class="container topCon">
    <div class="heading">
      <span class="titulos-pagina">Si quieres, mándame un mensaje!</span>
    </div>
  </div>
  <!--
  <div class="row mapArea">
    <iframe frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/?ie=UTF8&amp;ll=-37.817682,144.957595&amp;spn=0.01134,0.026157&amp;t=m&amp;z=16&amp;output=embed"></iframe>
  </div>
  -->
</section>
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
      <form method="post" action="{{route('sendEmail')}}" name="cform">
        @csrf
        <input name="name" id="name" type="text" class="col-xs-12 col-sm-6 col-md-6 col-lg-6"
               placeholder="Tu nombre...">
        <input name="email" id="email" type="email" class=" col-xs-12 col-sm-6 col-md-6 col-lg-6 noMarr"
               placeholder="Tu email...">
        <textarea name="comments" id="comments" cols="" rows="" class="col-xs-12 col-sm-12 col-md-12 col-lg-12"
                  placeholder="El mensaje..."></textarea>
        {!! htmlFormSnippet() !!}
        <input type="submit" id="submit" name="send" class="submitBnt" value="Enviar">
      </form>
    </div>
    <!--contact form end-->
  </div>
</section>
