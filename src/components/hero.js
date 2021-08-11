import * as React from "react"
import { Link } from "gatsby"
import { Container } from "react-bootstrap"
import { FaArrowCircleRight } from 'react-icons/fa';

import '../styles/hero.css'
import Button from "./reusable/button";

const Hero = (props) => (
    <section className="hero-section">
        <Container>
            <div className="hero_wrapper">
                <div></div>
                <div>
                    <h1>{props.title}</h1>
                    <div>
                        <p>{props.description}</p>
                    </div>
                    {/*<div>
                        <Button label="Help us grow"/>
                    </div>*/}
                </div>
            </div>
        </Container>
    </section>
)

export default Hero