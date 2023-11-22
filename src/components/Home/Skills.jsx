function Skills({ lightMode }) {
  return (
    <section id="home-resume" className="skills-exp section-padding sub-bg" data-scroll-index="4">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="sec-lg-head mb-20">
              <div className="position-re">
                <h6 className="dot-titl mb-10">Skills & Experience</h6>
                <h2 className="fz-50">My Experience</h2>
              </div>
            </div>
            <div className="skill-item d-flex justify-content-between md-mb50">
              <div className="item text-center">
                <div className="icon-img-60 m-auto">
                  <img src={`/dark/assets/imgs/logos/Adobe_Illustrator_CC_icon.svg.png`} alt="" />
                </div>
                <span className="mt-15">Illustrator</span>
              </div>
              <div className="item text-center">
                <div className="icon-img-60 m-auto">
                  <img src={`/dark/assets/imgs/logos/Adobe_Photoshop_CC_icon.svg.png`} alt="" />
                </div>
                <span className="mt-15">Photoshop</span>
              </div>
              <div className="item text-center">
                <div className="icon-img-60 m-auto">
                  <img src={`/dark/assets/imgs/logos/Adobe_After_Effects_CC_icon.svg.png`} alt="" />
                </div>
                <span className="mt-15">After Effect</span>
              </div>
              <div className="item text-center">
                <div className="icon-img-60 m-auto">
                  <img src={`/dark/assets/imgs/logos/Adobe_Premiere_Pro_CC_icon.svg.png`} alt="" />
                </div>
                <span className="mt-15">Premier Pro</span>
              </div>
            </div>
            <div className="skill-item d-flex justify-content-between md-mb50 mt-20">
              <div className="item text-center">
                <div className="icon-img-60 m-auto">
                  <img src={`/dark/assets/imgs/logos/Adobe_XD_CC_icon.svg.png`} alt="" />
                </div>
                <span className="mt-15">Adobe XD</span>
              </div>
              <div className="item text-center">
                <div className="icon-img-60 m-auto">
                  <img src={`/dark/assets/imgs/logos/Adobe_Photoshop_Lightroom_CC_logo.svg.png`} alt="" />
                </div>
                <span className="mt-15">Lightroom</span>
              </div>
              <div className="item text-center">
                <div className="icon-img-60 m-auto">
                  <img src={`/dark/assets/imgs/logos/Adobe_Creative_Cloud_rainbow_icon.svg.png`} alt="" />
                </div>
                <span className="mt-15">CreativeSuite</span>
              </div>
              <div className="item text-center">
                <div className="icon-img-60 m-auto">
                  <img src={`/dark/assets/imgs/logos/Adobe_Dimension_Logo.svg.png`} alt="" />
                </div>
                <span className="mt-15">Dimension</span>
              </div>
            </div>
          </div>
          <div className="col-lg-5 offset-lg-1 valign">
            <div className="exp-items full-width">
              <span className="exp mb-30 main-bg">10+ Years Experience</span>
              <div className="item d-flex pb-30 pt-30 mb-30 bord-thin-top-new bord-thin-bottom-new">
                <div className="title">
                  <h6>Tigotek</h6>
                  <p className="fz-12">Senior Graphic Designer</p>
                </div>
                <div className="date ml-auto text-right">
                  <span className="icon">
                    <a target="_blank" href="https://tigotek.net">
                      <i className="fas fa-arrow-right"></i>
                    </a>
                  </span>
                  <p className="fz-12">Sep 2023 - Present</p>
                </div>
              </div>
              <div className="item d-flex pb-30 mb-30 bord-thin-bottom-new">
                <div className="title">
                  <h6>Sazzad.Design</h6>
                  <p className="fz-12">Solopreneur </p>
                </div>
                <div className="date ml-auto text-right">
                  <span className="icon">
                    <a target="_blank" href="http://sazzad.design/">
                      <i className="fas fa-arrow-right"></i>
                    </a>
                  </span>
                  <p className="fz-12">Oct 2015- Present</p>
                </div>
              </div>
              <div className="item d-flex pb-30 bord-thin-bottom-new">
                <div className="title">
                  <h6>Splash</h6>
                  <p className="fz-12">Graphic Designer</p>
                </div>
                <div className="date ml-auto text-right">
                  <span className="icon">
                    <a target="_blank" href="https://tigotek.net">
                      <i className="fas fa-arrow-right"></i>
                    </a>
                  </span>
                  <p className="fz-12">Feb 2021 - Mar 2021</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
