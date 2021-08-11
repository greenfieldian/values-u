import * as React from 'react';
import { Link } from "gatsby"
import { FaArrowCircleRight } from 'react-icons/fa';

import './button.css'

const Button = (props, text) => (
    <div>
        <Link to="/donate" className="reusable-btn">{props.label}<FaArrowCircleRight className="fa-arrow-right" /></Link>
    </div>
)

export default Button