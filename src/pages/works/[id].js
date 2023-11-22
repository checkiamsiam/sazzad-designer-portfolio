import AboutOne from "@/components/workDetails/About1";
import ProjectBanner from "@/components/workDetails/Banner";
import PhotoGallery from "@/components/workDetails/PhotoGallery";
import data from "@/data/portfolio.json";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Home() {
  const router = useRouter();
  const [project, setProject] = useState(data?.gallery?.find((project) => project.id === router.query.id));

  useEffect(() => {
    document.body.classList.add("main-bg");
    return () => document.body.classList.remove("main-bg");
  }, []);

  useEffect(() => {
    setProject(data?.find((project) => project.id === router.query.id));
  }, [router.query.id, router.reload]);
  return (
    <>
      <main className="main-bg ">
        <ProjectBanner project={project} />
        <AboutOne project={project} />
        <PhotoGallery project={project} />
      </main>
    </>
  );
}
