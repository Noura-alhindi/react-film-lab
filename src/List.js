import React, { Component } from 'react';
import './App.css';
import Row from './FilmRow';


class List extends Component {
    // constructor(props){
    //     super()
        state ={
            message:` Setting filter to `,
            filter: 'all'
        }
       
        handleFilterClick=(filter)=>{
            this.setState({
              filter: filter})
            // console.log("Setting filter to "+filter);
            console.log(this.state.message+filter)
            
        }
        render() {
           
               const allChange =(this.state.filter) === 'all' ? 'is-active' : '';
               const faveChange= (this.state.filter )=== 'faves' ? 'is-active' : '';
               let films;
               if(this.state.filter == 'all'){
         films = this.props.films.map((film) => {
            return <Row film={film} key={film.id} toggle2={()=>this.props.toggle1(film)} isFave={this.props.faves.includes(film)} handleDetailsClick= {()=>{this.props.handleDetailsClick(film)}}/>
        })} else {
             films = this.props.faves.map((film) => {
                return <Row film={film} key={film.id} toggle2={()=>this.props.toggle1(film)} isFave={this.props.faves.includes(film)} handleDetailsClick= {()=>{this.props.handleDetailsClick(film)}}/>
        })}
        // let getFilm =
        return (
    <div className="film-list">
        <h1 className="section-title">FILMS</h1>
        <div className="film-list-filters">
        <div className={"film-list-filter " + allChange}  onClick={() => this.handleFilterClick('all')}>
            ALL
            <span className="section-count">{this.props.films.length}</span>
        </div>
        <div className={"film-list-filter "+ faveChange} onClick={() => this.handleFilterClick('faves')}>
            FAVES
            <span className="section-count">{this.props.faves.length}</span>
        </div>
        </div>

    {films}

            {/* <div className="film-list">
                <h1 className="section-title">FILMS</h1>
                {films}
            </div> */}
    </div>  
        );
    }
}

export default List;