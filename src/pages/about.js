import * as React from "react"
import Hero from "../components/hero"
import { Container, Dropdown, Row } from "react-bootstrap"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { Link } from "gatsby"
import Donate from "../components/donate"

import '../styles/about.css'
import Button from "../components/reusable/button"

const AboutPage = () => (
    <Layout>
      <Seo title="About Us" />
      <Hero title="About Us"/>
      <Container>
        <div className="about-page-container">
          <div className="sidebar-container">
            <div className="col-lg-3 col-md-12 p-0 sidebar">
              <div className="page-links">
                <ul className="page-links__list">
                  <li className="page_item">
                    <Link to="/about/#our-mission">Our Mission</Link>
                  </li>
                  <li className="page_item">
                    <Link to="/about/#our-story">Our Story</Link>
                  </li>
                  <li className="page_item">
                    <Link to="/about/#our-team">The Team</Link>
                  </li>
                  <li className="page_item">
                    <Link to="/about/#join-team">Join Our Team!</Link>
                  </li>
                  <li className="page_item">
                    <Link to="/donate">Help Us Grow</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="about-main">
            <figure className="intro-video-fig">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/r2HTGtrggzQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </figure>
            <blockquote className="mission-blockquote" id="our-mission">
              <h2 className="mission-blockquote-heading">OUR MISSION</h2>
              <p>Disseminate universal Jewish values in politics, culture, and media, making the Jewish people a light unto the Nations.</p>
            </blockquote>
            <hr></hr>
            <div className="main-mission-container">
              <div className="main-mission-text" id="our-story">
                <h5 className="mission-explanation">The Values University (VU) initiative explores the values that shape and create our realities from a personal approach, highlighting the global leaders, change makers and influencers whose adherence to their specific values promotes social-cohesion, peace-building and a more unified global community.</h5>
              </div>
              <div className="main-mission-text">
                <p>Spearheaded by “America’s Rabbi” Rabbi Shmuley Boteach, in close cooperation with celebrated philanthropist and Chairman of Carnegie Hall Mr. Robert Smith, the VU initiative was developed  to help spread values  at the global level, highlighting  the individual experiences and approaches of global change makers and influencers, leveraging  personal narratives to help contribute towards a universal consensus on social cohesion, unity and cooperation.  </p>
              </div>
            </div>
            <hr></hr>
            <div className="team">
            <div id="our-team"><h2>Our Team</h2></div>
            <div className="team-item">
            <figure className="order-2 team-item-img team-item-child">
                <StaticImage
                  src="../images/robert-smith-about.png"
                  quality={95}
                  formats={["AUTO", "WEBP", "AVIF"]}
                  alt="A Gatsby astronaut"
                  style={{ marginBottom: `1.45rem` }}
                />
              </figure>
              <div className="text-center order-1 team-item-text team-item-child">
                <div className="team-text">
                  <h5>Robert F. Smith</h5>
                  <h6>Executive Producer</h6>
                </div>
              </div>
            </div>
            <hr></hr>
            <div className="team-item">
              <figure className="team-item-img team-item-child">
                <StaticImage
                  src="../images/rabbi-shmuley-about.png"
                  quality={95}
                  formats={["AUTO", "WEBP", "AVIF"]}
                  alt="A Gatsby astronaut"
                  style={{ marginBottom: `1.45rem` }}
                  className="team-image"
                />
              </figure>
              <div className="text-center team-item-text team-item-child">
                <div className="team-text">
                  <h5>Rabbi Shmuley Boteach</h5>
                  <h6>Executive Producer</h6>
                </div>
              </div>
            </div>
            <hr></hr>
            </div>
            <div className="join-team-text mb-5" id="join-team">
              <h2>Join Our Team</h2>
              <p>Want to make your impact on a values based approach to social-cohesion, peace-building and a sustainable global community? We are always looking for passionate and hard-working individuals to join our team-send your CV to <a href='mailto:info@shmuley.com'>info@shmuley.com</a> today!</p>
            </div>
          </div>
        </div>
      </Container>
      <Donate />
    </Layout>
  )
  
  export default AboutPage