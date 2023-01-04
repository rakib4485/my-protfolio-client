import React from 'react';
import myImg from '../../../assets/images/myImg.jpeg'

const Home = () => {
    return (
        <div className='flex items-center mt-8' id='home'>
            <div className='w-1/2'>
            <h1 className="text-5xl font-bold"><span className="text-accent">Md Rakibul</span> Islam</h1>
            <h3 className="text-xl">Web Developer based In Bangladesh</h3>
            <a href="#contact" className="btn btn-outline btn-secondary py-2 text-white mt-5">Get Connected</a>
            </div>
            <div className='w-1/2'>
                <img src={myImg} alt="" className='w-[80%] rounded-full'/>
            </div>
        </div>
    );
};

export default Home;