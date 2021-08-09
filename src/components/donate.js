import * as React from 'react'
import { Link } from 'gatsby'
import { FaArrowCircleRight } from 'react-icons/fa';

import '../styles/donate.css'

const Donate = () => (
    <section className="section_wrapper">
        <div className="container">
            <div className="donate-cta">
                <h2>The only newsroom dedicated to reporting on gun violence.</h2>
                <p>Your tax-deductible donation will expand The Trace’s nonprofit journalism on gun violence and its effects on our communities.</p>
                <Link className="cta-btn" to='/donate'>Become a Member <FaArrowCircleRight className="fa-arrow-right" /></Link>
            </div>
        </div>
    </section>
)

export default Donate