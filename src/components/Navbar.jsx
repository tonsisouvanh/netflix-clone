import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserAuth } from '../context/AuthContext'

function Navbar() {
  const { user, logOut } = UserAuth();
  const navigate = useNavigate();
  // console.log(user);

  const handleLogout = async () => {
    try {
      await logOut();
      navigate('/');
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <div className='flex justify-between items-center p-4 z-[100] w-full fixed'>
        <Link to="/">
          <h1 className="text-red-600 font-bold text-4xl cursor-pointer">
            NETFLIX
          </h1>
        </Link>

        {user?.email ? (<div>
          <Link to="/account">
            <button className='text-sm font-bold text-white py-1 px-4 rounded mr-4 md:py-2 md:px-6 md:text-lg'>Account</button>
          </Link>
          <button
            onClick={handleLogout}
            className='text-sm bg-red-600 py-1 px-4 rounded cursor-pointer text-white md:py-2 md:px-6 md:text-lg'>Logout</button>
        </div>) : (<div>
          <Link to="/login">
            <button className='text-sm font-bold text-white py-1 px-4 rounded mr-4 md:py-2 md:px-6 md:text-lg'>Sign In</button>
          </Link>
          <Link to="/signup">
            <button className='text-sm bg-red-600 py-1 px-4 rounded cursor-pointer text-white md:py-2 md:px-6 md:text-lg'>Sign Up</button>
          </Link>
        </div>)}

      </div>
    </>
  )
}

export default Navbar