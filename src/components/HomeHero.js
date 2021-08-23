import * as React from "react"
import { Container, Row } from "react-bootstrap"
import { StaticImage } from 'gatsby-plugin-image'

import '../styles/home-hero.css';
import Button from "./reusable/button";



const HomeHero = () => (
    <section className="home-hero-container mb-5">
        <div>
            <div className="pt-5 position-relative">
                <Container>
                    <div className="justify-content-between flex-row">
                        <div className="col-sm-11 col-md-10 col-lg-6 col-xl order-lg-2">
                            <div className="position-relative d-flex align-items-center justify-content-center h-100">
                                <div className="position-relative w-100">
                                    <div className="d-flex justify-content-center">
                                        <div className="d-flex justify-content-center align-items-end flex-column">
                                            <div className="position-relative m-2">
                                                <div className="position-relative overflow-hidden">
                                                    <StaticImage 
                                                        src="../images/virgil-homepage.png"
                                                        className="hero-image"
                                                    />
                                                </div>
                                            </div>
                                            <div className="position-relative m-2 mt-lg-4">
                                                <div className="position-relative overflow-hidden">
                                                    <StaticImage 
                                                        src="../images/shmuley-homepage.png"
                                                        className="hero-image"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="d-flex justify-content-start align-items-center flex-column flex-column-last">
                                            <div className="position-relative m-2">
                                                <div className="position-relative overflow-hidden">
                                                    <StaticImage 
                                                        src="../images/oz-homepage.png"
                                                        className="hero-image"
                                                    />
                                                </div>
                                            </div>
                                            <div className="position-relative m-2 mt-lg-4">
                                                <div className="position-relative overflow-hidden">
                                                    <StaticImage 
                                                        src="../images/smith-homepage.png"
                                                        className="hero-image"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5 home-hero-text">
                            <div>
                                <h1 className="home-hero-header">Explore <br /> 
                                <b>The Values</b> <br/> that matter most</h1>
                            </div>
                            <div>
                                <p className="home-hero-description">The Values University (VU) initiative explores the values that shape and create our realities, highlighting the global leaders, change makers and influencers whose adherence to their values promote a more unified global community.</p>
                            </div>
                            <div>
                                <Button label="Browse Media" link="/videos"/>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        </div>
    </section>
)

export default HomeHero