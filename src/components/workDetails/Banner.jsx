import { useEffect } from "react";
//= Scripts
import parallaxie from "@/utils/parallaxie";

function ProjectBanner({ project }) {
  useEffect(() => {
    parallaxie(".proj-header2.parallaxie", 0.3, 0);
  }, [project]);

  return (
    <header className="proj-header2 bg-img valign parallaxie" data-background={project?.cover} data-overlay-dark="5">
      <div className="container mt-80">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="caption text-center">
              <h1>{project?.title}</h1>
              <h6 className="sub-title">
                {project?.category} - {project?.date}
              </h6>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default ProjectBanner;
