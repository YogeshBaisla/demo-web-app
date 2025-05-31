import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SignUpPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = () => {
    // Dummy sign-up logic, replace with backend
    if (email && password) {
      localStorage.setItem('user', JSON.stringify({ email }));
      navigate('/');
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-purple-50">
      <div className="bg-white p-6 rounded-xl shadow-xl w-full max-w-md">
        <h2 className="text-xl font-bold mb-4 text-purple-700">Sign Up</h2>
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
        <button className="bg-purple-600 text-white px-4 py-2 rounded w-full" onClick={handleSignUp}>
          Sign Up
        </button>
        <p className="text-sm mt-4 text-center">
          Already have an account? <a className="text-purple-600 underline" href="/signin">Sign In</a>
        </p>
      </div>
    </div>
  );
};

export default SignUpPage;