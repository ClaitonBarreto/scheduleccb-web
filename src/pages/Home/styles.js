import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const Container = styled.div`
    width: 100vw;
    height: 100vh;

    display: flex;
    align-items: center;
    flex-direction: column;

    padding-top: 5rem;
`
export const PageTitle = styled.h1`
    font-size: 1.5rem;
    color: #767676;

    margin-bottom: 0.5rem;
`
export const PageSubTitle = styled.h2`
    font-size: 1.2rem;
    color: #767676;
    margin-bottom: 1.8rem;
`
export const CultsWraper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    
`

export const CultDate = styled.span`
    color: #767676;
    font-weight: 600;
    font-size: 1.2rem;
`
export const AddButton = styled.div`
    position: fixed;
    bottom: 1rem;
    background-color: #24B5E3;
    width: 60%;
    height: 3rem;

    display: flex;
    justify-content: center;
    align-items: center;

    border-radius: 1rem;

    color: #fff;
`

export const CultContainer = styled(Link)`
    width: 90%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    text-decoration: none;
`