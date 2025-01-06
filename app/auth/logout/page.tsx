'use client';

import Link from 'next/link';
import { useAuthStore } from "@/app/store/store";


const LogoutPage = () => {
  const { user, logout } = useAuthStore();

  return (
    <div className="mt-32 text-black">
      {user ? (
        <>
          <h1 className="text-black">Are you sure you want to logout?</h1>
          <button onClick={() => logout()} className='text-blue-700 font-semibold underline'>Logout</button>
        </>
      ) : (
        <>
        <p>You are not logged in.</p>
        <Link href="/auth/login">
          <p className='text-blue-700 font-semibold underline'>
          Go back to Login
          </p>
        </Link>
        </>
      )}
    </div>
  );
}

export default LogoutPage;
