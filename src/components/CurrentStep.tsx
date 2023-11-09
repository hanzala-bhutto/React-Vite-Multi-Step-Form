

const CurrentStep = () => {
    return (
        <>
        <div className="flex flex-row gap-3">
            <div className="px-[15px] py-2 border-2 rounded-full bg-lightBlue text-black border-lightBlue">
                <p>1</p>
            </div>
            <div className="flex flex-col gap-0">
                <h2 className="uppercase text-lightGray text-sm">Step 1</h2>
                <h1 className="uppercase font-bold">your info</h1>
            </div>
        </div>

        <div className="flex flex-row gap-3">
            <div className="px-[15px] py-2 border-2 rounded-full">
                <p>2</p>
            </div>
            <div className="flex flex-col gap-0">
                <h2 className="uppercase text-lightGray text-sm">Step 2</h2>
                <h1 className="uppercase font-bold">select plan</h1>
            </div>
        </div>

        <div className="flex flex-row gap-3">
            <div className="px-[15px] py-2 border-2 rounded-full">
                <p>3</p>
            </div>
            <div className="flex flex-col gap-0">
                <h2 className="uppercase text-lightGray text-sm">Step 3</h2>
                <h1 className="uppercase font-bold">add-ons</h1>
            </div>
        </div>


        <div className="flex flex-row gap-3">
            <div className="px-[15px] py-2 border-2 rounded-full">
                <p>4</p>
            </div>
            <div className="flex flex-col gap-0">
                <h2 className="uppercase text-lightGray text-sm">Step 4</h2>
                <h1 className="uppercase font-bold">summary</h1>
            </div>
        </div>

        

        </>

    );
}

export default CurrentStep;