import React, { useState } from 'react';

const LanguageToggle = () => {
  const [language, setLanguage] = useState('EN');

  const toggleLanguage = () => {
    setLanguage(prev => (prev === 'EN' ? 'AR' : 'EN'));
  };

  return (
    <div
      className="w-28 h-8 flex items-center bg-[#f6c8c5] rounded-full p-1 cursor-pointer border border-accent"
      onClick={toggleLanguage}
    >
      {/* EN side */}
      <div
        className={`flex-1 flex items-center justify-center font-medium rounded-full transition-colors duration-300 ${
          language === 'EN' ? 'bg-white text-black' : 'text-gray-700'
        }`}
      >
        <p className='font-semibold'>EN</p>
      </div>

      {/* Arabic side */}
      <div
        className={`flex-1 flex items-center justify-center font-medium rounded-full transition-colors duration-300 ${
          language === 'AR' ? 'bg-white text-black' : 'text-gray-700'
        }`}
      >
        <p className='font-semibold'>عربي</p>
      </div>
    </div>
  );
};

export default LanguageToggle;
