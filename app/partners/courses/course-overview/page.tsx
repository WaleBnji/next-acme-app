import React from 'react';
import Image from 'next/image';

export default function page() {
  return (
    <div className="pb-10">
      <h1 className="mb-4 text-3xl font-semibold">Course Overview</h1>
      <div>
        <div className="flex flex-col md:flex-row md:justify-between">
          <Image
            src="/Image (1).svg"
            height={600}
            width={600}
            alt="course overview"
            className="md:hidden"
          />
          <Image
            src="/Image (1).svg"
            height={800}
            width={1000}
            alt="course overview"
            className="hidden md:block"
          />
          <div className="mt-6 flex h-[400px] flex-col rounded-lg border px-6 py-5 shadow-md md:h-[500px] md:w-[350px]">
            <h3 className="text-center text-[1.5rem] tracking-wider">
              ₦35,000.00
            </h3>
            <div className="mb-8 space-y-3 md:space-y-6">
              <div className="mt-3 flex items-center justify-between">
                <div className="flex items-center justify-between">
                  <Image
                    src="/Clock.svg"
                    alt="clock icon"
                    height={30}
                    width={30}
                  />
                  <h4 className="ml-1">Course Duration</h4>
                </div>
                <div>
                  <p>4 weeks</p>
                </div>
              </div>
              <div className="mt-3 flex items-center justify-between">
                <div className="flex items-center justify-between">
                  <Image
                    src="/Clock.svg"
                    alt="clock icon"
                    height={30}
                    width={30}
                  />
                  <h4 className="ml-1">Course Duration</h4>
                </div>
                <div>
                  <p>4 weeks</p>
                </div>
              </div>
              <div className="mt-3 flex items-center justify-between">
                <div className="flex items-center justify-between">
                  <Image
                    src="/Clock.svg"
                    alt="clock icon"
                    height={30}
                    width={30}
                  />
                  <h4 className="ml-1">Course Duration</h4>
                </div>
                <div>
                  <p>4 weeks</p>
                </div>
              </div>
              <div className="mt-3 flex items-center justify-between">
                <div className="flex items-center justify-between">
                  <Image
                    src="/Clock.svg"
                    alt="clock icon"
                    height={30}
                    width={30}
                  />
                  <h4 className="ml-1">Course Duration</h4>
                </div>
                <div>
                  <p>4 weeks</p>
                </div>
              </div>
            </div>
            <button className="mt-6 rounded-lg bg-[#27779b] px-10 py-3 text-[1.3rem] font-semibold text-white">
              Edit Price
            </button>
          </div>
        </div>
        <div>
          <div className="md:flex md:items-start md:justify-between">
            <div className="space-y-4 py-8 md:w-[60%]">
              <h1 className="text-3xl font-medium">Course Overview</h1>
              <p>About the Course</p>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Voluptate aliquam quam accusantium optio doloremque tenetur
                odit, vero enim totam. A ratione recusandae eum tempora eveniet
                laboriosam perferendis rerum minima error dicta. Rem nesciunt
                doloribus iusto sequi ut rerum quos quod recusandae officia
                praesentium delectus nulla similique ducimus voluptatum animi,
                quidem officiis obcaecati magnam voluptatem harum consequuntur
                saepe nisi. Distinctio, animi.
              </p>
              <ul className="list-disc px-4">
                <li>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Ipsum, ullam.
                </li>
                <li>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Ipsum, ullam.
                </li>
                <li>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Ipsum, ullam.
                </li>
              </ul>
            </div>
            <div className="flex flex-col rounded-sm border border-gray-100 ">
              <div className="items-between flex justify-between border-b border-gray-100 bg-gray-200 px-5 py-3 md:py-6">
                <p className="font-medium">Course Outline</p>
                <p>Duration</p>
              </div>
              <div className="flex items-center justify-between border-b border-gray-200  px-5 py-4 md:py-6">
                <p>Introduction to Product Design</p>
                <p>Week 1</p>
              </div>
              <div className="flex items-center justify-between border-b border-gray-200  px-5 py-4 md:py-6">
                <p>Design Principles</p>
                <p>Week 2</p>
              </div>
              <div className="flex items-center justify-between border-b border-gray-200  px-5 py-4 md:py-6">
                <p>User Persona</p>
                <p>Week 3</p>
              </div>
              <div className="flex items-center justify-between border-b border-gray-200  px-5 py-4 md:py-6">
                <p>Projects and Practicals</p>
                <p>Week 4</p>
              </div>
            </div>
          </div>
          <div className="px-3 py-4 md:flex md:justify-between ">
            <div className="mb-4 space-y-6 md:w-[80%]">
              <div>
                <p className="font-semibold">Duration</p>
                <p>3 weeks</p>
              </div>
              <div className="mt-4">
                <p className="mb-4 font-semibold">Resources</p>
                <Image
                  src="/Table cell.svg"
                  alt="resource upload"
                  height={400}
                  width={400}
                />
              </div>
            </div>
            <div className="space-y-5 rounded-md border border-gray-200 px-2 py-3 md:w-[20%]">
              <div className="mt-5 flex items-center justify-between">
                <div className="space-y-4">
                  <h3 className="text-[1.3rem] font-semibold">
                    Olamilekan Daniel
                  </h3>
                  <p>Product Design</p>
                  <p>Course Instructor</p>
                </div>
                <Image
                  src="/Image (2).svg"
                  alt="course instructor"
                  height={100}
                  width={100}
                />
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
                exercitationem ipsum accusamus ut voluptate eligendi rerum
                officiis voluptatum sed perspiciatis explicabo, odio libero
                maxime dolorem temporibus, doloribus facilis quibusdam
                voluptatem.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
