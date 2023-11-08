
const InfoForm = () => {
    return (
        <div>
        <div className="mb-8">
            <h1 className="text-3xl font-bold">Personal info</h1>
            <p className="text-coolGray">Please provide your name, email address and phone number</p>
        </div>
        <form className="flex flex-col gap-5">
            <div className="flex flex-col gap-1">
            <label>
                Name
            </label>
            <input type="text" name="name" className="border-2 px-4 py-3 rounded-lg" placeholder="e.g. Stephen King" />
            </div>

            <div className="flex flex-col gap-1">
            <label>
                Email Address
            </label>
            <input type="text" name="name" className="border-2 px-4 py-3 rounded-lg" placeholder="e.g. stephenking@lorem.com" />
            </div>

            <div className="flex flex-col gap-1">
            <label>
                Phone Number
            </label>
            <input type="text" name="name" className="border-2 px-4 py-3 rounded-lg" placeholder="e.g. +1 234 567 890" />
            </div>

        </form>
        </div>
    );
}

export default InfoForm;