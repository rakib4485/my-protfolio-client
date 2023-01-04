import React from 'react';

const Skills = () => {
    return (
        <div className='my-12' id='skills'>
            <h2 className="text-xl text-center text-secondary">My Skills</h2>
            <h2 className="text-4xl font-semibold  text-center md:w-[60%] mx-auto">I Work Hard to Improve My Skills Regularly</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-7">
                <div className="text-center border p-3 rounded">
                    <h2 className="Text-3xl">HTML</h2>
                </div>
                <div className="text-center border p-3 rounded">
                    <h2 className="Text-3xl">CSS</h2>
                </div>
                <div className="text-center border p-3 rounded">
                    <h2 className="Text-3xl">JAVASCRIPT</h2>
                </div>
                <div className="text-center border p-3 rounded">
                    <h2 className="Text-3xl">BOOTSTRAP</h2>
                </div>
                <div className="text-center border p-3 rounded">
                    <h2 className="Text-3xl">TALIWIND CSS</h2>
                </div>
                <div className="text-center border p-3 rounded">
                    <h2 className="Text-3xl">DAISY UI</h2>
                </div>
                <div className="text-center border p-3 rounded">
                    <h2 className="Text-3xl">REACT</h2>
                </div>
                <div className="text-center border p-3 rounded">
                    <h2 className="Text-3xl">NODE JS</h2>
                </div>
                <div className="text-center border p-3 rounded">
                    <h2 className="Text-3xl">MONGODB</h2>
                </div>
            </div>
        </div>
    );
};

export default Skills;