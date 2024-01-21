import { SectionTitle } from '@/components/UI';
import { fetchProjects } from './actions';
import { ProjectsGrid } from './components';

export const Projects = async () => {
  const { data, totalPages } = await fetchProjects(1);
  return (
    <div className="mb-9">
      <SectionTitle title="My Projects" />
      <div className="max-w-[1000px] mx-auto py-3 px-4">
        <ProjectsGrid projects={data} totalPages={totalPages} />
      </div>
    </div>
  );
};
