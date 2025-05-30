import { useState } from "react";
import { useForm } from "@inertiajs/react";
import GuestLayout from "@/Layouts/GuestLayout";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import InputError from "@/Components/InputError";
import PrimaryButton from "@/Components/PrimaryButton";
import { Head, Link } from "@inertiajs/react";

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: "",
        email: "",
        phone: "",
        password: "",
        password_confirmation: "",
        role: "",
    });

    const handleRegister = (e) => {
        e.preventDefault();

        post(route("register"), {
            onSuccess: () => {
                alert("Registration successful! Please check your email for confirmation.");
                reset(); // Reset form fields
            },
            onError: (err) => {
                console.error("Registration failed", err);
            },
        });
    };

    return (
        <GuestLayout>
            <Head title="Register" />

            <form onSubmit={handleRegister}>
            <div>
                <InputLabel htmlFor="name" value="Name" />
                <TextInput
                    id="name"
                    name="name"
                    value={data.name}
                    className="mt-1 block w-full"
                    autoComplete="name"
                    isFocused={true}
                    onChange={(e) => setData("name", e.target.value)}
                    required
                />
                <InputError message={errors.name} className="mt-2" />
            </div>

            <div className="mt-4">
                <InputLabel htmlFor="email" value="Email" />
                <TextInput
                    id="email"
                    type="email"
                    name="email"
                    value={data.email}
                    className="mt-1 block w-full"
                    autoComplete="username"
                    onChange={(e) => setData("email", e.target.value)}
                    required
                />
                <InputError message={errors.email} className="mt-2" />
            </div>

            <div className="mt-4">
                <InputLabel htmlFor="phone" value="Phone" />
                <TextInput
                    id="phone"
                    type="text"
                    name="phone"
                    placeholder="+266 / +27"
                    value={data.phone}
                    className="mt-1 block w-full"
                    autoComplete="tel"
                    onChange={(e) => setData("phone", e.target.value)}
                    required
                />
                <InputError message={errors.phone} className="mt-2" />
            </div>

            <div className="mt-4">
                <InputLabel htmlFor="password" value="Password" />
                <TextInput
                    id="password"
                    type="password"
                    name="password"
                    value={data.password}
                    className="mt-1 block w-full"
                    autoComplete="new-password"
                    onChange={(e) => setData("password", e.target.value)}
                    required
                />
                <InputError message={errors.password} className="mt-2" />
            </div>

            <div className="mt-4">
                <InputLabel htmlFor="password_confirmation" value="Confirm Password" />
                <TextInput
                    id="password_confirmation"
                    type="password"
                    name="password_confirmation"
                    value={data.password_confirmation}
                    className="mt-1 block w-full"
                    autoComplete="new-password"
                    onChange={(e) => setData("password_confirmation", e.target.value)}
                    required
                />
                <InputError message={errors.password_confirmation} className="mt-2" />
            </div>

            <div className="mt-4">
                <InputLabel htmlFor="role" value="Role" />
                <select
                    id="role"
                    name="role"
                    value={data.role}
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                    onChange={(e) => setData("role", e.target.value)}
                    required
                >
                    <option value="">Select Role</option>
                    <option value="admin">Admin</option>
                    <option value="customer">Customer</option>
                </select>
                <InputError message={errors.role} className="mt-2" />
            </div>

            <div className="mt-4 flex items-center justify-end">
                <Link
                    href={route("login")}
                    className="rounded-md text-sm text-gray-600 underline hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                    Already registered?
                </Link>

                <PrimaryButton className="ms-4" disabled={processing}>
                    Register
                </PrimaryButton>
            </div>

            </form>
        </GuestLayout>
    );
}

