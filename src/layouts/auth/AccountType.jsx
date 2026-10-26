import React from "react";
import "./AccountType.css";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

import MedicalServicesIcon from "@mui/icons-material/MedicalServices";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

import image from "../../Assets/AccountTypeCover.jpeg";
import vector from "../../Assets/Vector.png";

import Login from "./Login";

const AccountType = () => {
  const [openLogin, setOpenLogin] = React.useState(false);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <Box className="landing-page">
      {/* ================= BACKGROUND ================= */}
      <Box className="landing-overlay" />

      {/* ================= HEADER ================= */}
      <Box className="header">
        {/* Logo */}
        <Box className="logo">
          <img src={vector} alt="Dental Clinic Logo" />
        </Box>

        {/* Navigation */}
        <Box className="navigation">
          <button onClick={() => scrollToSection("home")}>Home</button>

          <button onClick={() => scrollToSection("about")}>About</button>

          <button onClick={() => scrollToSection("faq")}>FAQ</button>

          <button onClick={() => scrollToSection("contact")}>Contact Us</button>

          <Button
            onClick={() => setOpenLogin(true)}
            variant="contained"
            className="login-button"
          >
            Login
          </Button>
        </Box>
      </Box>

      {/* ================= HOME ================= */}
      <Box id="home" className="section home-section">
        {/* Hero Stats */}
        <Box className="hero-stats">
          <Box className="stat-card">
            <strong>99.8%</strong>
            <span>Accuracy</span>
          </Box>

          <Box className="stat-card">
            <strong>+90K</strong>
            <span>Patients</span>
          </Box>
        </Box>

        <Box className="hero-layout">
          {/* Hero Image */}
          <Box className="hero-image-wrapper">
            <img src={image} alt="Dental Clinic" className="hero-image" />
          </Box>

          {/* Hero Content */}
          <Box className="hero-content">
            <span className="hero-label">DENTAL CLINIC MANAGEMENT</span>

            <h1>Your Dental Clinic</h1>

            <p className="hero-main-text">
              Manage your clinic, patients, and appointments with ease.
            </p>

            <p className="hero-description">
              A simple and organized platform designed to help dental clinics
              manage their daily operations and keep everything in one place.
            </p>

            <button className="welcome-button">
              Welcome
              <span className="welcome-arrow"> → </span>
            </button>
          </Box>
        </Box>
      </Box>

      {/* ================= ABOUT ================= */}
      <Box id="about" className="section about-section">
        <Box className="section-content">
          <span className="section-label">OUR SYSTEM</span>

          <h2>Everything Your Clinic Needs</h2>

          <p className="section-description">
            A simple and organized system designed to make dental clinic
            management easier and more efficient.
          </p>

          <Box className="feature-grid">
            {/* Doctor */}
            <Box className="feature-card doctor-card">
              <Box className="feature-icon">
                <MedicalServicesIcon />
              </Box>

              <h3>Doctor</h3>

              <p>
                Manage patients, appointments, and clinical information from one
                organized workspace.
              </p>

              <span className="feature-link">Doctor Dashboard →</span>
            </Box>

            {/* Receptionist */}
            <Box className="feature-card reception-card">
              <Box className="feature-icon">
                <EventAvailableIcon />
              </Box>

              <h3>Receptionist</h3>

              <p>
                Organize appointments and manage patient information quickly and
                efficiently.
              </p>

              <span className="feature-link">Reception Dashboard →</span>
            </Box>

            {/* Administrator */}
            <Box className="feature-card admin-card">
              <Box className="feature-icon">
                <AdminPanelSettingsIcon />
              </Box>

              <h3>Administrator</h3>

              <p>
                Manage the clinic system, users, and important information from
                one place.
              </p>

              <span className="feature-link">Admin Dashboard →</span>
            </Box>
          </Box>
        </Box>
      </Box>

      {/* ================= FAQ ================= */}
      <Box id="faq" className="section faq-section">
        <Box className="section-content">
          <span className="section-label">FAQ</span>

          <h2>Frequently Asked Questions</h2>

          <p className="section-description">
            Everything you need to know about the system.
          </p>

          <Box className="faq-container">
            {/* FAQ 1 */}
            <Box className="faq-item">
              <Box className="faq-icon">?</Box>

              <Box className="faq-text">
                <h3>Who can use the system?</h3>

                <p>
                  The system is designed for doctors, receptionists, and
                  administrators.
                </p>
              </Box>
            </Box>

            {/* FAQ 2 */}
            <Box className="faq-item">
              <Box className="faq-icon">?</Box>

              <Box className="faq-text">
                <h3>What can doctors manage?</h3>

                <p>
                  Doctors can manage patients, appointments, and clinical
                  information through their dedicated workspace.
                </p>
              </Box>
            </Box>

            {/* FAQ 3 */}
            <Box className="faq-item">
              <Box className="faq-icon">?</Box>

              <Box className="faq-text">
                <h3>Can receptionists manage appointments?</h3>

                <p>
                  Yes. Receptionists can organize appointments and manage
                  patient information efficiently.
                </p>
              </Box>
            </Box>

            {/* FAQ 4 */}
            <Box className="faq-item">
              <Box className="faq-icon">?</Box>

              <Box className="faq-text">
                <h3>How do I access the system?</h3>

                <p>
                  Click the Login button and choose the appropriate account type
                  to access your workspace.
                </p>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>

      {/* ================= CONTACT ================= */}
      <Box id="contact" className="section contact-section">
        <Box className="section-content">
          <span className="section-label">GET IN TOUCH</span>

          <h2>Contact Us</h2>

          <p className="section-description">
            Have a question or want to get in touch? Feel free to reach out.
          </p>

          <Box className="contact-grid">
            {/* Email */}
            <a href="mailto:your-email@example.com" className="contact-card">
              <Box className="contact-icon email-icon">
                <EmailOutlinedIcon />
              </Box>

              <Box>
                <h3>Email</h3>

                <p>your-email@example.com</p>
              </Box>
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              className="contact-card"
            >
              <Box className="contact-icon github-icon">
                <GitHubIcon />
              </Box>

              <Box>
                <h3>GitHub</h3>

                <p>View our projects</p>
              </Box>
            </a>

            {/* LinkedIn */}
            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noreferrer"
              className="contact-card"
            >
              <Box className="contact-icon linkedin-icon">
                <LinkedInIcon />
              </Box>

              <Box>
                <h3>LinkedIn</h3>

                <p>Connect with us</p>
              </Box>
            </a>
          </Box>

          {/* ================= FOOTER ================= */}
          <Box className="footer">
            <Box className="footer-main">
              {/* Brand */}
              <Box className="footer-brand">
                <Box className="footer-brand-header">
                  <Box className="footer-logo">
                    <img src={vector} alt="Dental Clinic Logo" />
                  </Box>

                  <Box>
                    <h3>Dental Clinic</h3>

                    <span>Clinic Management System</span>
                  </Box>
                </Box>

                <p>
                  A simple and organized platform designed to help dental
                  clinics manage patients, appointments, and daily operations
                  efficiently.
                </p>
              </Box>

              {/* Quick Links */}
              <Box className="footer-column">
                <h4>Quick Links</h4>

                <button onClick={() => scrollToSection("home")}>Home</button>

                <button onClick={() => scrollToSection("about")}>About</button>

                <button onClick={() => scrollToSection("faq")}>FAQ</button>

                <button onClick={() => scrollToSection("contact")}>
                  Contact Us
                </button>
              </Box>

              {/* System */}
              <Box className="footer-column">
                <h4>System</h4>

                <button onClick={() => setOpenLogin(true)}>Doctor</button>

                <button onClick={() => setOpenLogin(true)}>Receptionist</button>

                <button onClick={() => setOpenLogin(true)}>
                  Administrator
                </button>
              </Box>

              {/* Connect */}
              <Box className="footer-column">
                <h4>Connect</h4>

                <a href="mailto:your-email@example.com">Email</a>

                <a href="https://github.com/" target="_blank" rel="noreferrer">
                  GitHub
                </a>

                <a
                  href="https://linkedin.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn
                </a>
              </Box>
            </Box>

            {/* Footer Bottom */}
            <Box className="footer-bottom">
              <p>© 2024 Dental Clinic. All rights reserved.</p>

              <span>Dental Clinic Management System</span>
            </Box>
          </Box>
        </Box>
      </Box>

      {/* ================= LOGIN MODAL ================= */}
      <Login open={openLogin} onClose={() => setOpenLogin(false)} />
    </Box>
  );
};

export default AccountType;
