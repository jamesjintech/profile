import React, { Component } from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { ProgressBar } from 'react-bootstrap';

class TabsTwo extends Component{
    render(){
        let 
        tab1 = "Main skills",
        tab2 = "Experience",
        tab3 = "Certificates",
        tab4 = "Education";
        const { tabStyle } = this.props
        return(
            <div>
                {/* Start Tabs Area */}
                <div className="tabs-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <Tabs>
                                    <TabList  className={`${tabStyle}`}>
                                        <Tab>{tab1}</Tab>
                                        <Tab>{tab2}</Tab>
                                        <Tab>{tab3}</Tab>
                                        <Tab>{tab4}</Tab>
                                    </TabList>

                                    <TabPanel>
                                        <div className="single-tab-content">
                                            <div className={`rn-progress-bar progress-bar--1 mt_dec--10`}>
                                                <div className="single-progress">
                                                    <h6 className="title">AWS Administration</h6>
                                                    <ProgressBar now={95} />
                                                    <span className="label">95%</span>
                                                </div>

                                                <div className="single-progress">
                                                    <h6 className="title">Python & Node.js</h6>
                                                    <ProgressBar now={85} />
                                                    <span className="label">85%</span>
                                                </div>

                                                <div className="single-progress">
                                                    <h6 className="title">DevOps(IaC) | Terraform & CDK & SAM</h6>
                                                    <ProgressBar now={80} />
                                                    <span className="label">80%</span>
                                                </div>

                                                <div className="single-progress">
                                                    <h6 className="title">Azure & GCP Cloud</h6>
                                                    <ProgressBar now={84} />
                                                    <span className="label">84%</span>
                                                </div>
                                                <div className="single-progress">
                                                    <h6 className="title">React & Vue & Angular</h6>
                                                    <ProgressBar now={92} />
                                                    <span className="label">92%</span>
                                                </div>
                                                <div className="single-progress">
                                                    <h6 className="title">RN & Swift & Java & Kotlin</h6>
                                                    <ProgressBar now={83} />
                                                    <span className="label">83%</span>
                                                </div>
                                            </div>
                                        </div>
                                    </TabPanel>


                                    <TabPanel>
                                       <div className="single-tab-content">
                                           <ul>
                                               <li>
                                                   <a href="https://innovationsapplied.com/" target="_blank" rel="noopener noreferrer">Lead Developer & AWS Admin<span>-</span><span className="custom-link"> Innovations Applied LLC</span></a> Jan, 2023 - Dec, 2023
                                               </li>
                                               <li>
                                                   <a href="https://vidatak.com/" target="_blank" rel="noopener noreferrer">Lead Mobile Developer <span>- </span><span className="custom-link">VidaTalk</span></a> Dec, 2023- Feb, 2024
                                               </li>
                                               <li>
                                                   <a href="https://trendzact.com/" target="_blank" rel="noopener noreferrer">Core AWS Solution Architecture<span>- </span><span className="custom-link">TrendzAct</span></a> Feb, 2024 - Feb, 2025
                                               </li>
                                               <li>
                                                   <a href="https://itaccomplish.com/" target="_blank" rel="noopener noreferrer">CTO | Project Manager<span>- </span><span className="custom-link">IT Accomplish</span></a> Feb, 2025 - Present
                                               </li>
                                           </ul>
                                       </div>
                                    </TabPanel>



                                    <TabPanel>
                                       <div className="single-tab-content">
                                           <ul>
                                               <li>
                                                   <a>AWS Solution Architect-Associate<span></span></a> 2022 - Current
                                               </li>
                                               <li>
                                                   <a>AWS Certified DevOps Engineer<span></span></a> 2023 - Current
                                               </li>
                                               <li>
                                                   <a>React Native App Development Certification<span></span></a> 2020- 2025
                                               </li>
                                               {/* <li>
                                                   <a href="/service">Software Engineer<span> - Alibaba </span></a> 2013- 2014
                                               </li> */}
                                           </ul>
                                       </div>
                                    </TabPanel>

                                    <TabPanel>
                                       <div className="single-tab-content">
                                           <ul>
                                               <li>
                                                   <a>Masters Degree | Computer Science<span> - <span>KORBEL FOUNDATION COLLEGE</span></span></a> 2014 - 2018
                                               </li>
                                               <li>
                                                   <a>Diploma in Computer Science<span> - Gamma Technical Institute</span></a> 2019
                                               </li>
                                               <li>
                                                   <a>AWS Solution Architecture<span> - AWS</span></a> 2022
                                               </li>
                                           </ul>
                                       </div>
                                    </TabPanel>
                                    
                                </Tabs>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Tabs Area */}
            </div>
        )
    }
}



export default TabsTwo;