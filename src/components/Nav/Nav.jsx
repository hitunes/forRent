import "./Nav.css";
import React from "react";
import { Select, Icon } from "antd";
import { Button } from "../Button/Button";

const { Option } = Select;

const Nav = () => {
  return (
    <nav className="nav">
      <div className="nav__content grid">
        <a href="1" className="nav__content__logo col-3 col-x-11">
          <img className="site-logo" src="/images/car_logo.png" alt="" />
          <h1 className="site-title"> Renty </h1>
        </a>

        <div className="nav__content__nav-links col-5">
          <ul>
            {[
              { link: "Help", current: true },
              { link: "Terms & Condtions", current: false },
              { link: "About", current: false },
              { link: "Contact us", current: false },
            ].map(value => (
              <li
                key={value.link}
                className={`${value.current ? "active" : ""} nav-item`}
              >
                <a href={value.link}>{value.link}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="col-4 nav__content__menu">
          <div className="menu">
            <div className="language">
              <Select defaultValue="french">
                {[
                  {
                    language: "french",
                    img:
                      "https://cdn1.iconfinder.com/data/icons/ensign-11/512/92_Ensign_Flag_Nation_france-512.png",
                  },
                  {
                    language: "english",
                    img:
                      "https://cdn2.iconfinder.com/data/icons/flags_gosquared/64/England.png",
                  },
                ].map((value, index) => (
                  <Option key={index} value={value.language}>
                    <img
                      src={value.img}
                      alt="france-flag"
                      width="15"
                      style={{ marginRight: 4 }}
                    />
                    <span style={{ textTransform: "capitalize" }}>
                      {value.language}
                    </span>
                  </Option>
                ))}
              </Select>
            </div>
            <div className="country">
              <Select defaultValue="choose">
                <Option value="choose">
                  <Icon type="environment" /> Choose Country
                </Option>
                <Option value="nigeria">Nigeria</Option>
              </Select>
            </div>
          </div>
          <div className="sign__area">
            {["Register", "Sign-in"].map(value => (
              <a key={value} href={value}>
                <Button>{value}</Button>
              </a>
            ))}
          </div>
        </div>
        <div className="hamburger-menu-wrapper col-x-1">
          <div className="hamburger-menu">
            <span />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
