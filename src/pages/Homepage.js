import React from "react";
import Navbar from "../components/Navbar";
import "../styles/Homepage.scss";
// Demo reel hidden until refreshed reel exists.
// import Demoreel from "./Demoreel";
import About from "./About";
import PageEnd from "./PageEnd";
import WorkGrid from "../components/WorkGrid";
import ProfileImage from "./../images/profile-image.jpg";
import Resume from "../pdfs/Felicity - Design Engineer Resume.pdf";

// ANIMATIONS
import { Fade, Slide } from "react-awesome-reveal";

export default function Homepage() {
  return (
    <div className="Homepage">
      <Navbar />
      <div className="hero" id="pagetop">
        <div className="content">
          <div className="homepage-left">
            <Fade direction={"up"} cascade={true}>
              <h2>Hello! It's me</h2>
              <div className="my-name">
                <h1>Felicity</h1>
                <h1 id="fullstop">₊˚⊹♡</h1>
              </div>

              <div className="mini-bio">
                <Slide>
                  <p className="bio-tagline">
                    Pipeline Technical Artist and AI Native Developer
                  </p>
                  <ul className="bio-list">
                    <li>
                      <span className="bio-emoji" role="img" aria-label="sparkles">✨</span>
                      Creation Pipelines at{" "}
                      <a
                        href="https://about.meta.com/realitylabs/"
                        className="bio-link"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Meta Reality Labs
                      </a>{" "}
                      (Contract)
                    </li>
                    <li>
                      <span className="bio-emoji" role="img" aria-label="books">📚</span>
                      Computer Graphics at <strong>UPenn</strong>
                    </li>
                    <li>
                      <span className="bio-emoji" role="img" aria-label="rewind">⏮</span>
                      Previously: <strong>TikTok</strong>
                    </li>
                  </ul>
                  <br></br>
                  <br></br>
                  <p>
                    <a
                      href={Resume}
                      class="resume-button"
                      target="_blank"
                      rel="noreferrer"
                    >
                      {" "}
                      resume.{" "}
                    </a>
                  </p>
                </Slide>
              </div>
            </Fade>
          </div>
          <div className="homepage-right">
            <img src={ProfileImage} alt="Profile" className="profile-image" />
          </div>
        </div>
        <div className="arrow-anim"></div>
      </div>
      {/* Demo reel hidden until refreshed reel exists.
      <div id="demoreel">
        <Demoreel />
      </div>
      */}
      <div id="work"></div>
      <WorkGrid />

      <div id="about">
        <About />
      </div>
      <PageEnd />
    </div>
  );
}
