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
    
    async function handleDeletePeople() {
        const res = await api.delete(`/people/${peopleId}`)

        if(res.data.error) {
            alert(res.data.message)
        } else {
            handleCloseModal()
        }
    }

    if(isOpen) {
        return (
            <Modal>
                <Container>
                    <Label>Deletar participante?</Label>
                    <ButtonsWrapper>
                        <ConfirmButton
                            onClick={() => handleDeletePeople()}
                        >
                            Deletar
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

    return null
}

export default ConfirmPresenceModal