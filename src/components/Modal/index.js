import React from 'react'
import { Fade } from '@material-ui/core'

import { Container, ModalContainer } from './styles'

const Modal = ({children, isOpen, handleClose}) => {
    return (
        <ModalContainer
            open={isOpen}
            onClose={handleClose}
        >
            <Fade in={isOpen}>
                <Container>
                    {children}
                </Container>
            </Fade>
        </ModalContainer>
    )
}

export default Modal