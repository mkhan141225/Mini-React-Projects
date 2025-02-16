import React from 'react'

const Header = () => {
  return (
    <header data-bs-theme="dark">
      <div className="collapse text-bg-dark" id="navbarHeader">
        <div className="container">
          <div className="row">
            <div className="col-sm-8 col-md-7 py-4">
              <h4>About</h4>
              <p className="text-body-secondary">
              I’m passionate about web development and deployment, building scalable infrastructures with Kubernetes, AWS, Terraform, and CI/CD while crafting sleek apps with React. I love mentoring developers and optimizing workflows for efficiency. I thrive in fast-paced, innovative spaces, always focused on user-centered solutions.
              </p>
            </div>
            <div className="col-sm-4 offset-md-1 py-4">
              <h4>Contact</h4>
              <ul className="list-unstyled">
                
                <li>
                  <a
                    href="https://github.com/mkhan141225"
                    target="_blank"
                    className="text-white"
                  >
                    Check out on GitHub
                  </a>
                </li>
                
                <li>
                  <a
                    href="mailto:manal.khan14@outlook.com"
                    className="text-white"
                  >
                    Email me
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/m-khan-65b969260/"
                    target="_blank"
                    className="text-white"
                  >
                    Connect on LinkedIn
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="navbar navbar-dark bg-dark shadow-sm">
        <div className="container">
          <a href="#" className="navbar-brand d-flex align-items-center">
          
            <strong>Home</strong>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarHeader"
            aria-controls="navbarHeader"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header
