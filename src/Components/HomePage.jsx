import React, { useEffect } from 'react'
import PlannyIcon from "../assets/plannyIcon.svg"
import manIcon from "../assets/manIcon.svg"
import Input from './Input'
import TodosContainer from './TodosContainer'

function HomePage() {

  return (
    <>
    {/* header  */}
    <div className='bg-violet-100 min-h-[100vh] w-full pt-10 flex flex-col items-center'>
        <div className='flex items-center justify-center'>
            <img src={PlannyIcon} alt="icon" className='h-30 p-2' />
      <div className='flex flex-col items-center'>
        <h1 className='text-5xl font-semibold text-violet-950 p-2'>Planny</h1>
        <h3 className='italic text-violet-950 mt-2 font-semibold'>Plan your day, your way!</h3></div>
    </div>
    
    {/* take input task  */}
        <Input/>

    {/* display tasks  */}
        <TodosContainer />
        
    <img src={manIcon} alt="icon" className='h-40 mt-10' />
            
     </div>
     
     
     </>
  )
}

export default HomePage
