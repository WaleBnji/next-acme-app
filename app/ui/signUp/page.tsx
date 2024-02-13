'use client';
import { useState } from 'react';

export default function SignUp() {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [passWord, setPassword] = useState<string>('');
  return (
    <div className="mt-16 py-20 pl-10">
      <h1 className="mb-6 text-2xl font-bold ">Sign up</h1>
      <form action="" className="w-full space-y-10">
        <div>
          <label htmlFor="name" className="block">
            Name
          </label>
          <input
            type="text"
            placeholder="Enter your name"
            className="w-[80%]"
            id="name"
          />
        </div>
        <div>
          <label htmlFor="email" className="block">
            Email
          </label>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-[80%]"
            id="email"
          />
        </div>
        <div>
          <label htmlFor="password" className="block">
            Password
          </label>
          <input
            type="password"
            placeholder="Create a password"
            className="w-[80%]"
          />
        </div>
        <div className=" w-[80%]">
          <button className=" mx-auto mt-[5rem] w-full rounded-md bg-cyan-600 py-2 font-semibold text-white">
            Get started
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
