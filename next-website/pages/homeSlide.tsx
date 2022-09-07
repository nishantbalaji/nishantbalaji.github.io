import Footer from "../components/Footer";
import Icons from "../components/Icons"
import Intro from "../components/Intro"
import NavBar from "../components/NavBar";


const HomeSlide = () => {
    return (
        <div className="flex flex-col items-center h-screen pt-12 mx-12 md:mx-32 md:pt-32">
            <div className="flex flex-col h-full w-fit font-general">
                <Intro />
                <div className="mt-8 text-center md:mt-48 text-md md:text-xl max-w-prose">
                    <p >
                        i'm currently a third year student at <span className="underline decoration-yellow-300 underline-offset-2">uc san diego 🔱</span> studying computer engineering. i'm passionate about technology and i love learning more and exploring the field!
                    </p>
                    <br />
                    <p>
                        i've previously interned at <span className="font-semibold text-green-800">nvidia</span> and <span className="font-semibold text-blue-600">nasa goddard space flight center</span>. at ucsd, i'm currently the vice president of events for the <a href="https://acmucsd.com" className="font-semibold text-blue-800"> association for computing machinery (acm) at uc san diego student chapter</a> as well as a developer for <a href="https://tse.ucsd.edu" className="font-semibold text-yellow-600"> triton software engineering (tse)</a> on the lap student tracker team. 
                    </p>
                    <br />
                    <p>
                        feel free to connect with me at any of the links below!
                    </p>
                </div> 
                <Icons />   
                <Footer />
            </div>    
        </div>
    );
};

export default HomeSlide;