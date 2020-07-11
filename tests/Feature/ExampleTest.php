<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class ExampleTest extends TestCase
{
    /** @test
     * A basic test example.
     *
     * @return void
     */
    public function goHome()
    {
        $response = $this->get('/');

        $response->assertStatus(200);
    }
}
