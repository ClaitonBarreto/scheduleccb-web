import React, {useState} from 'react'

import Modal from '../Modal'
import api from '../../@api/connection'

import {
    Container,
    Label,
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

        handleCloseModal()
    }

    if(isOpen) {
        return (
            <Modal>
                <Container>
                    <Label>Nome do(a) participante</Label>
                    <InputText value={name} onChange={e => setName(e.target.value)}/>
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

    return null
}

export default AddPeopleModal