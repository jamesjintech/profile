import React, { Component, useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { FiX , FiMenu } from "react-icons/fi";


const Header = (props) => {
    const [logo, setLogo] = useState(props.logo);
    const [color, setColor] = useState(props.color ? props.color : 'default-color');
    const [logoUrl, setLogoUrl] = useState(null);
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         logo: this.props.logo,
    //         color: this.props.color ? this.props.color : 'default-color',
    //         logorUrl: null
    //     }
    //     this.menuTrigger = this.menuTrigger.bind(this);
    //     this.CLoseMenuTrigger = this.CLoseMenuTrigger.bind(this);
    //     this.changeLogoURI = this.changeLogoURI.bind(this);
    //    //  this.subMetuTrigger = this.subMetuTrigger.bind(this);
    //     window.addEventListener('load', function() {
    //         console.log('All assets are loaded')
    //     })
    // }

    const menuTrigger = () => {
        document.querySelector('.header-wrapper').classList.toggle('menu-open')
    }

    const CLoseMenuTrigger = () => {
        document.querySelector('.header-wrapper').classList.remove('menu-open');
    }
    const initLogoURI = () => {
        if(logo === 'light'){
            setLogoUrl(<img src="/assets/images/logo/logo-light.png" alt="Digital Agency" />);
        }else if(logo === 'dark'){
            setLogoUrl(<img src="/assets/images/logo/logo-dark.png" alt="Digital Agency" />);
        }else if(logo === 'symbol-dark'){
            setLogoUrl(<img src="/assets/images/logo/logo-symbol-dark.png" alt="Digital Agency" />);
        }else if(logo === 'symbol-light'){
            setLogoUrl(<img src="/assets/images/logo/logo-symbol-light.png" alt="Digital Agency" />);
        }else{
            setLogoUrl(<img src="/assets/images/logo/logo.png" alt="Digital Agency" />);
        }
    }
    const changeLogoURI = () => {
        console.log('logoUrl =======>', logo, color);
        if(!logo) {
            if(color === 'default-color' || color === 'color--black') {
                setLogoUrl(<img src="/assets/images/logo/logo-light.png" alt="Digital Agency" />);
            }
        }
    }

    const restoreLogoURI = () => {
        if(!logo) {
            if(color === 'default-color' || color === 'color--black') {
                setLogoUrl(<img src="/assets/images/logo/logo-dark.png" alt="Digital Agency" />);
            }
        }
    }

    useEffect(() => {
        var elements = document.querySelectorAll('.has-droupdown > a');
        for(var i in elements) {
            if(elements.hasOwnProperty(i)) {
                elements[i].onclick = function() {
                    this.parentElement.querySelector('.submenu').classList.toggle("active");
                    this.classList.toggle("open");
                }
            }
        }
        initLogoURI();
    }, [])
        
        // const { logo, color='default-color' } = this.props;
        // let logoUrl;
        // if(this.props.logo === 'light'){
        //     this.setState({ logoUrl: <img src="/assets/images/logo/logo-light.png" alt="Digital Agency" /> });
        // }else if(this.props.logo === 'dark'){
        //     this.setState({ logoUrl: <img src="/assets/images/logo/logo-dark.png" alt="Digital Agency" /> });
        // }else if(this.props.logo === 'symbol-dark'){
        //     this.setState({ logoUrl: <img src="/assets/images/logo/logo-symbol-dark.png" alt="Digital Agency" /> });    
        // }else if(this.props.logo === 'symbol-light'){
        //     this.setState({ logoUrl: <img src="/assets/images/logo/logo-symbol-light.png" alt="Digital Agency" /> });
        // }else{
        //     this.setState({ logoUrl: <img src="/assets/images/logo/logo.png" alt="Digital Agency" /> });
        // }
    
    return(
        <header className={`header-area header--fixed formobile-menu header--transparent ${color}`}>
            <div className="header-wrapper" id="header-wrapper">
                <div className="header-left">
                    <div className="logo">
                        <a href="/" 
                            onMouseEnter={() => changeLogoURI()} 
                            onMouseLeave={() => restoreLogoURI()}
                        >
                            {logoUrl}
                        </a>
                    </div>
                </div>
                <div className="header-right">
                    <nav className="mainmenunav d-lg-block">
                        <ul className="mainmenu">
                            <li className="has-droupdown"><Link to="/#">Home</Link></li>
                            <li className="has-droupdown"><Link to="/#about">About</Link></li>
                            <li className="has-droupdown"><Link to="/#team">Team</Link></li>
                            <li><Link to="/contact" >Contact</Link></li>
                        </ul>
                    </nav>
                    <div className="header-btn">
                        <a className="btn-default btn-border btn-opacity" href="tel:+1 628 226 5769">
                            <span></span>
                        </a>
                    </div>
                    {/* Start Humberger Menu  */}
                    <div className="humberger-menu d-block d-lg-none pl--20 pl_sm--10">
                        <span onClick={() => menuTrigger()} className="menutrigger text-white"><FiMenu /></span>
                    </div>
                    {/* End Humberger Menu  */}
                    <div className="close-menu d-block d-lg-none">
                        <span onClick={() => CLoseMenuTrigger()} className="closeTrigger"><FiX /></span>
                    </div>
                </div>
            </div>
            
        </header>
    )
}
export default Header;