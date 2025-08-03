import React from 'react'
import CallIcon from '../assets/images/icons/call-receive-svgrepo-com.svg'
import WhatsAppIcon from '../assets/images/icons/whatsapp-svgrepo-com.svg'
import star from '../assets/images/icons/star-svgrepo-com.svg'
import dot from '../assets/images/icons/dot-svgrepo-com.svg'



const ProviderCard = ({id, name, rating, city, service, contact}) => {
  return (
    <div>
      
            <div key={id} className="bg-white border border-gray-300 rounded-b-[4px] rounded-t-xl shadow-md dark:bg-gray-800 dark:border-gray-700">
          
            <div className="p-5">
              <a href="#">
                <p className="mb-2 text-xl md:text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {name}
                </p>
              </a>
              <div className='flex items-center gap-3 font-semibold'>
                <p className='inline-flex items-center gap-1'><i><img src={star} className='w-4' alt="" /></i>{rating}</p>
                <img src={dot} className='w-6' alt="" />
                <p>{city}</p>
              </div>
              <p className='text-gray-900 font-[500] text-base py-3'>{service}</p>
              <div className='flex items-center gap-3 flex-wrap'>
                <a href={`tel:${contact}`} className='bg-primary text-white font-[500] px-3 py-2 rounded-[4px] inline-flex items-center gap-1'><img src={CallIcon} className='w-5 h-5' alt="" /><p>Call Now</p></a>
                <a href={`tel:${contact}`} className='bg-green-500 hover:bg-green-600 text-white font-[500] px-3 py-2 rounded-[4px] inline-flex items-center gap-1'><img src={WhatsAppIcon} className='w-6 h-6' alt="" /><p>WhatsApp</p></a>
              </div>
            </div>
          </div>
         
    </div>
  )
}

export default ProviderCard