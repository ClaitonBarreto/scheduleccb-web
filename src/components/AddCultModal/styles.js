import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const Label = styled.span`
    font-size: 1.5rem;
    color: #767676;
    margin-bottom: 1rem;
`

export const ButtonsWrapper = styled.div`
    margin-top: 1.5rem;
    width: 70%;
    display: flex;
    justify-content: space-between;

`
export const ConfirmButton = styled.div`
    background-color: #24B5E3;
    color: #fff;
    border-radius: .8rem;
    padding: .8rem;
`
export const CancelButton = styled.div`
    background-color: #F54242;
    color: #fff;
    border-radius: .8rem;
    padding: .8rem;

`