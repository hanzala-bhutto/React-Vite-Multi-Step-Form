import { useAtom } from "jotai";
import { formAtom, totalAtom } from "../store/jotaiStore";
import { currentStepAtom } from "../store/jotaiStore";

const Summary = () => {

    const [formData] = useAtom(formAtom);
    const [total] = useAtom(totalAtom);
    const [currentStep, setCurrentStep] = useAtom(currentStepAtom);

    return (
        <div>
            <div className="mb-4 lg:mb-8">
                <h1 className="text-3xl font-bold">Finishing up</h1>
                <p className="text-coolGray">Double check everything looks OK before confirming.</p>
            </div>
            <div className="flex flex-col gap-4 p-6 bg-magnolia rounded-lg">
                <div className="flex flex-row items-center justify-between">
                    <div className="">
                        <h2 className="font-bold text-lg capitalize">
                            {formData.planForm.plan} {formData.billing==="monthly"?'(Monthly)' :'(Yearly)'}
                        </h2>
                        <p onClick={() => setCurrentStep(currentStep-2)} className="text-coolGray text-sm underline pointer">Change</p>
                    </div>
                    <p className="font-bold text-lg">+{formData.billing==="monthly"? `${formData.planForm.billing.monthly}/mo`: `${formData.planForm.billing.yearly}/yr`}</p>
                </div>
                <hr />
                {formData.addonsForm.map((addons,index) => {
                    return (
                        <div key={index} className="flex flex-row items-center justify-between">
                            <p className="text-coolGray">{addons.adds_on}</p>
                            <p className="">+{formData.billing==="monthly"? `${addons.billing.monthly}/mo`: `${addons.billing.yearly}/yr`}</p>
                        </div>
                    )                    
                })}
                {/* <div className="flex flex-row items-center justify-between">
                    <p className="text-coolGray">Online service</p>
                    <p className="">+$1/mo</p>
                </div>
                <div className="flex flex-row items-center justify-between">
                    <p className="text-coolGray">Larger storage</p>
                    <p className="">+$2/mo</p>
                </div> */}
            </div>

            <div className="flex flex-row items-center justify-between px-6 pt-5 lg:p-6">
                    <p className="text-coolGray">{formData.billing==="monthly"? `Total (per month)`: `Total (per year)`}</p>
                    <p className="font-bold text-xl text-purpleBlue">+${formData.billing==="monthly"? `${total}/mo`:`${total}/yr`}</p>
            </div>

        </div>
    );
}

export default Summary;