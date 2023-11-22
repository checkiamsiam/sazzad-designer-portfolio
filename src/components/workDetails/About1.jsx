import { useEffect } from "react";
//= Scripts
import parallaxie from "@/utils/parallaxie";

function AboutOne({ project }) {
  useEffect(() => {
    parallaxie(".unique-paralaxie-s1", 0.4);
  }, [project]);
  return (
    <>
      <section className="section-padding">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="cont">
                <p>{project?.descriptionOne}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="back-image bg-img parallaxie unique-paralaxie-s1 mt-100" data-background={project?.secondaryCover}></div>
        <div className="container mt-100">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="cont">
                <p>{project?.descriptionTwo}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutOne;
