<?php

namespace App\Http\Controllers;

use App\Mail\Contact;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Validator;

class ContactController extends Controller
{
    public function store(Request $request)
    {
        // $blah = request()->validate(['email' => 'required|email']);

        $validator = $this->validator($request->all());

        if ($validator->passes()) {
            // event(new Registered($user = $this->create($request->all())));
            Mail::raw(request('message'), function($message) {
                $message->to('dan.dh.lee@gmail.com')
                    ->from(request('email'), request('name'))
                    ->subject('Message from portfolio');
            });
            // Mail::send('emails.message', ['message' => request('message')], function($message) {
            //     $message->from(request('email'), request('name'))
            //         ->to('dan.dh.lee@gmail.com')
            //         ->subject('TESTING');
            // });
			return response()->json(['success'=>true]);
        }

        return response()->json(['error'=>$validator->errors()->all()]);

        // Mail::to(request('email'))
        //     ->send(new Contact);

        // Mail::to(request('email'))
        //     ->send(new ContactMe('shirts'));

        // return redirect('/contact')->with('message', 'Email Sent!');
    }

    /**
     * Get a validator for an incoming registration request.
     *
     * @param  array  $data
     * @return \Illuminate\Contracts\Validation\Validator
     */
    protected function validator(array $data)
    {
        return Validator::make($data, [
            'name' => ['required', 'string'],
            'email' => ['required', 'string', 'email'],
            'message' => ['required', 'string'],
        ]);
    }
}
