import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';
import registerpic from '../../Assets/refister.webp'

const Register = () => {
    const { createUser, googleSignIn, updateUser } = useContext(AuthContext);
    const { register, formState: { errors }, handleSubmit } = useForm();


    const handleRegister = data => {
        createUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user)
                const userInfo = {
                    displayName: data.name
                }
                console.log(userInfo)
                updateUser(userInfo)
                    .then(result => {
                        console.log(result)
                    })
                    .catch(error => console.error(error))
            })
            .catch(error => console.error(error))

    }

    const handleGoogle = () => {
        googleSignIn()
            .then(result => {
                const user = result.user;
                console.log(user)
            })
            .catch(error => console.error(error))
    }
    return (
        <div className='h-[800px] lg:max-w-[1440px] mx-auto lg:flex justify-center items-center'>
            <div className='lg:w-1/2 flex justify-center '>
                <form onSubmit={handleSubmit(handleRegister)} className='lg:w-2/3 border p-10 rounded-lg'>
                    <h1 className='text-center text-4xl text-success font-semibold shadow p-2 my-5'>Register Now</h1>
                    <div>
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input {...register("name", { required: "Name is required" })} type="text" placeholder="Full Name" className="input input-bordered w-full" />
                        {errors.name && <p className="text-red-600">{errors.name?.message}</p>}
                    </div>
                    <div>
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input {...register("email", { required: "Email Address is required" })} type="email" placeholder="email" className="input input-bordered w-full" />
                        {errors.email && <p className="text-red-600">{errors.email?.message}</p>}

                    </div>
                    <div>
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input {...register("password", {
                            required: "Password is required",
                            minLength: { value: 6, message: "pasword must be 6 characters or longer" }

                        })} type="password" placeholder="password" className="input input-bordered w-full" />
                        {errors.password && <p className="text-red-600">{errors.password?.message}</p>}
                    </div>
                    <div className=" mt-6">
                        <button type='submit' className="btn btn-outline btn-success w-full">Sign UP</button>
                        <button onClick={handleGoogle} className="btn btn-success w-full mt-2">Sign UP with google</button>
                    </div>
                    <p className='mt-5'>Already have an account? <Link to='/login'> <span className='text-success'>Please Login</span></Link></p>
                </form>
            </div>
            <div className=' lg:w-1/2 order-first md:order-2'>
                <img src={registerpic} alt="" />
            </div>
        </div>
    );
};


export default Register;
