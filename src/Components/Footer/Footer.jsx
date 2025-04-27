import {
  FooterLinks,
  ContactInfo,
  socialLinks,
  policyLinks,
} from "./../../Data/FooterData.jsx";
import "./Footer.css";

const Footer = () => {
  return (
    <footer
      className="mt-200 px-50"
      data-aos="fade-up"
      data-aos-anchor-placement="top-bottom"
    >
      <div className="MR-footer">
      {/* Top section of the footer */}
      <div className="MR-footer-top">
        {/* About section with logo and description */}
        <div className="MR-footer-info">
          <div className="MR-footer-about">
            <img
              className="MR-footer-logo"
              src="/Little-learners/Footer/Logo.svg"
              alt="logo"
            />
            <p className="fs-20">
              We believe in the power of play to foster creativity,
              problem-solving skills, and imagination.
            </p>
          </div>

          {/* Contact information list */}
          <ul className="MR-footer-contact-list">
            {ContactInfo.map((field, index) => (
              <li className="MR-footer-contact-item" key={index}>
                <img src={field.icon} alt={field.alt} />
                <a className="fs-20" href={field.link}>
                  {field.data}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Footer links section */}
        <div className="MR-footer-links-section">
          {FooterLinks.map((field, index) => (
            <div className="MR-footer-links-col" key={index}>
              <h5 className="fs-20-6">{field.MainTitle}</h5>
              <ul>
                {/* Links under each section */}
                {field.links?.map((link, index) => (
                  <li key={index}>
                    <a href={link.link} className="fs-20">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom section of the footer */}
      <div className="MR-footer-bottom">
        <ul className="MR-footer-privacy-list">
          {policyLinks.map((field, index) => (
            <li key={index}>
              <a href={field.link} className="fs-18">
                {field.name}
              </a>
              {policyLinks.length !== index + 1 && <span> | </span>}
            </li>
          ))}
        </ul>

        {/* Social media links */}
        <ul className="MR-footer-social-list">
          {socialLinks.map((field, index) => (
            <li key={index}>
              <a href={field.link} className="">
                <img src={field.icon} alt={field.alt} />
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Copyright notice */}
      <p className="MR-footer-copyright fs-18">
        Copyright © [2023] Little Learners Academy. All rights reserved.
      </p>
      </div>
    </footer>
  );
};

export default Footer;
