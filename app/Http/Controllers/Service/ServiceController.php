<?php

namespace App\Http\Controllers\Service;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use App\Models\Service;
class ServiceController extends Controller
{
    // Display a listing of the resource.
    public function index()
    {
        $services = Service::all();
        return response()->json($services);
    }

    // Store a newly created resource in storage.
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'description' => 'required|string',
            'price' => 'required|numeric',
            'contact_id' => 'required|exists:contacts,id',
        ]);

        $service = Service::create([
            'name' => $request->name,
            'description' => $request->description,
            'price' => $request->price,
            'contact_id' => $request->contact_id,
        ]);
        return response()->json($service, 201);
    }

    // Display the specified resource.
    public function show($id)
    {
        $service = Service::findOrFail($id);
        return response()->json($service);
    }

    // Update the specified resource in storage.
    public function update(Request $request, $id)
    {
        $request->validate([
            'name' => 'sometimes|string|max:255',
            'description' => 'sometimes|nullable|string',
            'price' => 'sometimes|numeric',
        ]);

        $service = Service::findOrFail($id);
        $service->update($request->all());
        return response()->json($service);
    }

    // Remove the specified resource from storage.
    public function destroy($id)
    {
        $service = Service::findOrFail($id);
        $service->delete();
        return response()->json(['message' => 'Service deleted successfully']);
    }
}


