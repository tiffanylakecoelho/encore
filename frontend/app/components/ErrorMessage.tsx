// components/ErrorMessage.tsx
type ErrorMessageProps = {
  message: string;
};

export default function ErrorMessage({ message }: ErrorMessageProps) {
  return (
    <p className="mb-4 rounded bg-red-100 p-2 text-sm text-red-600">
      {message}
    </p>
  );
}
