import React from 'react'

type Props = {
    children: React.ReactNode
}

export const Header = ({children}: Props) => {
    return (
        <header className={`
            flex items-center justify-around bg-zinc-300 w-full h-16
        `}>
            {children}
        </header>
    )
}