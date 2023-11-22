import Link from "next/link";
//= Components
//= Data
import data from "@/data/service.json";
import StatementSplitter from "../Common/StatementSplitter";

function Services({ lightMode }) {
  return (
    <section id="home-service" className="serv-box section-padding" data-scroll-index="1">
      <div className="container">
        <div className="sec-lg-head mb-80">
          <div className="row">
            <div className="col-lg-7">
              <div className="position-re">
                <h6 className="dot-titl mb-10">Featured Services</h6>
                <h2 className="fz-50">Services</h2>
              </div>
            </div>
            <div className="col-lg-5 d-flex align-items-center">
              <div className="full-width d-flex justify-content-end justify-end">
               
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          {data.map((item, index) => (
            <div className="col-lg-6" key={item.id}>
              <div className={`serv-item d-flex ${index !== data.length - 1 ? "mb-30" : ""} radius-10`}>
                
                <div className="">
                  <h5 className="mb-15">
                    <StatementSplitter statement={item.title} />
                  </h5>
                  <p>{item.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
