import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import token from './token';
import {connect} from 'react-redux';
import {getPhotos} from './actions'

class App extends Component {

  componentDidMount = () => {
    fetch(`https://api.unsplash.com/photos/?client_id=${token}`)
    .then(response => response.json())
    .then(json => {
      console.log(json)
      this.props.getPhotosAsProp(json)
    })
}
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          There are {this.props.photos.length} photos.
        </p>
        {this.props.photos.map(photo =>
          <div key={photo.id}>
            <img src={photo.urls.small} alt='photo'/>
          </div>)}
      </div>
    );
  }
}


const mapStateToProps = (state)=>{
  return{
    photos:state.photos
  }
}

const mapDispatchToProps = (dispatch) =>{
  return{
  getPhotosAsProp:(photosTheParamater)=>
  dispatch(getPhotos(photosTheParamater))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
