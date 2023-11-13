import { atom, useAtom } from "jotai";
import {radiosData} from "../constants";
import { PlanData } from "../interfaces";

const planFormAtom = atom({
    plan: "arcade",
    billing: 'monthly',
    charge: 1
})



const PlanForm = () => {

    const [planForm, setPlanForm] = useAtom(planFormAtom);

    const radiosLookup : Record<string,PlanData>= {
        arcade: radiosData[0],
        advanced: radiosData[1],
        pro: radiosData[2]
    }

    const handleSelect = (e: React.ChangeEvent<HTMLInputElement>) => {

        const { target } = e;
        const value = target.value.toString();

        const planData = radiosLookup[value];

        setPlanForm({...planForm,plan:planData.plan, charge: planForm.billing==='monthly' ? planData.billing.monthly: planData.billing.yearly})

        console.log(planForm);

    }

    const handleToggle = () => {
        if (planForm.billing == 'monthly'){
            setPlanForm({...planForm,billing:'yearly'})
        } 
        else{
            setPlanForm({...planForm,billing:'monthly'})
        }
        console.log(planForm);
    }

    return (
        <div>
            <div className="mb-8">
                <h1 className="text-3xl font-bold">Select your plan</h1>
                <p className="text-coolGray">You have the option of monthly or yearly billing</p>
            </div>
            <form className="flex flex-col lg:flex-row justify-between gap-4 mb-8">
                <div>
                <input onChange={handleSelect} id="arcade" type="radio" name="plan" value={radiosData[0].plan} className="hidden peer" checked={planForm.plan=='arcade'}/>
                <label htmlFor="arcade" className="flex flex-row items-start gap-4 lg:flex-col lg:justify-between lg:gap-0 p-3 lg:h-44 lg:w-[140px] border-2 rounded-lg peer-checked:border-2 peer-checked:border-purpleBlue ">
                    <img className="w-10" alt="" src="./assets/images/icon-arcade.svg" />
                    <div className="peer-checked:border-2">
                        <h2 className="font-bold text-lg ">Arcade</h2>
                        <p className="text-coolGray text-sm">${planForm.billing==='monthly'? `9/mo` : `90/yr`}</p>
                        <p className="text-marineBlue text-sm">{planForm.billing==='yearly'?'$2 months free':''}</p>
                    </div>
                </label>
                </div>

                <div>
                    <input onChange={handleSelect} type="radio" name="plan" id="advanced" value="advanced" className="hidden peer" checked={planForm.plan=='advanced'}/>
                    <label htmlFor="advanced" className="flex flex-row items-start gap-4 lg:flex-col lg:justify-between lg:gap-0 p-3 lg:h-44 lg:w-[140px] border-2 rounded-lg peer-checked:border-2 peer-checked:border-purpleBlue">
                        <img className="w-10" alt="" src="./assets/images/icon-advanced.svg" />
                        <div className="peer-checked:border-2">
                            <h2 className="font-bold text-lg ">Advanced</h2>
                            <p className="text-coolGray text-sm">${planForm.billing==='monthly'? `12/mo` : `120/yr`}</p>
                            <p className="text-marineBlue text-sm">{planForm.billing==='yearly'?'$2 months free':''}</p>
                        </div>
                    </label>
                </div>

                <div>
                <input onChange={handleSelect} type="radio" name="plan" id="pro" value="pro" className="hidden peer" checked={planForm.plan=='pro'}/>
                <label htmlFor="pro" className="flex flex-row items-start gap-4 lg:flex-col lg:justify-between lg:gap-0 p-3 lg:h-44 lg:w-[140px] border-2 rounded-lg peer-checked:border-2 peer-checked:border-purpleBlue">
                    <img className="w-10" alt="" src="./assets/images/icon-pro.svg" />
                    <div className="">
                        <h2 className="font-bold text-lg ">Pro</h2>
                        <p className="text-coolGray text-sm">${planForm.billing==='monthly'? `15/mo` : `150/yr`}</p>
                        <p className="text-marineBlue text-sm">{planForm.billing==='yearly'?'$2 months free':''}</p>
                    </div>
                </label>
                </div>
            </form>
            <div className="flex flex-row justify-center items-center gap-6 p-2 bg-magnolia rounded-lg">
                <p className={"text-coolGray" + `${planForm.billing==='monthly'?'text-marineBlue font-bold':''}` }>Monthly</p>
                <label className="relative inline-flex items-center cursor-pointer">
                    <input onClick={handleToggle} type="checkbox" value="" className="sr-only peer" />
                    <div className="w-11 h-6 bg-marineBlue peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[4px] after:left-[6px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-marineBlue"></div>
                </label>
                <p className={"text-coolGray" + `${planForm.billing==='yearly'?'text-marineBlue font-bold':''}` }>Yearly</p>

            </div>

        </div>
    );
}

export default PlanForm;