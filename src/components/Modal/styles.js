import styled from 'styled-components'

export const Container = styled.div`
    position: absolute;
    width: 100vw;
    height: 100vh;

    background-color: rgba(0,0,0,.5);

    display: flex;
    align-items: center;
    justify-content: center;

    z-index: 2;
`

export const ModalContainer = styled.div`
    width: 70%;
    height: auto;

    border-radius: 1rem;

    padding: 4rem 0;

    background-color: #fff;
`