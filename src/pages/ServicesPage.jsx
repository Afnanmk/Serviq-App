import React, { useEffect, useState } from 'react'
import ServiceCard from '../components/ServiceCard'

const ServicesPage = () => {

  const [allServices, setAllServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    
      fetch("/data/services.json")
        .then(res => res.json())
        .then((data) => {
          setAllServices(data)
          setLoading(false)
        })
        .catch((error) => {
        console.error("Failed to fetch services:", error);
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="p-8 text-center">Loading services...</p>

  return (
    <div className='bg-[#fceceb]'>
    <div className='max-w-[1400px] mx-auto px-4 md:px-8 lg:px-10'>
    <h1 className='text-black text-2xl md:text-3xl font-bold py-8'>Explore Services</h1>
    <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-[550px] md:max-w-full mx-auto pb-10'>
      {allServices.map((service) => (
        <ServiceCard 
          key={service.id}
          id={service.id}
          name={service.name}
          image={service.image}
        />
      ))}
    </div>
    </div>
    </div>
  )
}

export default ServicesPage