'use client';

import { ReactNode, useEffect } from 'react';
import { useRouter } from 'next/navigation'; // Use next/navigation for App Router
import { useAuth } from '@/context/AuthContext';

interface ProtectedRouteProps {
  children: ReactNode;
}

export default function ProtectedRoute({ children }: ProtectedRouteProps) {
  const { session, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    // Wait until loading is finished before checking session
    if (!loading && !session) {
      // Redirect to login page if not authenticated
      // TODO: Create a dedicated login page route (e.g., /login)
      router.push('/login'); // Assuming '/login' is the login page route for now
    }
  }, [session, loading, router]);

  // While loading, don't render anything or render a loading spinner
  if (loading) {
    // Optional: Add a loading indicator here
    return <div className="flex justify-center items-center h-screen">Loading...</div>; // Basic loading indicator
  }

  // If session exists, render the protected content
  if (session) {
    return <>{children}</>;
  }

  // If no session and not loading (redirection should be happening), return null or loading
  // Returning loading indicator here too for consistency during the brief moment before redirect
  return <div className="flex justify-center items-center h-screen">Loading...</div>;
}