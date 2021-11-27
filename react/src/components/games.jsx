import React, { Component } from 'react';
import Game from './game';
class Games extends React.Component {


    
        state = {
            games: []
        };


    componentDidMount(){
        fetch("/api/games/findGames")
        .then(response => response.json())
        .then(data => this.setState({games: data}));
      }
    render() { 
        return <div class>
            {this.state.games.map(game =>(<Game name = {game.name} game_details = {game.game_details} category = {game.category} company = {game.company}/>))}
        </div>;
    }
}
 
export default Games;