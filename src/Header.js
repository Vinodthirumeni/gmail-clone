import React from "react";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import SettingsOutlinedIcon from "@material-ui/icons/SettingsOutlined";
import AppsIcon from "@material-ui/icons/Apps";
import Avatar from "@material-ui/core/Avatar";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <MenuIcon />
        <img src="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_dark_1x.png" />
      </div>
      <div className="header__middle">
        <SearchIcon />
        <input type="text" placeholder="Search mail" />
        <ArrowDropDownIcon />
      </div>
      <div className="header__right">
        <HelpOutlineIcon />
        <SettingsOutlinedIcon />
        <AppsIcon />
        <Avatar alt="Vinod" src="/static/images/avatar/1.jpg" />
      </div>
    </div>
  );
}

export default Header;
