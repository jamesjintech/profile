import React from 'react';
import {FaLinkedinIn, FaGithub, FaTelegramPlane} from "react-icons/fa";
import DiscordIcon from '../Icons/discord';

const SocialShare = [
    // {Social: <FaFacebookF /> , link: 'https://www.facebook.com/'},
    {Social: <FaLinkedinIn /> , link: 'https://www.linkedin.com/in/james-j-3868773a8/'},
    {Social: <FaGithub /> , link: 'https://github.com/jamesjintech'},
    {Social: <DiscordIcon /> , link: 'https://discord.com/users/1461449186292797492'},
    {Social: <FaTelegramPlane /> , link: 'https://t.me/fulldev79'},
];

const FooterTwo = () => {
    return (
        <div className="footer-style-2 ptb--30 bg_color--6">
            <div className="wrapper plr--50 plr_sm--20">
                <div className="row align-items-center justify-content-between">
                    <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                        <div className="inner">
                            <div className="logo text-center text-sm-left mb_sm--20">
                                {/* <a href="/home-one">
                                    <img src="/assets/images/logo/logo-light.png" alt="Logo images"/>
                                </a> */}
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                        <div className="inner text-center">
                            <ul className="social-share rn-lg-size d-flex justify-content-center liststyle">
                                {SocialShare.map((val , i) => (
                                    <li key={i}><a href={`${val.link}`} target='_blank' rel="noopener noreferrer">{val.Social}</a></li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-12 col-sm-12 col-12">
                        <div className="inner text-lg-right text-center mt_md--20 mt_sm--20">
                            <div className="text">
                                <p>Copyright © 2026 James Jin. All Rights Reserved.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default FooterTwo;