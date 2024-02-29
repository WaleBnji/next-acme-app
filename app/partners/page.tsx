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
      <div className="mt-8 md:flex md:items-start">
        <div className="md:w-[65%]">
          <div className="flex flex-col items-start md:flex-row md:items-center md:justify-between">
            <h2 className="mb-6 text-2xl font-semibold">
              Courses available on platform
            </h2>
            <button>View all</button>
          </div>
          <div className="flex flex-col space-y-6 py-6 md:flex-row md:items-center md:justify-between md:space-y-0">
            <div className="h-[450px] rounded-lg border md:h-[500px] md:w-[45%]">
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
              <button
                className="ml-[0.7rem]  mt-4 rounded-md
bg-[#27779B] px-6 py-2 text-white"
              >
                View
              </button>
            </div>
            <div className="h-[450px] rounded-lg border md:h-[500px] md:w-[45%] ">
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
              <button
                className="ml-[0.7rem]  mt-4 rounded-md
bg-[#27779B] px-6 py-2 text-white"
              >
                View
              </button>
            </div>
          </div>
        </div>
        <div className="md:mt-4 md:w-[30%] md:px-16">
          <h2 className="font-medium">Activity</h2>
          <div className="space-y-6 pb-6 md:flex md:flex-col md:items-center md:justify-center">
            <div className="flex ">
              <div className="mr-3 inline-block h-[40px] w-[40px] overflow-hidden rounded-full md:mr-2">
                <Image
                  width={70}
                  height={70}
                  alt="profile picture"
                  src="/profileimage.jpg"
                  className="h-full w-full"
                />
              </div>
              <div className="flex flex-col text-[0.9rem]">
                <h4>Demi Wikinson</h4>
                <p>Made payment for Product design 101</p>
              </div>
            </div>
            <div className="flex ">
              <div className="mr-3 inline-block h-[40px] w-[40px] overflow-hidden rounded-full md:mr-2">
                <Image
                  width={70}
                  height={70}
                  alt="profile picture"
                  src="/profileimage.jpg"
                  className="h-full w-full"
                />
              </div>
              <div className="flex flex-col text-[0.9rem]">
                <h4>Demi Wikinson</h4>
                <p>Made payment for Product design 101</p>
              </div>
            </div>
            <div className="flex ">
              <div className="mr-3 inline-block h-[40px] w-[40px] overflow-hidden rounded-full md:mr-2">
                <Image
                  width={70}
                  height={70}
                  alt="profile picture"
                  src="/profileimage.jpg"
                  className="h-full w-full"
                />
              </div>
              <div className="flex flex-col text-[0.9rem]">
                <h4>Demi Wikinson</h4>
                <p>Made payment for Product design 101</p>
              </div>
            </div>
            <div className="flex ">
              <div className="mr-3 inline-block h-[40px] w-[40px] overflow-hidden rounded-full md:mr-2">
                <Image
                  width={70}
                  height={70}
                  alt="profile picture"
                  src="/profileimage.jpg"
                  className="h-full w-full"
                />
              </div>
              <div className="flex flex-col text-[0.9rem]">
                <h4>Demi Wikinson</h4>
                <p>Made payment for Product design 101</p>
              </div>
            </div>
            <div className="flex ">
              <div className="mr-3 inline-block h-[40px] w-[40px] overflow-hidden rounded-full md:mr-2">
                <Image
                  width={70}
                  height={70}
                  alt="profile picture"
                  src="/profileimage.jpg"
                  className="h-full w-full"
                />
              </div>
              <div className="flex flex-col text-[0.9rem]">
                <h4>Demi Wikinson</h4>
                <p>Made payment for Product design 101</p>
              </div>
            </div>
            <div className="flex ">
              <div className="mr-3 inline-block h-[40px] w-[40px] overflow-hidden rounded-full md:mr-2">
                <Image
                  width={70}
                  height={70}
                  alt="profile picture"
                  src="/profileimage.jpg"
                  className="h-full w-full"
                />
              </div>
              <div className="flex flex-col text-[0.9rem]">
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
