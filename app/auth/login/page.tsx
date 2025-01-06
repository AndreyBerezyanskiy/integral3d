'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuthStore } from '@/app/store/store';


interface LoginResponse {
  detail?: string;
  access_token?: string;
  token_type?: string;
}

export default function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();
  const { isAuthenticated, user, login, logout } = useAuthStore();
  const [formErrors, setFormErrors] = useState<string[]>([]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    });

    const data = await response.json();

    if (response.ok) {
      console.log('Login successful:', data);
      login(username);
      router.push('/');
    } else {
      console.log('Login failed:', data);
      handleFormErrors(data);
    }
  };

  const handleFormErrors = (data: LoginResponse) => {
    if (data.detail) {
      console.log('Form error:', data.detail);
      setFormErrors([data.detail]);
    } else {
      console.log('Unknown error:', data);
      setFormErrors(['An unknown error occurred.']);
    }
  }

  return (
    <div className="mt-32 text-black">
      <h1 className="text-black">Login</h1>
      {isAuthenticated ? (
        <div>
          <p>Welcome, {user?.username}!</p>
          <button 
            onClick={() => {
              logout();
              router.push('/auth/login');
            }} 
            className="p-2 text-black border border-black"
          >
            Logout
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Username"
            className="mr-2 p-2 border border-black text-black"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="mr-2 p-2 border border-black text-black"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" className="p-2 text-black border border-black">
            Login
          </button>

          {formErrors.length > 0 && (
            <div className="mt-2">
              {formErrors.map((error, index) => (
                <p key={index} className="text-red-500">{error}</p>
              ))}
            </div>
          )}
        </form>
      )}
    </div>
  );
}
