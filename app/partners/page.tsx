import React from 'react';
import Image from 'next/image';

export default function Partners() {
  return (
    <div>
      <div className="mb-8 space-y-2">
        <h1 className="text-2xl font-semibold tracking-wide md:text-5xl">
          Welcome back
        </h1>
        <p className="md:text-[1.1rem] md:tracking-wide">
          Track,manage, and view your students and courses available.
        </p>
      </div>
      <div className="flex flex-col items-center justify-center space-y-4 md:hidden">
        <div className="mx-auto flex h-[100px] w-[300px] flex-col justify-between rounded-lg px-6 py-4 shadow-md md:w-[30%]">
          <h3 className="font-medium">Total Students</h3>
          <h2 className="text-3xl font-semibold">0</h2>
        </div>
        <div className="flex h-[100px] w-[300px] flex-col justify-between rounded-lg px-6 py-4 shadow-md md:w-[30%]">
          <h3 className="font-medium">Total Students</h3>
          <h2 className="text-3xl font-semibold">0</h2>
        </div>
        <div className="flex h-[100px] w-[300px] flex-col justify-between rounded-lg px-6 py-4 shadow-md md:w-[30%]">
          <h3 className="font-medium">Total Students</h3>
          <h2 className="text-3xl font-semibold">0</h2>
        </div>
      </div>
      <div className="hidden items-center justify-between md:flex">
        <div className="h-[200px] w-[32%] rounded-lg border px-5 py-7 shadow-lg ">
          <h3 className="mb-8 text-[1.2rem] font-medium">Total students</h3>
          <p className="mt-8 text-5xl font-semibold">0</p>
        </div>
        <div className="h-[200px] w-[32%] rounded-lg border px-5 py-7 shadow-lg ">
          <h3 className="mb-8 text-[1.2rem] font-medium">Courses</h3>
          <p className="mt-8 text-5xl font-semibold">0</p>
        </div>
        <div className="h-[200px] w-[32%] rounded-lg border px-5 py-7 shadow-lg ">
          <h3 className="mb-8 text-[1.2rem] font-medium">Wallet balance</h3>
          <p className="mt-8 text-5xl font-semibold">0</p>
        </div>
      </div>
      <div className="mt-8">
        <h2 className="mb-6 text-2xl font-semibold">
          Courses available on platform
        </h2>
        <button>View all</button>
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
        <div>
          <h2>Activity</h2>
          <div className="space-y-6 pb-6">
            <div className="flex items-center justify-between">
              <div className="inline-block h-[40px] w-[40px] overflow-hidden rounded-full">
                <Image
                  width={100}
                  height={100}
                  alt="profile picture"
                  src="/profileimage.jpg"
                  className="h-full w-full"
                />
              </div>
              <div className="flex flex-col">
                <h4>Demi Wikinson</h4>
                <p>Made payment for Product design 101</p>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="inline-block h-[40px] w-[40px] overflow-hidden rounded-full">
                <Image
                  width={100}
                  height={100}
                  alt="profile picture"
                  src="/profileimage.jpg"
                  className="h-full w-full"
                />
              </div>
              <div className="flex flex-col">
                <h4>Demi Wikinson</h4>
                <p>Made payment for Product design 101</p>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="inline-block h-[40px] w-[40px] overflow-hidden rounded-full">
                <Image
                  width={100}
                  height={100}
                  alt="profile picture"
                  src="/profileimage.jpg"
                  className="h-full w-full"
                />
              </div>
              <div className="flex flex-col">
                <h4>Demi Wikinson</h4>
                <p>Made payment for Product design 101</p>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="inline-block h-[40px] w-[40px] overflow-hidden rounded-full">
                <Image
                  width={100}
                  height={100}
                  alt="profile picture"
                  src="/profileimage.jpg"
                  className="h-full w-full"
                />
              </div>
              <div className="flex flex-col">
                <h4>Demi Wikinson</h4>
                <p>Made payment for Product design 101</p>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="inline-block h-[40px] w-[40px] overflow-hidden rounded-full">
                <Image
                  width={100}
                  height={100}
                  alt="profile picture"
                  src="/profileimage.jpg"
                  className="h-full w-full"
                />
              </div>
              <div className="flex flex-col">
                <h4>Demi Wikinson</h4>
                <p>Made payment for Product design 101</p>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="inline-block h-[40px] w-[40px] overflow-hidden rounded-full">
                <Image
                  width={100}
                  height={100}
                  alt="profile picture"
                  src="/profileimage.jpg"
                  className="h-full w-full"
                />
              </div>
              <div className="flex flex-col">
                <h4>Demi Wikinson</h4>
                <p>Made payment for Product design 101</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
