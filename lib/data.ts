import { Project, Certification, Experience, Education, Skill } from '@/types';

export const personalInfo = {
  name: 'Reyone Chaudhary',
  headline: 'Data Enthusiast | AI Developer | ML Engineer',
  email: 'reyonechaudhary@gmail.com',
  phone: '+977 9849183153',
  location: 'Kathmandu, Nepal',
  bio: 'I am a Data & AI enthusiast passionate about transforming raw data into actionable insights and building intelligent systems. My journey is driven by curiosity and a desire to leverage machine learning and data analytics to solve real-world problems.',
  social: {
    github: 'https://github.com/reyonecy',
    linkedin: 'https://www.linkedin.com/in/reyone-chaudhary-359038271/',
    instagram: 'https://www.instagram.com/reyone_350/',
    twitter: 'https://x.com/reyonecy',
  },
};

export const skills: Skill[] = [
  // Data Analytics
  { name: 'SQL', category: 'Data' },
  { name: 'Power BI', category: 'Data' },
  { name: 'Excel', category: 'Data' },
  { name: 'Data Analysis', category: 'Data' },
  { name: 'Data Visualization', category: 'Data' },
  { name: 'Statistical Analysis', category: 'Data' },
  { name: 'Tableau', category: 'Data' },
  // AI & ML
  { name: 'Python', category: 'AI & ML' },
  { name: 'NumPy', category: 'AI & ML' },
  { name: 'Pandas', category: 'AI & ML' },
  { name: 'Scikit-Learn', category: 'AI & ML' },
  { name: 'TensorFlow', category: 'AI & ML' },
  { name: 'PyTorch', category: 'AI & ML' },
  { name: 'Computer Vision', category: 'AI & ML' },
  { name: 'YOLO', category: 'AI & ML' },
  { name: 'Natural Language Processing', category: 'AI & ML' },
  { name: 'Deep Learning', category: 'AI & ML' },
  { name: 'OpenCV', category: 'AI & ML' },
  { name: 'Jupyter Notebook', category: 'AI & ML' },
  // Tools
  { name: 'Git', category: 'Tools' },
  { name: 'GitHub', category: 'Tools' },
  { name: 'Linux', category: 'Tools' },
  { name: 'Docker', category: 'Tools' },
  { name: 'VS Code', category: 'Tools' },
  { name: 'Google Colab', category: 'Tools' },
  { name: 'Jupyter', category: 'Tools' },
];

export const projects: Project[] = [
  {
    id: '1',
    title: 'Predictive Analytics Dashboard',
    description: 'A comprehensive data analytics dashboard that processes large datasets and generates predictive insights using machine learning algorithms.',
    image: '/projectspics/gharbikri.png',
    category: 'Data Analytics',
    technologies: ['Python', 'Pandas', 'Scikit-Learn', 'Power BI'],
    github: 'https://github.com/reyonecy',
    featured: true,
  },
  {
    id: '2',
    title: 'Computer Vision Object Detection',
    description: 'Real-time object detection system using YOLO for identifying and classifying objects in images and video streams.',
    image: '/projectspics/orangepass.png',
    category: 'Computer Vision',
    technologies: ['Python', 'YOLO', 'OpenCV', 'TensorFlow'],
    github: 'https://github.com/reyonecy',
    featured: true,
  },
  {
    id: '3',
    title: 'Sentiment Analysis Engine',
    description: 'NLP-based sentiment analysis tool that processes text data to determine emotional tone and opinions.',
    image: '/projectspics/connectcircle.png',
    category: 'AI Applications',
    technologies: ['Python', 'NLTK', 'TensorFlow', 'Pandas'],
    github: 'https://github.com/reyonecy',
    featured: true,
  },
];

export const certifications: Certification[] = [
  {
    id: '1',
    name: 'Machine Learning Specialization',
    issuer: 'Coursera - Stanford',
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
    name: 'Deep Learning Specialization',
    issuer: 'Coursera - DeepLearning.AI',
    date: '2023',
    category: 'AI & ML',
    verificationLink: '#',
  },
  {
    id: '4',
    name: 'TensorFlow Developer Certificate',
    issuer: 'Google',
    date: '2023',
    category: 'AI & ML',
    verificationLink: '#',
  },
];

export const experiences: Experience[] = [
  {
    id: '1',
    title: 'Data Analyst Intern',
    organization: 'Tech Company',
    type: 'work',
    startDate: '2024-01',
    endDate: 'Present',
    description: 'Analyzing large datasets, building predictive models, and creating data visualizations.',
  },
  {
    id: '2',
    title: 'ML Research Contributor',
    organization: 'Open Source Projects',
    type: 'work',
    startDate: '2023-06',
    description: 'Contributing to machine learning libraries and AI research projects.',
  },
];

export const education: Education[] = [
  {
    degree: 'BSc. Computer Science and Information Technology',
    institution: 'Tribhuvan University',
    duration: '2022 - 2026',
    coursework: ['Machine Learning', 'Data Mining', 'Database Systems', 'Statistics', 'Artificial Intelligence'],
  },
  {
    degree: 'High School Science with Mathematics',
    institution: 'Gorkha International College',
    duration: '2019 - 2021',
  },
];
