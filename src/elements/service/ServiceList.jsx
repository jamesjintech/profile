import React ,{ Component }from "react";
import { FiVideo  , FiLayers , FiUsers , FiMonitor } from "react-icons/fi";
import { FaMobileAlt } from "react-icons/fa";
import { BsCloud } from "react-icons/bs";
import { IoIosCloudOutline } from "react-icons/io";
import AwsIcon from "../../component/Icons/aws";
import AiIcon from "../../component/Icons/ai";




const ServiceList = [
    {
        icon: <AwsIcon />,
        title: 'AWS Solution Architecture',
        description: 'Designing and implementing secure, scalable, cost-effective and high-performance architectures on AWS.'
    },
    {
        icon: <FiMonitor />,
        title: 'Website Development',
        description: 'Crafting visually engaging websites that blend design, performance, and usability.'
    },
    {
        icon: <FaMobileAlt />,
        title: 'Mobile App Development',
        description: 'Developing mobile applications with clean architecture, optimized performance, and long-term scalability.'
    },
    { 
        icon: <FiVideo />,
        title: 'Video Conference System',
        description: 'Building enterprise-grade video conferencing solutions with high availability and low latency.'
    },
    {
        icon: <FiLayers />,
        title: 'CI/CD DevOps & IaC',
        description: 'Automating cloud infrastructure and deployments through modern DevOps and IaC strategies.'
    },
    { 
        icon: <AiIcon />,
        title: 'AI Automation Solutions',
        description: 'Designing AI-powered automation solutions to streamline workflows and improve operational efficiency.'
    }
]


class ServiceThree extends Component{
    render(){
        const {column } = this.props;
        const ServiceContent = ServiceList.slice(0 , this.props.item);
        
        return(
            <React.Fragment>
                <div className="row service-main-wrapper">
                    {ServiceContent.map( (val , i) => (
                        <div className={`${column}`} key={i}>
                            <a>
                                <div className="service service__style--2 text-left bg-gray">
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
            </React.Fragment>
        )
    }
}
export default ServiceThree;
