export function Button({ children, className, ...props }) {
    return (
      <button className={`p-2 bg-blue-600 text-white rounded hover:bg-blue-700 ${className}`} {...props}>
        {children}
      </button>
    );
  }
  