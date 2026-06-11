import { Project, Certification, Experience, Education, Skill } from '@/types';

export const personalInfo = {
  name: 'Reyone Chaudhary',
  headline: 'Data Enthusiast | AI Developer | Software Engineer',
  email: 'reyonechaudhary@gmail.com',
  phone: '+977 9849183153',
  location: 'Kathmandu, Nepal',
  bio: 'I am a passionate Data & AI enthusiast with a strong foundation in software development. My journey in technology is driven by curiosity and a desire to build practical solutions that make a difference. I specialize in turning data into insights and building intelligent applications that solve real-world problems.',
  social: {
    github: 'https://github.com/reyonecy',
    linkedin: 'https://www.linkedin.com/in/reyone-chaudhary-359038271/',
    instagram: 'https://www.instagram.com/reyone_350/',
    twitter: 'https://x.com/reyonecy',
  },
};

export const skills: Skill[] = [
  // Data
  { name: 'SQL', category: 'Data' },
  { name: 'Power BI', category: 'Data' },
  { name: 'Excel', category: 'Data' },
  { name: 'Data Analysis', category: 'Data' },
  { name: 'Data Visualization', category: 'Data' },
  // AI & ML
  { name: 'Python', category: 'AI & ML' },
  { name: 'NumPy', category: 'AI & ML' },
  { name: 'Pandas', category: 'AI & ML' },
  { name: 'Scikit-Learn', category: 'AI & ML' },
  { name: 'TensorFlow', category: 'AI & ML' },
  { name: 'PyTorch', category: 'AI & ML' },
  { name: 'Computer Vision', category: 'AI & ML' },
  { name: 'YOLO', category: 'AI & ML' },
  // Web Development
  { name: 'Next.js', category: 'Web Development' },
  { name: 'React', category: 'Web Development' },
  { name: 'Tailwind CSS', category: 'Web Development' },
  { name: 'Django', category: 'Web Development' },
  { name: 'Django REST Framework', category: 'Web Development' },
  { name: 'Node.js', category: 'Web Development' },
  { name: 'MongoDB', category: 'Web Development' },
  { name: 'PostgreSQL', category: 'Web Development' },
  // Tools
  { name: 'Git', category: 'Tools' },
  { name: 'GitHub', category: 'Tools' },
  { name: 'Linux', category: 'Tools' },
  { name: 'Docker', category: 'Tools' },
  { name: 'VS Code', category: 'Tools' },
  { name: 'Postman', category: 'Tools' },
];

export const projects: Project[] = [
  {
    id: '1',
    title: 'GharBikri',
    description: 'A real estate platform built to help users find properties in Nepal. Features advanced search, property listings, and user authentication.',
    image: '/projectspics/gharbikri.png',
    category: 'Web Development',
    technologies: ['Next.js', 'React', 'Tailwind CSS', 'MongoDB'],
    github: 'https://github.com/reyonecy',
    demo: 'https://gharbikri.com',
    featured: true,
  },
  {
    id: '2',
    title: 'OrangePass',
    description: 'An intelligent ticket booking system with smart scheduling and payment integration for seamless user experience.',
    image: '/projectspics/orangepass.png',
    category: 'Web Development',
    technologies: ['Django', 'React', 'PostgreSQL'],
    github: 'https://github.com/reyonecy',
    featured: true,
  },
  {
    id: '3',
    title: 'ConnectCircle',
    description: 'A social networking platform designed to connect professionals and foster meaningful collaborations.',
    image: '/projectspics/connectcircle.png',
    category: 'Web Development',
    technologies: ['Next.js', 'Node.js', 'MongoDB'],
    github: 'https://github.com/reyonecy',
    featured: true,
  },
];

export const certifications: Certification[] = [
  {
    id: '1',
    name: 'Machine Learning Specialization',
    issuer: 'Coursera',
    date: '2024',
    category: 'AI & ML',
    verificationLink: '#',
  },
  {
    id: '2',
    name: 'Data Analysis with Python',
    issuer: 'DataCamp',
    date: '2024',
    category: 'Data',
    verificationLink: '#',
  },
  {
    id: '3',
    name: 'AWS Cloud Practitioner',
    issuer: 'Amazon Web Services',
    date: '2023',
    category: 'Cloud',
    verificationLink: '#',
  },
];

export const experiences: Experience[] = [
  {
    id: '1',
    title: 'Open Source Contributor',
    organization: 'Various Projects',
    type: 'work',
    startDate: '2022-07',
    endDate: 'Present',
    description: 'Contributing to open source projects in AI and web development.',
  },
  {
    id: '2',
    title: 'Software Developer',
    organization: 'Personal Projects',
    type: 'work',
    startDate: '2020-05',
    endDate: '2021-01',
    description: 'Built various personal projects exploring different technologies.',
  },
];

export const education: Education[] = [
  {
    degree: 'BSc. Computer Science and Information Technology',
    institution: 'Tribhuvan University',
    duration: '2022 - 2026',
    coursework: ['Data Structures', 'Algorithms', 'Database Systems', 'Machine Learning'],
  },
  {
    degree: 'High School Science with Mathematics',
    institution: 'Gorkha International College',
    duration: '2019 - 2021',
  },
];
