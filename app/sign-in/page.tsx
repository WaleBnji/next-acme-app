'use client';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import toast from 'react-hot-toast';

export default function SignIn() {
  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
  });

  const navigate = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCredentials({
      ...credentials,
      [e.target.id]: e.target.value,
    });
  };

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        'https://devapi.omacart.com/login',
        credentials,
      );
      navigate.push('/');

      console.log(res);
    } catch (error) {
      toast.error('something went wrong');
    }
  };

  return (
    <div className="mt-10 py-20 pl-10">
      <div className="mb-20 flex flex-col text-center">
        <h1 className="text-3xl font-bold">Welcome Back</h1>
        <p> Welcome back! Please enter your details</p>
      </div>
      <form
        action=""
        className="ml-4 mt-10 w-full space-y-10"
        onSubmit={handleSignIn}
      >
        <div>
          <label htmlFor="email" className="block">
            Email
          </label>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-[80%]"
            id="email"
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="password" className="block">
            Password
          </label>
          <input
            type="password"
            placeholder="*********"
            className="w-[80%]"
            id="password"
            onChange={handleChange}
          />
        </div>
        <div className=" mr-7 flex items-center justify-between">
          <div>
            <input type="checkbox" id="remember" />
            <label htmlFor="remember"> Remember for 30 days</label>
          </div>
          <button>Forget password</button>
        </div>

        <div className=" w-[80%]">
          <button className=" mx-auto mt-[5rem] w-full rounded-md bg-cyan-600 py-2 font-semibold text-white">
            Log in
          </button>
        </div>
        <p className="ml-[2rem]">
          Already have an account?{' '}
          <span>
            <button className="text-cyan-600">Log in</button>
          </span>
        </p>
      </form>
    </div>
  );
}
