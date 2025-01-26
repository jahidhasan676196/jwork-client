import React, { useContext } from 'react';
import logo from '../assets/images/logo.png'
import { Link } from 'react-router-dom';
import { Authcontext } from '../AuthProvider/AuthProvider';

const Navbar = () => {
    const { user, signOutWithAuth } = useContext(Authcontext)
    console.log(user);
    const handleSignOut = () => {
        signOutWithAuth()
            .then(() => {
                alert('signOut is successfull')
            })
    }
    return (
        <div className='navbar bg-base-100 shadow-sm container px-4 mx-auto'>
            <Link to='/' className='flex-1'>
                <div className='flex gap-2 items-center'>
                    <img className='w-auto h-7' src={logo} alt='' />
                    <span className='font-bold'>SoloSphere</span>
                </div>
            </Link>
            <div className='flex-none'>
                <ul className='menu menu-horizontal px-1 '>
                    <Link to='/'>
                        <div className='mr-5'>Home</div>
                    </Link>
                    {
                        !user?.email && <button className=''>
                            <Link to='/login'>Login</Link>
                        </button>
                    }
                </ul>
                {
                    user?.email && <div className='dropdown dropdown-end z-50'>
                        <div
                            tabIndex={0}
                            role='button'
                            className='btn btn-ghost btn-circle avatar'
                        >
                            <div className='w-10 rounded-full' title=''>
                                <img
                                    referrerPolicy='no-referrer'
                                    alt='User Profile Photo'
                                    src={user.photoURL}
                                />
                            </div>
                        </div>
                        <ul
                            tabIndex={0}
                            className='menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52'
                        >
                            <Link to='/addJobs'>
                                <div className='justify-between'>Add Job</div>
                            </Link>
                            <Link to='/myPostedJobs'>
                                <div>My Posted Jobs</div>
                            </Link>
                            <Link to='/bids'>
                                <div>My Bids</div>
                            </Link>
                            <li>
                                <div>Bid Requests</div>
                            </li>
                            <li className='mt-2'>
                                <button onClick={handleSignOut}  className='bg-gray-200 block text-center'>Logout</button>
                            </li>
                        </ul>
                    </div>
                }
            </div>
        </div>
    );
};

export default Navbar;