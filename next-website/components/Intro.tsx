import React from "react";
import ReactTypingEffect from 'react-typing-effect';

const Intro: React.FC<object> = () => {

    const titles = [
        "developer",
        "engineer",
        "programmer",
        "coder",
        "full stack engineer",
        "student",
        "computer engineer"
    ]

    return (
        <div>
            <h1 className="items-center text-2xl text-center md:text-4xl lg:text-5xl">
                hello, world! 👋
            </h1>
            <h1 className="mb-8 text-4xl text-center md:text-6xl lg:text-8xl">
                i&apos;m <span className="text-blue-600"> nishant balaji</span>
            </h1>
            <div className="flex justify-center md:mt-8">
                <ReactTypingEffect
                    text={titles}
                    speed={100}
                    eraseDelay={1000}
                    className="text-2xl"
                />
            </div>
        </div>
    );
}

export default Intro;