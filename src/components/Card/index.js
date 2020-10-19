import React from 'react'

import { Container } from './styles'

const Card = ({children, smallCard}) => {

    return (
        <Container small={smallCard}>
            {children}
        </Container>
    )

}

export default Card