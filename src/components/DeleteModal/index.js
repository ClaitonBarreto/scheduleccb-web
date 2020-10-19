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

const DeleteModal = ({isOpen, handleCloseModal, peopleId}) => {
    
    React.useEffect(() => console.log(isOpen))

    async function handleDeletePeople() {
        const res = await api.delete(`/people/${peopleId}`)

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

export default DeleteModal