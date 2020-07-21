import React from 'react'
import "../style/recipePage.css";
import { Link } from 'react-router-dom';

function RecipePage(props) {
    const ingredients = props.location.state.ingredients;
    const re = new RegExp(/([0-9][\s\/]*[0-9]*[-0-9]*[\s][a-z]*)(.*)/);
    let food = [];
    let measurments = [];
    ingredients.map((ingredient, i) => {
        if (re.exec(ingredient.text) != null) {
            measurments[i] = re.exec(ingredient.text)[1];
            food[i] = re.exec(ingredient.text)[2];
        } else {
            food[i] = "";
            measurments[i] = ""
        }
    })

    measurments.map((measurment, i) => {
        if (measurment == "" && food[i] == "") {
            measurments.splice(i, 2);
            food.splice(i, 2);
        }
    })
    console.log(props);
    return (
        <div className="col-12 d-flex flex-column align-items-center">
            <div className="ingredients-container">
                <div className="recipe-title">
                    <h1>{props.match.params.id}</h1>
                </div>
                <div className="recipe-ingredients">
                    <div className="food-measurments"> {measurments.map((item) =>
                        (<p>{item}</p>)
                    )
                    }</div>
                    <div className="food-items"> {food.map((item) =>
                        (<p>{item}</p>)
                    )
                    }</div>
                </div>
                <div className="food-image" style={{
                    backgroundImage: `url(${props.location.state.imageLink})`,
                    width: "100%",
                    height: "400px",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center"
                }}>

                </div>
            </div>
            <div className="icon-container">
                <Link to="/" style={{ color: "black" }}>
                    <svg width="3em" height="2em" viewBox="0 0 16 16" class="bi bi-arrow-left-short" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M7.854 4.646a.5.5 0 0 1 0 .708L5.207 8l2.647 2.646a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 0 1 .708 0z" />
                        <path fill-rule="evenodd" d="M4.5 8a.5.5 0 0 1 .5-.5h6.5a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5z" />
                    </svg>
                </Link>
            </div>
        </div >

    )
}

export default RecipePage
