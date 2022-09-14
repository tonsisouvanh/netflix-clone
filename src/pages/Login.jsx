import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserAuth } from '../context/AuthContext';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { user, logIn } = UserAuth();
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      await logIn(email, password);
      navigate('/');
    } catch (error) {
      setError(error.message);
    }
  }


  return (
    <div className="w-full h-screen">
      <img className='hidden sm:block absolute w-full h-full object-cover' src="https://user-images.githubusercontent.com/33485020/108069438-5ee79d80-7089-11eb-8264-08fdda7e0d11.jpg" alt="/" />
      <div className='bg-black/60 fixed top-0 left-0 w-full h-screen'>
      </div>
      <div className='fixed w-full px-4 py-24 z-50'>
        <div className='max-w-[450px] h-[600px] bg-black/75 mx-auto text-white'>
          <div className='max-w-[320px] mx-auto py-16'>
            <h1 className='text-3xl font-bold'>Login</h1>
            {error ? <p className='text-sm bg-red-400 p-3 mt-4'>{error}</p> : null}
            <form onSubmit={handleSubmit} className='w-full flex flex-col py-4'>
              <input
                onChange={(e) => setEmail(e.target.value)}
                className='p-3 my-2 bg-gray-700 rounded'
                type="email" placeholder='Email'
                autoComplete='email' />
              <input
                onChange={(e) => setPassword(e.target.value)}
                className='p-3 my-2 bg-gray-700 rounded'
                type="password" placeholder='Password'
                autoComplete='current-password' />
              <button className='text-lg transition-all delay-75 hover:text-xl bg-red-600 py-3 my-6 rounded font-bold'>Login</button>
              <div className='w-full flex justify-between items-center text-sm text-gray-500'>
                <p><input className='mr-2' type="checkbox" />Remember me</p>
                <p>Need Help?</p>
              </div>
              <p className='text-gray-300 text-sm my-5'><span className='text-sm text-gray-500 mr-2'>New to Netflix?</span>
                <Link to="/signup">Sign up</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login