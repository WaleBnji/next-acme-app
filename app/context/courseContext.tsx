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

interface Course {
  tutorName: string;
  duration: string;
  course: string;
  description: string;
  cost: string;
}

interface CourseContextProps {
  courses: Course[];
}
export const CourseContext = createContext<undefined | CourseContextProps>(
  undefined,
);

export const CourseProvider = (props: { children: React.ReactNode }) => {
  const [courseList, setCourseList] = useState(courses);
  const [userInput, setUserInput] = useState('');
  const value = {
    courses: courseList,
  };

  return (
    <CourseContext.Provider value={value}>
      {props.children}
    </CourseContext.Provider>
  );
};

export const useApp = () => {
  return useContext(CourseContext);
};
