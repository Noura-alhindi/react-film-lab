import React, { Component } from 'react'

export class Fave extends Component {
    // state={
    //     isFave: false
    // }
    // constructor(props){
    //     super(props)

    // // this.state={
    // //     // message :'handling Fave click!',
    // //     // isFave:false
    // //         }

    // }                                                
    // handleClick=(e)=>{
    //     console.log("handling Fave click!");
    //     e.stopPropagation() 
    //     this.setState({isFave: !this.state.isFave})

    // }
    handleClick = (e) => {
        e.stopPropagation()
        // console.log('Handling Fave click!')

        // Add this line. You'll call the function passed through props
        this.props.toggle3()

        // Delete the `setState` line. You no longer track state here
        // this.setState({isFave: !this.state.isFave})
    }


    render() {
        console.log(this.props.isFave)
        const isFave = (this.props.isFave) ? 'remove_from_queue' : 'add_to_queue';

        // if (isFave == true){
        //     favePoster = 
        //     faveTitle =
        //     // faveDate =   
        // } 
        return (

            <div className={"film-row-fave " + isFave} onClick={this.handleClick} >

                {/* <Poster poster={this.props.faves.poster_path} />

                <div className="film-summary">
                    <h1>{this.props.film.title}</h1>
                    <p>{movieDate}</p>

                </div> */}
                <p className="material-icons">{isFave}</p>

            </div>


        )
    }
}

export default Fave
