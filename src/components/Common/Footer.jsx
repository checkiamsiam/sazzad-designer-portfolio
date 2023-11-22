//= Data

import Link from "next/link";

function Footer({ lightMode }) {
  return (
    <footer>
      <div className="sub-footer pt-40 pb-40 bord-thin-top">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="logo">
                <Link href="/">
                  <img src={`/dark/assets/imgs/logo-light.png`} alt="" />
                </Link>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="copyright d-flex">
                <div className="ml-auto">
                  <p className="fz-13">
                    © Copyright 2023. Courtesy of{" "}
                    <span className="underline">
                      {" "}
                      <a href="https://tigotek.net" target="_blank">
                        tigotek.net
                      </a>
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
