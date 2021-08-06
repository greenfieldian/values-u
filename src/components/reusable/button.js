import * as React from 'react';
import { Link } from "gatsby"
import { FaArrowCircleRight } from 'react-icons/fa';

import './button.css'

const Button = () => (
    <div>
        <Link to="/donate" className="hero-btn">Continue to payment <FaArrowCircleRight className="fa-arrow-right" /></Link>
    </div>
)

export default Button