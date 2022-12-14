import React, { useState } from 'react';
import styled from "styled-components";
import { FaSearch } from 'react-icons/fa';
import { useNavigate } from "react-router-dom";

const Search = () => {

    const [input, setInput] = useState("");
    const navigate = useNavigate();

    const submitHandler = (e) => {
        e.preventDefault();
        navigate("/searched/" + input)
    };

    return (
        <FormStyled onSubmit={submitHandler}>
            <div>
                <input onChange={(e) => setInput(e.target.value)} type="text" value={input} />
                <FaSearch />
            </div>
        </FormStyled>
    )
}


const FormStyled = styled.form`
    margin: 0rem 20rem;

    div {
        position: relative;
        width: 100%;
    } 

    input {
        border: none;
        background: #494949;
        font-size: 1.5rem;
        color: white;
        padding: 1rem 3rem;
        border: none;
        border-radius: 1rem;
        outline: none;
        width: 100%;
    }

    svg {
        color: white;
        position: absolute;
        width: 20px;
        height: 20px;
        left: 12px;
        top: 50%;
        transform: translateY(-50%)
    }
`

export default Search