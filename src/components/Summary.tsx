
const Summary = () => {
    return (
        <div>
            <div className="mb-4 lg:mb-8">
                <h1 className="text-3xl font-bold">Finishing up</h1>
                <p className="text-coolGray">Double check everything looks OK before confirming.</p>
            </div>
            <div className="flex flex-col gap-4 p-6 bg-magnolia rounded-lg">
                <div className="flex flex-row items-center justify-between">
                    <div className="">
                        <h2 className="font-bold text-lg ">Arcade (Monthly)</h2>
                        <p className="text-coolGray text-sm underline">Change</p>
                    </div>
                    <p className="font-bold text-lg">+$9/mo</p>
                </div>
                <hr />
                <div className="flex flex-row items-center justify-between">
                    <p className="text-coolGray">Online service</p>
                    <p className="">+$1/mo</p>
                </div>
                <div className="flex flex-row items-center justify-between">
                    <p className="text-coolGray">Larger storage</p>
                    <p className="">+$2/mo</p>
                </div>
            </div>

            <div className="flex flex-row items-center justify-between px-6 pt-5 lg:p-6">
                    <p className="text-coolGray">Total (per month)</p>
                    <p className="font-bold text-xl text-purpleBlue">+$12/mo</p>
            </div>

        </div>
    );
}

export default Summary;