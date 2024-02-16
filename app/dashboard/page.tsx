'use client';
import { useRouter } from 'next/navigation';
import React from 'react';
import { useApp } from '../context/courseContext';

const Dashboard = () => {
  const { userData } = useApp();
  const navigate = useRouter();
  return (
    <div className="flex flex-col items-center justify-center py-96">
      <h1>Welcome {userData?.firstName}</h1>
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
