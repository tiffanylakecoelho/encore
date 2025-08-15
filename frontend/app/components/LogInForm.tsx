// pages/login.tsx
import React, { useState } from "react";
import TextInputField from "../components/TextInputField";
import PasswordField from "../components/PasswordField";
import ErrorMessage from "../components/ErrorMessage";

export default function LoginPage() {
  const [identifier, setIdentifier] = useState(""); // username or email
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!identifier || !password) {
      setError("Please fill in all fields.");
      return;
    }

    setError("");
    console.log("Logging in with:", { identifier, password });
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-black px-4">
      <div className="bg-gray-900 shadow-md rounded-lg p-6 w-full max-w-md">
        <h1 className="text-2xl font-semibold text-center mb-6 font-inter">
          Log In
        </h1>

        {error && <ErrorMessage message={error} />}

        <form onSubmit={handleSubmit} className="space-y-4">
          <TextInputField
            label="Username or Email"
            name="identifier"
            value={identifier}
            onChange={(e) => setIdentifier(e.target.value)}
            placeholder="Username or Email"
            required
          />

          <PasswordField
            label="Password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button
            type="submit"
            className="w-full py-2 px-4 bg-purple-600 hover:bg-purple-700 text-white rounded-md transition font-inter"
          >
            Log In
          </button>
        </form>

        <p className="mt-4 text-center text-sm text-gray-600 font-inter">
          Don't have an account?{" "}
          <a
            href="/sign-up"
            className="text-white hover:underline"
          >
            Sign up here
          </a>
        </p>
      </div>
    </div>
  );
}
