import * as React from "react"
import { Container } from "react-bootstrap"

import '../styles/archive-hero.css'

const ArchiveHero = (props) => (
    <section className="archive-section">
        <Container>
            <div className="hero_wrapper">
                <div className="text-center">
                   <img src={props.Imgsrc} className="archive-hero-img"/>
                </div>
                <div>
                    <h1>{props.title}</h1>
                    <div>
                        <p>{props.description}</p>
                    </div>
                </div>
            </div>
        </Container>
    </section>
)

export default ArchiveHero