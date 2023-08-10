import React from 'react'

type Props = {}

const loading = (props: Props) => {
    return (
        <div>loading....................................</div>
        // é passsado altomaticamente para o suspense api quando vc trabalha com async await
    )
}

export default loading