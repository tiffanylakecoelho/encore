// components/SignUpForm.tsx
import { useState } from "react";

export default function SignUpForm() {
  const [form, setForm] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    displayName: "",
  });

  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    if (!form.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      setError("Please enter a valid email.");
      return false;
    }
    if (form.password.length < 8) {
      setError("Password must be at least 8 characters long.");
      return false;
    }
    if (form.password !== form.confirmPassword) {
      setError("Passwords do not match.");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!validateForm()) return;

    try {
      // TODO: Connect to your backend signup API here
      console.log("Signing up:", form);

      // Example: redirect on success
      // router.push("/dashboard");
    } catch (err) {
      setError("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-black px-4">
      <div className="w-full max-w-md rounded-lg bg-gray-900 p-6 shadow-lg">
        <h1 className="mb-6 text-2xl font-bold text-center">Sign Up</h1>

        {error && (
          <p className="mb-4 rounded bg-red-100 p-2 text-sm text-red-600">
            {error}
          </p>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Display Name */}
          <div>
            <label className="block text-sm text-gray-300 font-medium">
              Display Name
            </label>
            <input
              type="text"
              name="displayName"
              value={form.displayName}
              onChange={handleChange}
              placeholder="Optional"
              className="mt-1 w-full rounded border border-gray-300 p-2 focus:border-blue-500 focus:ring focus:ring-blue-200"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm text-gray-300 font-medium">
              Email *
            </label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              className="mt-1 w-full rounded border border-gray-300 p-2 focus:border-blue-500 focus:ring focus:ring-blue-200"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm text-gray-300 font-medium">
              Password *
            </label>
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              required
              className="mt-1 w-full rounded border border-gray-300 p-2 focus:border-blue-500 focus:ring focus:ring-blue-200"
            />
            <p className="mt-1 text-xs">Must be at least 8 characters.</p>
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block text-sm text-gray-300 font-medium">
              Confirm Password *
            </label>
            <input
              type="password"
              name="confirmPassword"
              value={form.confirmPassword}
              onChange={handleChange}
              required
              className="mt-1 w-full rounded border border-gray-300 p-2 focus:border-blue-500 focus:ring focus:ring-blue-200"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full rounded bg-blue-600 px-4 py-2 font-semibold transition hover:bg-blue-700"
          >
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
}
