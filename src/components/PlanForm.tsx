
const PlanForm = () => {
    return (
        <div>
            <div className="mb-8">
                <h1 className="text-3xl font-bold">Select your plan</h1>
                <p className="text-coolGray">You have the option of monthly or yearly billing</p>
            </div>
            <form className="flex flex-row justify-between gap-4 mb-8">
                <div>
                <input id="arcade" type="radio" name="plan" value="arcade" className="hidden peer" defaultChecked/>
                <label htmlFor="arcade" className="flex flex-col justify-between p-3 h-44 w-[140px] border-2 rounded-lg peer-checked:border-2 peer-checked:border-purpleBlue ">
                    <img className="w-10" alt="" src="./assets/images/icon-arcade.svg" />
                    <div className="peer-checked:border-2">
                        <h2 className="font-bold text-lg ">Arcade</h2>
                        <p className="text-coolGray text-sm">$9/mo</p>
                    </div>
                </label>
                </div>

                <div>
                    <input type="radio" name="plan" id="advanced" value="advanced" className="hidden peer"/>
                    <label htmlFor="advanced" className="flex flex-col justify-between p-3 h-44 w-[140px] border-2 rounded-lg peer-checked:border-2 peer-checked:border-purpleBlue">
                        <img className="w-10" alt="" src="./assets/images/icon-advanced.svg" />
                        <div className="peer-checked:border-2">
                            <h2 className="font-bold text-lg ">Advanced</h2>
                            <p className="text-coolGray text-sm">$12/mo</p>
                        </div>
                    </label>
                </div>

                <div>
                <input type="radio" name="plan" id="pro" value="pro" className="hidden peer"/>
                <label htmlFor="pro" className="flex flex-col justify-between p-3 h-44 w-[140px] border-2 rounded-lg peer-checked:border-2 peer-checked:border-purpleBlue">
                    <img className="w-10" alt="" src="./assets/images/icon-pro.svg" />
                    <div className="">
                        <h2 className="font-bold text-lg ">Pro</h2>
                        <p className="text-coolGray text-sm">$15/mo</p>
                    </div>
                </label>
                </div>
            </form>
            <div className="flex flex-row justify-center items-center gap-6 p-2 bg-magnolia rounded-lg">
                <p className=" font-bold">Monthly</p>
                <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" value="" className="sr-only peer" />
                    <div className="w-11 h-6 bg-marineBlue peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[4px] after:left-[6px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-marineBlue"></div>
                </label>
                <p className=" text-coolGray peer-checked:text-marineBlue">Yearly</p>

            </div>

        </div>
    );
}

export default PlanForm;