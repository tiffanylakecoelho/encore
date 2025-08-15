// components/TextInputField.tsx
type TextInputFieldProps = {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  required?: boolean;
  placeholder?: string;
};

export default function TextInputField({
  label,
  name,
  value,
  onChange,
  type = "text",
  required = false,
  placeholder,
}: TextInputFieldProps) {
  return (
    <div>
      <label className="block text-sm text-gray-300 font-medium">{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        placeholder={placeholder}
        className="mt-1 w-full rounded border border-gray-300 p-2 focus:border-blue-500 focus:ring focus:ring-blue-200"
      />
    </div>
  );
}
