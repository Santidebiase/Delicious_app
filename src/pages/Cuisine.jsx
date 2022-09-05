import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import { motion } from "framer-motion";
import { Link, useParams } from "react-router-dom";


function Cuisine() {

    const [cuisine, setCuisine] = useState([]);
    let params = useParams();

    const getCuisine = async (name) => {
        const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=877bd0225d734e91ac83d1eff565c517&cuisine=${name}`);
        const recipes = await data.json();
        setCuisine(recipes.results)
    }

    useEffect(() => {
        getCuisine(params.type)
    }, [params.type]);

    return (
        <Grid
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duratiion: 0.5 }}
        >
            {cuisine.map((item) => {
                return (
                    <Link to={"/recipe/" + item.id}>
                        <Card key={item.id}>
                            <img src={item.image} alt="" />
                            <h4> {item.title} </h4>
                        </Card>
                    </Link>
                )
            })}
        </Grid>
    )
}

const Grid = styled(motion.div)`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
    grid-gap: 3rem;
`

const Card = styled.div`
    min-heigth: 60px;
    border-radius: 2rem;
    overflow: hidden;
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
        left: 50%;
        bottom: 0%;
        transform: translate(-50%, 0%);
        color: white;
        width: 100%,
        text-align: center;
        font-wight: 600;
        font-size: 1rem;
        height: 40%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;


export default Cuisine