'use client';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import toast from 'react-hot-toast';
import Image from 'next/image';

export default function SignUp() {
  const navigate = useRouter();
  const [loading, setLoading] = useState(false);
  const [credentials, setCredentials] = useState({
    firstname: '',
    lastname: '',
    password: '',
    email: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCredentials({
      ...credentials,
      [e.target.id]: e.target.value,
    });
  };

  // signup user
  const handleSIgnUp = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await axios.post(
        'https://devapi.omacart.com/signup',
        credentials,
      );
      toast.success(res?.data?.message || 'successfully signed up');
      navigate.push('/sign-in');
    } catch (error) {
      toast.error('An error occured');
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      <div className="md:flex ">
        <div className="hidden md:block md:w-[65%]">
          <Image
            src="/signUp.svg"
            alt="sign up"
            className="w-full"
            height={1000}
            width={1000}
          />
        </div>
        <div className="mt-16 py-20 pl-10 md:w-[35%]">
          <h1 className="mb-6 text-2xl font-bold ">Sign up</h1>

          <form onSubmit={handleSIgnUp} action="" className="w-full space-y-10">
            <div>
              <label htmlFor="name" className="block">
                Name
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-[80%]"
                id="firstname"
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="name" className="block">
                Name
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-[80%]"
                id="lastname"
                onChange={handleChange}
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
                onChange={handleChange}
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
                onChange={handleChange}
                id="password"
              />
              <p className="mt-2">Must be atleast 8 characters</p>
            </div>
            <div className=" w-[80%]">
              <button
                type="submit"
                className=" mx-auto mt-[5rem] w-full rounded-md bg-cyan-600 py-2 font-semibold text-white"
              >
                {loading ? 'loading' : 'Get Started'}
              </button>
            </div>
            <p className="md:mt-10rem ml-[2rem] md:ml-[10rem]">
              Already have an account?{' '}
              <span>
                <button className="text-cyan-600">Log in</button>
              </span>
            </p>
          </form>
        </div>
      </div>
    </>
  );
}
