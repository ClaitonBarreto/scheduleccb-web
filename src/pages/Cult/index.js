import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { format, addDays } from 'date-fns'
import {ptBR} from 'date-fns/locale'

import Card from '../../components/Card'
import api from '../../@api/connection'
import AddPeopleModal from '../../components/AddPeopleModal'
import ConfirmPresenceModal from '../../components/ConfirmPresenceModal'
import DeleteModal from '../../components/DeleteModal'
import NavBar from '../../components/NavBar'
import Menu from '../../components/Menu'

import {
    Container,
    PeopleWraper,
    Name,
    AddButton,
    PeopleContainer,
    ItemWraper
} from './styles'

const Cult = () => {

    const { id, cultDate } = useParams()

    const [peoples, setPeople] = useState([])
    const [selectPeopleId, setSelectPeopleId] = useState(0)

    const [openAddModal, setOpenAddModal] = useState(false)
    const [openConfirmPresenceModal, setOpenConfirmPresenceModal] = useState(false)
    const [openDeleteModal, setOpenDeleteModal] = useState(false)

    useEffect(() => {
        async function fecthData(id) {
            const peoples = await api.get(`/people/${id}`)
            setPeople(peoples.data)
        }

        fecthData(id)
    }, [openAddModal, openConfirmPresenceModal, openDeleteModal])

    function handleCloseAddModal() {
        setOpenAddModal(false)
    }

    function handleCloseConfirmPresenceModal() {
        setOpenConfirmPresenceModal(false)
    }

    function handleCloseDeleteModal() {
        setOpenDeleteModal(false)
    }

    function confirmPresense(id, checked) {
        var today = format(new Date(), 'dd/MM/yyyy')
        var cultDay = format(addDays(new Date(cultDate), 1), 'dd/MM/yyyy')
        
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

    async function deletePeople(id) {
        setSelectPeopleId(id)
        setOpenDeleteModal(true)
    }

    return (
        <>
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

            <DeleteModal 
                isOpen={openDeleteModal}
                handleCloseModal={handleCloseDeleteModal}
                peopleId={selectPeopleId}
            />
            <Container>
                <NavBar title={format(addDays(new Date(cultDate), 1), 'cccc, dd/MM/yyyy', {locale: ptBR})}/>
            
                <PeopleWraper>
                    {peoples.map((people, index) => (
                        <ItemWraper key={index}>
                        <Card smallCard='true'>
                            <PeopleContainer>
                                <Name checked={people.checked}>{people.name}</Name>
                            </PeopleContainer>
                        </Card>    
                        <Menu 
                            actions={{
                                confirm: () => confirmPresense(people._id, people.checked),
                                delete: () => deletePeople(people._id)
                            }}
                        />
                        </ItemWraper>
                    ))}
                </PeopleWraper>
                <AddButton onClick={() => setOpenAddModal(true)}>
                    Adicionar Participante
                </AddButton>
            </Container>
        </>
    )
}

export default Cult