import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`
export const Label = styled.span`
    color: #767676;
    font-size: 1.3rem;
`
export const InputText = styled.input`
    border-top: 0; 
    border-left: 0; 
    border-right: 0; 
    border-bottom: 1px solid #767676; 

    margin: 1.5rem 0;

    font-size: 1.2rem;
`
export const ButtonsWrapper = styled.div`
    display: flex;
    width: 70%;

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