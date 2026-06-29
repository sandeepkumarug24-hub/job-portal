function Button({ children, className = "", ...props }) {
  return (
    <button
      className={`px-5 py-2 rounded-lg font-medium transition duration-300 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
