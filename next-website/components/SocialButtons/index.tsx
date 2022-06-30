import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faFileLines } from '@fortawesome/free-regular-svg-icons';

export const Socials = () => {

    const socials = [faEnvelope, faGithub, faLinkedin, faFileLines ];
    
    const icons = socials.map((icon) => {
        return (
            <div className="bg-amber-800">
        <FontAwesomeIcon icon={icon} />
        </div>
        )
    })

    return (    
        <div className='flex-row' >
            Hello
            {icons}
        </div>
    )
}