import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

`
export const PageTitle = styled.div`
    color: #767676;
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
    font-weight: 600;
    flex: 1;
    position: fixed;
    top: 0;
    background-color: #fff;
    width: 100%;
    height: 3.5rem;
    box-shadow: 1px 2px 3px #767676;

    display: flex;
    align-items: center;
    justify-content: center;
`
export const PeopleWraper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 7rem 0;

`
export const PeopleContainer = styled.div`
    width: 90%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`
export const Name = styled.span`
    color: ${({checked}) => checked ? '#ddd' : '#444'};
    font-size: 1.3rem;

`
export const Checkbox = styled.div`

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