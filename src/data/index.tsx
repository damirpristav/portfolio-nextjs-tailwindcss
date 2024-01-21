import { FaFacebook, FaInstagram, FaPinterest, FaLinkedin, FaYoutube } from 'react-icons/fa';

import { Social, Skill, Project } from "@/types";

export const social: Social[] = [
  { icon: <FaFacebook />, url: 'https://facebook.com', label: 'Facebook' },
  { icon: <FaInstagram />, url: 'https://instagram.com', label: 'Instagram' },
  { icon: <FaPinterest />, url: 'https://pinterest.com', label: 'Pinterest' },
  { icon: <FaLinkedin />, url: 'https://linkedin.com', label: 'Linkedin' },
  { icon: <FaYoutube />, url: 'https://youtube.com', label: 'Youtube' },
];

export const skills: Skill[] = [
  { name: 'HTML', rating: 10 },
  { name: 'CSS', rating: 9 },
  { name: 'Javascript', rating: 7 },
  { name: 'ReactJS', rating: 9 },
  { name: 'NextJS', rating: 7 },
];

export const services: string[] = [
  'Single Page Application Development',
  'Redux Integration',
  'API Integration',
  'Responsive Web Design',
  'Code Review and Optimization',
];

export const projects: Project[] = [
  {
    id: 'project-1',
    title: 'Project 1',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus in ultricies felis, non malesuada purus. Fusce pharetra tortor sem, venenatis pharetra tortor laoreet sed. Phasellus a tellus quis augue aliquam semper. Fusce eleifend condimentum turpis, nec lacinia felis venenatis at. Nam facilisis sollicitudin ipsum pellentesque cursus.',
    date: new Date('2024-01-20'),
    imageUrl: '/images/project-1.jpg',
  },
  {
    id: 'project-2',
    title: 'Project 2',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus in ultricies felis, non malesuada purus. Fusce pharetra tortor sem, venenatis pharetra tortor laoreet sed. Phasellus a tellus quis augue aliquam semper. Fusce eleifend condimentum turpis, nec lacinia felis venenatis at. Nam facilisis sollicitudin ipsum pellentesque cursus.',
    date: new Date('2024-01-20'),
    imageUrl: '/images/project-2.jpg',
  },
  {
    id: 'project-3',
    title: 'Project 3',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus in ultricies felis, non malesuada purus. Fusce pharetra tortor sem, venenatis pharetra tortor laoreet sed. Phasellus a tellus quis augue aliquam semper. Fusce eleifend condimentum turpis, nec lacinia felis venenatis at. Nam facilisis sollicitudin ipsum pellentesque cursus.',
    date: new Date('2024-01-20'),
    imageUrl: '/images/project-3.jpg',
  },
  {
    id: 'project-4',
    title: 'Project 4',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus in ultricies felis, non malesuada purus. Fusce pharetra tortor sem, venenatis pharetra tortor laoreet sed. Phasellus a tellus quis augue aliquam semper. Fusce eleifend condimentum turpis, nec lacinia felis venenatis at. Nam facilisis sollicitudin ipsum pellentesque cursus.',
    date: new Date('2024-01-20'),
    imageUrl: '/images/project-4.jpg',
  },
  {
    id: 'project-5',
    title: 'Project 5',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus in ultricies felis, non malesuada purus. Fusce pharetra tortor sem, venenatis pharetra tortor laoreet sed. Phasellus a tellus quis augue aliquam semper. Fusce eleifend condimentum turpis, nec lacinia felis venenatis at. Nam facilisis sollicitudin ipsum pellentesque cursus.',
    date: new Date('2024-01-20'),
    imageUrl: '/images/project-5.jpg',
  },
  {
    id: 'project-6',
    title: 'Project 6',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus in ultricies felis, non malesuada purus. Fusce pharetra tortor sem, venenatis pharetra tortor laoreet sed. Phasellus a tellus quis augue aliquam semper. Fusce eleifend condimentum turpis, nec lacinia felis venenatis at. Nam facilisis sollicitudin ipsum pellentesque cursus.',
    date: new Date('2024-01-20'),
    imageUrl: '/images/project-6.jpg',
  },
  {
    id: 'project-7',
    title: 'Project 7',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus in ultricies felis, non malesuada purus. Fusce pharetra tortor sem, venenatis pharetra tortor laoreet sed. Phasellus a tellus quis augue aliquam semper. Fusce eleifend condimentum turpis, nec lacinia felis venenatis at. Nam facilisis sollicitudin ipsum pellentesque cursus.',
    date: new Date('2024-01-20'),
    imageUrl: '/images/project-7.jpg',
  },
  {
    id: 'project-8',
    title: 'Project 8',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus in ultricies felis, non malesuada purus. Fusce pharetra tortor sem, venenatis pharetra tortor laoreet sed. Phasellus a tellus quis augue aliquam semper. Fusce eleifend condimentum turpis, nec lacinia felis venenatis at. Nam facilisis sollicitudin ipsum pellentesque cursus.',
    date: new Date('2024-01-20'),
    imageUrl: '/images/project-8.jpg',
  },
  {
    id: 'project-9',
    title: 'Project 9',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus in ultricies felis, non malesuada purus. Fusce pharetra tortor sem, venenatis pharetra tortor laoreet sed. Phasellus a tellus quis augue aliquam semper. Fusce eleifend condimentum turpis, nec lacinia felis venenatis at. Nam facilisis sollicitudin ipsum pellentesque cursus.',
    date: new Date('2024-01-20'),
    imageUrl: '/images/project-1.jpg',
  },
  {
    id: 'project-10',
    title: 'Project 10',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus in ultricies felis, non malesuada purus. Fusce pharetra tortor sem, venenatis pharetra tortor laoreet sed. Phasellus a tellus quis augue aliquam semper. Fusce eleifend condimentum turpis, nec lacinia felis venenatis at. Nam facilisis sollicitudin ipsum pellentesque cursus.',
    date: new Date('2024-01-20'),
    imageUrl: '/images/project-2.jpg',
  },
  {
    id: 'project-11',
    title: 'Project 11',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus in ultricies felis, non malesuada purus. Fusce pharetra tortor sem, venenatis pharetra tortor laoreet sed. Phasellus a tellus quis augue aliquam semper. Fusce eleifend condimentum turpis, nec lacinia felis venenatis at. Nam facilisis sollicitudin ipsum pellentesque cursus.',
    date: new Date('2024-01-20'),
    imageUrl: '/images/project-3.jpg',
  },
  {
    id: 'project-12',
    title: 'Project 12',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus in ultricies felis, non malesuada purus. Fusce pharetra tortor sem, venenatis pharetra tortor laoreet sed. Phasellus a tellus quis augue aliquam semper. Fusce eleifend condimentum turpis, nec lacinia felis venenatis at. Nam facilisis sollicitudin ipsum pellentesque cursus.',
    date: new Date('2024-01-20'),
    imageUrl: '/images/project-4.jpg',
  },
  {
    id: 'project-13',
    title: 'Project 13',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus in ultricies felis, non malesuada purus. Fusce pharetra tortor sem, venenatis pharetra tortor laoreet sed. Phasellus a tellus quis augue aliquam semper. Fusce eleifend condimentum turpis, nec lacinia felis venenatis at. Nam facilisis sollicitudin ipsum pellentesque cursus.',
    date: new Date('2024-01-20'),
    imageUrl: '/images/project-5.jpg',
  },
];
