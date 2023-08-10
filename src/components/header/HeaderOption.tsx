import Link from 'next/link'
import React from 'react'

type Props = {
    href: string
    text: string
}

export const HeaderOption = ({ href, text }: Props) => {
    return (
        <Link href={href} >
            {text}
        </Link>
    )
}