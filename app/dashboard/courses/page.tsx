'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { CiSearch } from 'react-icons/ci';

const courses = [
  {
    tutorName: 'Oketola Samuel',
    duration: '3 weeks',
    course: 'Web Development',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit.delectus Lorem ipsum dolor sit amet, consectetur adipisicing elit.delectus. Lorem ipsum dolor sit amet, consectetur adipisicing elit.delectus.',
    cost: 'free',
  },
  {
    tutorName: 'Isaac Folarin',
    duration: '4 weeks',
    course: 'Mobile Engineering',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit.delectus Lorem ipsum dolor sit amet, consectetur adipisicing elit.delectus. Lorem ipsum dolor sit amet, consectetur adipisicing elit.delectus.',
    cost: 'paid',
  },
  {
    tutorName: 'Ayele Aduragbemi',
    duration: '3 weeks',
    course: 'Digital management',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit.delectus Lorem ipsum dolor sit amet, consectetur adipisicing elit.delectus. Lorem ipsum dolor sit amet, consectetur adipisicing elit.delectus.',
    cost: 'free',
  },
  {
    tutorName: 'Mohammed Olamilekan',
    duration: '4 weeks',
    course: 'Product Design',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit.delectus Lorem ipsum dolor sit amet, consectetur adipisicing elit.delectus. Lorem ipsum dolor sit amet, consectetur adipisicing elit.delectus.',
    cost: 'paid',
  },
];

export default function Courses() {
  const [filter, setFilter] = useState('all');
  const [courseList, setCourseList] = useState(courses);
  const [searchInput, setSearchInput] = useState('');
  // const [filteredList, setFilteredList] = useState([]);

  const filterList1 = () => {
    const filtered = courses.filter((item) =>
      filter === 'all' ? item : item.cost === filter,
    );
    setCourseList(filtered);
  };
  const searchFn = () => {
    if (searchInput.length === 0) setCourseList(courses);
    const searchFilter = courses.filter((item) =>
      item.course.toLowerCase().includes(searchInput.toLowerCase()),
    );
    setCourseList(searchFilter);
  };
  const searchFilter = courses.filter((item) =>
    item.course.toLowerCase().includes(searchInput.toLowerCase()),
  );

  return (
    <>
      <div className=" w-full md:pt-8">
        <h1 className="mt-5 text-3xl font-semibold">Welcome Olawale</h1>
        <p className="mt-3">
          View a list of all availabe courses on the platform
        </p>

        <div className="mt-8 flex flex-col text-center md:flex-row md:items-center md:justify-between md:pr-10">
          <div className="flex items-center justify-between rounded-xl border md:h-[3rem] md:w-[20%] ">
            <button
              className={` w-[33%] py-4 md:py-3 ${
                filter === 'all' ? 'bg-gray-100 font-bold' : null
              }`}
              id="all"
              onClick={() => {
                setFilter('all');
                filterList1();
              }}
            >
              View all
            </button>
            <button
              className={`w-[34%] border-x py-4 md:py-3  ${
                filter === 'free' ? ' bg-gray-100 font-bold' : null
              }`}
              id="free"
              onClick={() => {
                setFilter('free');
                filterList1();
              }}
            >
              Free
            </button>
            <button
              className={`w-[33%] py-4 md:py-3 ${
                filter === 'paid' ? ' bg-gray-100 font-bold' : null
              }`}
              id="paid"
              onClick={() => {
                setFilter('paid');
                filterList1();
              }}
            >
              Paid
            </button>
          </div>
          <div className="flex items-center justify-around">
            <form action="" className="mt-10 ">
              <div className="relative border border-gray-100">
                <CiSearch className="absolute left-2 top-3 mr-2" />
                <input
                  type="text"
                  className="w-full pl-7"
                  placeholder="search"
                  onChange={(e) => {
                    setSearchInput(e.target.value);
                    searchFn();
                  }}
                />
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="mt-5 ">
        <div className="grid-cols-2 gap-8 md:grid">
          {searchFilter.map((course, idx) => {
            return (
              <>
                <div className="mb-8" key={idx}>
                  <Image
                    src="/webdev.avif"
                    alt="web dev image"
                    width="0"
                    height="0"
                    sizes="100vw"
                    className="z-[-10]  w-full object-cover md:h-[250px]"
                  />
                  <div className=" z-20 mt-[-5rem]  flex h-[5rem] items-start justify-between bg-gray-100 bg-opacity-40 px-7 py-4 backdrop-blur-sm">
                    <div className="text-white">
                      <p className="font-bold">{course.tutorName}</p>
                      <p>Tutor</p>
                    </div>
                    <p className=" font-semibold text-purple-600">
                      {course.duration}
                    </p>
                  </div>
                  <div>
                    <h2 className="mt-6 text-3xl font-semibold">
                      {course.course}
                    </h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Quisquam et praesentium, nesciunt dicta, libero suscipit
                      accusamus dignissimos blanditiis omnis dolores pariatur
                      vitae adipisci voluptatum saepe repellat quia aperiam
                      debitis delectus.
                    </p>
                  </div>
                  <button className="mt-6 text-purple-600">Register</button>
                </div>
              </>
            );
          })}
        </div>
      </div>

      {/* outlet */}
      {/* <div className="mt-[20rem] hidden px-10 md:absolute  md:right-0  md:block">
        <div className="md:grid md:grid-cols-2">
          <div className="w-[60%]">
            <Image alt="desktop" src="/webdev.avif" width={800} height={800} />
            <div className=" z-20 mt-[-5rem]  flex h-[5rem] items-start justify-between bg-gray-100 bg-opacity-40 px-7 py-4 backdrop-blur-sm md:justify-center">
              <div className="bg-red-500 font-bold">
                <p className="ml-[-5rem] font-bold text-red-500">test</p>
                <p className="text-red-500">Tutor </p>
              </div>
              <p className=" font-semibold text-purple-600">3 weeks</p>
            </div>
          </div>
          <div className="w-[60%]">
            <Image alt="desktop" src="/webdev.avif" width={800} height={800} />
            <div className=" z-20 mt-[-5rem]  flex h-[5rem] items-start justify-between bg-gray-100 bg-opacity-40 px-7 py-4 backdrop-blur-sm md:justify-center">
              <div className="bg-red-500 font-bold">
                <p className="ml-[-5rem] font-bold text-red-500">test</p>
                <p className="text-red-500">Tutor </p>
              </div>
              <p className=" font-semibold text-purple-600">3 weeks</p>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
}
