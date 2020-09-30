<?php

namespace App\Http\Controllers;

class HomeController extends Controller
{

    public function home()
    {
        $captcha = config('recaptcha.api_site_key');
        return view('home',compact('captcha'));
    }
}