<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

/**
 * Class ContactMessage
 *
 * @package App\Mail
 */
class ContactMessage extends Mailable
{
    use Queueable, SerializesModels;

    private $request;


    /**
     * Create a new message instance.
     *
     * @param $request
     */
    public function __construct($request)
    {
        $this->request = $request;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this->view('emails.contact')
                    ->with([
                      'name' => $this->request['name'],
                      'email' => $this->request['email'],
                      'comments' => $this->request['comments'],
                    ]);
    }
}
