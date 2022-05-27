import React, { Component } from 'react';
import Navbar from './Navbar';
import RecipeInput from './RecipeInput';
import RecipeList from './RecipeList';
import './NewRecipe';
import axios from 'axios';


class NewRecipe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: [
      ],
      nextRecipeId: 3,
      showForm: false
    }
    
    this.handleSave = this.handleSave.bind(this);
    this.onDelete = this.onDelete.bind(this);
  }
  state = {
    recipe_id: RecipeInput.recipe_id
  };
  
  handleSave(recipe) {
    this.setState((prevState, props) => {
      const newRecipe = {...recipe, id: this.state.nextRecipeId};
      return {
        nextRecipeId: prevState.nextRecipeId + 1,
        recipes: [...this.state.recipes, newRecipe],
        showForm: false
      }
    });
  }
  
  onDelete(id) {
    const recipes = this.state.recipes.filter(r => r.id !== id);
    this.setState({recipes});
    const ID = {
      id: this.state.recipe_id
   };
   axios.post(`http://127.0.0.1:9091/removeRecipe.php`, { ID }, {
     withCredentials: true,
     headers: {
     'Access-Control-Allow-Origin': '*',
     'Content-Type': 'application/json',
     }})
     .then(res => {
       console.log(res);
       console.log(res.data);
     })
  }
  
  render() {
    const {showForm} = this.state;
    return (
      <div className="App">
        <Navbar onNewRecipe={() => this.setState({showForm: true})} />
        { showForm ?
            <RecipeInput 
              onSave={this.handleSave}
              onClose={() => this.setState({showForm: false})}  
            /> :
            null }
        <RecipeList onDelete={this.onDelete} recipes={this.state.recipes} />
      </div>
    );
  }
}

export default NewRecipe;