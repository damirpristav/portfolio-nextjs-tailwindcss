"use client";
import Image from "next/image";
import { useState } from "react";

import { Project } from "@/types";
import { Button, Modal } from "@/components/UI";
import { fetchProjects } from "../actions";

export const ProjectsGrid = ({ projects, totalPages }: Props) => {
  const [data, setData] = useState<Project[]>(projects);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const onLoadMoreProjects = async () => {
    setIsLoading(true);
    try {
      const response = await fetchProjects(currentPage + 1);
      setData((prevData) => [...prevData, ...response.data]);
      setCurrentPage((prev) => prev + 1);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 px-4">
        {data.map((project) => (
          <button key={project.id} onClick={() => setSelectedProject(project)}>
            <Image
              src={project.imageUrl}
              alt={project.title}
              width={400}
              height={600}
              className="block w-full h-auto"
            />
          </button>
        ))}
      </div>
      {currentPage < totalPages && (
        <div className="flex items-center justify-center mt-12">
          <Button
            label={isLoading ? "Loading..." : "Load more"}
            disabled={isLoading}
            onClick={onLoadMoreProjects}
          />
        </div>
      )}
      {selectedProject && (
        <Modal onClose={() => setSelectedProject(null)}>
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="aspect-[400/400] relative">
              <Image
                src={selectedProject.imageUrl}
                alt={selectedProject.title}
                className="object-cover"
                fill
                sizes="100%"
              />
            </div>
            <div className="flex flex-col gap-4">
              <p className="font-redressed text-primary text-4xl">
                {selectedProject.title}
              </p>
              <div className="border-y border-primary py-1 text-sm">
                <p>
                  <span className="text-primary font-redressed text-lg">
                    Date:{' '}
                  </span>
                  {selectedProject.date.toDateString()}
                </p>
              </div>
              <div>
                <p className="text-primary font-redressed text-2xl mb-1">
                  Project description:
                </p>
                <p className="text-sm">{selectedProject.description}</p>
              </div>
            </div>
          </div>
        </Modal>
      )}
    </>
  );
};

interface Props {
  projects: Project[];
  totalPages: number;
}
