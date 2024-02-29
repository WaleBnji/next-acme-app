import React from 'react';
import Image from 'next/image';

export default function Partners() {
  return (
    <div>
      <div className="mb-8 space-y-2">
        <h1 className="text-2xl font-semibold tracking-wide">Welcome back</h1>
        <p>Track,manage, and view your students and courses available.</p>
      </div>
      <div className="flex flex-col items-center justify-center space-y-4">
        <div className="mx-auto flex h-[100px] w-[300px] flex-col justify-between rounded-lg px-6 py-4 shadow-md">
          <h3 className="font-medium">Total Students</h3>
          <h2 className="text-3xl font-semibold">0</h2>
        </div>
        <div className="flex h-[100px] w-[300px] flex-col justify-between rounded-lg px-6 py-4 shadow-md">
          <h3 className="font-medium">Total Students</h3>
          <h2 className="text-3xl font-semibold">0</h2>
        </div>
        <div className="flex h-[100px] w-[300px] flex-col justify-between rounded-lg px-6 py-4 shadow-md">
          <h3 className="font-medium">Total Students</h3>
          <h2 className="text-3xl font-semibold">0</h2>
        </div>
      </div>
      <div className="mt-8">
        <h2 className="mb-6 text-2xl font-semibold">
          Courses available on platform
        </h2>
        <div className="flex flex-col space-y-6 py-6">
          <div className="h-[450px] rounded-lg border ">
            <Image
              width={3000}
              height={3000}
              alt="courses image"
              src="/webdev.avif"
              className="mb-8"
            />
            <h4 className="px-3 font-semibold">Web Development</h4>
            <p className="px-3">
              Dive into the world of coding and design as we explore the
              fundamentals of web development
            </p>
            <button className="ml-[0.7rem] mt-4  rounded-md bg-green-500 px-6 py-2 text-white">
              View
            </button>
          </div>
          <div className="h-[450px] rounded-lg border ">
            <Image
              width={3000}
              height={3000}
              alt="courses image"
              src="/webdev.avif"
              className="mb-8"
            />
            <h4 className="px-3 font-semibold">Web Development</h4>
            <p className="px-3">
              Dive into the world of coding and design as we explore the
              fundamentals of web development
            </p>
            <button className="ml-[0.7rem] mt-4  rounded-md bg-green-500 px-6 py-2 text-white">
              View
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
