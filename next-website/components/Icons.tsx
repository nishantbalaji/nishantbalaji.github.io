import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faFileLines } from '@fortawesome/free-regular-svg-icons';
import { faEnvelope, faHandshake } from '@fortawesome/free-solid-svg-icons';

const socials = [
    {
        name: "github",
        link: "https://github.com/nishantbalaji",
        icon: faGithub,
        color: "bg-gray-600"
    },
    {
        name: "linkedin",
        link: "https://www.linkedin.com/in/nishantbalaji/",
        icon: faLinkedinIn,
        color: "bg-blue-600"
    },
    {
        name: "resume",
        link: "/resume.pdf",
        icon: faFileLines,
        color: "bg-gray-600"
    },
    {
        name: "email",
        link: "mailto:nishantb1130@gmail.com",
        icon: faEnvelope,
        color: "bg-gray-600"
    },
    {
        name: "meet",
        link: "https://meet.nishantbalaji.com",
        icon: faHandshake,
        color: "bg-gray-600"

    }
]

const Icons: React.FC<object> = () => {
    return (
        <div className="flex justify-center mt-8 space-x-2 md:space-x-4 lg:mt-32 lg:space-x-8">
        {socials.map(item => {
            return (
                <a href={item.link} className={`content-center text-lg md:text-3xl shadow-lg rounded-3xl md:transition ease-[cubic-bezier(0.3130,-0.105,0.430,1.590) md:inline-block md:hover:bg-slate-600 dark:md:hover:bg-white md:hover:translate-x-2.5 dark:shadow-gray-800 md:overflow-hidden md:hover:scale-110  `} key={item.name}>
                    <FontAwesomeIcon className="transition p-6 md:p-8 ease-[cubic-bezier(0.3130,-0.105,0.430,1.590) hover:scale-110 hover:text-white dark:hover:text-black" icon={item.icon} />
                </a>
            )
        })}
        </div>
    );
};

export default Icons;