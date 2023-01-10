import React from 'react';
import { Link } from 'react-router-dom';
import Fade from 'react-reveal/Fade';

const CourseDetails = ({ course }) => {
    const { name, picture, price, link,_id } = course
    return (
        <div>
            <Fade left>
                <div className="card card-compact w-96 bg-base-100 shadow-xl border">
                    <figure><img className=' h-60' src={picture} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">{name}</h2>
                        <div>
                            <h1>Price: ${price}</h1>
                        </div>
                    </div>
                    <div>
                        <a href={link}><button className='btn btn-success w-full '> View Details</button></a>
                        <Link to={`/payment/${_id}`}><button className='btn btn-secondary w-full  my-3'> Pay to add course</button></Link>
                    </div>
                </div>
            </Fade>
        </div>
    );
};

export default CourseDetails;