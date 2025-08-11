@error('title')
3
@enderror
<section class="footer" id="footer">
  <div class="container">
    <ul>
      {{--<li><a href="https://twitter.com/Alzort" rel="nofollow" target="_blank"><i class="fa fa-twitter fa-2x"></i></a>
      </li>--}}
      <li><a href="https://www.linkedin.com/in/alejandro-zorita-hernandez-21225b38" rel="nofollow" target="_blank"><i
            class="fa fa-linkedin fa-2x"></i></a></li>
    </ul>
  </div>
</section>
<!--footer end-->
</div>
<!--wrapper end-->

<script src="{{ mix('js/manifest.js') }}" defer></script>
<script src="{{ mix('js/vendor.js') }}" defer></script>
<script src="{{ mix('js/app.js') }}" defer></script>

<script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script>
@if ($errors->any())
  @foreach ($errors->all() as $error)
    <script>
    swal({
      title: 'Error!',
      text: '{{$error}}',
      icon: 'error',
      button: 'Ok'
    })
    </script>
  @endforeach
@endif
@if(session('error'))
  <script>
  swal({
    title: 'Error!',
    text: '{{session('error')}}',
    icon: 'error',
    button: 'Ok'
  })
  </script>
@endif
@if(session('success'))
  <script>
  swal({
    title: 'Success!',
    text: '{{session('success')}}',
    icon: 'success',
    button: 'Cool!'
  })
  </script>
@endif
<script src="https://www.google.com/recaptcha/api.js" async defer></script>
</body>
</html>