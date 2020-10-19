import styled from 'styled-components'
import { Card } from '@material-ui/core'

export const Container = styled(Card)`
    width: 90%;
    height: ${({small}) => small ? '3.5rem' : '4.5rem'};

    border-radius: 15px;
    box-shadow: 1px 1px 4px #767676;

    display: flex;
    align-items: center;
    justify-content: center;

    /* margin-bottom: 1.5rem; */

    text-decoration: none;

`