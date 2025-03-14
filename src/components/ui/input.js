export function Input({ type, placeholder, className, ...props }) {
    return <input type={type} placeholder={placeholder} className={`border rounded p-2 w-full ${className}`} {...props} />;
  }
  