import React, { Component } from 'react';
import './App.css';
import Details from './Detail'
import List from './List'
import TMDB from './TMDB'
import Fave from './Fave';    


class App extends Component {
  constructor(props){
  super();
    this.state={
      films:TMDB.films,
      faves:[],
      current:{}

    }}
    
    handleFaveToggle = (film) =>{
      // film:{}
      console.log(film);
      
      this.handleFaveToggle = this.handleFaveToggle.bind(this)
      const faves= this.state.faves.slice()
      const filmIndex = faves.indexOf(film)

    if (filmIndex === -1){
      faves.push(film)
    } else{
      faves.splice(filmIndex,1)
    }
    console.log(faves)

    this.setState({faves})
  }
  handleDetailsClick=(film)=>{
    this.setState({current: film})
    
      
      const url = `https://api.themoviedb.org/3/movie/${film.id}?api_key=58d1cc1884566fbdab699fa30a455802&append_to_response=videos,images&language=en`
      
      fetch(url).then(response => {
        response.json().then(data => {
          console.log(data) // take a look at what you get back!
          this.setState({current: data})
        })
      })
      
    
    console.log("Fetching details for"+film.title);
    console.log(this.state.current);
    
}
  render() {
    console.log(this.state.current);

    // console.log(films)
    return (
        
      <div className="film-library">
      <List films={this.state.films} faves={this.state.faves} toggle1={this.handleFaveToggle} handleDetailsClick={this.handleDetailsClick}/>
      <Details film={this.state.current} />
    <Fave />
    
      </div>
        
        );
  }
}

export default App;
