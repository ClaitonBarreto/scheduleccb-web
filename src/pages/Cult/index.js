import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { format, addDays } from 'date-fns'

import Checkbox from '../../components/Checkbox'
import Card from '../../components/Card'
import api from '../../@api/connection'
import AddPeopleModal from '../../components/AddPeopleModal'
import ConfirmPresenceModal from '../../components/ConfirmPresenceModal'

import {
    Container,
    PageTitle,
    PeopleWraper,
    PeopleCard,
    Name,
    AddButton,
    PeopleContainer
} from './styles'

const Cult = () => {

    const { id, cultDate } = useParams()

    const [peoples, setPeople] = useState([])
    const [selectPeopleId, setSelectPeopleId] = useState(0)

    const [openAddModal, setOpenAddModal] = useState(false)
    const [openConfirmPresenceModal, setOpenConfirmPresenceModal] = useState(false)

    useEffect(() => {
        async function fecthData() {
            const peoples = await api.get(`/people/${id}`)
            setPeople(peoples.data)
        }

        fecthData()
    }, [openAddModal, openConfirmPresenceModal])

    function handleCloseAddModal() {
        setOpenAddModal(false)
    }

    function handleCloseConfirmPresenceModal() {
        setOpenConfirmPresenceModal(false)
    }

    function handleClickPeopleCard(id, checked) {
        var today = format(new Date(), 'dd/MM/yyyy')
        var cultDay = format(new Date(cultDate), 'dd/MM/yyyy')
        
        if(checked) {
            alert('Uma vez confirmada a presença, a ação não pode ser desfeita ')
            return false
        }

        if(today !== cultDay) {
            alert('Só é possivel confirmar a presença da irmandade no dia do culto')
            return false
        }

        setSelectPeopleId(id)
        setOpenConfirmPresenceModal(true)
    }

    return (
        <Container>
            <AddPeopleModal 
                isOpen={openAddModal} 
                handleCloseModal={handleCloseAddModal}
                cultId={id}
            />

            <ConfirmPresenceModal 
                isOpen={openConfirmPresenceModal}
                handleCloseModal={handleCloseConfirmPresenceModal}
                peopleId={selectPeopleId}
            />
            <PageTitle>
                {format(addDays(new Date(cultDate), 1), 'dd/MM/yyyy')}
            </PageTitle>
            <PeopleWraper>
                {peoples.map((people, index) => (
                    <Card key={index} small>
                        <PeopleContainer
                            onClick={() => {
                                handleClickPeopleCard(people._id, people.checked)
                            }}  
                        >
                            <Name checked={people.checked}>{people.name}</Name>
                            <Checkbox checked={people.checked}/>
                        </PeopleContainer>
                    </Card>    
                ))}
            </PeopleWraper>
            <AddButton onClick={() => setOpenAddModal(true)}>
                Adicionar Participante
            </AddButton>
        </Container>
    )
}

export default Cult