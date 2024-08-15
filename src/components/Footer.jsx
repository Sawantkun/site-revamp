import React from 'react'

const Footer = () => {
  return (
    <footer className='pt-10 w-full'>
       <div className="h-[1px] w-full dark:h-[2px] dark:bg-black opacity-10 bg-white"></div>
        <ul className='flex items-center w-full justify-center py-6'>
            <li><a className='mx-4 text-white dark:opacity-50 dark:text-black opacity-75' href="#home">Terms of Service</a></li>
            <li><a className='mx-4 text-white dark:opacity-50 dark:text-black opacity-75' href="#about">Privacy Policy</a></li>
            <li><a className='mx-4 text-white dark:opacity-50 dark:text-black opacity-75' href="#services">Contact Us</a></li>
        </ul>
        <div className='text-center w-full text-white dark:opacity-50 dark:text-black opacity-75'>
        © 2024 BookAI. All rights reserved.
        </div>
    </footer>
  )
}

export default Footer