import React, { useState } from 'react';
import ScrollToTop from 'react-scroll-up';
import { FiChevronUp } from "react-icons/fi";
import Helmet from "../component/common/Helmet";
import TextLoop from "react-text-loop";
import HeaderThree from "../component/header/HeaderThree";
import FooterTwo from "../component/footer/FooterTwo";
import TabTwo from "../elements/tab/TabTwo";
import ContactThree from "../elements/contact/ContactThree";
import PortfolioList from "../elements/portfolio/PortfolioList";
import ServiceList from "../elements/service/ServiceList";
import BlogContent from "../elements/blog/BlogContent";
import { Link } from 'react-router-dom';
import Particles from 'react-tsparticles';
import Testimonial from '../elements/Testimonial';

const SlideList = [
    {
        textPosition: 'text-left',
        category: 'Welcome to my World',
        description: '',
        buttonText: 'Download CV',
        buttonLink: 'https://drive.google.com/file/d/1q0DRR295n9b1t6e7bMzT9GEFbEoSNRln/view?usp=sharing'
    }
]
const PortfolioLanding = () => {
    let title = 'About Me',
        description = '• Senior full-stack engineer with strong experience architecting and scaling web and mobile platforms using React, Angular, Vue, Next and Nuxt, with focus on performance, SSR/SSG, and maintainable UI architecture. \n• Backend specialist in Node.js, Python, and Java, building reliable APIs and data-driven systems with MySQL, PostgreSQL, and MongoDB.Cloud-certified across AWS, GCP, and Azure, delivering serverless and containerized solutions using Kubernetes, Terraform, CDK, and IaC. \n• Strong DevOps background with CI/CD automation, cloud monitoring, and production-grade deployments.Hands-on experience integrating OpenAI APIs and LLM-based automation into real-world systems.';
        const PostList = BlogContent.slice(0 , 3);
    return (
        <div className="active-dark bg_color--9">
            <Helmet pageTitle="Portfolio Landing" title="Shan Ram" />

            <HeaderThree homeLink="/" logo="symbol-dark" color="color-black"/>
            
            {/* Start Slider Area   */}
            <div id="home" className="fix">
                <div className="slider-activation with-particles">
                    <div className="frame-layout__particles">
                        <Particles className="particle"  
                            options={{
                                style:{
                                    position: "absolute"
                                },
                                fpsLimit: 100,
                                interactivity: {
                                detectsOn: "canvas",
                                events: {
                                    onClick: {
                                    enable: true,
                                    mode: "push",
                                    },
                                    onHover: {
                                    enable: true,
                                    mode: "repulse",
                                    },
                                    resize: true,
                                },
                                modes: {
                                    bubble: {
                                        distance: 100,
                                        duration: 2,
                                        opacity: 0.8,
                                        size: 10,
                                        color: "#888888",
                                    },
                                    push: {
                                    quantity: 4,
                                    },
                                    repulse: {
                                        distance: 100,
                                        duration: 0.4,
                                        color: "#888",
                                    },
                                },
                                },
                                particles: {
                                    color: {
                                        value: "#f1f9f5",
                                    },
                                    links: {
                                        color: "#f1f9f5",
                                        distance: 150,
                                        enable: true,
                                        opacity: 0.5,
                                        width: 1,
                                    },
                                    collisions: {
                                        enable: true,
                                    },
                                    move: {
                                        direction: "none",
                                        enable: true,
                                        outMode: "bounce",
                                        random: false,
                                        speed: 6,
                                        straight: false,
                                    
                                    },
                                    number: {
                                        density: {
                                            enable: true,
                                            value_area: 2000,
                                        },
                                        value: 80,
                                    },
                                    opacity: {
                                        value: 0.5,
                                    },
                                    shape: {
                                        type: "circle",
                                    },
                                    size: {
                                        random: true,
                                        value: 5,
                                    },
                                },
                                detectRetina: true,
                            }}
                        />
                    </div>
                    {/* Start Single Slide */}
                    {SlideList.map((value , index) => (
                        <div className="slide personal-portfolio-slider slider-paralax slider-style-3 d-flex align-items-center justify-content-center bg_image bg_color--8" key={index}>
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className={`inner ${value.textPosition}`}>
                                            {value.category ? <span>{value.category}</span> : ''}
                                            <h1 className="title">I’m James Jin <br/>
                                            <TextLoop>
                                                <span className="theme-gradient"> Sr. Mobile & Web Dev</span>
                                                <span> AWS <span className="theme-gradient">Certificated</span> Dev</span>
                                                <span> BlockChain Dev</span>
                                                <span className="theme-gradient"> IaC & DevOps Engineer</span>
                                            </TextLoop>{" "}
                                            </h1>
                                            <h2>based in Canada.</h2>
                                            {value.description ? <p className="description">{value.description}</p> : ''}
                                            {value.buttonText ? <div className="slide-btn mt--30"><a className="btn-default btn-border btn-opacity" target="_blank" rel="noopener noreferrer" href={`${value.buttonLink}`}>{value.buttonText}</a></div> : ''}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                    {/* End Single Slide */}
                </div>
            </div>
            {/* End Slider Area   */} 

            {/* Start About Area */}
            <div id="about" className="fix">
                <div className="about-area ptb--120 bg_color--8">
                    <div className="about-wrapper">
                        <div className="container">
                            <div className="row row--35">
                                <div className="col-lg-5">
                                    <div className="thumbnail mt--60">
                                        <img className="w-100" src="/profile/assets/images/about/about-23.jpg" alt="About Images"/>
                                    </div>
                                </div>
                                <div className="col-lg-7">
                                    <div className="about-inner inner">
                                        <div className="section-title">
                                            <span className="subtitle">My About Details</span>
                                            <h2 className="title mb--20">{title}</h2>
                                            <p className="description mt_dec--20 break">{description}</p>
                                        </div>
                                        <div className="row mt--40">
                                            <TabTwo tabStyle="tab-style--1" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* End About Area */}

            {/* Start Service Area  */}
            <div id="service" className="fix">
                <div className="service-area creative-service-wrapper pb--120 bg_color--8" >
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="section-title text-center mb--30 mb_sm--0">
                                    <span className="subtitle">What I can do for you</span>
                                    <h2 className="title">My Professional Services</h2>
                                    <p className="description">Providing reliable, high-quality solutions designed to meet  <br /> your goals and support long-term success.</p>
                                </div>
                            </div>
                        </div>
                        <div className="row creative-service">
                            <div className="col-lg-12">
                                <ServiceList item="6" column="col-lg-4 col-md-6 col-sm-6 col-12 text-left" />
                            </div>
                        </div>
                    </div>
                </div>  
            </div>
            {/* End Service Area  */} 

            {/* Start Portfolio Area */}
            <div id="portfolio" className="fix">
                <div className="portfolio-area pb--120 bg_color--8">
                    <div className="portfolio-sacousel-inner">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="section-title text-center mb--30 mb_sm--0">
                                        <span className="subtitle">My Project Portfolio</span>
                                        <h2 className="title">Recent Projects</h2>
                                        <p className="description">A selection of recent projects showcasing my experience, technical expertise,<br/> and commitment to delivering high-quality solutions.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <PortfolioList styevariation="text-center mt--40" column="col-lg-4 col-md-6 col-sm-6 col-12" item="6" />
                            </div>
                            <div className="row">
                                <div className="col-lg-12">
                                    {/* <div className="view-more-btn mt--60 mt_sm--30 text-center">
                                        <a className="btn-default" href="/portfolio"><span>View Projects</span></a>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* End Portfolio Area */}

            {/* Start Blog Area */}
            <div id="clients" className="fix">
                <div className="rn-blog-area pb--120 bg_color--8 mb-dec--30">
                    <div className="rn-testimonial-area ptb--120">
                        <div className="container">
                            <div className="row align-items-end">
                                <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                                    <div className="section-title text-center">
                                        <span className="subtitle">My Clients</span>
                                        <h2 className="title">Trusted by Clients</h2>
                                        <p className="description">Organizations and individuals who trust my expertise <br />to deliver reliable, high-quality solutions.</p>
                                    </div>
                                </div>
                            </div>
                            <Testimonial />
                        </div>
                    </div>
                    {/* <div className="container">
                        <div className="row align-items-end">
                            <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                                <div className="section-title text-center">
                                    <span className="subtitle">My Latest Post</span>
                                    <h2 className="title">Latest News</h2>
                                    <p className="description">There are many variations of passages of Lorem Ipsum available, <br />but the majority have suffered alteration.</p>
                                </div>
                            </div>
                        </div>
                        <div className="row mt--30 mt_sm--40">
                            {PostList.map((value , i ) => (
                                <div className="col-lg-4 col-md-6 col-12 mt--30" key={i}>
                                    <div className="im_box">
                                        <div className="thumbnail">
                                            <Link to="/blog-details">
                                                <img className="w-100" src={`/assets/images/blog/blog-${value.images}.jpg`} alt="Blog Images"/>
                                            </Link>
                                        </div>
                                        <div className="content">
                                            <div className="inner">
                                                <div className="content_heading">
                                                    <div className="category_list">
                                                        <Link to="/portfolio-details">{value.category}</Link>
                                                    </div>
                                                    <h4 className="title">
                                                        <Link to="/blog-details">{value.title}</Link>
                                                    </h4>
                                                </div>
                                                <div className="content_footer">
                                                    <Link to="/blog-details" className="rn-btn btn-opacity">Read More</Link>
                                                </div>
                                            </div>
                                            <Link className="transparent_link" to="/blog-details"></Link>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>    
                    </div>     */}
                </div>
            </div>
            {/* End Blog Area */}

            {/* Start COntact Area */}
            <div id="contact" className="fix">
                <div className="rn-contact-area pbt--120 bg_color--8">
                    <ContactThree contactImages="/profile/assets/images/about/about-13.jpg" contactTitle="Contact Me" />
                </div>
            </div>
            {/* End COntact Area */}

            <FooterTwo />
            {/* Start Back To Top */}
            <div className="backto-top">
                <ScrollToTop showUnder={160}>
                    <FiChevronUp />
                </ScrollToTop>
            </div>
            {/* End Back To Top */}
            
        </div>
    )
}

export default PortfolioLanding;
