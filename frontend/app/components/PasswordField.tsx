// components/PasswordField.tsx
import { useState } from "react";
import { EyeIcon, EyeClosedIcon } from "lucide-react";

type PasswordFieldProps = {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
};

export default function PasswordField({
  label,
  name,
  value,
  onChange,
  required = false,
}: PasswordFieldProps) {
  const [show, setShow] = useState(false);

  return (
    <div className="relative">
      <label className="block text-sm text-gray-300 font-medium mb-1">{label}</label>
      <input
        type={show ? "text" : "password"}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        className="mt-1 w-full rounded border border-gray-300 p-2 pr-10 focus:border-blue-500 focus:ring focus:ring-blue-200"
      />
      <button
        type="button"
        onClick={() => setShow(!show)}
        className="absolute right-2 top-4/6 transform -translate-y-1/2 text-gray-400 hover:text-gray-200 group"
      >
        {show ? <EyeClosedIcon className="h-5 w-5" /> : <EyeIcon className="h-5 w-5" />}
        {/* Tooltip */}
        <span className="absolute -top-12 -right-5 bg-gray-800 text-white text-xs px-2 py-1 rounded 
          opacity-0 group-hover:opacity-100 
          transition-opacity duration-200 
          group-hover:delay-500 group-hover:duration-200 delay-0">
          {show ? "Hide password" : "Show password"}
        </span>

      </button>
    </div>
  );
}
