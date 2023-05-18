import React from 'react';
import img from '../../assets/login.png'
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div>
                <div className="text-center mb-8">
                    <h1 className="text-6xl font-bold">Log In Now </h1>
                </div>
                <div className='flex'>
                    <div>
                        <img src={img} alt="" className='px-6'/>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">

                        <form className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                            <div className='text-xs'>
                            <Link to='/register'> Don't have an account? Register</Link> 
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;