import React from "react";
import "../styles/Navbar.scss";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <div className="nav-container active">
      <div className="nav-content">
        <a
          href="#pagetop"
          className="name-button"
          onClick={(_) => navigate("/#pagetop")}
        >
          felicity yick
        </a>
        <nav>
          <a
            href="#demoreel"
            class="nav-label"
            onClick={(_) => navigate("/#demoreel")}
          >
            demo reel.
          </a>
          <a
            href="#projectstop"
            class="nav-label"
            onClick={(_) => navigate("/projects")}
          >
            projects.
          </a>
          <a
            href="#about"
            class="nav-label"
            onClick={(_) => navigate("/#about")}
          >
            about.
          </a>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;

/**
 *
 *
 * <div class="nav-container">
        <header>
            <a href="index.html" class="logo">Felicity Yick</a>
            <nav>
                <ul>
                    <li><a href="#"></a>Demo Reel</li>
                    <li><a href="#"></a>Projects</li>
                    <li><a href="#"></a>About</li>
                </ul>
            </nav>
        </header>
    </div>
 */
