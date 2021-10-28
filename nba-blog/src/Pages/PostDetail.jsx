import React from 'react';
import PostDetails from '../Components/Blogs/BlogPost/PostDetails/PostDetails';
import { OuterLayout } from '../Layout/Layout';
import { PostDetailStyled } from './Styled/PostDetailStyled';
import { TweenMax, TimelineMax, Power3, Power4 } from 'gsap';
import { useRef, useEffect } from 'react';
// import { TeamsStyled } from "./Styled/Teams";
const PostDetail = () => {
  let screen = useRef(null);
  let body = useRef(null);
  useEffect(() => {
    const tl = new TimelineMax();
    tl.to(screen, {
      duration: 1.2,
      width: '100%',
      left: '0%',
      ease: Power3.easeInOut,
    });
    tl.to(screen, {
      duration: 1,
      left: '100%',
      ease: Power3.easeInOut,
      delay: 0.3,
    });
    tl.set(screen, { left: '-100%' });
    TweenMax.to(body, 0.3, {
      css: {
        opacity: '1',
        pointerEvents: 'auto',
        ease: Power4.easeInOut,
      },
    }).delay(2);
    return () => {
      TweenMax.to(body, 1, {
        css: {
          opacity: '0',
          pointerEvents: 'none',
        },
      });
    };
  }, []);
  return (
    <>
      <div className="load-container">
        <div className="load-screen" ref={(el) => (screen = el)}></div>
      </div>
      <div data-barba="container" ref={(el) => (body = el)} className="Headd">
        <PostDetailStyled>
          <OuterLayout>
            <PostDetails />
          </OuterLayout>
        </PostDetailStyled>
      </div>
    </>
  );
};

export default PostDetail;
