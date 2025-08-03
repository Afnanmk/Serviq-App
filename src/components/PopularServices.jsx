import React from 'react'
import { Link } from 'react-router-dom'
import plumberIcon from '../assets/images/icons/plumber-furniture-and-household-svgrepo-com.svg'
import electIcon from '../assets/images/icons/voltmeter-svgrepo-com.svg'
import acIcon from '../assets/images/icons/air-conditioner-svgrepo-com.svg'

const PopularServices = () => {
  return (
    <section className='py-10'>
    <div className='max-w-[1400px] mx-auto px-4 md:px-8 lg:px-10 flex flex-col gap-4 items-center'>
     <h2 className='font-bold text-2xl md:text-3xl text-center'>Popular Services</h2>
     <p className='text-gray-600 text-center text-base md:text-lg max-w-[800px]'>Need help fast? These services are just a click away.</p>
     <div className='flex flex-col md:flex-row justify-center items-stretch gap-10 my-4 md:my-10 max-w-[600px] md:max-w-[1180px]'>
        <Link to=""><div className='space-y-1 border border-gray-300 rounded-[4px] p-4 lg:p-6 h-full'>
            <img src={plumberIcon} className='w-10 mb-3' alt="Plumber Icon" />
            <p className='font-semibold text-sm sm:text-base'>Plumber</p>
            <p className='text-sm sm:text-base'>Fix leaks, clogged pipes, and bathroom fittings quickly and reliably.</p>
        </div></Link>
        <Link to=""><div className='space-y-1 border border-gray-300 rounded-[4px] p-4 lg:p-6 h-full'>
            <img src={electIcon} className='w-10 mb-3' alt="Electrician Icon" />
            <p className='font-semibold text-sm sm:text-base'>Electrician</p>
            <p className='text-sm sm:text-base'>Safe installation, wiring, and repairs by certified professionals.</p>
        </div></Link>
        <Link to=""><div className='space-y-1 border border-gray-300 rounded-[4px] p-4 lg:p-6 h-full'>
            <img src={acIcon} className='w-10 mb-3' alt="Ac Repair Icon" />
            <p className='font-semibold text-sm sm:text-base'>AC Repair</p>
            <p className='text-sm sm:text-base'>Get your AC running like new with expert diagnostics and servicing.</p>
        </div></Link>
     </div>
     <Link to="/services"><div className='bg-primary text-white font-[500] px-5 py-2 rounded-[4px]'><p>See All Services</p></div></Link>
    </div>
    </section>
  )
}

export default PopularServices