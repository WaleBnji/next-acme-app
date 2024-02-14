'use client';
import { useRouter } from 'next/navigation';
import React from 'react';

const Dashboard = () => {
  const navigate = useRouter();
  return (
    <div>
      <h1>Welcome Olawale</h1>
      <p>
        Go to the courses{' '}
        <button
          className="text-purple-500"
          onClick={() => navigate.push('/dashboard/courses')}
        >
          page{' '}
        </button>
      </p>
    </div>
  );
};

export default Dashboard;
