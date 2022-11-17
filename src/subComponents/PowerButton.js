import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { PowerBtn } from '../components/AllSvgs'

const Power = styled.button`
position: fixed;
top: 2rem;
left: 50%;
transform: translate(-50%, 0);

background-color: #FCF6F4;
padding: 0.3rem;
border-radius: 50%;
border: 0.1px solid #000;
width: 2.5rem;
heigth: 2.5rem;

display: flex;
justify-content: center;
align-items: center;
z-index: 3;

cursor: pointer;

&:hover{
    background-color: rgb(0, 255, 100);
    box-shadow: 0 0 8px 6px rgba(103,232,60,1);
}

&>*:first-child{
    text-decoration: none;
    color: inherit;
}
`

const PowerButton = () => {
    return (
        <Power>
            <NavLink to="/">
            <PowerBtn width={25.5} height={25.5} fill='currentColor' />
            </NavLink>
        </Power>
    )
}

export default PowerButton