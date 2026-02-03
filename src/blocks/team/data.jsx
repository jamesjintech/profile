import React from "react";
import { FaFacebookF , FaLinkedinIn , FaTwitter } from "react-icons/fa";

let data = [
    {
        images: '01',
        title: 'Ted Brinkofski',
        designation: 'CEO',
        socialNetwork: [
            {
                icon: <FaLinkedinIn />,
                url: 'https://www.linkedin.com/in/theodore-brinkofski-195112243/'
            },
            {
                icon: <FaTwitter />,
                url: 'https://twitter.com/teddybrinko'
            },
        ]
    },
    {
        images: '02',
        title: 'Jia Ming',
        designation: 'CTO',
        socialNetwork: [
            {
                icon: <FaLinkedinIn />,
                url: 'https://www.linkedin.com/in/jia-ming-506183195/'
            },
        ]
    },
    {
        images: '03',
        title: 'İlkem A.',
        designation: 'Porject Manager',
        socialNetwork: [
            // {
            //     icon: <FaLinkedinIn />,
            //     url: 'https://www.linkedin.com/in/ilkem-a-06291459/'
            // },
            // {
            //     icon: <FaTwitter />,
            //     url: '#'
            // },
        ]
    },
];

export default data;