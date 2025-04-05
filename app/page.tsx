'use client'; // Make this a client component

import ProtectedRoute from '@/components/auth/ProtectedRoute';
import { supabase } from '@/lib/supabaseClient';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  const handleLogout = async () => {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) throw error;
      console.log('Logout successful');
      router.push('/login'); // Redirect to login after logout
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error('Error logging out:', error.message);
      } else {
        console.error('An unknown error occurred during logout:', error);
      }
      // TODO: Add user feedback for error
    }
  };

  return (
    <ProtectedRoute>
      {/* TODO: Replace with actual Task List UI [Task-1] */}
      <div className="container mx-auto p-4">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold">My TODO List</h1>
          <button
            onClick={handleLogout}
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Logout
          </button>
        </div>
        {/* Placeholder for task list */}
        <p>Task list will appear here...</p>
        {/* TODO: Implement Task List UI [Task-1] */}
        {/* TODO: Implement Fetch Tasks [Task-2] */}
        {/* TODO: Implement Add Task UI [Task-3] */}
        {/* TODO: Implement Add Task Logic [Task-4] */}
        {/* TODO: Implement Task Toggle Logic [Task-5] */}
        {/* TODO: Implement Task Status Update [Task-6] */}
      </div>
    </ProtectedRoute>
  );
}
