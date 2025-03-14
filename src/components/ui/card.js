export function Card({ children, className }) {
    return <div className={`p-6 bg-white rounded-lg shadow ${className}`}>{children}</div>;
  }
  
  export function CardContent({ children }) {
    return <div className="mt-4">{children}</div>;
  }
  