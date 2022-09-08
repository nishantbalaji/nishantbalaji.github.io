import React, { useEffect, useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { useTheme } from "next-themes";


const DarkSwitch: React.FC<object> = () => {
    
    const [ mounted, setMounted ] = useState(false)
    const { theme, setTheme } = useTheme();
    
    useEffect(() => setMounted(true), [])
  
    if(!(mounted)) return null
  

    return (
        <div className="mb-8 text-right">
            <button 
                 
                onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
                
                <FontAwesomeIcon
                    icon={theme === "light" ? faMoon : faSun}
                    className="w-6 h-6 md:h-8 md:w-8"
                />
            </button>
        </div>
    );
};

export default DarkSwitch;