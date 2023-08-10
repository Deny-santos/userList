import React from 'react'

type Props = {
    children: React.ReactNode
}

export const SidbarContainer = ({children}: Props) => {
    return (
        <>
            <div className={`h-screen w-[20%] bg-blue-500 flex flex-col pt-5 items-start`}>
                {children}
            </div>
        </>
    )
}