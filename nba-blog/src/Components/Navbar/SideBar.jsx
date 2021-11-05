import React from 'react';
import { FaTimes } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import subLinks from '../../data';
import { SidebarStyled } from './styled/Sidebar';
import { Link } from 'react-router-dom';
// import Rodman from "../../img/Rodman.gif";
// import Steph from "../../img/Steph.jpg";
// import Kobe from "../../img/Kobe.webp";
// import nba from "../../img/logo/nbalogo.svg";
import ball from '../../img/basket.svg';

const SideBar = ({ closeNav }) => {
  // console.log(subLinks);
  const { isOpen } = useSelector((state) => state.navbar);
  // console.log(isOpen);
  return (
    <SidebarStyled
      className={`${isOpen ? 'sidebar-wrapper show' : 'sidebar-wrapper'}`}
    >
      <div className="sidebar">
        <button className="close-btn" onClick={closeNav}>
          <FaTimes />
        </button>
        <div className="sidebar-links">
          {subLinks.map((item, index) => {
            const { links, page } = item;
            // console.log(links);

            return (
              <Link
                to={page}
                key={index}

                // to={`${links.map((link, index) => {
                //   const { url } = link;
                //   return url;
                // })}`}
              >
                <article className="sidebar-article">
                  <h4 className="sidebar-h4">{page}</h4>
                  <div className="sidebar-sublinks">
                    {links.map((link, index) => {
                      const { url, icon, label } = link;
                      return (
                        <Link to={url} key={index} className="sidebar-link">
                          {icon}
                          {label}
                        </Link>
                      );
                    })}
                  </div>
                </article>
              </Link>
            );
          })}
        </div>
        <img src={ball} alt="" className="sidebar-image" />
      </div>
    </SidebarStyled>
  );
};

export default SideBar;
