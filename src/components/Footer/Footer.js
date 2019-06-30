import "./Footer.css";
import React from "react";
import { Icon } from "antd";

const Footer = props => {
  return (
    <footer className="footer">
      <div className="footer__menu--top">
        <div className="footer__menu__content-wrapper grid">
          <div className="footer__menu__list col-5 col-x-7 col-xs-12">
            <div className="footer__menu__list-item">
              <h3>Renty</h3>
              <ul>
                {["Home", "Privacy", "Services", "Partners", "News"].map(
                  value => (
                    <li key={value}>
                      <a href={value}>{value}</a>
                    </li>
                  )
                )}
              </ul>
            </div>
            <div className="footer__menu__list-item">
              <h3>About</h3>
              <ul>
                {[
                  "Latest News",
                  "Press Releases",
                  "Careers",
                  "Terms of Use",
                ].map(value => (
                  <li key={value}>
                    <a href={value}>{value}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="footer__menu__list-item">
              <h3>Support</h3>
              <ul>
                {["Contact Us", "Find Your Invoice", "FAQ"].map(value => (
                  <li key={value}>
                    <a href={value}>{value}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="col-3 col-x-5 col-xs-12">
            <h3>
              <Icon type="twitter" /> Recent tweets
            </h3>
            <div>
              <a href="1">@bestwebsoft</a> velit, vitae tincidunt orci. Proin
              vitae auctor lectus. <br />
              <a href="1">https://bestwebsoft.com</a>
              <br />
              <em>posted 2 days ago</em>
            </div>
          </div>
          <div className="col-4 col-x-6 col-xs-12">
            <div className="support">
              <img src="images/support.png" alt="support" />
              <div>
                <div className="uppercase">Online support</div>
                <a className="phone" href="tel:+1 (555) 555-28-28">
                  +1 (555) 555 - 28 - 28
                </a>
                <div>
                  <a className="dotted-link" href="1">
                    sales@bestwebsoft.zendesk.com
                  </a>
                </div>
              </div>
            </div>
            <div className="social-plugins" />
          </div>
        </div>
      </div>
      <div className="footer__menu--bottom">
        <div className="footer-logo">
          <img className="site-logo" src="/images/car_logo.png" alt="" />
          <h1 className="site-title">Renty</h1>
        </div>
        <div className="color-primary--lightest">
          Renty Company Inc,120 CA 15th Avenue - Suite 214
        </div>
      </div>
    </footer>
  );
};

export default Footer;
