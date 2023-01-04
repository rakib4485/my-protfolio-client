import React from 'react';
import myImg from '../../../assets/images/myImg.jpeg'

const Home = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 mt-8' id='home'>
            <div className='my-auto'>
            <h1 className="text-5xl font-bold"><span className="text-accent">Md Rakibul</span> Islam</h1>
            <h3 className="text-xl">Web Developer based In Bangladesh</h3>
            <a href="#contact" className="btn btn-outline btn-secondary py-2 text-white mt-5">Get Connected</a>
            </div>
            <div className=''>
                <img src={myImg} alt="" className='w-[80%] rounded-full mt-5 mx-auto'/>
            </div>
        </div>
    );
};

export default Home;