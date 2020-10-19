import React from 'react'

import Modal from '../Modal'
import api from '../../@api/connection'

import {
    Container,
    Label,
    ButtonsWrapper,
    ConfirmButton,
    CancelButton,
} from './styles'

const ConfirmPresenceModal = ({isOpen, handleCloseModal, peopleId}) => {
    
    async function handleConfirmPresence() {
        const res = await api.put(`/people/${peopleId}`)

        if(res.data.error) {
            alert(res.data.message)
        } else {
            handleCloseModal()
        }
    }

    return (
        <Modal
            isOpen={isOpen}
            handleClose={handleCloseModal}
        >
            <Container>
                <Label>Confirmar presença do participante?</Label>
                <ButtonsWrapper>
                    <ConfirmButton
                        onClick={() => handleConfirmPresence()}
                    >
                        Confirmar
                    </ConfirmButton>
                    <CancelButton
                        onClick={() => handleCloseModal()}
                    >
                        Cancelar
                    </CancelButton>
                </ButtonsWrapper>
            </Container>
        </Modal>
    )
}

export default ConfirmPresenceModal