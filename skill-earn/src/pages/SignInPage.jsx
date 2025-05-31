import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SignInPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = () => {
    // Dummy login logic, replace with backend call
    if (email && password) {
      localStorage.setItem('user', JSON.stringify({ email }));
      navigate('/');
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-blue-50">
      <div className="bg-white p-6 rounded-xl shadow-xl w-full max-w-md">
        <h2 className="text-xl font-bold mb-4 text-blue-700">Sign In</h2>
        <input
          className="border p-2 w-full mb-3"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="border p-2 w-full mb-4"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="bg-blue-600 text-white px-4 py-2 rounded w-full" onClick={handleSignIn}>
          Sign In
        </button>
        <p className="text-sm mt-4 text-center">
          Don't have an account? <a className="text-blue-600 underline" href="/signup">Sign Up</a>
        </p>
      </div>
    </div>
  );
};

export default SignInPage;
