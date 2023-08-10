import React from 'react'
import Link from 'next/link';

type Props = {}

const page = (props: Props) => {
    return (
        <div>login
            <br />
            <Link href={"/test"}>ir para teste</Link>
        </div>
    )
}

export default page