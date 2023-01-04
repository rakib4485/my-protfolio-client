import React from 'react';
import { FcGraduationCap } from "react-icons/fc";

const Education = () => {
    const cap = <>
    <FcGraduationCap></FcGraduationCap>
    </>
    return (
        <div className='my-20' id='education'>
            <h2 className="text-xl text-center text-secondary">Education</h2>
            <h2 className="text-4xl font-semibold  text-center w-[60%] mx-auto">I do Web Development alongside my Studies</h2>

            <div className="grid grid-cols-3 gap-4 mt-10">
                <div className='p-3 border rounded-lg'>
                    <h2 className="text-2xl">Bachelor of Science</h2>
                    <p className="text-xl">(2020 - Present)</p>
                    <p className="text-xl">Daffodil International University</p>
                    <p className="text-lg">Computer Science & Engineering (CSE)</p>
                </div>
                <div className='p-3 border rounded-lg'>
                    <h2 className="text-2xl">Higher Secondary</h2>
                    <p className="text-xl">(2017 - 2019)</p>
                    <p className="text-xl">Cumilla Residential College</p>
                    <p className="text-lg">Science</p>
                </div>
                <div className='p-3 border rounded-lg'>
                    <h2 className="text-2xl">Secondary School</h2>
                    <p className="text-xl">(2012 - 2017)</p>
                    <p className="text-xl">Cumilla Modern High School</p>
                    <p className="text-lg">Science</p>
                </div>
            </div>
        </div>
    );
};

export default Education;