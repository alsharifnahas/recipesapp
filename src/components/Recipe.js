import React from 'react';
import { Link } from 'react-router-dom';
import "../style/Recipe.css"


function Recipe(data) {
    const hoverIn = (e) => {
        e.target.style.opacity = "0.5";
        e.target.style.transition = "1s"

    }
    const hoverOut = (e) => {
        e.target.style.opacity = "1";
    }

    return (

        data.data.map((recipe) => (
            <div className="col-md-3 mb-1 p-3 d-flex justify-content-center">
                <div className="recipe-container" >
                    <Link onMouseOver={hoverIn} onMouseOut={hoverOut}
                        to={{
                            pathname: `/recipePage/${recipe.recipe.label}`,
                            state: { ingredients: recipe.recipe.ingredients, imageLink: recipe.recipe.image }
                        }}>
                        <img className="image" src={recipe.recipe.image}
                            style={{
                                width: "100%"
                            }} />
                    </Link>
                    <div className="text-container">
                        <h5>{recipe.recipe.label}</h5>
                        <p><span>Source: </span>{recipe.recipe.source}</p>
                    </div>
                </div>
            </div>
        ))

    )
}

export default Recipe;
