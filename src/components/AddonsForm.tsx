
const AddonsForm = () => {
    return (
        <div>
            <div className="mb-8">
                <h1 className="text-3xl font-bold">Pick add-ons</h1>
                <p className="text-coolGray">Add-ons help enhance your gaming experience</p>
            </div>
            <form className="flex flex-col gap-4 mb-8">
                <div>
                    <input id="arcade" type="checkbox" name="plan" value="online" className="sr-only peer"/>
                    <label htmlFor="arcade" className="flex flex-row items-center justify-start gap-6 p-4 border-2 rounded-lg peer-checked:border-2 peer-checked:border-purpleBlue group">
                        <div>
                            <img className="py-1 px-[3px] border-lightGray border-2 rounded-md peer-checked:group-[]:bg-purpleBlue" alt="" src="./assets/images/icon-checkmark.svg" />
                        </div>
                        <div className="">
                            <h2 className="font-bold text-lg ">Online service</h2>
                            <p className="text-coolGray text-sm">Access to multiplayer games</p>
                        </div>
                        <p className="text-purpleBlue ml-auto">+$1/mo</p>

                    </label>
                </div>

                <div>
                    <input type="checkbox" name="plan" id="advanced" value="larger" className="sr-only peer"/>
                    <label htmlFor="advanced" className="flex flex-row items-center justify-start gap-6 p-4 border-2 rounded-lg peer-checked:border-2 peer-checked:border-purpleBlue group">
                        <div>
                            <img className="py-1 px-[3px] border-lightGray border-2 rounded-md peer-checked:group-[]:bg-purpleBlue" alt="" src="./assets/images/icon-checkmark.svg" />
                        </div>                       
                        <div className="">
                            <h2 className="font-bold text-lg ">Larger storage</h2>
                            <p className="text-coolGray text-sm">Extra 1TB of cloud save</p>
                        </div>
                        <p className="text-purpleBlue ml-auto">+$2/mo</p>

                    </label>
                </div>

                <div>
                <input type="checkbox" name="plan" id="pro" value="customizable" className="sr-only peer"/>
                <label htmlFor="pro" className="flex flex-row items-center justify-start gap-6 p-4 border-2 rounded-lg peer-checked:border-2 peer-checked:border-purpleBlue group">
                    <div>
                        <img className="py-1 px-[3px] border-lightGray border-2 rounded-md peer-checked:group-[]:bg-purpleBlue" alt="" src="./assets/images/icon-checkmark.svg" />
                    </div>                       
                    <div className="">
                        <h2 className="font-bold text-lg ">Customizable profile</h2>
                        <p className="text-coolGray text-sm">Custom theme on your profile</p>
                    </div>
                    <p className="text-purpleBlue ml-auto">+$2/mo</p>

                </label>
                </div>
            </form>

        </div>
    );
}

export default AddonsForm;