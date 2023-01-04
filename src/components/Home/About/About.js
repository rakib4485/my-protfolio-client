import React from 'react';
import myImg from '../../../assets/images/myImg-2.jpeg'
import laptop from '../../../assets/images/2.jpg'

const About = () => {
    return (
        <div className='my-12' id='about'>
            <h2 className="text-xl text-center text-secondary">About Me</h2>
            <h2 className="text-4xl font-semibold  text-center w-[60%] mx-auto">A Passionate Developer Who Loves to Code</h2>
            <div className="grid grid-cols-2 gap-6 mt-12">
                <div>
                    <img src={myImg} alt=""  className='h-[400px] rounded-lg mx-auto'/>
                    <img src={laptop} alt=""  className='h-[250px] rounded-lg mt-[-180px] ml-[-40px]'/>
                </div>
                <div>
                    <h2 className="text-3xl font-semibold">About Me</h2>
                    <p className='text-xl mt-5 mb-8'>I am a self-motivated and self-taught professional who likes to solve problems. I merge a passion for usability and user experience with technical knowledge to create cool digital experiences. Looking for a position to take create and diversified challenges in the Web Development arena across the globe.</p>

                    <a href="#" className='mt-5 border py-3 px-5 rounded-tr-2xl rounded-bl-2xl'> Download My CV</a>
                </div>
            </div>
        </div>
    );
};

export default About;