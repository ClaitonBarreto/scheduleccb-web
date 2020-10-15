import React from 'react'

import { Container } from './styles'

const Card = ({children, small}) => {

    return (
        <Container small={small}>
            {children}
        </Container>
    )

}

export default Card