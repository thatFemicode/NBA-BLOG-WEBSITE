import React from 'react';
import { useState, useRef, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { SubMenuStyled } from './styled/SubMenu';
import { Link } from 'react-router-dom';
const Submenu = ({ page, location }) => {
  // console.log(page.page);
  const { isSubMenuOpen } = useSelector((state) => state.navbar);
  const container = useRef(null);
  const [columns, setColumns] = useState('col-2');
  // console.log(isSubMenuOpen);
  useEffect(() => {
    const submenu = container.current;
    setColumns('col-2');
    const { center, bottom } = location;
    submenu.style.left = `${center}px`;
    submenu.style.top = `${bottom}px`;

    if (page.links.length === 3) {
      setColumns('col-3');
    }
    if (page.links.length > 3) {
      setColumns('col-4');
    }
  }, [location, page.links]);
  return (
    <SubMenuStyled
      className={`${isSubMenuOpen ? 'submenu show' : 'submenu'}`}
      ref={container}
    >
      <h4>{page.page}</h4>
      <div className={`submenu-center ${columns}`}>
        {page.links.map((link, index) => {
          const { label, icon, url } = link;
          return (
            <Link key={index} to={url}>
              {icon}
              {label}
            </Link>
            // <a key={index} href={url} className="links">
            //   {icon}
            //   {label}
            // </a>
          );
        })}
      </div>
    </SubMenuStyled>
  );
};

export default Submenu;
