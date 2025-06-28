import React from 'react';
import PlannyIcon from "../assets/plannyIcon.svg";
import manIcon from "../assets/manIcon.svg";
import Input from './Input';
import TodosContainer from './TodosContainer';

function HomePage() {
  return (
    <>
      {/* Main Container */}
      <div className='bg-violet-100 min-h-screen w-full pt-10 flex flex-col items-center px-4 sm:px-6 md:px-10'>

        {/* Header Section */}
        <div className='flex flex-col sm:flex-row items-center justify-center gap-4'>
          <img src={PlannyIcon} alt="Planny Icon" className='h-24 sm:h-28 md:h-32 p-2' />
          
          <div className='text-center sm:text-left'>
            <h1 className='text-4xl sm:text-5xl font-semibold text-violet-950 p-2'>Planny</h1>
            <h3 className='italic text-violet-950 font-medium text-base sm:text-lg'>
              Plan your day, your way!
            </h3>
          </div>
        </div>

        {/* Input Field */}
        <div className='w-full max-w-xl mt-6'>
          <Input />
        </div>

        {/* Todos List */}
        <div className='w-full max-w-xl mt-6'>
          <TodosContainer />
        </div>

        {/* Footer Illustration */}
        <img src={manIcon} alt="Man Illustration" className='h-32 sm:h-40 mt-10' />
      </div>
    </>
  );
}

export default HomePage;
