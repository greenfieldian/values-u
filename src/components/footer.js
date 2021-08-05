import * as React from "react"
import { Link } from "gatsby"
import { Button, Container } from "react-bootstrap"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';

import '../styles/footer.css';

library.add(fab);

const Footer = () => (
        <Container>
            <div className="footer_wrapper">
                <div className="flex_contain">
                    <div className="flex_two">
                        <form>
                            <h4 className="footer_heading">Join thousands of supporters by signing up for our newsletter.</h4>
                            <div className="sub_contain">
                                <div className="input_contain">
                                    <label>EMAIL ADDRESS</label>
                                    <input className="footer_input"></input>
                                </div>
                                <div>
                                    <Button className="footer_btn">Subscribe</Button>
                                </div>
                            </div>
                        </form>
                        <div>
                            <nav>
                                <ul>
                                    <li><Link link="" target="_blank"><FontAwesomeIcon icon={["fab", "facebook-f"]} size="2x" /></Link></li>
                                    <li><Link link="" target="_blank"><FontAwesomeIcon icon={["fab", "twitter"]} size="2x" /></Link></li>
                                    <li><Link link="" target="_blank"><FontAwesomeIcon icon={["fab", "instagram"]} size="2x" /></Link></li>
                                    <li><Link link="" target="_blank"><FontAwesomeIcon icon={["fab", "youtube"]} size="2x" /></Link></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                    <div>
                        <nav>
                            <dl>
                                <dt>
                                    <Link link="/videos">Explore Our Media</Link>
                                </dt>
                                <dd>Explore the variety of content the Values University (VU) Initiative has to offer, whether you prefer short and inspirational, or long, detailed and though provoking- VU has something to offer for everyone’s preference.</dd>
                                {/*
                                <DescTitle>
                                    <Link link="/">Browse The Store</Link>
                                </DescTitle>
                                <Descript>Shop Values University merchandise and subscriptions. Additionally, every week guest speaker specific merchandise will be added, so you could read, learn and listen to more of your favorite Values University speakers.</Descript>
                                */}
                                <dt>
                                    <Link link="/blog">Perspectives</Link>
                                </dt>
                                <dd>Come learn what a values based lifestyle means to us at the Values University, why it is a topic we find so significant, and how it can help inspire and reshape your perspectives, leading to a fuller, more enjoyable life. </dd>

                                <dt>
                                    <Link link="/about-us">About Us</Link>
                                </dt>
                                <dd>Spearheaded by the World Values Network, the VU initiative was developed  to help spread values  at the global level, highlighting  the individual experiences and approaches of global change makers and influencers, leveraging  personal narratives to help contribute towards a universal consensus on social cohesion, unity and cooperation. </dd>

                                <dt>
                                    <Link link="/contact-us">Get In Touch</Link>
                                </dt>
                                <dd>Have any questions, feeling inspired and want to get involved, or simply want to provide some feedback? Contact us through our online submission form- we would love to hear from you.</dd>
                            </dl>
                        </nav>
                    </div>
                </div>
            </div>
        </Container>
)

export default Footer