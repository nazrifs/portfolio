import { useEffect, useRef } from "react";
import gsap from "gsap";
import { Link } from "react-router-dom";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Helmet } from "react-helmet-async";
import ogImagePath from "../../assets/img/social-media-graph-thumbnail.jpg";

const NoPage = () => {
  const header = useRef(null);
  const status = useRef(null);
  const currentURL = "https://www.nazrifs.com";

  useEffect(() => {
    const revealAnim = gsap.timeline();
  
    revealAnim.set(header.current, {
      yPercent: 100,
      duration: 0.5,
      opacity: 0,
    });
    revealAnim.to(header.current, 0.7, {
      yPercent: 0,
      opacity: 1,
    });
  }, []);

  return (
    <>

    <Helmet>
      <title>Nazri Fuad | Freelance Web Developer and Web Designer</title>
      <meta name="description" content="Page not found! Go back to homepage."/>
      <link rel="canonical" href={currentURL} />

      <meta property="og:image" content={ogImagePath} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content="Freelance Web Developer and Web Designer" />
      <meta property="og:image:type" content="image/jpg" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Nazri Fuad | Freelance Web Developer and Web Designer" />
      <meta name="twitter:description" content="Page not found! Go back to homepage." />
      <meta name="twitter:image" content={ogImagePath}  />

    </Helmet>

      <section className="section main-section full-height align">
        <div className="container">
          <div className="section-wrap align">
            <div ref={header} className="general-heading-wrapper">
              <div className="general-big-desc mw-900 mw-full-m -mw-full-i text-center">
                <h2>
                  404 ERROR: PAGE NOT FOUND
                </h2>
              </div>
              <div className="general-subtitle mw-1200 mw-full-m -mw-full-i text-center">
                <p>The page you are trying to access does not exist on the server.</p>
              </div>
              <div className="flex-center btn pt-50">
                <div className="default-btn secondary-btn">
                  <Link to="/" className="btn-link">
                    <div className="btn-text" data-replace="Homepage">
                      <span className="inner-btn-text">Homepage</span>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default NoPage;
