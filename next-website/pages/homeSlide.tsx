import DarkSwitch from "../components/darkSwitch";
import Description from "../components/Description";
import Footer from "../components/Footer";
import Icons from "../components/Icons"
import Intro from "../components/Intro"
import NavBar from "../components/NavBar";


const HomeSlide = () => {
    return (
        <div className="flex flex-col items-center justify-center w-screen h-screen px-8 pt-12 transition-colors duration-300 dark:text-white dark:bg-background md:pt-32">
            <div className="flex flex-col h-full font-general">
                <DarkSwitch />
                <Intro />
                <Description />
                <Icons />   
                <Footer />
            </div>    
        </div>
    );
};

export default HomeSlide;