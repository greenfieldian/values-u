import * as React from 'react';
import { Link } from "gatsby"
import { FaArrowCircleRight } from 'react-icons/fa';

import './button.css'

const Button = (props, text) => (
    <div>
        <Link to={props.link} className="reusable-btn">{props.label}</Link>
    </div>
)

export default Button