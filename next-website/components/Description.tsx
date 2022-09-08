import React from "react";

const Description: React.FC<object> = () => {
    return (
        <div className="mt-8 text-center md:mt-20 text-md md:text-xl max-w-prose">
            <p >
                i&apos;m currently a third year student at <a href="https://ucsd.edu" className="p-1 font-semibold underline rounded-lg decoration-ucsd-gold hover:bg-ucsd-blue hover:text-ucsd-gold underline-offset-2 hover:no-underline">uc san diego 🔱</a> studying computer engineering. i&apos;m passionate about technology and i love learning more and exploring the field!
            </p>
            <br />
            <p>
                i&apos;ve previously interned at <a href="https://www.nvidia.com" className="p-1 font-semibold rounded-lg text-nvidia hover:bg-nvidia hover:bg-opacity-20">nvidia</a> and <a href="https://www.nasa.gov/goddard" className="p-1 font-semibold rounded-lg text-nasa hover:bg-nasa hover:bg-opacity-20">nasa goddard space flight center</a>. at ucsd, i&apos;m currently the vice president of events for the <a href="https://acmucsd.com" className="p-1 font-semibold rounded-lg text-acm hover:bg-acm hover:bg-opacity-20"> association for computing machinery at uc san diego student chapter</a> as well as a developer for <a href="https://tse.ucsd.edu" className="p-1 font-semibold rounded-lg text-tse hover:bg-tse hover:bg-opacity-20"> triton software engineering</a> on the lap student tracker team. 
            </p>
            <br />
            <p>
                feel free to connect with me at any of the links below!
            </p>
        </div> 

    );

};

export default Description;