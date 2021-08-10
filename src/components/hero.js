import * as React from "react"
import { Link } from "gatsby"
import { Container } from "react-bootstrap"
import { FaArrowCircleRight } from 'react-icons/fa';

import '../styles/hero.css'
import Button from "./reusable/button";

const Hero = () => (
    <section>
        <Container>
            <div className="hero_wrapper">
                <div></div>
                <div>
                    <h1>About ValuesU</h1>
                    <div>
                        <p>The Values University (VU) initiative explores the values that shape and create our realities from a personal approach, highlighting the global leaders, change makers and influencers whose adherence to their specific values promote social-cohesion, peace-building and a more unified global community.</p>
                    </div>
                    <div>
                        <Button label="Help us grow"/>
                    </div>
                </div>
            </div>
        </Container>
    </section>
)

export default Hero