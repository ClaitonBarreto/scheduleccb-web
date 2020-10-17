import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { format, addDays } from 'date-fns'
import { ptBR } from 'date-fns/locale'

import Card from '../../components/Card'
import AddCultModal from '../../components/AddCultModal'
import CultLotation from '../../components/CultLotation'
import NavBar from '../../components/NavBar'
import api from '../../@api/connection'

import {
    Container,
    PageTitle,
    PageSubTitle,
    CultsWraper,
    Cult,
    CultDate,
    AddButton,
    CultContainer
} from './styles'

const Home = () => {

    const [cults, setCults] = useState([])
    const [openAddCultModal, setOpenAddCultModal] = useState(false)

    useEffect(() => {

        async function getCults() {
            const cultsResponse = await api.get('/cult')
            setCults(cultsResponse.data)
        }

        getCults()
    }, [openAddCultModal])

    function handleOpenAddCultModal() {
        setOpenAddCultModal(true)
    }

    function handleCloseModal() {
        setOpenAddCultModal(false)
    }

    return (
        <Container>
            <NavBar title="CCB Jardim Anhangá"/>
            <AddCultModal isOpen={openAddCultModal} handleCloseModal={handleCloseModal}/>
            {/* <PageTitle>
                CCB Jardim Anhangá
            </PageTitle>
            <PageSubTitle>
                Cultos agendados
            </PageSubTitle> */}
            <CultsWraper>

                {cults && cults.map((cult, index) => (
                    <Card 
                        key={index}
                    >
                        <CultContainer to={`/cult/${cult._id}/${cult.date}`}>
                            <CultDate>{format(addDays(new Date(cult.date), 1), 'cccc, dd/MM', {locale: ptBR})}</CultDate>
                            <CultLotation cultId={cult._id} />
                        </CultContainer>
                    </Card>
                ))}
 

            </CultsWraper>
            <AddButton
                onClick={() => handleOpenAddCultModal()}
            >
                Adicionar Culto
            </AddButton>
        </Container>
    )
}

export default Home