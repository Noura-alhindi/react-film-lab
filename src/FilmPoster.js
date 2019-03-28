// import React, { Component } from 'react';
// import './App.css';

// class Poster extends Component {
//     render() {
//         return (
//             <div >
//                 <img src={`https://image.tmdb.org/t/p/w200/${this.props.poster}`} alt="" />
//             </div>

//         );
//     }
// }

// export default Poster;

import React from 'react'

export default function FilmPoster(props) {
  return (
    <div>
       <img src={`https://image.tmdb.org/t/p/w200/${props.poster}`} alt="" />
    </div>
  )
}
