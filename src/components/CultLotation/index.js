import React, { useEffect, useState } from 'react'
import api from '../../@api/connection'

import { Text } from './styles'

const CultLotation = ({cultId}) => {
    
    const [lotation, setLotation] = useState('')

    useEffect(() => {
        async function getLotation() {
            const res = await api.get(`lotation/${cultId}`)

            setLotation(`${res.data.count} / 56`)
        }

        getLotation()
    })

    return (
        <Text>
            {lotation}
        </Text>
    )
}

export default CultLotation