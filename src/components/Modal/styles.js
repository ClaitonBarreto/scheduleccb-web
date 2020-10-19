import styled from 'styled-components'
import {Modal} from '@material-ui/core'

export const Container = styled.div`
    position: fixed;

    background-color: #fff;

    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 4rem;

    z-index: 2;
`

export const ModalContainer = styled(Modal)`
    width: 100%;
    height: auto;

    display: flex;
    justify-content: center;
    align-items: center;

    /* padding: 4rem 0; */

    background-color: rgba(0,0,0,.5);
`