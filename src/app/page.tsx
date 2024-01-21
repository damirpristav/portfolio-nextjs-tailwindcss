import { MainLayout } from '@/layouts';
import { Header, Intro, About, SkillsAndServices, Projects, Footer } from '@/components';

export default function Home() {
  return (
    <MainLayout>
      <Header />
      <div className="w-full max-w-[1000px] mx-auto px-4 mb-6">
        <Intro />
        <About />
        <SkillsAndServices />
      </div>
      <Projects />
      <Footer />
    </MainLayout>
  );
}
