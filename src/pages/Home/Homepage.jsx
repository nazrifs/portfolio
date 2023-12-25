import { useEffect, useRef } from "react";
import gsap from "gsap";
import { Link } from "react-router-dom";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Helmet } from "react-helmet";
import ogImagePath from "../../assets/img/social-media-graph-thumbnail.jpg";

gsap.registerPlugin(ScrollTrigger);

const Homepage = () => {
  const header = useRef(null);
  const status = useRef(null);
  const currentURL = 'https://www.nazrifs.com/';
  const encodedURL = encodeURIComponent(currentURL);

  useEffect(() => {
    const revealAnim = gsap.timeline();

    revealAnim.set(header.current, {
      yPercent: 100,
      duration: .5,
      opacity: 0,
    });
    revealAnim.to(header.current, 1.5, {
      yPercent: 0,
      opacity: 1,
    });

  });
  return (
    <>
    <Helmet>
      <title>Nazri Fuad | Freelance Web Developer and Web Designer</title>
      <meta name="description" content="A creative frontend developer and freelance web designer based in Johor Bahru. Crafted by Nazri Fuad."/>
      <link rel="canonical" href={encodedURL} />

      <meta property="og:type" content="website" />
      <meta property="og:title" content="Nazri Fuad | Freelance Web Developer and Web Designer" />
      <meta property="og:description" content="A creative frontend developer and freelance web designer based in Johor Bahru. Crafted by Nazri Fuad." />
      <meta property="og:url" content="https://www.nazrifs.com/" />
      <meta property="og:site_name" content="Nazri Fuad" />
      <meta property="og:image" content={ogImagePath} />
      <meta property="og:image:alt" content="Freelance Web Developer and Web Designer" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Nazri Fuad | Freelance Web Developer and Web Designer" />
      <meta name="twitter:description" content="A creative frontend developer and freelance web designer based in Johor Bahru. Crafted by Nazri Fuad." />
      <meta name="twitter:image" content={ogImagePath}  />
    </Helmet>

      <section className="section main-section full-height align">
        <div className="container">
          <div className="section-wrap align">
            <div ref={header} className="general-heading-wrapper">
            <div className="general-subtitle">
              <p>Frontend Developer & UI Designer</p>
              </div>
              <div className="general-big-desc">
                <h2>
                  Get ready for a fresh, sleek, and immersive experience that
                  truly reflects my passion and skills. Stay tuned!
                </h2>
              </div>
              <div className="general-subtitle">
                <p className="small">Based in Johor Bahru, Malaysia</p>
              </div>
            </div>
          </div>

          {/* status bottom */}
          <div className="status-bottom-wrapper">
              <div className="marquee-box marquee-status">
                <div className="marquee-container">
                  <div className="marquee-wrapper">
                    <div className="marquee-inner-wrap">
                      <div className="marquee-item">
                        <h4>SITE REVAMP IN PROGRESS</h4>
                        <span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="5"
                            height="5"
                            viewBox="0 0 5 5"
                          >
                            <circle
                              id="Circle Black"
                              data-name="Circle Black"
                              cx="2.5"
                              cy="2.5"
                              r="2.5"
                              fill="#ebebe8"
                            />
                          </svg>
                        </span>
                      </div>
                      <div className="marquee-item">
                        <h4>SITE REVAMP IN PROGRESS</h4>
                        <span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="5"
                            height="5"
                            viewBox="0 0 5 5"
                          >
                            <circle
                              id="Circle Black"
                              data-name="Circle Black"
                              cx="2.5"
                              cy="2.5"
                              r="2.5"
                              fill="#ebebe8"
                            />
                          </svg>
                        </span>
                      </div>
                      <div className="marquee-item">
                        <h4>SITE REVAMP IN PROGRESS</h4>
                        <span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="5"
                            height="5"
                            viewBox="0 0 5 5"
                          >
                            <circle
                              id="Circle Black"
                              data-name="Circle Black"
                              cx="2.5"
                              cy="2.5"
                              r="2.5"
                              fill="#ebebe8"
                            />
                          </svg>
                        </span>
                      </div>
                    </div>
                    <div className="marquee-inner-wrap" aria-hidden="true">
                      <div className="marquee-item">
                        <h4>SITE REVAMP IN PROGRESS</h4>
                        <span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="5"
                            height="5"
                            viewBox="0 0 5 5"
                          >
                            <circle
                              id="Circle Black"
                              data-name="Circle Black"
                              cx="2.5"
                              cy="2.5"
                              r="2.5"
                              fill="#ebebe8"
                            />
                          </svg>
                        </span>
                      </div>
                      <div className="marquee-item">
                        <h4>SITE REVAMP IN PROGRESS</h4>
                        <span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="5"
                            height="5"
                            viewBox="0 0 5 5"
                          >
                            <circle
                              id="Circle Black"
                              data-name="Circle Black"
                              cx="2.5"
                              cy="2.5"
                              r="2.5"
                              fill="#ebebe8"
                            />
                          </svg>
                        </span>
                      </div>
                      <div className="marquee-item">
                        <h4>SITE REVAMP IN PROGRESS</h4>
                        <span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="5"
                            height="5"
                            viewBox="0 0 5 5"
                          >
                            <circle
                              id="Circle Black"
                              data-name="Circle Black"
                              cx="2.5"
                              cy="2.5"
                              r="2.5"
                              fill="#ebebe8"
                            />
                          </svg>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Homepage;
