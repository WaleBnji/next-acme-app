import React from 'react';
import Image from 'next/image';

export default function PartnerCourses() {
  return (
    <div className="pb-16">
      <div className="space-y-4">
        <h1 className="text-2xl font-semibold">Courses</h1>
        <p>View all courses amd edit the necessary details</p>
      </div>
      <div className="mt-12 flex flex-col items-center space-y-6 md:flex-row md:justify-between md:space-y-0">
        <div className="h-[150px] rounded-lg border px-4 py-6 shadow-lg md:w-[49%]">
          <h4>Total Courses</h4>
          <h2 className="mt-7 text-[1.5rem] font-medium">10</h2>
        </div>
        <div className="h-[150px] rounded-lg border px-4 py-6 shadow-lg md:w-[49%]">
          <h4>Active Courses</h4>
          <h2 className="mt-7 text-[1.5rem] font-medium">6</h2>
        </div>
      </div>
      <div>
        <div className="mt-8 space-y-4">
          <div className="h-[370px] rounded-lg border px-2 py-3 md:relative md:flex md:h-[320px] md:items-start">
            <Image src="/Image.svg" alt="product" height={400} width={400} />

            <div className="flex items-end justify-between md:ml-5 ">
              <div className="mt-4 space-y-3 md:space-y-12 md:pt-4">
                <h3 className="font-medium tracking-wide md:text-[1.5rem]">
                  Web Development
                </h3>
                <p>202 Students</p>
                <p className="">3 weeks</p>{' '}
              </div>
              <p className="md:absolute md:right-6 md:text-[1.2rem] md:font-medium md:tracking-wide">
                35,000#
              </p>
            </div>
          </div>
          <div className="h-[370px] rounded-lg border px-2 py-3 md:relative md:flex md:h-[320px] md:items-start">
            <Image src="/Image.svg" alt="product" height={400} width={400} />

            <div className="flex items-end justify-between md:ml-5 ">
              <div className="mt-4 space-y-3 md:space-y-12 md:pt-4">
                <h3 className="font-medium tracking-wide md:text-[1.5rem]">
                  Web Development
                </h3>
                <p>202 Students</p>
                <p className="">3 weeks</p>{' '}
              </div>
              <p className="md:absolute md:right-6 md:text-[1.2rem] md:font-medium md:tracking-wide">
                35,000#
              </p>
            </div>
          </div>
          <div className="h-[370px] rounded-lg border px-2 py-3 md:relative md:flex md:h-[320px] md:items-start">
            <Image src="/Image.svg" alt="product" height={400} width={400} />

            <div className="flex items-end justify-between md:ml-5 ">
              <div className="mt-4 space-y-3 md:space-y-12 md:pt-4">
                <h3 className="font-medium tracking-wide md:text-[1.5rem]">
                  Web Development
                </h3>
                <p>202 Students</p>
                <p className="">3 weeks</p>{' '}
              </div>
              <p className="md:absolute md:right-6 md:text-[1.2rem] md:font-medium md:tracking-wide">
                35,000#
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
