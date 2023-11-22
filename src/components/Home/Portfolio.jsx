import Link from "next/link";
//= Data
import data from "@/data/portfolio.json";

function Portfolio() {
  return (
    <section id="home-portfolio" className="portfolio clasic section-padding" data-scroll-index="3">
      <div className="container">
        <div className="sec-lg-head mb-50">
          <div className="row">
            <div className="col-lg-7">
              <div className="position-re">
                <h6 className="dot-titl mb-10">Portfolio</h6>
                <h2 className="fz-50">Selected Works</h2>
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
            <div className={`col-lg-${index > 1 ? "4" : "6"}`} key={item.id}>
              <div className="item mt-30">
                <div className="img">
                  <Link href={`/works/${item.id}`}>
                  <img src={item.thumb} alt="" className="radius-10" />
                  </Link>
                  <Link href={`/works/${item.id}`} className="tag">
                    <span>{item.category}</span>
                  </Link>
                </div>
                <div className="cont mt-30 d-flex">
                  <div>
                    <h6 className="line-height-1">
                      <Link href={`/works/${item.id}`}>{item.title}</Link>
                    </h6>
                  </div>
                  <div className="ml-auto">
                    <p className="fz-14">© {item.date}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
