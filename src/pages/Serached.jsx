import React, { useEffect, useState } from 'react';
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";

function Serached() {

    const params = useParams();
    const [searchedRecipes, setsearchedRecipes] = useState([])

    const getSearched = async (name) => {
        const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=877bd0225d734e91ac83d1eff565c517&query=${name}`);
        const recipes = await data.json();
        setsearchedRecipes(recipes.results)
    };

    useEffect(() => {
        getSearched(params.search);
    }, [params.search]);


    return (
        <Grid>
            {searchedRecipes.map((item) => {
                return (
                    <Link to={"/recipe/" + item.id}>
                        <Card key={item.id}>
                            <img src={item.image} alt="" />
                            <h4>{item.title}</h4>
                        </Card>
                    </Link>
                )
            })}
        </Grid>
    )
}

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
    grid-gap: 3rem;
`

const Card = styled.div`
    min-heigth: 20rem;
    border-radius: 2rem;
    position: relative;

 img {
    border-radius: 2rem;
    position: relative;
    left: 0;
    width: 100%,
    height: 100%;
    align-items: center;
    object-fit: fill;
}

h4 {
    position: absolute;
    z-index: 10;
    left: 35%;
    bottom: 0%;
    transform: translate(-50%, 0%);
    color: white;
    width: 100%,
    text-align: center;
    font-weight: 600;
    font-size: 1rem;
    height: 40%;
    display: flex;
    justify-content: center;
    align-items: center;
}
`

export default Serached