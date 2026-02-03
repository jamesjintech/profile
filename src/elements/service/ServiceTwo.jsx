import React, { Component } from "react";
import { FiCast , FiLayers , FiUsers , FiMonitor ,FiChevronUp, FiMail, FiCopy } from "react-icons/fi";

const ServiceList = [
    {
        icon: <FiCast />,
        title: 'Web3 Development',
        description: 'We build apps where the blockchain is your database, and the business logic lives in smart contracts. We specialize in Solidity, Ethereum (and any EVM), NFTs, ERC20, and DeFi.'
    },
    {
        icon: <FiLayers />,
        title: 'Front end Development',
        description: 'We specialize in transforming your UI/UX designs into functional React web apps. These apps are itegrated with web3 technologoies, including smart contracts, meta mask wallet, and any other web3 wallets.'
        
 
    },
    {
        icon: <FiUsers />,
        title: 'Back end Development',
        description: 'We design system architectures and build the core functionality managing your entire application, including APIs, Databases, Event processing, and any other program critical to your business logic.'
    },
    {
        icon: <FiMonitor />,
        title: 'AWS & Cloud Services',
        description: 'We have expertise in managing DevOps processes that are continuous and automated. Using AWS and other cloud providers, we design serverless apps that are scalable and save you money.'
    },
    {
        icon: <FiMail />,
        title: 'Task Management',
        description: 'We organize and execute product roadmaps by breaking down high-level concepts into smaller tasks. We use Trello, Jira, Scrum, and any other tool already in your workflow.'
    },
    {
        icon: <FiCopy />,
        title: 'UI/UX Design',
        description: 'We survey customers and use market data to create user experiences that optimize key metrics. User data, funnel tracking, and A/B testing informs our design decisons.'
    },
]

class ServiceTwo extends Component{
    render(){
        let title = 'Services provided',
        description = "Clear and responsive communications always included",
        subtitle= 'What we can do';
        return(
            <React.Fragment>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-title text-center">
                                <span className="subtitle">{subtitle}</span>
                                <h2 className="title">{title}</h2>
                                <p className="description" dangerouslySetInnerHTML={{ __html: description }}></p>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-12 col-12 mt--30">
                            <div className="row service-main-wrapper">
                                {ServiceList.map( (val , i) => (
                                    <div className="col-lg-4 col-md-6 col-sm-6 col-12" key={i}>
                                        <a href="/service-details">
                                            <div className="service service__style--2 text-left">
                                                <div className="icon">
                                                    {val.icon}
                                                </div>
                                                <div className="content">
                                                    <h3 className="title">{val.title}</h3>
                                                    <p>{val.description}</p>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
export default ServiceTwo;
