import React, { Component } from "react";
import { Link } from 'react-router-dom';
const Portfolio_image = <img src="/profile/assets/images/portfolio/portfolio-4.jpg" alt="AWS Services" />;
const Portfolio_image2 = <img src="/profile/assets/images/portfolio/portfolio-5.jpg" alt="Full-Stack Development" />;
const Portfolio_image3 = <img src="/profile/assets/images/portfolio/portfolio-6.jpg" alt="Mobile App | AWS Live Streaming" />;
const Portfolio_image4 = <img src="/profile/assets/images/portfolio/portfolio-7.jpg" alt="WebRTC | VOIP" />;
const Portfolio_image5 = <img src="/profile/assets/images/portfolio/portfolio-8.jpg" alt="DevOps Engineering" />;
const Portfolio_image6 = <img src="/profile/assets/images/portfolio/portfolio-9.jpg" alt="Artificial Intelligence" />;

const PortfolioListContent = [
    {
        image: Portfolio_image,
        category: 'AWS Services',
        title: 'TrendzAct & TSMC On-Premise Network Design',
        description: 'Secure, scalable, cost-effective solution design.'
    },
    {
        image: Portfolio_image2,
        category: 'Full-Stack Development',
        title: 'TapID Web & Mobile Application',
        description: 'NFC-based identity, Smart Door Control, Digital Wallet.'
    },
    {
        image: Portfolio_image3,
        category: 'Mobile App | AWS Live Streaming',
        title: 'VidaTalk Patient Mobile App',
        description: 'Patient communication, relax music, video services.'
    },
    {
        image: Portfolio_image4,
        category: 'WebRTC | VOIP',
        title: 'Panther Media System',
        description: 'Voice, video, chat and more into a single platform.'
    },
    {
        image: Portfolio_image5,
        category: 'DevOps Engineering',
        title: 'CI/CD DevOps & IaC',
        description: 'Mobile & Web CI/CD DevOps and IaC using CDK, SAM, Kubernetes.'
    },
    {
        image: Portfolio_image6,
        category: 'Artificial Intelligence',
        title: 'AI Automation Solutions',
        description: 'AI-driven automates UI generation, content creation, and deployment workflows.'
    }
]

class PortfolioList extends Component{
    render(){
        const {column , styevariation } = this.props;
        const list = PortfolioListContent.slice(0 , this.props.item);
        return(
            <React.Fragment> 
                {list.map((value , index) => (
                    <div className={`${column}`} key={index}>
                        <div className={`im_portfolio ${styevariation}`}>
                            <div className="thumbnail_inner">
                                <div className="thumbnail">
                                    <Link>
                                        {value.image}
                                    </Link>    
                                </div>
                            </div>
                            <div className="content">
                                <div className="inner">
                                    <div className="portfolio_heading">
                                        <div className="category_list">
                                            <Link>{value.category}</Link>
                                        </div>
                                        <h4 className="title"><Link>{value.title}</Link></h4>
                                    </div>
                                    <div className="portfolio_hover">
                                        <p>{value.description}</p>
                                    </div>
                                </div>
                            </div>
                            <Link className="transparent_link"></Link>
                        </div>
                    </div>
                ))}
               
            </React.Fragment>
        )
    }
}
export default PortfolioList;