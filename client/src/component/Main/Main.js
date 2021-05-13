import React, { Component } from "react";
import MainStyles from "./Main.module.css";
import Hotfood from "./Hotfood";
import Introduction from "./Introduction";
import Recommend from "./Recommend";
import News from "./News";
import axios from "axios";
import Loader from "./Loader";

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: [],
      isLoading: true,
    };
  }
  delay(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
  componentDidMount() {
    // delay request

    // this.delay(3000)
    // .then( () =>{
    //   axios.get("http://localhost:5000/recipes")
    //   .then((response) => {
    //     this.setState({ recipes: response.data, isLoading: false });
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   })
    //   .finally(() => {
    //     // console.log("Tytuly przepisow:",this.state.recipes[0])
    //   });
    // })
      
    axios.get("http://localhost:5000/recipes")
    .then((response) => {
      this.setState({ recipes: response.data, isLoading: false });
    })
    .catch((error) => {
      console.log(error);
    })
    .finally(() => {
      // console.log("Tytuly przepisow:",this.state.recipes[0])
    });
    
  }

  render() {
    return (
      <div className={MainStyles.Container}>
        {this.state.isLoading ? (
          <Loader />
        ) : (
          <Hotfood recipes={this.state.recipes[0].tytul} />
        )}
        <Introduction />

        <div className={MainStyles.lineBreak}></div>
        {this.state.isLoading ? (
          <Loader />
        ) : (
          <Recommend
            t="Polecane przepisy"
            recipes={[
              this.state.recipes[0].tytul,
              this.state.recipes[1].tytul,
              this.state.recipes[2].tytul,
              this.state.recipes[3].tytul,
            ]}
          />
        )}

        {this.state.isLoading ? (
          <Loader />
        ) : (
          <News
            t="Nowe przepisy"
            recipes={[
              this.state.recipes[4].tytul,
              this.state.recipes[5].tytul,
              this.state.recipes[6].tytul,
            ]}
          />
        )}
      </div>
    );
  }
}
