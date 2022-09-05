import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import { useParams } from "react-router-dom";



function RecipeDetail() {

    let params = useParams();
    const [details, setDetails] = useState({});
    const [activeTab, setActiveTab] = useState("instructions")

    useEffect(() => {

        const fetchDetails = async () => {
            const data = await fetch(`https://api.spoonacular.com/recipes/${params.name}/information?apiKey=877bd0225d734e91ac83d1eff565c517`);
            const detailData = await data.json();
            setDetails(detailData);
        };

        fetchDetails();
    }, [params.name]);

    return (
        <DetailWrapper>
            <Info>
                <h2>{details.title}</h2>
                <img src={details.image} alt="" />
            </Info>
            <Info>
                <Button
                    className={activeTab === "instructions" ? "active" : ""} onClick={() => setActiveTab("instructions")}>
                    Instructions
                </Button>
                <Button
                    className={activeTab === "ingredients" ? "active" : ""} onClick={() => setActiveTab("ingredients")}>
                    Ingredients
                </Button>
                {activeTab === "instructions" && (
                    <div>
                        <h3 dangerouslySetInnerHTML={{ __html: details.summary }}></h3>
                        <h3 dangerouslySetInnerHTML={{ __html: details.instructions }}></h3>
                    </div>
                )}

                {activeTab === "ingredients" && (
                    <ul>
                        {details.extendedIngredients.map((ingredient) => (
                            <li key={ingredient.id}>
                                {ingredient.original}
                            </li>
                        ))}
                    </ul>
                )}

            </Info>
        </DetailWrapper>
    )
};


const DetailWrapper = styled.div`
    margin-top: 10rem;
    margin-bottom: 5rem;
    display: ruby;
    .active {
        background: white;
        color: #313131;
    }

    a{
        color: #5AD9EA;
    }

    h3 {
        margin-bottom: 2rem;
        color: white;
    }
    
    h2 {
        margin-bottom: 2rem;
    }

    li {
        font-size: 1.2rem;
        line-height: 2.5rem;
    }

    ul {
        margin-top: 2rem;
    }
`

const Button = styled.button`
    padding: 1rem 2rem;
    color: white ;
    background: linear-gradient(35deg, #494949, #313131);
    border: 2px solid black;
    margin-right: 2rem;
    font-weight: 600;
`

const Info = styled.div`
    margin-left: 10rem;
    color: white;
`


export default RecipeDetail