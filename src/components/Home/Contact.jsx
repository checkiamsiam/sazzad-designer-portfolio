import { useEffect, useState } from "react";
import { BiCheck } from "react-icons/bi";

function Contact() {
  const [url, setUrl] = useState("");
  const [show, setShow] = useState(false);
  const handleSubmit = () => {
    sessionStorage.setItem("isContact", "true");
  };
  useEffect(() => {
    setUrl(window?.location?.origin);
  }, []);
  useEffect(() => {
    if (sessionStorage.getItem("isContact")) {
      setShow(true);
    }
  }, []);
  return (
    <section id="home-contact" className="contact-crev section-padding" data-scroll-index="7">
      <div className="container">
        <div className="row">
          <div className="col-lg-5">
            <div className="sec-lg-head md-mb80">
              <h6 className="dot-titl mb-10">Get In Touch</h6>
              <h2 className="fz-50">Let's make your brand brilliant!</h2>
              <p className="fz-15 mt-10">If you would like to work with us or just want to get in touch, I’d love to hear from you!</p>
              <div className="phone fz-30 fw-600 mt-30 underline">
                <a href="#0">+880 1639-744106</a>
              </div>
              <ul className="rest social-text d-flex mt-60">
                <li className="mr-30">
                  <a href="https://www.facebook.com/sazzaddesigns" className="hover-this">
                    <span className="hover-anim">Facebook</span>
                  </a>
                </li>
                <li className="mr-30">
                  <a href="https://www.linkedin.com/in/sazzaddesign/" className="hover-this">
                    <span className="hover-anim">LinkedIn</span>
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/sazzaddesigns/" className="hover-this">
                    <span className="hover-anim">Instagram</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-6 offset-lg-1 valign">
            <div className="full-width">
              <form id="contact-form" onSubmit={handleSubmit} action="https://api.web3forms.com/submit" method="POST">
                <input type="hidden" name="access_key" value="f5c8afcb-25b5-4413-8ebc-3a14180ea892" />
                <input type="hidden" name="redirect" value={`${url}/#home-contact`} />
                <div className="messages"></div>

                <div className="controls row">
                  <div className="col-lg-6">
                    <div className="form-group mb-30">
                      <input id="form_name" type="text" name="name" placeholder="Name" required="required" />
                    </div>
                  </div>

                  <div className="col-lg-6">
                    <div className="form-group mb-30">
                      <input id="form_email" type="email" name="email" placeholder="Email" required="required" />
                    </div>
                  </div>

                  <div className="col-12">
                    <div className="form-group mb-30">
                      <input id="form_subject" type="text" name="subject" placeholder="Subject" />
                    </div>
                  </div>

                  <div className="col-12">
                    <div className="form-group">
                      <textarea id="form_message" name="message" placeholder="Message" rows="4" required="required"></textarea>
                    </div>
                    <div className="mt-30">
                      <button type="submit" className="butn butn-full butn-bord radius-30">
                        <span className="text">Let's Talk</span>
                      </button>
                    </div>
                  </div>
                </div>
              </form>
              {show && (
                <p className="news-success mt-15">
                  <BiCheck className="size-tik" />
                  Thanks you for contacting. I will get back to you soon
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
