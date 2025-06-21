export function Button({ children, onClick, className }) {
  return (
    <button
      onClick={onClick}
      className={`bg-green-600 hover:bg-green-700 px-4 py-2 rounded ${className}`}
    >
      {children}
    </button>
  );
}
