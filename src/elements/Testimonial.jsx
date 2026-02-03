import React, { Component } from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
class Testimonial extends Component{
    render(){
        return(
            <React.Fragment>
                <div className="row ptb--60">
                    <div className="col-lg-12">
                        <Tabs>
                            <div className="row align-items-center">
                                <div className="col-lg-6">
                                    <TabPanel>
                                        <div className="rn-testimonial-content text-left">
                                            <div className="inner">
                                                <p>James Jin is a truly exceptional full-stack developer with extensive expertise in Web and Mobile Development, AWS integration, and cloud architecture. His technical proficiency, problem-solving abilities, and dedication to delivering high-quality solutions have consistently exceeded our expectations. I highly recommend James Jin for any organization seeking a skilled and reliable developer.</p>
                                            </div>
                                            <div className="author-info">
                                                <h6><span>Bill Dunning </span> - Owner, Innovations Applied, LLC.</h6>
                                            </div>
                                        </div>
                                    </TabPanel>

                                    <TabPanel>
                                        <div className="rn-testimonial-content text-left">
                                            <div className="inner">
                                                <p>James Jin’s architectural expertise in delivering secure, scalable, and cost-effective AWS solutions is exceptional. His ability to integrate on-premise networks with cloud infrastructure while ensuring compliance and cost optimization played a key role in our digital transformation at TSMC and TrendzAct. His strong grasp of enterprise-level security and infrastructure design makes him a valuable asset to any organization.</p>
                                            </div>
                                            <div className="author-info">
                                                <h6><span>Matt Gabielson </span> - CEO and Product Evangelist at Trendzact</h6>
                                            </div>
                                        </div>
                                    </TabPanel>

                                    <TabPanel>
                                        <div className="rn-testimonial-content text-left">
                                            <div className="inner">
                                                <p>At TSMC, I've had the privilege of leading over 15 major cloud projects across AWS, GCP, and Azure. My work involves not just deep technical execution—like building secure landing zones and migrating legacy systems—but also strong customer engagement and stakeholder management to ensure solutions deliver real business value. But it was happy time to work with James Jin from TrendzAct.</p>
                                            </div>
                                            <div className="author-info">
                                                <h6><span>Wei Chen Lu</span> - AWS Certified Solutions Architect Professional, TSMC</h6>
                                            </div>
                                        </div>
                                    </TabPanel>

                                    <TabPanel>
                                        <div className="rn-testimonial-content text-left">
                                            <div className="inner">
                                                <p>James Jin is an exceptional mobile and web developer who built our application from the ground up. His expertise in integrating AWS live streaming, media players, and LanguageLine communication tools enabled a seamless and scalable platform. His technical excellence, reliability, and strong focus on user experience were key to our successful app launch and long-term stability.</p>
                                            </div>
                                            <div className="author-info">
                                                <h6><span>Lance Patak </span> - Co-Founder, VidaTalk, LLC.</h6>
                                            </div>
                                        </div>
                                    </TabPanel>

                                    <TabPanel>
                                        <div className="rn-testimonial-content text-left">
                                            <div className="inner">
                                                <p>James Jin is an exceptional developer and visionary who helped bring the SudoCoins NFT platform to life. His technical skill, creativity, and dedication turned my vision into a successful product. Working with him was so rewarding that I chose to partner with him as Co-Founder of IT Accomplish, LLC, and I’m excited about what we’ll continue to build together in the future for our clients.</p>
                                            </div>
                                            <div className="author-info">
                                                <h6><span>Ted Brinkofski </span> - Founder, IT Accomplish, LLC.</h6>
                                            </div>
                                        </div>
                                    </TabPanel>

                                    <TabPanel>
                                        <div className="rn-testimonial-content text-left">
                                            <div className="inner">
                                                <p>James Jin developed the NFC-based TapID platform, delivering smart door access, student ID, library systems, hotel room management, digital wallet, and event management solutions. He managed the entire project end to end, including the official website, admin panel, Android and iOS applications, and IoT/NFC integrations, resulting in a reliable and scalable platform for real-world enterprise use.</p>
                                            </div>
                                            <div className="author-info">
                                                <h6><span>Alexios Konstantinidis</span> - Owner, TapID, LLC.</h6>
                                            </div>
                                        </div>
                                    </TabPanel>

                                    <TabPanel>
                                        <div className="rn-testimonial-content text-left">
                                            <div className="inner">
                                                <p>James Jin worked with us as a Core Developer and AWS Lead across multiple projects, including Comrex, Gagl, VidaTalk, and DropApp. His technical leadership and reliability enabled us to consistently deliver strong results to our clients, helping build trust and drive business growth. Shan’s ability to manage complex systems while keeping projects on track made him a key contributor to our success.</p>
                                            </div>
                                            <div className="author-info">
                                                <h6><span>Katrina Pietruszynski </span>- Manager, Innovations Applied, LLC.</h6>
                                            </div>
                                        </div>
                                    </TabPanel>

                                    <TabPanel>
                                        <div className="rn-testimonial-content text-left">
                                            <div className="inner">
                                                <p>James Jin worked as an AWS Solution Architect in our organization and delivered a flawless on-premise network architecture for our security systems using Python CDK. He also led technical discussions with TSMC, guiding our team with clarity and confidence throughout the process. His expertise and leadership made a significant impact on the success of the project.</p>
                                            </div>
                                            <div className="author-info">
                                                <h6><span>Johanna Aldana </span>- Manager, TrendzAct, LLC.</h6>
                                            </div>
                                        </div>
                                    </TabPanel>
                                </div>
                                <div className="col-lg-6 mt_md--40 mt_sm--40">
                                    <TabList className="testimonial-thumb-wrapper">
                                        <Tab>
                                            <div className="testimonial-thumbnai">
                                                <div className="thumb">
                                                    <img src="/profile/assets/images/client/testimonial-1.jpg" alt="Testimonial Images"/>
                                                </div>
                                            </div>
                                        </Tab>
                                        <Tab>
                                            <div className="testimonial-thumbnai">
                                                <div className="thumb">
                                                    <img src="/profile/assets/images/client/testimonial-2.jpg" alt="Testimonial Images"/>
                                                </div>
                                            </div>
                                        </Tab>
                                        <Tab>
                                            <div className="testimonial-thumbnai">
                                                <div className="thumb">
                                                    <img src="/profile/assets/images/client/testimonial-3.jpg" alt="Testimonial Images"/>
                                                </div>
                                            </div>
                                        </Tab>
                                        <Tab>
                                            <div className="testimonial-thumbnai">
                                                <div className="thumb">
                                                    <img src="/profile/assets/images/client/testimonial-4.jpg" alt="Testimonial Images"/>
                                                </div>
                                            </div>
                                        </Tab>
                                        <Tab>
                                            <div className="testimonial-thumbnai">
                                                <div className="thumb">
                                                    <img src="/profile/assets/images/client/testimonial-5.jpg" alt="Testimonial Images"/>
                                                </div>
                                            </div>
                                        </Tab>
                                        <Tab>
                                            <div className="testimonial-thumbnai">
                                                <div className="thumb">
                                                    <img src="/profile/assets/images/client/testimonial-6.jpg" alt="Testimonial Images"/>
                                                </div>
                                            </div>
                                        </Tab>
                                        <Tab>
                                            <div className="testimonial-thumbnai">
                                                <div className="thumb">
                                                    <img src="/profile/assets/images/client/testimonial-7.jpg" alt="Testimonial Images"/>
                                                </div>
                                            </div>
                                        </Tab>
                                        <Tab>
                                            <div className="testimonial-thumbnai">
                                                <div className="thumb">
                                                    <img src="/profile/assets/images/client/testimonial-8.jpg" alt="Testimonial Images"/>
                                                </div>
                                            </div>
                                        </Tab>
                                    </TabList>
                                </div>
                            </div>
                        </Tabs>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
export default Testimonial;