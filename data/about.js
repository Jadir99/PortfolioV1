import React from 'react';
import {
  FaDocker,
  FaJenkins,
  FaAws,
  FaGithub,
  FaLaravel,
  FaNodeJs,
  FaLinux,
  FaDiscord,
  FaFigma,
  FaHtml5,
  FaCss3,
  FaJsSquare,
  FaBootstrap,
  FaGitAlt,
  FaJava,
  FaPython,
  FaPhp,
  FaDatabase,
  // api rest


} from 'react-icons/fa';

import {
  SiKubernetes,
  SiTerraform,
  SiGrafana,
  SiPrometheus,
  SiFlask,
  SiSpringboot,
  SiJupyter,
  SiDotnet,
  SiOracle,
  SiMysql,
  SiPostgresql,
  SiMongodb,
  SiUnity,
  SiExpress
} from 'react-icons/si';

import { RiNextjsFill } from "react-icons/ri";

export const about = {
  title: 'About Me',
  description: 'I\'m JADIR Mohammed, a junior data scientist and full-stack developer passionate about building smart, responsive web applications. I focus on delivering impactful, data-driven user experiences through thoughtful design and continuous learning.',
};

export const experience = [
  {
    icon: '/assets/about/badge.svg',
    title: 'My Experience',
    // description: 'Design and development of an online learning platform (E-learning) . Front-end: HTML, CSS, JS, Bootstrap. Back-end: Laravel. Worked with agile methodology (Kanban).',
    items: [
      {
        company: 'YaneCode | Safi, Morocco',
        position: 'Full Stack Developer',
        duration: 'Avr 2023 - Mai 2023',
        description: 'Design and development of an online learning platform (E-learning) . Front-end: HTML, CSS, JS, Bootstrap. Back-end: Laravel. Worked with agile methodology (Kanban).',
      },
      {
        company: 'MR.elec | CasaBlanca, Morocco',
        position: 'Full Stack Developer',
        duration: 'Août 2022 - Sept 2022',
        description: 'Development of a application web for solar pumping simulation and material management. In-depth knowledge of the solar industry.',
      },
    ]
  }
];

export const education = [
  {
    icon: '/assets/about/cap.svg',
    title: 'My Education',
    items: [
      {
        institution: 'National Higher School of Artificial Intelligence and Data Science (ENSIASD). | UIZ',
        degree: 'Big Data, AI, and Data Science Engineering',
        duration: 'DEC 2023 - Present',
      },
      {
        institution: 'Safi Higher School of Technology (EST) safi | UCA',
        degree: 'Computer Engineering',
        duration: '2021 - 2023',
      },
    ] 
  }
];

export const certificates = [
  {
    title: 'Frontend Developer (React)',
    platform: 'HackerRank',
    dateEarned: '2024',
    description: 'Proved ability to create and optimize interactive, dynamic web apps using React.',
    link: 'https://www.hackerrank.com/certificates/iframe/27aea8f4fd10',
    image: '/assets/certificates/frontend-react.png',
  },
  {
    title: 'SQL BASIC',
    platform: 'HackerRank',
    dateEarned: '2024',
    description: 'Completed SQL Basics on HackerRank, proving skills in writing and optimizing queries.',
    link: 'https://www.hackerrank.com/certificates/256451400398',
    image: '/assets/certificates/cert1.png',
  },
  {
    title: 'JavaScript BASIC',
    platform: 'HackerRank',
    dateEarned: '2024',
    description: 'Achieved JavaScript Basics on HackerRank, showing a solid grasp of core JavaScript concepts.',
    link: 'https://www.hackerrank.com/certificates/iframe/abafff203fce',
    image: '/assets/certificates/js-basic.png',
  },
  {
    title: 'Postman API Fundamentals Student Expert',
    platform: 'Postman',
    dateEarned: '2024',
    description: 'Gained hands-on experience in building, testing, and managing APIs using Postman.',
    link: 'https://badgr.com/public/assertions/WzAtwvbfSHKBfLWOSdWv4A',
    image: '/assets/certificates/postman-api.png',
  },
  {
    title: 'SQL Intermediate',
    platform: 'HackerRank',
    dateEarned: '2024',
    description: 'Expanded SQL knowledge, working with more complex queries, subqueries, and advanced functions.',
    link: 'https://www.hackerrank.com/certificates/iframe/6dc828f31013',
    image: '/assets/certificates/cert1.png',
  },
  {
    title: 'JavaScript Intermediate',
    platform: 'HackerRank',
    dateEarned: '2024',
    description: 'Strengthened skills in JavaScript with advanced concepts like promises, callbacks, and ES6 features.',
    link: 'https://www.hackerrank.com/certificates/iframe/6ef9b8e5ff2a',
    image: '/assets/certificates/cert1.png',
  },
];

export const skills = [
  {
    title: 'My Skills',
    skillList: [
      {
        icon: <FaDocker className='text-7xl text-blue-500' />,
        title: 'Docker',
      },
      {
        icon: <FaPython className='text-7xl text-emerald-500' />,
        title: 'Python',
      },
      {
        icon: <SiFlask className='text-7xl text-gray-800' />,
        title: 'Flask',
      },
      {
        icon: <SiJupyter className='text-7xl text-orange-500' />,
        title: 'Jupyter Notebook',
      },
      {
        icon: <FaDatabase className='text-7xl text-green-600' />,
        title: 'Database',
      },
      {
        icon: <SiMysql className='text-7xl text-blue-600' />,
        title: 'MySQL',
      },
      {
        icon: <SiPostgresql className='text-7xl text-blue-500' />,
        title: 'PostgreSQL',
      },
      {
        icon: <SiMongodb className='text-7xl text-green-500' />,
        title: 'MongoDB',
      },
      {
        icon: <FaJava className='text-7xl text-red-600' />,
        title: 'Java',
      },
      {
        icon: <FaGitAlt className='text-7xl text-node' />,
        title: 'Git',
      },
      {
        icon: <FaGithub className='text-7xl text-orange-600' />,
        title: 'Git',
      },
      {
        icon: <FaFigma className='text-7xl text-red-600' />,
        title: 'Figma',
      },
      {
        icon: <FaHtml5 className='text-7xl text-red-500' />,
        title: 'Html5',
      },
      {
        icon: <FaCss3 className='text-7xl text-purple-600' />,
        title: 'Css3',
      },
      {
        icon: <FaBootstrap className='text-7xl text-express' />,
        title: 'Bootstrap',
      },
      {
        icon: <FaJsSquare className='text-7xl text-gray-800' />,
        title: 'Js',
      },
      {
        icon: <FaPhp className='text-7xl text-black' />,
        title: 'Php',
      },
      {
        icon: <FaLaravel className='text-7xl text-red-500' />,
        title: 'Laravel',
      },
      {
        icon: <FaLinux className='text-7xl text-node' />,
        title: 'Linux',
      },
    ]
  }
];