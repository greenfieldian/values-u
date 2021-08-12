import * as React from "react"
import { Link } from "gatsby"
import { Container } from "react-bootstrap"
import { FaArrowCircleRight } from 'react-icons/fa';

import '../styles/archive-hero.css'
import Button from "./reusable/button";

const ArchiveHero = (props) => (
    <section className="archive-section">
        <Container>
            <div className="hero_wrapper">
                <div></div>
                <div>
                    <h1>{props.title}</h1>
                    <div>
                        <p>{props.desc}</p>
                    </div>
                </div>
            </div>
        </Container>
    </section>
)

export default ArchiveHero