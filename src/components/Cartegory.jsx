import { FaPizzaSlice, FaHamburger, FaBeer } from "react-icons/fa";
import { GiNoodles } from "react-icons/gi";
import styled from "styled-components";
import React from 'react';
import { NavLink } from "react-router-dom";



function Cartegory() {
    return (
        <List>
            <SLink to={"/cuisine/Italian"}>
                <FaPizzaSlice />
                <h4>Italian</h4>
            </SLink>
            <SLink to={"/cuisine/American"}>
                <FaHamburger />
                <h4>American</h4>
            </SLink>
            <SLink to={"/cuisine/Thai"}>
                <GiNoodles />
                <h4>Thai</h4>
            </SLink>
            <SLink to={"/cuisine/German"}>
                <FaBeer />
                <h4>German</h4>
            </SLink>
        </List>
    )
}

const List = styled.div`
    display: flex;
    justify-content: center;
    margin: 2rem 0rem;    
`

const SLink = styled(NavLink)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    margin-rigth: 2rem;
    text-decoration: none;
    background: linear-gradient(35deg, #494949, #313131);
    width: 6rem;
    height: 6rem;
    cursor: ponter;
    transform: scale(0.8);

    h4 {
        color: white;
        font-size: 0.8rem;
    }

    svg {
        color: withe;
        font-size: 1.5rem;
    }
    &.active {
        background: linear-gradient(to right, #f27121, #e94057);
    }

    svg {
        color: white;
    }

    h4 {
        color: white;
    }
`

export default Cartegory