import React, { Component } from "react";
import "./Search.css";
import axios from 'axios';

class Search extends Component {
  state = {
    searchValue: "",
    meals: [],
    recipe1: [],
    recipes: []
  };


  componentDidMount() {
    axios.get(`http://127.0.0.1:9091/searchRecipe.php`,
      {
        withCredentials: true, headers:
        {
          'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json',
        }
      }).then(res => {
        console.log('res.data', res.data);
        const meals = Object.keys(res.data).map(id => {
          const meal = res.data[id];
          //meal.ingredients = JSON.parse(meal.ingredients);
          return meal;
        });
        console.log(meals);
        this.setState({ meals });
        
      })
  }

  handleOnChange = event => {
    this.setState({ searchValue: event.target.value });
  };

  handleSearch = () => {
    //this.makeApiCall(this.state.searchValue);
    const recipe = {
      searchValue: this.state.searchValue,
      meals: this.state.meals
    };

    axios.post(`http://127.0.0.1:9091/searchRecipe.php`, { recipe }, {
      withCredentials: true,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
      }
    })
      .then(res => {
        console.log(res);
        console.log(res.data);
        //const recipe1 = res.data;
        this.setState({ recipe1: res.data });
      })

  };

  //makeApiCall = searchInput => {

  //var searchUrl = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchInput}`;
  //fetch(searchUrl)
  // .then(response => {
  //   return response.json();
  // })
  // .then(jsonData => {
  //   this.setState({ meals: jsonData.meals });
  //});
  //};

  render() {
    console.log('last meal', this.state.meals[this.state.meals.length - 1]?.photo);
    return (
      <div id="main">
        <h1>Пошук рецепту</h1>
        <input
          name="text"
          type="text"
          placeholder="Введіть назву або інгредієнт..."
          onChange={event => this.handleOnChange(event)}
          value={this.state.searchValue}
        />
        <button onClick={this.handleSearch}>Шукати</button>
        {this.state.meals ? (
          <div id="meals-container">
           {this.state.meals.filter(meal => {
      return meal.recipe_name.toLowerCase().includes(this.state.searchValue.toLowerCase());
    }).map((meal, index) => (
      <div class="single-meal" key={index}>
        <h2>{meal.strMeal || meal.recipe_name}</h2> 
        {meal.instruction}
        {meal.ingredients.map(ingredient => <div>{ingredient}</div>)}
        { <img src={meal.strMealThumb || meal.photo} alt="meal-thumbnail" /> }
      </div>
    ))}
          </div>
        ) : (
          <p>За цим запитом не знайдено рецепту</p>
        )}
      </div>
    );
  }
}

export default Search;

