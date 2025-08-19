import React, {useEffect, useState} from 'react'
import { useSearchParams } from 'react-router-dom';
import ProviderCard from '../components/ProviderCard';

const Providers = () => {

  const [providers, setProviders] = useState([]);
  const [loading, setLoading] = useState(false)

  useEffect(() => {
      fetch("/data/providers.json")
        .then(res => res.json())
        .then((data) => {
          setProviders(data)
          setLoading(false)
        })
        .catch((error) => {
        console.error("Failed to fetch services:", error);
        setLoading(false);
      });
    
  }, []);

 const [searchParams] = useSearchParams();
  const serviceId = searchParams.get('service')?.trim().toLowerCase();
  const city = searchParams.get('city')?.trim().toLowerCase()
 

 const filteredProviders = providers.filter((provider) => {

 if(city) {
  return (
     provider.service?.trim().toLowerCase() === serviceId &&
      provider.city?.trim().toLowerCase() === city
  )
 } else {
    return provider.service.toLowerCase() === serviceId
 }
});

  return (
    <div className='bg-[#fceceb] min-h-screen'>
    <div className='max-w-[1400px] mx-auto px-4 md:px-8 lg:px-10 pb-10'>
    <h1 className='font-bold text-2xl py-5'>Providers for: {serviceId}</h1>
    <div className='grid grid-cols-3 gap-10'>
     {filteredProviders.map((provider) => (
      <ProviderCard
        key={provider.id}
        id={provider.id}
        name={provider.name}
        rating={provider.rating}
        city={provider.city}
        service={provider.service}
        contact={provider.contact}
      />
     ))}
    </div>
    </div>
    </div>

  )
}

export default Providers