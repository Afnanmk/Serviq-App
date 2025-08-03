import React from 'react'
import { Link } from 'react-router-dom'

const ServiceCard = ({id, name, image}) => {
  return (
      <Link to={`/results?service=${id}`}>
      <div className="bg-white border border-gray-300 rounded-b-[4px] rounded-t-xl shadow-md transition duration-200 hover:-translate-y-1 dark:bg-gray-800 dark:border-gray-700">
        <img
          className="rounded-t-xl w-full h-[200px] object-cover"
          src={image}
          alt="Blog cover"
        />
    
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-xl md:text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {name}
          </h5>
        </a>
        <p className="mb-3 font-normal md:text-lg text-gray-700 dark:text-gray-400">
         12 Providers
        </p>
      
      </div>
    </div>
    </Link>
  )
}

export default ServiceCard