import React, { Component } from "react";
import PropTypes from "prop-types";
import "./Navbar.css";

class Navbar extends Component {
  static defaultProps = {
    onNewRecipe() {}
  };

  static propTypes = {
    onNewRecipe: PropTypes.func
  };

  render() {
    return (
      <header>
        <h2>
          <a>reciBook</a>
        </h2>
        <nav>
          <li>
            <a onClick={this.props.onNewRecipe}> Додати рецепт</a>
          </li>
        </nav>
      </header>
    );
  }
}

<<<<<<< HEAD
export default Navbar;
=======
export default Navbar;
>>>>>>> yaryna
