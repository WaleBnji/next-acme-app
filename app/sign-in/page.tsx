'use client';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import toast from 'react-hot-toast';
import Image from 'next/image';
import { useApp } from '../context/courseContext';

export default function SignIn() {
  const { userData, setUserData } = useApp();
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
      setUserData(res?.data?.response);
      navigate.push('/dashboard/courses');
    } catch (error) {
      toast.error('something went wrong');
    }
  };

  return (
    <>
      <div className="md:flex md:w-full md:items-center md:justify-center">
        <div className="mt-10 py-20 pl-10 md:w-[50%]">
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
            <div className=" mr-7 flex items-center justify-between md:mr-[8rem] md:px-5">
              <div>
                <input type="checkbox" id="remember" />
                <label htmlFor="remember"> Remember for 30 days</label>
              </div>
              <button className="text-purple-500">Forget password</button>
            </div>

            <div className=" w-[80%]">
              <button className=" mx-auto mt-[5rem] w-full rounded-md bg-cyan-600 py-2 font-semibold text-white">
                Log in
              </button>
            </div>
            <p className="ml-[2rem] md:ml-[8rem]">
              Don`t have an account?{' '}
              <span>
                <button
                  className="text-cyan-600"
                  onClick={() => navigate.push('/sign-up')}
                >
                  Sign up
                </button>
              </span>
            </p>
          </form>
        </div>
        <div className="hidden md:block">
          <Image height={1000} width={1000} alt="sign in" src="/Login.svg" />
        </div>
      </div>
    </>
  );
}
