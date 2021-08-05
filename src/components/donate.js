import * as React from 'react'
import { Link } from 'gatsby'
import { FaArrowCircleRight } from 'react-icons/fa';

const Donate = () => (
    <section>
        <div className="donate-cta">
            <h2>The only newsroom dedicated to reporting on gun violence.</h2>
            <p>Your tax-deductible donation will expand The Trace’s nonprofit journalism on gun violence and its effects on our communities.</p>
            <Link>Become a Member <FaArrowCircleRight /></Link>
        </div>
    </section>
)

export default Donate