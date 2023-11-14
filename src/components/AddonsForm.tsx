import {useAtom } from "jotai";
import { checkboxesData } from "../constants";
import { AddsonData } from "../interfaces";
import { useEffect } from "react";
import { formAtom } from "../store/jotaiStore";

// const addsonFormAtom = atom<AddsonData[]>([]);

const AddonsForm = () => {

    const [formData,setFormData] = useAtom(formAtom)

    const addsonLookup : Record<string,AddsonData> = {
        online: checkboxesData[0],
        larger: checkboxesData[1],
        customizable: checkboxesData[2]
    }

    const handleSelect : React.MouseEventHandler<HTMLInputElement> = (e) => {

        const { target } = e;
        const value = (target as HTMLInputElement).value.toString();

        const addsonData = addsonLookup[value]

        // console.log(addsonData,value);

        if (formData.addonsForm.includes(addsonData)){
            setFormData((prevData) => ({
                ...prevData,
                addonsForm: prevData.addonsForm.filter((addson) => addson.adds_on !== addsonData.adds_on),
              }));
        }
        else{
            setFormData((prevData) => ({
                ...prevData,
                addonsForm: [...prevData.addonsForm, addsonData],
            }));        
        }

    }

    const isChecked = (value:string) => {
        const checkData = addsonLookup[value]

        // console.log(checkData);

        // return true;

        return formData.addonsForm.some((addson) => addson.adds_on === checkData.adds_on);


    }

    useEffect(() => {
        console.log(formData);
    },[formData])

    return (
        <div>
            <div className="mb-4 lg:mb-8">
                <h1 className="text-3xl font-bold">Pick add-ons</h1>
                <p className="text-coolGray">Add-ons help enhance your gaming experience</p>
            </div>
            <form className="flex flex-col gap-4 mb-4 lg:mb-8">
                <div>
                    <input onClick={handleSelect} id="arcade" type="checkbox" name="plan" value="online" className="sr-only peer" checked={isChecked('online')} readOnly/>
                    <label htmlFor="arcade" className="flex flex-row items-center justify-start gap-3 lg:gap-6 p-4 border-2 rounded-lg peer-checked:border-2 peer-checked:border-purpleBlue group">
                        <div>
                            <img className="py-1 px-[3px] border-lightGray border-2 rounded-md peer-checked:group-[]:bg-purpleBlue" alt="" src="./assets/images/icon-checkmark.svg" />
                        </div>
                        <div className="">
                            <h2 className="font-bold text-lg ">{checkboxesData[0].adds_on}</h2>
                            <p className="text-coolGray text-sm">Access to multiplayer games</p>
                        </div>
                        {formData.billing==="monthly"
                            ?
                            <p className="text-purpleBlue ml-auto">+${checkboxesData[0].billing.monthly}/mo</p>
                            :
                            <p className="text-purpleBlue ml-auto">+${checkboxesData[0].billing.yearly}/yr</p>
                        }
                    </label>
                </div>

                <div>
                    <input onClick={handleSelect} type="checkbox" name="plan" id="advanced" value="larger" className="sr-only peer" checked={isChecked('larger')} readOnly/>
                    <label htmlFor="advanced" className="flex flex-row items-center justify-start gap-3 lg:gap-6 p-4 border-2 rounded-lg peer-checked:border-2 peer-checked:border-purpleBlue group">
                        <div>
                            <img className="py-1 px-[3px] border-lightGray border-2 rounded-md peer-checked:group-[]:bg-purpleBlue" alt="" src="./assets/images/icon-checkmark.svg" />
                        </div>                       
                        <div className="">
                            <h2 className="font-bold text-lg ">{checkboxesData[1].adds_on}</h2>
                            <p className="text-coolGray text-sm">Extra 1TB of cloud save</p>
                        </div>
                        {formData.billing==="monthly"
                        ?
                        <p className="text-purpleBlue ml-auto">+${checkboxesData[1].billing.monthly}/mo</p>
                        :
                        <p className="text-purpleBlue ml-auto">+${checkboxesData[1].billing.yearly}/yr</p>
                        }
                    </label>
                </div>

                <div>
                <input onClick={handleSelect} type="checkbox" name="plan" id="pro" value="customizable" className="sr-only peer" checked={isChecked('customizable')} readOnly/>
                <label htmlFor="pro" className="flex flex-row items-center justify-start gap-3 lg:gap-6 p-4 border-2 rounded-lg peer-checked:border-2 peer-checked:border-purpleBlue group">
                    <div>
                        <img className="py-1 px-[3px] border-lightGray border-2 rounded-md peer-checked:group-[]:bg-purpleBlue" alt="" src="./assets/images/icon-checkmark.svg" />
                    </div>                       
                    <div className="">
                        <h2 className="font-bold text-lg ">{checkboxesData[2].adds_on}</h2>
                        <p className="text-coolGray text-sm">Custom theme on your profile</p>
                    </div>
                    {formData.billing==="monthly"
                            ?
                            <p className="text-purpleBlue ml-auto">+${checkboxesData[2].billing.monthly}/mo</p>
                            :
                            <p className="text-purpleBlue ml-auto">+${checkboxesData[2].billing.yearly}/yr</p>
                        }
                </label>
                </div>
            </form>

        </div>
    );
}

export default AddonsForm;