import React from 'react';
import { Link } from 'react-router-dom';

const Registration = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div>
                <div className="text-center mb-8">
                    <h1 className="text-6xl font-bold">Create an Account </h1>
                </div>

                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">

                    <form className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="Your Name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="Your Email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="Create a Password" className="input input-bordered" />
                            
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo</span>
                            </label>
                            <input type="url" placeholder="Upload Photo URL" className="input input-bordered" />
                            
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Register</button>
                        </div>
                        <div className='text-xs'>
                            <Link to ='/login'> Already have an account? Log In</Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    );
};

export default Registration;