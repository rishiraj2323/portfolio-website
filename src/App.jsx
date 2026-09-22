import './App.css'

function App() {
  return (
    <div className="app">
      <header>
        <h1>Rishi Raj</h1>
        <p>Data Scientist | Data Analyst | Power BI Analyst | Business Analyst</p>
      </header>

      <section id="about">
        <h2>About Me</h2>
        <p>
  I'm a Data Science graduate passionate about building end-to-end machine learning projects — from data pipelines to deployed, production-ready applications. Currently looking for Data Scientist / Data Analyst internship opportunities, with additional hands-on experience in Power BI analytics as well as Business analytics.
</p>
      </section>

      <section id="projects">
        <h2>Projects</h2>
        <div className="project-list">

  <div className="project-card">
    <h3>Credit Risk / Loan Default Prediction</h3>
    <p>Fintech ML project predicting loan defaults using the "Give Me Some Credit" dataset (~150K rows). Tuned XGBoost model (ROC-AUC ~0.86), deployed as a live Flask API.</p>
    <p><strong>Tech:</strong> Python, XGBoost, Flask, Render</p>
    <a href="https://fintech-credit-risk-project.onrender.com" target="_blank">Live Demo</a> | <a href="https://github.com/rishiraj2323/-fintech-credit-risk-project" target="_blank">GitHub</a>
  </div>

  <div className="project-card">
    <h3>E-Commerce Customer Retention & CLV Analytics</h3>
    <p>SQL + Python + Power BI analytics project on the Olist Brazilian E-Commerce dataset — RFM segmentation, revenue trends, and a 2-page interactive dashboard.</p>
    <p><strong>Tech:</strong> PostgreSQL, Python, Power BI</p>
    <a href="#" target="_blank">GitHub</a>
  </div>

  <div className="project-card">
    <h3>Hospital Readmission Prediction</h3>
    <p>Healthcare ML project predicting 30-day hospital readmissions using the UCI Diabetes 130-US Hospitals dataset (~101K rows). Tuned XGBoost model, deployed as a live Flask API.</p>
    <p><strong>Tech:</strong> Python, XGBoost, Flask, Render</p>
    <a href="https://healthcare-readmission-project.onrender.com" target="_blank">Live Demo</a> | <a href="https://github.com/rishiraj2323/healthcare-readmission-project" target="_blank">GitHub</a>
  </div>

  <div className="project-card">
    <h3>Retail Sales Time Series Forecasting</h3>
    <p>Forecasting daily store sales on the Rossmann dataset (~1M rows) — SARIMA baseline vs LightGBM/XGBoost on engineered lag and calendar features, deployed as a live Flask API.</p>
    <p><strong>Tech:</strong> Python, SARIMA, XGBoost, Flask, Render</p>
    <a href="https://timeseries-forecasting-project.onrender.com" target="_blank">Live Demo</a> | <a href="https://github.com/rishiraj2323/timeseries-forecasting-project" target="_blank">GitHub</a>
  </div>

  <div className="project-card">
    <h3>Multi-Modal Transit & Logistics Route Optimization</h3>
    <p>Capacitated Vehicle Routing Problem solved on Indore's real road network (OSMnx) using Google OR-Tools, with Dijkstra/A* comparisons and an interactive Streamlit map.</p>
    <p><strong>Tech:</strong> Python, OR-Tools, NetworkX, Streamlit, Render</p>
    <a href="https://route-optimization-project.onrender.com" target="_blank">Live Demo</a> | <a href="https://github.com/rishiraj2323/route-optimization-project" target="_blank">GitHub</a>
  </div>

</div>
      </section>

      <section id="skills">
        <h2>Skills</h2>
        <div className="skills-list">
  <span>Python</span>
  <span>SQL</span>
  <span>Machine Learning</span>
  <span>XGBoost / LightGBM</span>
  <span>Power BI</span>
  <span>PostgreSQL</span>
  <span>Flask</span>
  <span>Streamlit</span>
  <span>Pandas / NumPy</span>
  <span>Scikit-learn</span>
  <span>Git / GitHub</span>
  <span>Render Deployment</span>
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
