import * as React from "react"
import { Container } from "react-bootstrap"

import '../styles/archive-hero.css'

const ArchiveHero = (props) => (
    <section className="archive-section mb-5">
        <Container>
            <div className="hero_wrapper text-center text-white">
                <div className="text-center">
                   <img src={props.Imgsrc} className="archive-hero-img"/>
                </div>
                <div>
                    <div className="pt-3">
                        <p>{props.description}</p>
                    </div>
                </div>
            </div>
        </Container>
    </section>
)

export default ArchiveHero