<?php

namespace App\Http\Controllers;


use App\Http\Requests\MessageContact;
use App\Mail\ContactMessage;
use Illuminate\Support\Facades\Mail;

/**
 * Class EmailController
 *
 * @package App\Http\Controllers
 */
class EmailController extends Controller
{
    /**
     * @param  \App\Http\Requests\MessageContact  $request
     *
     * @return \Illuminate\Contracts\Foundation\Application|\Illuminate\Http\RedirectResponse|\Illuminate\Routing\Redirector
     */
    public function sendEmail(MessageContact $request)
    {
        try {
            $this->captchaVerified($request->all());
            Mail::to($request->email)->queue(new ContactMessage($request->all()));
            return redirect(route('home'))
              ->with('success', __('validation.contact_message_send'));
        } catch (\Exception $e) {
            return redirect(route('home'))
              ->with('error', __('validation.contact_not_send'))
              ->withInput();
        }

    }


    /**
     * @param  array  $request
     *
     * @return bool
     * @throws \Exception
     */
    public function captchaVerified(array $request)
    {

        $respuesta = $request['g-recaptcha-response'];
        $ipuser = $_SERVER['REMOTE_ADDR'];
        $clavesecreta = env('RECAPTCHA_SECRET_KEY');

        $urlrecaptcha = "https://www.google.com/recaptcha/api/siteverify?secret=$clavesecreta&response=$respuesta&remoteip=$ipuser";

        $respuesta = file_get_contents($urlrecaptcha);

        $dividir = explode('"success":', $respuesta);
        $obtener = explode(',', $dividir[1]);

        if (trim($obtener[0]) === "true") {
            return true;
        }

        throw new \Exception(__('validation.error_captcha_validate'));
    }

}