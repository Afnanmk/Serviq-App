import React, {useEffect, useState} from 'react'
import { useSearchParams } from 'react-router-dom';
import ProviderCard from '../components/ProviderCard';

const Providers = () => {

  const [providers, setProviders] = useState([]);

  useEffect(() => {
      fetch("/data/providers.json")
        .then(res => res.json())
        .then((data) => {
          setProviders(data)
        })
        .catch((error) => {
        console.error("Failed to fetch services:", error);
      });
    
  }, []);

 const [searchParams] = useSearchParams();
  const serviceId = searchParams.get('service');
  const cityParam = searchParams.get('city');

  const slugify = (text) => text?.toLowerCase().replace(/\s+/g, '-');
  const humanize = (slug) => slug?.split('-').map((s) => s.charAt(0).toUpperCase() + s.slice(1)).join(' ');


  const filteredProviders = providers.filter((provider) => {
    const serviceMatches = serviceId ? provider.service.toLowerCase() === serviceId.toLowerCase() : true;
    const cityMatches = cityParam ? slugify(provider.city) === cityParam.toLowerCase() : true;
    return serviceMatches && cityMatches;
  });

  return (
    <div className='bg-[#fceceb] min-h-screen'>
    <div className='max-w-[1400px] mx-auto px-4 md:px-8 lg:px-10 pb-10'>
    <h1 className='font-bold text-2xl py-5'>
      Providers{serviceId ? ` for: ${serviceId}` : ''}{cityParam ? ` in ${humanize(cityParam)}` : ''}
    </h1>
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