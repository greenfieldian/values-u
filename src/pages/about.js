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
      <Seo title="Page two" />
      <Hero title="About Us"/>
      <Container>
        <Row>
          <div className="col-lg-3 col-md-12 p-0 sidebar">
            <div className="page-links">
              <ul className="page-links__list">
                <li className="page_item">
                  <Link>Our Story</Link>
                </li>
                <li className="page_item">
                  <Link>Our Mission</Link>
                </li>
                <li className="page_item">
                  <Link>The Team</Link>
                </li>
                <li className="page_item">
                  <Link>Join Our Team!</Link>
                </li>
                <li className="page_item">
                  <Link>Help Us Grow</Link>
                </li>
              </ul>
              <div className="category-select d-none">
                <Dropdown>
                <Dropdown.Toggle >
                  Custom toggle
                </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item>Our Story</Dropdown.Item>
                    <Dropdown.Item>Our Mission</Dropdown.Item>
                    <Dropdown.Item>The Team</Dropdown.Item>
                    <Dropdown.Item>Join Our Team</Dropdown.Item>
                    <Dropdown.Item>Help Us Grow</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            </div>
          </div>
          <div className="col-lg-8 col-md-12">
            <figure className="intro-video-fig">
              <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/P9ccfu4qmd8?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </figure>
            <blockquote className="mission-blockquote">
              <p>Disseminate universal Jewish values in politics, culture, and media, making the Jewish people a light unto the Nations.</p>
            </blockquote>
            <hr></hr>
            <div>
              <h5 className="mission-explanation">The Values University (VU) initiative explores the values that shape and create our realities from a personal approach, highlighting the global leaders, change makers and influencer’s whose adherence to their specific values promotes social-cohesion, peace-building and a more unified global community.</h5>
            </div>
            <div>
              <p>Spearheaded by “America’s Rabbi” Rabbi Shmuley Boteach, in close cooperation with celebrated philanthropist and Chairman of Carnegie Hall Mr. Robert Smith, the VU initiative was developed  to help spread values  at the global level, highlighting  the individual experiences and approaches of global change makers and influencers, leveraging  personal narratives to help contribute towards a universal consensus on social cohesion, unity and cooperation.  </p>
            </div>
            <hr></hr>
            <div className="team">
            <div><h2>The Team</h2></div>
            <div className="team-item">
              <figure>
                <StaticImage
                  src="../images/robertsmith-main-trans.png"
                  width={300}
                  quality={95}
                  formats={["AUTO", "WEBP", "AVIF"]}
                  alt="A Gatsby astronaut"
                  style={{ marginBottom: `1.45rem` }}
                  className="team-image"
                />
              </figure>
              <div>
                <h5>Rabbi Shmuley</h5>
                <h6>Executive Producer</h6>
              </div>
              <hr></hr>
            </div>
            <div>
            <figure>
                <StaticImage
                  src="../images/robertsmith-main-trans.png"
                  width={300}
                  quality={95}
                  formats={["AUTO", "WEBP", "AVIF"]}
                  alt="A Gatsby astronaut"
                  style={{ marginBottom: `1.45rem` }}
                />
              </figure>
              <div>
                <h5>Robert F. Smith</h5>
                <h6>Executive Producer</h6>
              </div>
            </div>
            </div>
            <hr></hr>
            <div>
              <p>Want to make your impact on a values based approach to social-cohesion, peace-building and a sustainable global community? We are always looking for passionate and hard-working individuals to join our team</p>
              <Button />
            </div>
          </div>
        </Row>
      </Container>
      <Donate />
    </Layout>
  )
  
  export default AboutPage