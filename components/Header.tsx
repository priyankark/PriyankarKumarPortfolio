import * as React from 'react';

export const Header = () => {
    return <header className="flex z-10 font-display rounded-lg justify-evenly items-center bg-gray-100 h-32 border-4 w-full">
        <div className="flex flex-col">
            <div className="font-display text-2xl font-bold">
                PRIYANKAR KUMAR
            </div>
            <div className="font-display text-xs font-light mx-auto">
                SOFTWARE ENGINEER
            </div>
        </div>
    </header>
}