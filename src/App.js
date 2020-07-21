import React, { useEffect, useState } from 'react';
import Recipe from './components/Recipe';
import RecipePage from './components/RecipePage';
import Form from './components/Form';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './style/App.css';

function App() {
  const [recipes, setRecipes] = useState([]);
  const [search, setSeach] = useState("");
  const [query, setQuery] = useState("chicken");
  const APP_ID = "b868fd67";
  const APP_KEY = "92b773684e466504b0d164969ff98243";

  useEffect(() => {
    getRecipe();
  }, [query])

  const getRecipe = async () => {
    const req = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await req.json();
    setRecipes(data.hits);
  }
  const updateSearch = e => {
    console.log(e.target);
    setSeach(e.target.value);
  }
  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
  }

  return (
    <Router>
      <div className="App">
        <Switch>
          <div className="container-fluid">
            <div className="row justify-content-center">
              <Route path="/" exact render={() => <Form update={updateSearch} getValue={getSearch} searchValue={search} />} />
            </div>
            <div className="container">
              <div className="row">
                <Route path="/" exact render={() => <Recipe data={recipes} />} />
                <Route path="/recipePage/:id" component={RecipePage} />
              </div>
            </div>
          </div>
        </Switch>
      </div>
    </Router>

  );
}

export default App;
