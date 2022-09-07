import React from "react";

const NavBar: React.FC<object> = () => {
    return (
         <div className="flex justify-center py-8 text-lg font-semibold bg-green-300 font-general">
            <div className="flex justify-end px-12 space-x-2 bg-red-300">
                <a className="inline-block text-sm tracking-wider text-black bg-orange-300 focus:outline-none focus:ring focus:ring-offset-2 sm:text-base hover:underline hover:underline-offset-2 hover:text-black focus:ring-opacity-50" href="#">Resume</a>
                <a className="inline-block text-sm tracking-wider text-black bg-orange-300 focus:outline-none focus:ring focus:ring-offset-2 sm:text-base hover:underline hover:underline-offset-2 hover:text-black focus:ring-opacity-50" href="#">Resume2</a>
            </div>
        </div>
        
        // // centered navbar
        // <div className="flex justify-center mt-8 mr-8 space-x-2 text-lg font-semibold font-general">
        //     hj
        //     </div>

        
    );
}
  
export default NavBar;