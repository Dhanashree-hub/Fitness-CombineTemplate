import React from 'react';
import { Link } from "react-router-dom";

export default function GymClass() {
    return (
        <div className="relative z-[1]container-lg container-fluid-lg gym-class mb-0">
            <div
                className="flex flex-wrap justify-center items-center h-120 pt-3 px-0"
                style={{ transform: "translateY(-25%)" }} // Moves the section upwards
            >
                {/* First Box */}
                <div className="w-full md:w-2/5 p-0">
                    <div
                        id="box-1"
                        className="gym-class-box flex flex-col items-center justify-center text-center text-white px-5 bg-yellow-500 py-16 relative rounded-md"
                    >
                        {/* Icon */}
                        <i className="fas fa-running text-black absolute text-9xl opacity-10 bottom-0 right-6"></i>

                        {/* Title */}
                        <h3 className="font-oswald display-4 mb-3 text-white text-5xl">Body Building</h3>
                        {/* Description */}
                        <p className="text-white">
                        Bodybuilding is the practice of engaging in physical exercise to build and develop muscle mass through resistance training, proper nutrition, and sufficient rest. It’s a sport that focuses on maximizing the size and strength of muscles through structured routines and dietary strategies.
                        </p>
                        {/* Link/Button */}
                        <Link
                            to="/"
                            className="btn btn-lg btn-outline-light mt-4 px-4 rounded-0 border border-white text-white hover:bg-white hover:text-black transition"
                        >
                            Join Now
                        </Link>
                    </div>
                </div>

                {/* Second Box */}
                <div className="w-full md:w-2/5 p-0">
                    <div
                        id="box-2"
                        className="gym-class-box flex flex-col items-center justify-center text-center text-white px-5 bg-black py-16 relative rounded-md"
                    >
                        {/* Icon */}
                        <i className="fas fa-dumbbell text-white absolute text-9xl opacity-10 bottom-0 right-6"></i>

                        {/* Title */}
                        <h3 className="font-oswald display-4 mb-3 text-white text-5xl">Muscle Building</h3>
                        {/* Description */}
                        <p className="text-white">
                        Muscle building, also known as muscle hypertrophy, refers to the process of increasing muscle size through strength training, nutrition, and proper recovery. It's similar to bodybuilding but can be focused on improving overall strength and performance rather than just aesthetics.
                        </p>
                        {/* Link/Button */}
                        <Link
                            to="/"
                            className="btn btn-lg btn-outline-light mt-4 px-4 rounded-0 border border-white text-white hover:bg-white hover:text-black transition"
                        >
                            Join Now
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
