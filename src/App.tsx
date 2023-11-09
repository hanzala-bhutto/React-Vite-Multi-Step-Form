// import { useState } from 'react';
import './App.css'
import AddonsForm from './components/AddonsForm'
import CurrentStep from './components/CurrentStep'
// import InfoForm from './components/InfoForm'
// import PlanForm from './components/PlanForm'

function App() {

  return (
    <main className='h-screen flex justify-center items-center bg-lightBlue'>
      <section className='flex md:flex-row md:gap-10 p-3 rounded-xl bg-white text-white'>
        <article className='flex flex-row md:flex-col gap-8 px-8 py-10 bg-sidebarDesktop h-[565px] w-[270px] rounded-xl'>
          <CurrentStep />
        </article>
        <article className='flex flex-col justify-between p-9 pb-4 text-marineBlue'>
          {/* <InfoForm /> */}
          {/* <PlanForm /> */}
          <AddonsForm />
          <div className='flex flex-row justify-between'>
            {/* <button className='text-coolGray capitalize'>go back</button> */}
            <button className=' ml-auto p-2 px-6 rounded-lg bg-marineBlue text-white '>Next Step</button>
          </div>
        </article>
      </section>
    </main>
  )
}

export default App
