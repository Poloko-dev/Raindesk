<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Service extends Model
{
    use HasFactory;

    protected $fillable = ['name', 'description', 'price', 'contact_id'];

    /**
     * A Service belongs to a Contact.
     */
    public function contact()
    {
        return $this->belongsTo(Contact::class);
    }
}

