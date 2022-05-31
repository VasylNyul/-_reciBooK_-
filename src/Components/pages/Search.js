import React, { Component } from "react";
import "./Search.css";
import axios from 'axios';

class Search extends Component {
  state = {
    searchValue: "",
    meals: [],
    recipe1: []
  };

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
		  }})
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
            {this.state.meals.map((meal, index) => (
              <div class="single-meal" key={index}>
                <h2>{meal.strMeal}</h2>
                <img src={meal.strMealThumb} alt="meal-thumbnail" />
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