<?php

namespace App\Http\Controllers\Application;

use App\Models\Application;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
class AppController extends Controller
{
    /**
     * Display a listing of the applications.
     */
    public function index()
    {
        $applications = Application::all();
        return response()->json($applications);
    }
    /**
     * Get an application by ID.
     */
    public function show($id)
    {
        $application = Application::find($id);

        if (!$application) {
            return response()->json(['message' => 'Application not found'], 404);
        }

        return response()->json($application);
    }
    /**
     * Register a new application and assign it to a user.
     */
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'api_url' => 'required|url',
            'api_key' => 'required|string|unique:applications,api_key',
            'user_id' => 'required|exists:users,id',
        ]);

        $application = Application::create([
            'user_id' => $request->user_id,
            'name' => $request->name,
            'api_url' => $request->api_url,
            'api_key' => Hash::make($request->api_key),
            'status' => 'active',
        ]);

        return response()->json(['message' => 'Application registered successfully', 'application' => $application], 201);
    }

    /**
     * Delete an application.
     */
    public function destroy(Request $request)
    {
        // Validate the request to ensure the application ID is provided
        $request->validate([
            'application_id' => 'required|exists:applications,id',
        ]);    

        $application = Application::find($request->application_id);

        // Delete the application
        $application->delete();

        return response()->json(['message' => 'Application deleted successfully'], 200);
    }

    /**
     * Block a user from accessing the application.
     */
    public function block(Request $request)
    {
        // Validate the application ID in the request
        $request->validate([
            'application_id' => 'required|exists:applications,id',
        ]);

        // Find the application by ID
        $application = Application::find($request->application_id);

        // Ensure the application exists
        if (!$application) {
            return response()->json(['message' => 'Application not found'], 404);
        }
       if($application->status == 'active'){
            $application->update(['status' => 'inactive']);
            return response()->json(['message' => 'Application blocked from access'], 200);
       }
        else{
            $application->update(['status' => 'active']);
            return response()->json(['message' => 'Application unblocked to access'], 200);
        }
        
    }

}

