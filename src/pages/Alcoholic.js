import React from "react";
import '../styles/Drinks.css'
import { Component } from "react";

export default class Ccompomponent extends Component {
  constructor(props) {
      super(props);
      this.state = {
        error: null,
        isLoaded: false,
        items: []
      };
    }

    componentDidMount() {
      fetch("https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result.drinks
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });

        }
      )
    }

    render() {
      const {error, isLoaded, items} = this.state;
      if (error) {
        return <p> Error {error.message} </p>
      } else if (!isLoaded) {
        return <p> Loading...</p>
      } else {
        return (
          <div class="page_container">
            <div class="into_text_container">
              <h2>Welcome to our bar!</h2>
              <h4>We hope we will help you choose a alcohol cocktail</h4>
            </div>
            <div class="main_container1">
              {items.map(item => (
          
                <div class="drinks_container">
                  <div>
                    <h1 key={item.name} />
                  </div>
                    <div class="name_container">
                      <div class="name_drink">
                        <strong>{item.strDrink}</strong>
                      </div>
                    </div>
                    <div class="image_container">
                      <div class="image_drink">
                        <img width="300" height="300" src={item.strDrinkThumb} />
                      </div>
                    </div>
                </div>
              ))}
            </div>
          </div>
        )
      }
    }
  }
