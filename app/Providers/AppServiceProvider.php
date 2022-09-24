<?php

namespace App\Providers;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        Model::unguard();
        $this->bootSqliteOptions();
    }

    private function bootSqliteOptions()
    {
        if (config('database.default') === 'sqlite') {
            return;
        }

        // Don't kill the app if the database hasn't been created.
        try {
            DB::connection('sqlite')->statement(
                'PRAGMA synchronous = OFF;'
            );
        } catch (\Throwable $throwable) {
            return;
        }
    }
}
