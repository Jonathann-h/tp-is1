export function Dialog({ open, onOpenChange, children }) {
    return open ? (
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-30">
        <div className="bg-white p-4 rounded shadow-lg">{children}</div>
      </div>
    ) : null;
  }
  
  export function DialogContent({ children }) {
    return <div className="p-2">{children}</div>;
  }
  
  export function DialogTitle({ children, className }) {
    return <h2 className={`text-lg font-bold ${className}`}>{children}</h2>;
  }
  