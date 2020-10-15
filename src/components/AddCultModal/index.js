import React, { useState } from 'react'
import Modal from '../Modal'
import DatePicker from 'react-datepicker'
import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import "react-datepicker/dist/react-datepicker.css";

import api from '../../@api/connection'


import {
    Container,
    Label,
    ButtonsWrapper,
    ConfirmButton,
    CancelButton,
} from './styles'

const AddCultModal = ({isOpen, handleCloseModal}) => {

    const [date, setDate] = useState(new Date())
    
    async function handleAddCult() {

        var formatedDate = format(date, 'yyyy-MM-dd')
        const res = await api.post('/cult', {date: formatedDate})

        if(res.data.error) {
            alert(res.data.message)
        } else {
            alert('culto cadastrado')
        }
    }

    if(isOpen) {
        return (
            <Modal>
                <Container>
                    <Label>Selecione a data</Label>
                    <DatePicker 
                        selected={date} 
                        locale={ptBR}
                        onChange={(date) => setDate(date)}
                        dateFormat="cccc, dd/MM/yyyy"    
                    />
                    <ButtonsWrapper>
                        <ConfirmButton
                            onClick={() => handleAddCult()}
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

export default AddCultModal