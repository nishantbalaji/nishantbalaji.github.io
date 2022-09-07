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
        link: "https://www.linkedin.com/in/nishant-balaji/",
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
        <div className="flex justify-center mt-4 md:space-x-8">
        {socials.map(item => {
            return (
                <a href={item.link} className={`content-center text-lg md:text-3xl shadow-lg rounded-3xl md:transition ease-[cubic-bezier(0.3130,-0.105,0.430,1.590) md:inline-block md:hover:bg-slate-600 md:hover:translate-x-2.5 md:overflow-hidden md:hover:scale-110  `} key={item.name}>
                    <FontAwesomeIcon className="transition p-6 md:p-8 ease-[cubic-bezier(0.3130,-0.105,0.430,1.590) hover:scale-110 hover:text-white" icon={item.icon} />
                </a>
            )
        })}
        </div>
    );
};

export default Icons;


// // reset
// @import '//codepen.io/chrisdothtml/pen/ojLzJK.css'

// btn-size = 90px
// sites = {
//   'facebook': #3B5998
//   'twitter': #3CF
//   'google': #DC4A38
//   'dribbble': #F26798
//   'skype': #00AFF0
// }

// $animate {
//   transition: all .35s
//   transition-timing-function: cubic-bezier(
//     0.310,
//     -0.105,
//     0.430,
//     1.590
//   )
// }

// $btn__inactive {
  
//   &:before {
//     top: 90%
//     left: -110%
//   }
  
//   .fa {
//     transform: scale(.8)
//   }
  
//   // variants
//   for name, color in sites {
    
//     &.{name} {
      
//       &:before {
//         background-color: color
//       }
      
//       .fa {
//         color: color
//       }
//     }
//   }
// }

// $btn__active {

//   &:before {
//     top: -10%
//     left: -10%
//   }

//   .fa {
//     color: #fff
//     transform: scale(1)
//   }
// }

// .social-btns {
//   height: btn-size
//   margin: auto
//   font-size: 0
//   text-align: center
//   position: absolute
//   top: 0
//   bottom: 0
//   left: 0
//   right: 0

//   .btn {
//     @extends $btn__inactive
//     @extends $animate
//     display: inline-block
//     background-color: #fff
//     width: btn-size
//     height: btn-size
//     line-height: btn-size
//     margin: 0 10px
//     text-align: center
//     position: relative
//     overflow: hidden
//     border-radius: 28%
//     box-shadow: 0 5px 15px -5px rgba(0, 0, 0, 0.1)
//     //overflow bug fix
//     opacity: .99

//     &:before {
//       @extends $animate
//       content: ''
//       width: 120%
//       height: 120%
//       position: absolute
//       transform: rotate(45deg)
//     }

//     .fa {
//       @extends $animate
//       font-size: 38px
//       vertical-align: middle
//     }

//     &:focus,
//     &:hover {
//       @extends $btn__active
//     }
//   }
// }
