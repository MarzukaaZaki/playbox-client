import React, { useContext, useState } from 'react';
import img from '../../assets/login.png'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProviders';

const Login = () => {
    const { googleLogIn } = useContext(AuthContext);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    // Handle Google Log In
    const handleGoogleLogIn = () => {
        setSuccess('');
        googleLogIn()
            .then(result => {
                const loggedInUser = result.user;
                setSuccess('You are logged in with Google.');
                setError('');
            })
            .catch(error => setError(error.message))
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div>
                <div className="text-center mb-8">
                    <h1 className="text-6xl font-bold">Log In Now </h1>
                </div>
                <div className='flex'>
                    <div>
                        <img src={img} alt="" className='px-6' />
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
                <div className='text-center py-6'>
                    {!success || error ?
                        <div>
                        <button className="btn btn-outline btn-primary rounded" onClick={handleGoogleLogIn}>Log In with Google</button>
                        <p className='text-red-600'>{error}</p> 
                        </div>:
                        <p className='text-green-600'>{success}</p>
                    }
                </div>

            </div>
        </div>
    );
};

export default Login;