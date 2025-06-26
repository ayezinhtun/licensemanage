import React from 'react'
import { Link } from 'react-router-dom';
import { User, Mail, Lock, Eye, EyeOff } from 'lucide-react';
import './input.style.css'


const LoginForm = () => {
  return (
    <div className='container-fluid min-vh-100 d-flex flex-column align-items-center justify-content-center' style={{  background: 'linear-gradient(to bottom right, #eff6ff, #c7d2fe)' }}>
        <div className="d-flex flex-column align-items-center justify-content-center">
                <div className='d-flex align-items-center justify-content-center' style={{ width: '200px', height: '100px' }}>
                    <img className='w-100' src="https://i.ibb.co/vfwzyYQ/1cloud-NG-Logo-v2.png" alt="" />
                </div>
                     <h2 className='mb-2'>License Manager</h2>
                     <p>Sign in to your account</p>
        </div>
        <div className="container py-5 px-4 rounded-4 bg-white" style={{ width: '28rem' }}>
            <form action="">
                <div className='mb-4'>
                    <label htmlFor="" className='pb-2'>Email Address <span className='text-danger'>*</span> </label>
                     <div className="input-icon-wrapper">
                    <input
                        type="email"
                        className="form-control"
                        placeholder="Enter your Email"
                        required
                    />
                    <Mail className="input-icon" />
                    </div>
                </div>

                <div className='mb-3'>
                    <label htmlFor="" className='pb-2'>Password <span className='text-danger'>*</span> </label>
                     <div className="input-icon-wrapper">
                    <input
                        type="password"
                        className="form-control"
                        placeholder="Create a password"
                        required
                    />
                    <Lock className="input-icon" />
                    </div>
                </div>

                 <div className="text d-flex mb-4 align-items-center justify-content-between">
                    <div className="checkbox-group">
                        <input type="checkbox" className='me-1' />
                        <label>Remember me</label>
                    </div>
                    <Link className='nav-link text-primary'>Forgot Password?</Link>
                </div>

                <button className='btn btn-primary form-control btn-lg py-2 mb-4'>Sign In</button>

                <p className='text-center m-0'>Don't have an account? 
                    <Link className='text-primary ps-2 text-decoration-none' to="/signup" >Sign up</Link>
                 </p>
            </form>
        </div>
    </div>
  )
}

export default LoginForm
