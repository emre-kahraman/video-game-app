import React, { Component } from "react";
import useFetch from "react-fetch-hook";
import "./game.scss";

class Game extends React.Component {


    state = {
        name: this.props.name,
        game_details: this.props.game_details,
        category: this.props.category,
        company: this.props.company,
        game_engine: this.props.game_engine,
        img: this.props.img
}

    render() {
        return <div class="container py-4">
        <article style = {this.styles} class="postcard dark blue">
          <a class="postcard__img_link">
            <img class="postcard__img" src={this.state.img} alt="Image Title" />
          </a>
          <div class="postcard__text">
            <h1 class="postcard__title blue"><a>{this.state.name}</a></h1>
            <div class="postcard__bar"></div>
            <div class="postcard__preview-txt">{this.state.game_details}</div>
            <ul class="postcard__tagbox">
              <li class="tag__item">{this.state.category}</li>
              <li class="tag__item">{this.state.game_engine}</li>
              <li class="tag__item play blue">
                <a href="#">{this.state.company}</a>
              </li>
            </ul>
          </div>
        </article>
        </div>
    }

    styles = {
    };
}
 
export default Game;