// import React, { Component } from 'react';
import './App.css';
import Poster from './FilmPoster';
import Fave from './Fave';

// class Row extends Component {
//     handleDetailsClick=()=>{

//         this.props.handleDetailsClick()
//       }
//     render() {
        // let movieDate = new Date(this.props.film.release_date);
        // movieDate = movieDate.getFullYear();
//         return (
//             <div className="film-row"  onClick={() => this.handleDetailsClick()}>
//                 <Poster poster={this.props.film.poster_path} />

//                 <div className="film-summary">
//                     <h1>{this.props.film.title}</h1>
//                     <p>{movieDate}</p>

//                 </div>
//                 <Fave toggle3={this.props.toggle2} isFave={this.props.isFave}/>
//             </div>

//         );
//     }
// }

// export default Row;

import React from 'react'

export default function FilmRow(props) {
    let movieDate = new Date(props.film.release_date);
        movieDate = movieDate.getFullYear();
  return (
    <div className="film-row"  onClick={() => props.handleDetailsClick()}>
                <Poster poster={props.film.poster_path} />

                <div className="film-summary">
                    <h1>{props.film.title}</h1>
                    <p>{movieDate}</p>

                </div>
                <Fave toggle3={props.toggle2} isFave={props.isFave}/>
      
    </div>
  )
}
