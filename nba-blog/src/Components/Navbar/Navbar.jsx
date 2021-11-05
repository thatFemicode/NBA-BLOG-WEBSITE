import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import {
  openNavbar,
  closeNavbar,
  openSubMenu,
  closeSubMenu,
} from '../../redux/actions/navbar';
import sublinks from '../../data';
import Submenu from './Submenu';
import PrimaryButton from '../Button/PrimaryButton';
import { NavbarStyled } from './styled/Navbar';
import nba from '../../img/logo/nbalogo.svg';
import { FaBars } from 'react-icons/fa';
import SideBar from './SideBar';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const dispatch = useDispatch();
  const { isOpen } = useSelector((state) => state.navbar);
  // console.log(isOpen);
  const [location, setLocation] = useState({});
  const [page, setPage] = useState({ page: '', links: [] });
  const openLinkMenu = (text, coor) => {
    const page = sublinks.find((link) => link.page === text);
    // console.log(page);
    setPage(page);
    setLocation(coor);
    dispatch(openSubMenu());
  };
  const openNav = () => {
    dispatch(openNavbar());
    document.body.classList.add('no-scroll');
  };
  const closeNav = () => {
    dispatch(closeNavbar());
    document.body.classList.remove('no-scroll');
  };
  const displayMenu = (e) => {
    const page = e.target.textContent;
    const tempBtn = e.target.getBoundingClientRect();
    const center = (tempBtn.left + tempBtn.right) / 2;
    const bottom = tempBtn.bottom - 3;
    // console.log(bottom);
    // console.log(page);
    // console.log(tempBtn);
    openLinkMenu(page, { center, bottom });
  };
  const handleSubmenu = (e) => {
    if (!e.target.classList.contains('link-btn' || 'links')) {
      dispatch(closeSubMenu());
    }
  };
  return (
    <NavbarStyled>
      <div className="nav-header">
        <Link to="/">
          <img src={nba} alt="nba" className="nav-logo" />
        </Link>
        <button onClick={openNav} className="btn toggle-btn">
          <FaBars />
        </button>
      </div>
      <ul className="nav-links" onMouseOver={handleSubmenu}>
        <li>
          <Link className="link-btn" to="/" onMouseOver={displayMenu}>
            home
          </Link>
        </li>
        <li>
          <Link className="link-btn" to="/features" onMouseOver={displayMenu}>
            features
          </Link>
        </li>
        <li>
          <Link className="link-btn" to="/gallery" onMouseOver={displayMenu}>
            gallery
          </Link>
        </li>
        <Link to="/auth">
          <PrimaryButton name={'Sign up'} />
        </Link>
      </ul>

      {/* <button onMouseOver={displayMenu}>Me</button>
      <button onClick={closeNav}>close</button> */}
      {/* <Submenu location={location} page={page} /> */}
      <SideBar closeNav={closeNav} />
      <Submenu page={page} location={location} />
    </NavbarStyled>
  );
};

export default Navbar;
