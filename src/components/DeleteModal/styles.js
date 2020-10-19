import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`
export const Label = styled.span`
    color: #767676;
    font-size: 1.3rem;

    text-align: center;

    margin-bottom: 1.5rem;
`
export const ButtonsWrapper = styled.div`
    display: flex;
    width: 100%;

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