import React, { createContext, useState, useContext } from 'react';
import { nanoid } from 'nanoid';

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

// interface Course {
//   tutorName: string;
//   duration: string;
//   course: string;
//   description: string;
//   cost: string;
// }

interface CourseContextProps {
  useData: any;
}
const CourseContext = createContext<any>({});

export const CourseProvider = ({ children }: any) => {
  const [userData, setUserData] = useState({});

  const value = {
    userData,
    setUserData,
  };

  return (
    <CourseContext.Provider value={value}>{children}</CourseContext.Provider>
  );
};

export const useApp = () => {
  return useContext(CourseContext);
};

// id: '08dc2bc6-64e3-8321-667f-a0c848066de6',
// email: 'contactwale007@gmail.com',
// token:
//   'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJjb250YWN0d2FsZTAwN0BnbWFpbC5jb20iLCJleHAiOjE3MDg1NDQyMDAsImlzcyI6Ik9tYWNhcnQiLCJhdWQiOiJPbWFjYXJ0IEVudGVycHJpc2UifQ.SiB3xwm2Fuxeigeo42SCsFvPACscwyleVvjeaG_m5Xc',
// lastName: null,
// middleName: null,
// firstName: 'Olawale',
// membershipType: 'Customer',
// profilePicture: 'noimage',
// usertype: 'Customer',
// customerId: null,
// kycStatus: false,
// roles: null,
// claims: null,
