// import { useState } from 'react';
import './App.css'
import AddonsForm from './components/AddonsForm'
import CurrentStep from './components/CurrentStep'
import Summary from './components/Summary'
import ThankYou from './components/ThankYou'
import InfoForm from './components/InfoForm'
import PlanForm from './components/PlanForm'
import { useAtom } from 'jotai'
import { currentStepAtom } from './store/jotaiStore'


function App() {

  const [currentStep, setCurrentStep] = useAtom(currentStepAtom);

  const components = [
    <InfoForm />,
    <PlanForm />,
    <AddonsForm />,
    <Summary />,
    <ThankYou />
  ];

  const nextStep = () => {
    if (currentStep==4) {
      return;
    }
    setCurrentStep((currentStep) => currentStep + 1);
  }

  const prevStep = () => {
    setCurrentStep((currentStep) => currentStep - 1);
  }

  return (
    <main className='h-screen flex justify-center items-center bg-lightBlue'>
      <section className='h-screen bg-lightBlue lg:h-fit lg:flex lg:flex-row lg:gap-10 p-3 rounded-xl lg:bg-white text-white'>
        <article className='fixed top-0 left-0 z-0 w-full flex flex-row justify-center bg-sidebarMobile bg-cover gap-4 py-8 h-[180px] lg:gap-8 lg:px-8 lg:py-10 lg:static lg:flex-col lg:justify-start lg:bg-sidebarDesktop lg:h-[565px] lg:w-[270px] lg:rounded-xl'>
          <CurrentStep />
        </article>
        <article className='relative z-10 w-[98%] bg-white rounded-xl mx-auto mt-[100px] p-6 lg:flex lg:flex-col lg:justify-between lg:w-[530px] lg:p-9 lg:mr-6 lg:mt-0 lg:pb-4 text-marineBlue'>
          {/* <InfoForm /> */}
          {/* <PlanForm /> */}
          {/* <AddonsForm /> */}
          {/* <Summary /> */}
          {/* <ThankYou /> */}
          {components[currentStep]}
          {
            currentStep==4
            ?
            <></>
            :
            <div className='fixed bottom-0 right-0 py-6 p-4 bg-white w-full flex flex-row justify-between items-center lg:p-0 lg:static'>
              {currentStep==0?<></>:<button onClick={() => prevStep()} className='text-coolGray capitalize'>go back</button>}
              {
                currentStep==3
                ?
                <button className=' ml-auto p-2 px-6 rounded-lg bg-marineBlue text-white '>Confirm</button>
                :<button onClick={() => nextStep()} className=' ml-auto p-2 px-6 rounded-lg bg-marineBlue text-white '>Next Step</button>
              }
            </div>
          }
        </article>
      </section>
    </main>
  )
}

export default App
