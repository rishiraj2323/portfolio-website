import { useState, useEffect } from 'react'
import './App.css'
import profilePic from './assets/profile.jpeg'
import fintechImg from './assets/fintech-screenshot.png.png'
import ecommerceImg1 from './assets/ecommerce-screenshot1.png.png'
import ecommerceImg2 from './assets/ecommerce-screenshot2.png.png'
import healthcareImg from './assets/healthcare-screenshot.png.png'
import timeseriesImg from './assets/timeseries-screenshot.png.png'
import routeoptImg from './assets/routeopt-screenshot.png.png'
import reviewImg from './assets/dashboard_overview.png'

function App() {
    const [theme, setTheme] = useState('dark')

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])
  return (
    <div className="app">
      <nav className="navbar">
  <span className="nav-logo">Rishi Raj</span>
  <div className="nav-links">
    <a href="#about">About</a>
    <a href="#projects">Projects</a>
    <a href="#contact">Contact</a>
    <button className="theme-toggle" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} aria-label="Toggle theme">
  {theme === 'dark' ? '☀️' : '🌙'}
</button>
  </div>
</nav>
      <header className="hero">
        <img src={profilePic} alt="Rishi Raj" className="profile-pic" />
        <h1>Rishi Raj</h1>
        <p>Data Scientist | Data Analyst | Power BI Analyst | Business Analyst</p>
        <div className="hero-buttons">
          <a href="/Rishi_Raj_Resume.pdf" target="_blank" className="btn btn-primary">
            Download Resume
          </a>
          <a href="#projects" className="btn btn-secondary">
            See My Work
          </a>
        </div>
      </header>

      <section id="about">
        <h2>About Me</h2>
        <p>
          I'm a Data Science graduate passionate about building end-to-end machine learning projects — from data pipelines to deployed, production-ready applications. Currently looking for Data Scientist / Data Analyst internship opportunities, with additional hands-on experience in Power BI analytics and Business Analysis.
        </p>
        <div className="skill-group">
  <h3 className="skill-group-title">Programming & Machine Learning</h3>
  <div className="skills-list">
    <span>Python</span>
    <span>Pandas / NumPy</span>
    <span>Scikit-learn</span>
    <span>Machine Learning</span>
    <span>XGBoost / LightGBM</span>
  </div>
</div>

<div className="skill-group">
  <h3 className="skill-group-title">SQL & Databases</h3>
  <div className="skills-list">
    <span>SQL</span>
    <span>PostgreSQL</span>
    <span>Window Functions</span>
    <span>CTEs / Recursive Queries</span>
    <span>Query Optimization</span>
    <span>Indexing</span>
    <span>Views</span>
    <span>Stored Procedures</span>
    <span>Transactions / ACID</span>
    <span>Normalization</span>
  </div>
</div>

<div className="skill-group">
  <h3 className="skill-group-title">Analytics & Deployment</h3>
  <div className="skills-list">
    <span>Power BI</span>
    <span>Flask</span>
    <span>Streamlit</span>
    <span>Git / GitHub</span>
    <span>Render Deployment</span>
  </div>
</div>
      </section>

      <section id="projects">
        <h2>Projects</h2>
        <div className="project-list">

          <div className="project-card">
            <div className="project-images">
              <img src={fintechImg} alt="Credit Risk project screenshot" className="project-img" />
            </div>
            <h3>Credit Risk / Loan Default Prediction</h3>
            <p>Fintech ML project predicting loan defaults using the "Give Me Some Credit" dataset (~150K rows). Tuned XGBoost model (ROC-AUC ~0.86), deployed as a live Flask API.</p>
            <p><strong>Tech:</strong> Python, XGBoost, Flask, Render</p>
            <a href="https://fintech-credit-risk-project.onrender.com" target="_blank">Live Demo</a> | <a href="https://github.com/rishiraj2323/-fintech-credit-risk-project" target="_blank">GitHub</a>
          </div>

          <div className="project-card">
            <div className="project-images">
              <img src={ecommerceImg1} alt="E-commerce dashboard page 1" className="project-img" />
              <img src={ecommerceImg2} alt="E-commerce dashboard page 2" className="project-img" />
            </div>
            <h3>E-Commerce Customer Retention & CLV Analytics</h3>
            <p>SQL + Python + Power BI analytics project on the Olist Brazilian E-Commerce dataset — RFM segmentation, revenue trends, and a 2-page interactive dashboard.</p>
            <p><strong>Tech:</strong> PostgreSQL, Python, Power BI</p>
            <a href="https://github.com/rishiraj2323/Ecommerce_Retention_CLV_Analytics" target="_blank">GitHub</a>
          </div>

          <div className="project-card">
            <div className="project-images">
              <img src={healthcareImg} alt="Hospital Readmission project screenshot" className="project-img" />
            </div>
            <h3>Hospital Readmission Prediction</h3>
            <p>Healthcare ML project predicting 30-day hospital readmissions using the UCI Diabetes 130-US Hospitals dataset (~101K rows). Tuned XGBoost model, deployed as a live Flask API.</p>
            <p><strong>Tech:</strong> Python, XGBoost, Flask, Render</p>
            <a href="https://healthcare-readmission-project.onrender.com" target="_blank">Live Demo</a> | <a href="https://github.com/rishiraj2323/healthcare-readmission-project" target="_blank">GitHub</a>
          </div>

          <div className="project-card">
            <div className="project-images">
              <img src={timeseriesImg} alt="Sales Forecasting project screenshot" className="project-img" />
            </div>
            <h3>Retail Sales Time Series Forecasting</h3>
            <p>Forecasting daily store sales on the Rossmann dataset (~1M rows) — SARIMA baseline vs LightGBM/XGBoost on engineered lag and calendar features, deployed as a live Flask API.</p>
            <p><strong>Tech:</strong> Python, SARIMA, XGBoost, Flask, Render</p>
            <a href="https://timeseries-forecasting-project.onrender.com" target="_blank">Live Demo</a> | <a href="https://github.com/rishiraj2323/timeseries-forecasting-project" target="_blank">GitHub</a>
          </div>

          <div className="project-card">
            <div className="project-images">
              <img src={routeoptImg} alt="Route Optimization project screenshot" className="project-img" />
            </div>
            <h3>Multi-Modal Transit & Logistics Route Optimization</h3>
            <p>Capacitated Vehicle Routing Problem solved on Indore's real road network (OSMnx) using Google OR-Tools, with Dijkstra/A* comparisons and an interactive Streamlit map.</p>
            <p><strong>Tech:</strong> Python, OR-Tools, NetworkX, Streamlit, Render</p>
            <a href="https://route-optimization-project.onrender.com" target="_blank">Live Demo</a> | <a href="https://github.com/rishiraj2323/route-optimization-project" target="_blank">GitHub</a>
          </div>
          <div className="project-card">
            <div className="project-images">
  <img src={reviewImg} alt="Review Intelligence Dashboard screenshot" className="project-img" />
</div>
  <h3>E-Commerce Review Intelligence Dashboard</h3>
  <p>End-to-end pipeline that scrapes Flipkart smartwatch reviews, runs DistilBERT sentiment analysis, and surfaces cases where a customer's star rating doesn't match the sentiment of their written review, all in an interactive Streamlit dashboard.</p>
  <p><strong>Tech:</strong> Python, Selenium, BeautifulSoup, PostgreSQL, DistilBERT, Streamlit</p>
  <a href="https://review-intelligence-dashboard-7vqjkz4ehecgz9zfcwsiuw.streamlit.app" target="_blank">Live Demo</a> | <a href="https://github.com/rishiraj2323/review-intelligence-dashboard" target="_blank">GitHub</a>
</div>

        </div>
      </section>

      <section id="contact">
        <h2>Contact</h2>
        <div className="contact-list">
          <a href="mailto:rishiraj23784@gmail.com">Email</a>
          <a href="https://www.linkedin.com/in/rishiraj2323/" target="_blank">LinkedIn</a>
          <a href="https://github.com/rishiraj2323" target="_blank">GitHub</a>
          <a href="tel:+919304223783">+91 9304223783</a>
        </div>
      </section>
    </div>
  )
}

export default App