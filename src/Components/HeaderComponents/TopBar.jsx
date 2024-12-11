import React from "react";
import { Tooltip, OverlayTrigger } from "react-bootstrap";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
import { TiSocialInstagram } from "react-icons/ti";
import { GoDeviceMobile } from "react-icons/go";
import { BsQuestionCircle } from "react-icons/bs";
import { ImPinterest } from "react-icons/im";

const TopBar = () => {
  const renderTooltip = (message) => (
    <Tooltip id="button-tooltip">{message}</Tooltip>
  );

  return (
    <div className="w-100" style={{backgroundColor:"black"}} >
      <div className="container p-1">
        <div className="d-flex flex-wrap justify-content-between align-items-center">
          <ul className="d-flex list-unstyled m-0 gap-3">
            <li>
              <OverlayTrigger
                placement="bottom"
                overlay={renderTooltip("Facebook")}
              >
                <Link
                  to="https://www.facebook.com/KAPOORLEHENGASAREE"
                  target="_blank"
                  className="text-decoration-none"
                >
                  <FaFacebookF className="text-white" />
                </Link>
              </OverlayTrigger>
            </li>
            <li>
              <OverlayTrigger
                placement="bottom"
                overlay={renderTooltip("Twitter")}
              >
                <Link
                  to="https://x.com/?lang=en/KAPOORLEHENGASAREE"
                  target="_blank"
                  className="text-decoration-none"
                >
                  <FaTwitter className="text-white" />
                </Link>
              </OverlayTrigger>
            </li>
            <li>
              <OverlayTrigger
                placement="bottom"
                overlay={renderTooltip("Instagram")}
              >
                <Link
                  to="https://www.instagram.com/kapoorlehengasaree/"
                  target="_blank"
                  className="text-decoration-none"
                >
                  <TiSocialInstagram className="text-white" />
                </Link>
              </OverlayTrigger>
            </li>
            <li>
              <OverlayTrigger
                placement="bottom"
                overlay={renderTooltip("Pinterest")}
              >
                <Link
                  to="https://www.pinterest.com//kapoorlehengasaree/"
                  target="_blank"
                  className="text-decoration-none text-wight"
                >
                  <ImPinterest className="text-white" />
                </Link>
              </OverlayTrigger>
            </li>
          </ul>

          <p
            style={{
              fontSize: "13px",
              fontWeight: "500",
              color: "white",
              textTransform: "uppercase",
              margin: 0,
            }}
          >
            &quot;World Wide Shipping&quot;
          </p>

          <ul className="d-flex list-unstyled m-0 gap-3">
            <li>
              <Link
                to="https://play.google.com/store/apps/"
                target="_blank"
                className="d-flex align-items-center text-decoration-none"
              >
                <GoDeviceMobile className="text-white" />
                <span
                  className="d-none d-md-inline-block ms-2"
                  style={{
                    fontSize: "12px",
                    color: "white",
                  }}
                >
                  App Download
                </span>
              </Link>
            </li>
            <li>
              <Link
                to="/contact-us"
                className="d-flex align-items-center text-decoration-none"
              >
                <BsQuestionCircle className="text-white" />
                <span
                  className="d-none d-md-inline-block ms-2 text-wight"
                  style={{
                    fontSize: "12px",
                    color: "white",
                  }}
                >
                  Help
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
