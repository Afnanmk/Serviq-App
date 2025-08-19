import React, {useEffect, useState} from 'react'
import Select from 'react-select'
import { useNavigate } from 'react-router-dom'
// import Async, { useAsync } from 'react-select/async';
import HeroImage from '../assets/images/repair-household-appliances-abstract-concept-illustration.png'




const Hero = () => {

       const customStyles = {
    control: (base, state) => ({
      ...base,
      borderColor: state.isFocused ? "#2563eb" : "#e5e7eb", // blue-600 or gray-200
      boxShadow: "none",
      "&:hover": {
        borderColor: "#2563eb"
      },
      minHeight: "42px",
      fontSize: "14px",
      textAlign: "left"
    }),
    menu: (base) => ({
      ...base,
      zIndex: 50
    }),
     placeholder: (base) => ({
    ...base,
    textAlign: "left"
  }),
  singleValue: (base) => ({
    ...base,
    textAlign: "left"
  }),
  option: (base) => ({
    ...base,
    textAlign: "left"
  })
  };
      
      
      const navigate = useNavigate()
      const [cities, setCities] = useState([]);
      const [services, setServices] = useState([]);
      const [selectedCity, setSelectedCity] = useState(null)
      const [selectedService, setSelectedService] = useState(null)


      // Fetch services
      useEffect(() => {
        
        fetch("/data/services.json")
        .then(res => res.json())
        .then(data => {
          const options = data.map(service => ({
            value:service.id,
            label: service.name
          }))
          setServices(options)
        })
      }, []);


      // Fetch cities
      useEffect(() => {
        
        fetch("/data/cities.json")
        .then(res => res.json())
        .then(data => {
          const options = data.map(city => ({
            value:city.id,
            label:city.name
          }))
          setCities(options)
        })
      }, []);


   
      const handleSearch = () => {
        if(selectedService && selectedCity) {
          navigate(`/results?service=${selectedService.value}&city=${selectedCity.label}`)
        }
      }



  return (
    <div className='bg-[#fceceb] min-h-screen flex flex-col items-center justify-center'>
        <div className='w-[85%] sm:w-[70%] text-center pt-10'>
            <h1 className='font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-3 text-center'>Find Trusted Services Near You</h1>
            <p className="text-gray-600 text-sm sm:text-base md:text-lg max-w-[350px] md:max-w-[400px] lg:max-w-[600px] xl:max-w-[800px] mx-auto lg:mx-auto">
  Easily find plumbers, electricians, cleaners, and more — right in your city.
</p>
            <div className='flex flex-col md:flex-row justify-center items-center gap-4 mt-6 max-w-[400px] md:max-w-[800px] mx-auto'>
                
      <div className='w-full md:w-1/3 rounded-[4px]'><Select options={services} onChange={(options) => setSelectedService(options)} styles={customStyles} placeholder="Select a service..." /></div>
      <div className='w-full md:w-1/3 rounded-[4px]'><Select options={cities} onChange={(options) => setSelectedCity(options)} styles={customStyles} placeholder="Select a city..."/></div>

      <button type="submit" onClick={handleSearch} className='bg-primary text-white font-[500] px-5 py-2 rounded-[4px]'>Search</button>
            </div>
        </div>


        <div className=''>
           <img src={HeroImage} className='w-[260px] h-[260px] sm:w-[320px] sm:h-[320px] md:w-[400px] md:h-[400px]' alt="" />
        </div>
        </div>
   
  )
}

export default Hero