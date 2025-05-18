export default function LoginModal({ open, onClose, onLogin }) {
  const handleLogin = () => {
    const email = prompt("Enter email to login:");
    if (email) {
      onLogin(email);
    }
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-xl shadow-xl max-w-sm w-full">
        <h2 className="text-xl font-bold mb-4">🔐 Login Required</h2>
        <p className="mb-4 text-gray-600">Please login or sign up to continue.</p>
        <button
          className="w-full py-2 px-4 bg-indigo-600 text-white rounded hover:bg-indigo-700"
          onClick={handleLogin}
        >
          Login / Signup
        </button>
        <button
          className="w-full py-2 mt-2 px-4 bg-gray-200 text-gray-800 rounded hover:bg-gray-300"
          onClick={onClose}
        >
          Cancel
        </button>
      </div>
    </div>
  );
}
