import { useAtom } from "jotai";
import { formAtom } from "../store/jotaiStore";
import { useEffect, useState } from "react";

const InfoForm = () => {

    const [formData, setFormData] = useAtom(formAtom);

    const [nameTouched, setNameTouched] = useState(false);
    const [emailTouched, setEmailTouched] = useState(false);
    const [phoneTouched, setPhoneTouched] = useState(false);

    const handleBlur = (name: string) => {
        // Set the touched state based on the input name
        if (name === "name") {
          setNameTouched(true);
        } else if (name === "email") {
          setEmailTouched(true);
        } else if (name === "phone") {
          setPhoneTouched(true);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {

        const { target } = e;
        const {name,value} = target;


        setFormData({...formData, infoForm:{...formData.infoForm, [name]: value }});

    }

    useEffect(() => {
        console.log(formData);
    },[formData])


    return (
        <div>
        <div className="mb-8">
            <h1 className="text-3xl font-bold">Personal info</h1>
            <p className="text-coolGray">Please provide your name, email address and phone number</p>
        </div>
        <form className="flex flex-col gap-5">
            <div className="flex flex-col gap-1">
                <div className="flex flex-row justify-between">
                <label>
                    Name
                </label>
                <p className="text-red-500">{nameTouched && formData.infoForm.name === '' ? 'required': ''}</p>
            </div>
            <input onBlur={() => handleBlur("name")} onChange={handleChange} type="text" name="name" value={formData.infoForm.name} className={`border-2 px-4 py-3 rounded-lg ${nameTouched && formData.infoForm.name===""?'border-red-500':''}`} placeholder="e.g. Stephen King" required/>
            </div>

            <div className="flex flex-col gap-1">
            <div className="flex flex-row justify-between">
                <label>
                    Email Address
                </label>
                <p className="text-red-500">{emailTouched && formData.infoForm.email === '' ? 'required': ''}</p>
            </div>

            <input onBlur={() => handleBlur("email")} onChange={handleChange} type="email" name="email" value={formData.infoForm.email} className="border-2 px-4 py-3 rounded-lg invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-500" placeholder="e.g. stephenking@lorem.com" required/>
            </div>

            <div className="flex flex-col gap-1">
            <div className="flex flex-row justify-between">
            <label>
                Phone Number
            </label>
            <p className="text-red-500">{phoneTouched && formData.infoForm.phone === '' ? 'required': ''}</p>
            </div>
            <input onBlur={() => handleBlur("phone")} min={10} onChange={handleChange} type="text" name="phone" value={formData.infoForm.phone} className={`border-2 px-4 py-3 rounded-lg ${phoneTouched && formData.infoForm.phone.length<10?'border-red-500':''}`} placeholder="e.g. +1 234 567 890" required/>
            </div>

        </form>
        </div>
    );
}

export default InfoForm;