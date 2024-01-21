'use server';
import { projects } from '@/data';
import { Project } from '@/types';

const PAGE_SIZE = 8;

export const fetchProjects = async (page: number): Promise<{ data: Project[]; total: number; totalPages: number }> => {
  return new Promise((resolve => {
    const sliceStart = page === 1 ? 0 : (page - 1) * PAGE_SIZE;
    setTimeout(() => {
      resolve({
        data: projects.slice(sliceStart, page * PAGE_SIZE),
        total: projects.length,
        totalPages: Math.ceil(projects.length / PAGE_SIZE),
      });
    }, 500);
  }));
};
