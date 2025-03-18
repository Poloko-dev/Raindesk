<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Application extends Model
{
    use HasFactory;

    protected $fillable = ['user_id', 'name', 'api_url', 'api_key', 'status'];

    /**
     * An Application belongs to a User.
     */
    public function user()
    {
        return $this->belongsTo(User::class);
    }
}

