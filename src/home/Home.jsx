import React, { Component , Fragment } from "react";
import Scrollspy from 'react-scrollspy';
import { Link } from 'react-router-dom';
import ScrollToTop from 'react-scroll-up';
import { FiChevronUp , FiX , FiMenu } from "react-icons/fi";
import Testimonial from "../elements/Testimonial";
import ServiceTwo from "../elements/service/ServiceTwo";
import Footer from "../component/footer/Footer";
import Helmet from "../component/common/Helmet";
import TeamOne from "../blocks/team/TeamOne";
import Slider from "react-slick";
import { slickDot , portfolioSlick2 } from "../page-demo/script";

const SlideList = [
    {
        textPosition: 'text-center',
        category: '',
        title: 'Web3 Development Agency',
        description: 'From product vision to roadmap & execution',
        buttonText: 'Get In Touch',
        buttonLink: '/contact'
    }
]
const Portfolio_image = <img src="/assets/images/works/ld.png" alt="Lucky Devils NFT" />;
const Portfolio_image2 = <img src="/assets/images/works/fyy.png" alt="Farm Your Yard" />;
const Portfolio_image3 = <img src="/assets/images/works/phc.png" alt="Praying Hands Club NFT" />;
const Portfolio_image4 = <img src="/assets/images/works/m4s.png" alt="Meta4Swap" />;

const PortfolioList2 = [
    {
        image: Portfolio_image,
        category: 'Web3 Application',
        title: 'Lucky Devils NFT',
        link: 'https://luckydevils.io',
    },
    {
        image: Portfolio_image3,
        category: 'Web3 Application',
        title: 'Praying Hands Club NFT',
        link: 'https://www.www.prayinghandsclub.com/',
    },
    {
        image: Portfolio_image2,
        category: 'Mobile App',
        title: 'Farm Your Yard',
        link: 'https://farmyouryard.org/',
    },
    {
        image: Portfolio_image4,
        category: 'Web3 Application',
        title: 'Meta4Swap',
        link: 'https://meta4swap.com'
    },
    {
        image: Portfolio_image3,
        category: 'Web3 Application',
        title: 'Praying Hands Club NFT',
        link: 'https://www.www.prayinghandsclub.com/',
    },
    {
        image: Portfolio_image2,
        category: 'Mobile App',
        title: 'Farm Your Yard',
        link: 'https://farmyouryard.org/',
    },
]


const ServiceListOne = [
    {
        icon: "icon-01.png",
        title: 'Product Management',
        description: 'We transform your ideas into a technical product roadmap & execute your vision according to your timeline and budget.'
    },
    {
        icon: "icon-02.png",
        title: 'Software Development',
        description: 'We design system architectures, code, iterate, & evolve software programs, and deploy applications using cloud services.'
    },
    {
        icon: "icon-03.png",
        title: 'Analysis & Consulting',
        description: 'We analyze your data, collect new data through market research, generate key insights, and help keep your business data-driven.'
    },
    
]

class InteriorLanding extends Component{
    constructor(props) {
        super(props);
        this.menuTrigger = this.menuTrigger.bind(this);
        this.CLoseMenuTrigger = this.CLoseMenuTrigger.bind(this);
        this.stickyHeader = this.stickyHeader.bind(this);

        window.addEventListener('load', function() {
            console.log('All assets are loaded');
        })
    }
    menuTrigger() {
        document.querySelector('.header-wrapper').classList.toggle('menu-open')
    }
    CLoseMenuTrigger() {
        document.querySelector('.header-wrapper').classList.remove('menu-open')
    }
    stickyHeader () {}
    render(){
        window.addEventListener('scroll', function() {
            var value = window.scrollY;
            if (value > 50) {
                document.querySelector('.header--fixed').classList.add('sticky')
            }else{
                document.querySelector('.header--fixed').classList.remove('sticky')
            }
        });

        var elements = document.querySelectorAll('.has-droupdown > a');
        for(var i in elements) {
            if(elements.hasOwnProperty(i)) {
                elements[i].onclick = function() {
                    this.parentElement.querySelector('.submenu').classList.toggle("active");
                    this.classList.toggle("open");
                }
            }
        }



        return(
            <Fragment>
                <Helmet pageTitle="Interior Design" />

                {/* Start Header Area  */}
                <header className="header-area formobile-menu header--fixed default-color one-page-navigation">
                    <div className="header-wrapper" id="header-wrapper">
                        <div className="header-left">
                            <div className="logo">
                                <a href="/">
                                    <img className="logo-1" src="/assets/images/logo/logo-light.png" alt="Logo Images"/>
                                    <img className="logo-2" src="/assets/images/logo/logo-all-dark.png" alt="Logo Images"/>
                                </a>
                            </div>
                        </div>
                        <div className="header-right">
                            <nav className="mainmenunav d-lg-block">
                                <Scrollspy className="mainmenu" items={['home','service','about','team']} currentClassName="is-current" offset={-200}>
                                    {/* <li><a href="#home">Home</a></li> */}
                                    <li><a href="home">Home</a></li>
                                    <li><a href="service">Service</a></li>
                                    <li><a href="about">About</a></li>
                                    <li><a href="portfolio">Portfolio</a></li>
                                    <li><a href="team">Team</a></li>
                                    <li><a href="testimonial">Testimonial</a></li>
                                    <li><a href="blog">Blog</a></li>
                                    <li><a href="contact">Contact</a></li>
                                    {/* <li><Link to="/contact">Contact</Link></li> */}
                                </Scrollspy>
                            </nav>
                            <div className="header-btn">
                                <Link className="btn-default btn-border btn-opacity" to="/contact">
                                    <span>Contact Us</span>
                                </Link>
                            </div>
                            {/* Start Humberger Menu  */}
                            <div className="humberger-menu d-block d-lg-none pl--20">
                                <span onClick={this.menuTrigger} className="menutrigger text-white"><FiMenu /></span>
                            </div>
                            {/* End Humberger Menu  */}
                            <div className="close-menu d-block d-lg-none">
                                <span onClick={this.CLoseMenuTrigger} className="closeTrigger"><FiX /></span>
                            </div>
                        </div>
                    </div>
                </header>
                {/* End Header Area  */}

                {/* Start Slider Area   */}
                <div className="slider-activation im_modern_slider" id="home">
                    <div className="bg_image bg_image--29" data-black-overlay="6">
                        {SlideList.map((value , index) => (
                            <div className="slide slide-style-2 slider-paralax d-flex align-items-center justify-content-center" key={index}>
                                <div className="container">
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div className={`inner pt_sm--40 ${value.textPosition}`}>
                                                {value.category ? <span>{value.category}</span> : ''}
                                                {value.title ? <h1 className="title">{value.title}</h1> : ''}
                                                {value.description ? <p className="description">{value.description}</p> : ''}
                                                {value.buttonText ? <div className="slide-btn"><a className="btn-default btn-large" href={`${value.buttonLink}`}>{value.buttonText}</a></div> : ''}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                {/* End Slider Area   */}

                {/* Start Service Area  */}
                <div className="service-area creative-service-wrapper ptb--120 bg_color--1" id="service">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-10 col-xl-8">
                                <div className="feature-area">
                                    <span className="subtitle theme-gradient">BE INNOVATIVE</span>
                                    <h3 className="title mt--20 fontWeight500 lineheight--1-8">Our agile development process delivers results repeatedly and generates the feedback you need to make better business decisions.</h3>
                                </div>
                            </div>
                        </div>
                        <div className="row service-one-wrapper">
                            {ServiceListOne.map( (val , i) => (
                                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12 mt--30" key={i}>
                                    <a href="/contact">
                                        <div className="service service__style--1">
                                            <div className="icon">
                                                <img src={`/assets/images/icons/${val.icon}`} alt="Service Icon"/>
                                            </div>
                                            <div className="content mt--20">
                                                <h4 className="title">{val.title}</h4>
                                                <p>{val.description}</p>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>  
                {/* End Service Area  */} 

                <ServiceTwo />


                {/* Start Call To Action Area  */}
                <div className="call-to-action-wrapper call-to-action callto-action-style-2 text-white" id="getstart">
                    <div className="bg_image bg_image--28 ptb--200 ptb_lg--80 ptb_md--80 ptb_sm--80" data-black-overlay="5">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="inner text-center">
                                        <h2>Get 1 Free Hour</h2>
                                        <p>Let's collaborate</p>
                                        <a className="btn-default btn-large btn-hover-white mt--50 mt_sm--30 mt_md--30" href="/contact"><span>Schedule Now</span></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Call To Action Area  */}

                {/* Start Content Box  */}
                <div className="rn-content-box-area rn-content-box-style--1 pt--120 pb--120 bg_color--1" id="about">
                    <div className="row row--0 align-items-center">
                        <div className="col-lg-12 col-xl-6">
                            <div className="thumbnail">
                                <img src="/assets/images/featured/corporate-05.jpg" alt="Featured Images" className="custom-img"/>
                            </div>
                        </div>
                        <div className="col-lg-12 col-xl-6 mt_lg--50 mt_md--30 mt_sm--30">
                            <div className="content">
                                <div className="about-inner inner">
                                    <div className="section-title">
                                        <span className="subtitle">Impactful</span>
                                        <h2 className="title">Company Values</h2>
                                        <p className="description">We can embed in any team and adapt to any culture.</p>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                                            <div className="about-us-list">
                                                <h5 className="title">Honesty</h5>
                                                <p>We earn trust by being transparent and meeting our commitments. </p>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                                            <div className="about-us-list">
                                                <h5 className="title">Diversity</h5>
                                                <p>We avoid working in silos and always seek new perspectives.</p>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                                            <div className="about-us-list">
                                                <h5 className="title">Global</h5>
                                                <p>Our team is online 24/7 and our process is continuous.</p>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                                            <div className="about-us-list">
                                                <h5 className="title">Agile</h5>
                                                <p>By deploying frequently, we obtain market pulses.</p>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div className="purchase-btn mt--50">
                                        <a className="btn-transparent" href="/contact">CONTACT US</a>
                                    </div>
                           
                                </div>
                            </div>
                        </div> 
                    </div>
                </div>
                {/* End Content Box  */}


                {/* Start Testimonial Area */}
                <div className="rn-testimonial-area bg_color--5 ptb--120" id="testimonial">
                    <div className="container">
                        <Testimonial />
                    </div>
                </div>
                {/* End Testimonial Area */}

                 {/* Start Footer Style  */}
                 <Footer />
                {/* End Footer Style  */}

                {/* Start Back To Top */}
                <div className="backto-top">
                    <ScrollToTop showUnder={160}>
                        <FiChevronUp />
                    </ScrollToTop>
                </div>
                {/* End Back To Top */}
            </Fragment>
        )
    }
}

export default InteriorLanding;
