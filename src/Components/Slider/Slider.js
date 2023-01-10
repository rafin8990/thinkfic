import React from 'react';
import { Fade } from 'react-reveal';
import header from '../../Assets/hero-img.png'
import './slider.css'

const Slider = () => {
    return (
        <div>
            <div id='header' className='md:flex'>
                <Fade left>
                    <div className='md:p-20 ml-3'>
                        <h1 className=' font-bold text-3xl text-white'>Welcome to Attend With Course Era</h1>
                        <p className='text-gray-200'>Hand-picked Instructor and expertly crafted courses, <br /> designed for the modern students and entrepreneur.</p>
                        <button className='btn btn-success'>Browse Course</button>
                        <button className='btn btn-secondary ml-3'>Are You ready?</button>
                    </div>
                </Fade>
                <Fade right>
                    <div className='mt-5 '>
                        <img src={header} alt="" />
                    </div>
                </Fade>
            </div>
        </div>
    );
};

export default Slider;