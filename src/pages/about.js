import * as React from "react"
import Hero from "../components/hero"
import { Container, Dropdown, Row } from "react-bootstrap"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { Link } from "gatsby"
import Donate from "../components/donate"

import '../styles/about.css'

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
              <div className="category-select">
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
              <h5 className="mission-explanation">The mission of Tulsa Campaign to Prevent Teen Pregnancy was to equip the community with strategies to reduce teen pregnancy for the purpose of improving the health and economic well-being for all.</h5>
            </div>
            <div>
              <p>Tulsa Campaign was developed as the backbone organization for teen pregnancy prevention work in Tulsa.</p>
              <p>Partnering with organizations working in youth health by providing support, organization, and training for the implementation and expansion of sex education.</p>
            </div>
            <hr></hr>
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
                <h5>Rabbi Shmuley</h5>
                <h6>Executive Director</h6>
              </div>
              <p>Of all of the celestial bodies that capture our attention and fascination as astronomers, none has a greater influence on life on planet Earth than it’s own satellite, the moon. When you think about it, we regard the moon with such powerful significance that unlike the moons of other planets which we give names, we only refer to our one and only orbiting orb as THE moon. It is not a moon. To us, it is the one and only moon. of the axis, that is the polar caps would shift dramatically with each seasonal rotation producing climacteric, changes much more violent and drastic than we are used to.</p>
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
                <h5>Rabbi Shmuley</h5>
                <h6>Executive Director</h6>
              </div>
              <p>Of all of the celestial bodies that capture our attention and fascination as astronomers, none has a greater influence on life on planet Earth than it’s own satellite, the moon. When you think about it, we regard the moon with such powerful significance that unlike the moons of other planets which we give names, we only refer to our one and only orbiting orb as THE moon. It is not a moon. To us, it is the one and only moon. of the axis, that is the polar caps would shift dramatically with each seasonal rotation producing climacteric, changes much more violent and drastic than we are used to.</p>
            </div>
          </div>
        </Row>
      </Container>
      <Donate />
    </Layout>
  )
  
  export default AboutPage