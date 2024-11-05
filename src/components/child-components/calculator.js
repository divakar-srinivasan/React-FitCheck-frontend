import React from 'react'
import { Link , Outlet } from 'react-router-dom'

const calculator = () => {
  return (
    <>
        <nav>
            <ul className='flex justify-evenly items-center bg-gray-950 text-white font-libre p-4 '>
                <li className='hover:text-custom-red'>
                    <Link to={'bmi'}>BMI Calculator</Link>
                </li>
                <li className='hover:text-custom-red'>
                    <Link to={'bf'}>Body Fat Calculator</Link>
                </li>
                <li className='hover:text-custom-red'>
                    <Link to={'hr'}>Heart Rate Calculator</Link>
                </li>
                <li className='hover:text-custom-red'>
                    <Link to={'rm'}>1 Rep Max Calculator</Link>
                </li>
            </ul>
        </nav>
        <Outlet />
    </>
  )
}

export default calculator