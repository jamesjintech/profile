import React, { Component } from "react";
import { Link } from 'react-router-dom';
import {FaTwitter ,FaInstagram ,FaFacebookF , FaLinkedinIn} from "react-icons/fa";
const logoUrl = <img src="/assets/images/logo/logo-light.png" alt="Digital Agency" />;

const SocialShare = [
    {Social: <FaLinkedinIn /> , link: 'https://www.linkedin.com/'},
    {Social: <FaTwitter /> , link: 'https://twitter.com/'},
]

class Footer extends Component{
    render(){
        return(
            <React.Fragment>
                <footer className="footer-area footer-style-01 bg_color--6">
                    {/* Start Call to Action Area  */} 
                    <div className="im-call-to-action-area ptb--70 im-separator">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-lg-8 col-xl-6 col-md-12 col-sm-12 col-12">
                                    <div className="inner">
                                        <h2 className="text-white mb--0">Let's Build Something Together</h2>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-xl-4 offset-xl-2 col-md-12 col-sm-12 col-12">
                                    <div className="call-to-cation-tbn text-left text-lg-right mt_md--20 mt_sm--20">
                                        <Link className="btn-default btn-large btn-border btn-opacity" to="/contact">Contact Us</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* End Call to Action Area  */}

                    {/* Start Footer Area  */}
                    <div className="footer-wrapper ptb--70">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                                    <div className="ft-text">
                                        <div className="logo">
                                            <Link to="/">
                                                {logoUrl}
                                            </Link>
                                        </div>
                                        <p>Copyright © 2022. All rights reserved.</p>
                                    </div>
                                </div>
                                
                                {/* Start Single Widget  */}
                                <div className="col-lg-2 col-xl-2 offset-xl-1 col-md-6 col-sm-6 col-12 mt_mobile--40">
                                    <div className="footer-link">
                                        <h4>Quick Links</h4>
                                        <ul className="ft-link">
                                            <li><Link to="/#">Home</Link></li>
                                            <li><Link to="/#service">Services</Link></li>
                                            {/* <li><Link to="/#team">Contact</Link></li> */}
                                            <li><Link to="/contact">Contact</Link></li>
                                        </ul>
                                    </div>
                                </div>
                                {/* End Single Widget  */}

                                {/* Start Single Widget  */}
                                <div className="col-lg-2 col-md-6 col-sm-6 col-12 mt_md--40 mt_sm--40">
                                    <div className="footer-link">
                                        <h4>Company</h4>
                                        <ul className="ft-link">
                                            <li><Link to="/">Portfolio</Link></li>
                                            <li><Link to="/#about">About</Link></li>
                                            <li><Link to="/#team">Our Team</Link></li>
                                            {/* <li><Link to="/about">Values</Link></li> */}
                                        </ul>
                                    </div>
                                </div>
                                {/* End Single Widget  */}

                                {/* Start Single Widget  */}
                                <div className="col-lg-3 col-md-6 col-sm-6 col-12 mt_md--40 mt_sm--40">
                                    <div className="footer-link">
                                        <h4>Say Hello</h4>
                                        <ul className="ft-link">
                                            <li>Email: <a href="mailto:tgb29@itaccomplish.com">tgb29@itaccomplish.com</a></li>
                                            <li>Phone: <a href="mailto:hr@example.com">628-226-5769</a></li>
                                        </ul>

                                        <div className="social-share-inner mt--20">
                                            <ul className="social-share social-style--2 d-flex justify-content-start liststyle">
                                                {SocialShare.map((val , i) => (
                                                    <li key={i}><a href={`${val.link}`}>{val.Social}</a></li>
                                                ))}
                                            </ul>
                                        </div> 
                                    </div>
                                </div>
                                {/* End Single Widget  */}
                            </div>
                        </div>
                    </div>
                    {/* End Footer Area  */}
                </footer>
            </React.Fragment>
        )
    }
}
export default Footer;
