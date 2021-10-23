import React from "react";
import { BlogNavStyled } from "./BlogNavStyled";
import { Link } from "react-router-dom";
import logo from "./logo.svg";
import PrimaryButton from "../../Button/PrimaryButton";

const BlogNav = () => {
  return (
    <BlogNavStyled>
      <Link to="/">
        <img src={logo} alt="" className="logo" />
      </Link>
      <div className="items">
        <div className="items-image">O</div>
        <h3>Ogunleye Oluwafemi</h3>
        <Link to="/auth">
          <PrimaryButton name={"Logout"} />
        </Link>
      </div>
    </BlogNavStyled>
  );
};

export default BlogNav;
