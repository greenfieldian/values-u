import * as React from "react"
import { Link } from "gatsby"
import { Container, Row } from "react-bootstrap"
import { FaArrowCircleRight } from 'react-icons/fa';
import { StaticImage } from 'gatsby-plugin-image'

import '../styles/home-hero.css';
import Button from "./reusable/button";



const HomeHero = () => (
    <section>
        <div>
            <div className="pt-5 position-relative">
                <Container>
                    <Row className="justify-content-center">
                        <div className="col-sm-11 col-md-10 col-lg-7 col-xl order-lg-2">
                            <div className="position-relative d-flex align-items-center justify-content-center h-100">
                                <div className="position-relative w-100">
                                    <div className="d-flex justify-content-center">
                                        <div className="d-flex justify-content-center align-items-end flex-column">
                                            <div className="position-relative m-2">
                                                <div className="position-relative overflow-hidden">
                                                    <StaticImage 
                                                        src="../images/virgil-woods.png"
                                                    />
                                                </div>
                                            </div>
                                            <div className="position-relative m-2 mt-lg-4">
                                                <div className="position-relative overflow-hidden">
                                                    <StaticImage 
                                                        src="../images/rabbi-shmuley.png"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="d-flex justify-content-start align-items-center flex-column">
                                            <div className="position-relative m-2">
                                                <div className="position-relative overflow-hidden">
                                                    <StaticImage 
                                                        src="../images/mehmet-oz.png"
                                                    />
                                                </div>
                                            </div>
                                            <div className="position-relative m-2 mt-lg-4">
                                                <div className="position-relative overflow-hidden">
                                                    <StaticImage 
                                                        src="../images/robert-smith.png"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <h1>Explore <br /> 
                            <b>The Values</b> <br/> that matter most</h1>
                        </div>
                        <div>
                            <p>The Values University (VU) initiative explores the values that shape and create our realities from a personal approach, highlighting the global leaders, change makers and influencers whose adherence to their specific values promote social-cohesion, peace-building and a more unified global community.</p>
                        </div>
                        <div>
                            <Button label="Browse Media"/>
                        </div>
                    </Row>
                </Container>
            </div>
        </div>
    </section>
)

export default HomeHero