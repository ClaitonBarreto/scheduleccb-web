import React, {useState} from 'react'

import Modal from '../Modal'
import api from '../../@api/connection'

import {
    Container,
    InputText,
    ButtonsWrapper,
    ConfirmButton,
    CancelButton
} from './styles'

const AddPeopleModal = ({isOpen, handleCloseModal, cultId}) => {
    
    const [name, setName] = useState('')

    async function handleAddPeople() {
        const res = await api.post(`/people/${cultId}`, {name})

        if(res.data.error) {
            alert(res.data.message)
        }

        setName('')
        handleCloseModal()
    }

    return (
        <Modal
            isOpen={isOpen}
            handleClose={handleCloseModal}
        >
            <Container>
                <InputText 
                    value={name} 
                    onChange={e => setName(e.target.value)}
                    label="Nome do(a) participante"
                />
                <ButtonsWrapper>
                    <ConfirmButton
                        onClick={() => handleAddPeople()}
                    >
                        Adicionar
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

export default AddPeopleModal