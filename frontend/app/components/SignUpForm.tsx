import { useState } from "react";
import TextInputField from "./TextInputField";
import PasswordField from "./PasswordField";
import ErrorMessage from "./ErrorMessage";

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
      console.log("Signing up:", form);
      // router.push("/dashboard"); // example redirect
    } catch (err) {
      setError("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-black px-4">
      <div className="w-full max-w-md rounded-lg bg-gray-900 p-6 shadow-lg">
        <h1 className="mb-6 text-2xl font-bold text-center">Sign Up</h1>

        {error && <ErrorMessage message={error} />}

        <form onSubmit={handleSubmit} className="space-y-4">
          <TextInputField
            label="Display Name"
            name="displayName"
            value={form.displayName}
            onChange={handleChange}
            required
          />

          <TextInputField
            label="Email"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            required
          />

          <PasswordField
            label="Password"
            name="password"
            value={form.password}
            onChange={handleChange}
            required
          />

          <PasswordField
            label="Confirm Password"
            name="confirmPassword"
            value={form.confirmPassword}
            onChange={handleChange}
            required
          />

          <button
            type="submit"
            className="w-full rounded bg-purple-600 px-4 py-2 font-semibold transition hover:bg-blue-700"
          >
            Create Account
          </button>

          <p className="text-center text-sm text-gray-600 font-inter">
          Have an account?{" "}
          <a
            href="/log-in"
            className="text-white hover:underline"
          >
            Log in here
          </a>
        </p>
        </form>
      </div>
    </div>
  );
}
