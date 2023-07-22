export const SkeletonPeg = () => {
    return (
        <div className='flex-auto'>
            <div
                className="flex-col justify-center animate-pulse space-x-1 rounded-md border p-4">
                <div className="grid place-items-center space-y-2 ">
                    <div className="h-28 w-28 rounded-md bg-gray-300 "></div>
                    <div className="h-4 w-10/12 rounded-md bg-gray-300 "></div>
                    <div className="h-4 w-9/12 rounded-md bg-gray-200 "></div>
                    <div className="h-7 w-11/12 rounded-md bg-gray-500 "></div>
                </div>
            </div>
        </div>
    );
};
