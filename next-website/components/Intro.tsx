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
            <h1 className="items-center text-5xl text-center">
                hello, world! 👋
            </h1>
            <h1 className="mb-8 text-center text-8xl">
                i'm <span className="text-blue-600"> nishant balaji</span>
            </h1>
            <div className="flex justify-center mt-8">
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