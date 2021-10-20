import React from "react";
import { InnerLayout, OuterLayout } from "../Layout/Layout";
import { GalleryStyled } from "./Styled/Gallery";
import Navbar from "../Components/Navbar/Navbar";
import { TweenMax, TimelineMax, Power3, Power4 } from "gsap";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import MainGallery from "../Components/Gallery/MainGallery";
import Footer from "../Components/MainFooter/Footer";
// import FooterMain from "../Components/Footer/FooterMain";
const Gallery = () => {
  let screen = useRef(null);
  let body = useRef(null);
  var tl = useRef();
  useEffect(() => {
    var tl = new TimelineMax();
    // tl.current = gsap.timeline();
    tl.to(screen, {
      duration: 1.2,
      height: "100%",
      ease: Power3.easeInOut,
    });
    tl.to(screen, {
      duration: 1,
      top: "100%",
      ease: Power3.easeInOut,
      delay: 0.3,
    });
    tl.set(screen, { left: "-100%" });
    TweenMax.to(body, 0.3, {
      css: {
        opacity: "1",
        pointerEvents: "auto",
        ease: Power4.easeInOut,
      },
    }).delay(2);
    return () => {
      TweenMax.to(body, 1, {
        css: {
          opacity: "0",
          pointerEvents: "none",
        },
      });
    };
  }, []);
  return (
    <>
      <div className="load-container">
        <div className="load-screen1" ref={(el) => (screen = el)}></div>
      </div>
      <GalleryStyled>
        <OuterLayout>
          <div data-barba="container">
            <div ref={(el) => (body = el)} className="Headd">
              <Navbar />
              <MainGallery />
            </div>
          </div>
        </OuterLayout>
        <Footer />
      </GalleryStyled>
    </>
  );
};

export default Gallery;
