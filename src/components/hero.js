import * as React from "react"
import { Link } from "gatsby"

const Hero = () => (
    <section>
        <div>
            <div>
                <div></div>
                <div>
                    <h1>About ValuesU</h1>
                    <div>
                        <p>The Values University (VU) initiative explores the values that shape and create our realities from a personal approach, highlighting the global leaders, change makers and influencers whose adherence to their specific values promote social-cohesion, peace-building and a more unified global community.</p>
                    </div>
                    <div>
                        <Link to="/donate">Help us grow</Link>
                    </div>
                </div>
            </div>
        </div>
    </section>
)

export default Hero