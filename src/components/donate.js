import * as React from 'react'
import { Link } from 'gatsby'
import { FaArrowCircleRight } from 'react-icons/fa';

import '../styles/donate.css'

const Donate = () => (
    <section className="section_wrapper">
        <div className="container">
            <div className="donate-cta">
                <h2>Showcasing values-based living through exclusive tailor-made content.</h2>
                <p>Your tax-deductible donation will expand ValuesU's initiative of teaching values based living across the globe.</p>
                <Link className="cta-btn" to='/donate'>Become a Member <FaArrowCircleRight className="fa-arrow-right" /></Link>
            </div>
        </div>
    </section>
)

export default Donate