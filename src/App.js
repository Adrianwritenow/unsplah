import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import token from './token';
import {connect} from 'react-redux';
import {getPhotos,loadingFinished,searchPhotos} from './actions';


const Loader = () => (
  <div>
    <p>loading...</p>
  </div>
)

class App extends Component {

  componentDidMount = () => {
    fetch(`https://api.unsplash.com/photos/?client_id=${token}`)
    .then(response => response.json())
    .then(json => {
      console.log(json);
      this.props.getPhotosAsProp(json)
      this.props.loadingFinishedAsProp()

    })
}
handleSubmit(event){
  event.preventDefault();
  const whatWasTyped = this.text.value;
  this.props.searchPhotosAsProp(whatWasTyped);


}
  render() {
    return (
      <div className="App">
      {this.props.isLoading && <Loader />}
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>

        <p className="App-intro">
          There are {this.props.photos.length} photos.
        </p>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input placeholder="Search for images" type='text' ref={element => this.text =element}/>
          <button>Submit</button>
        </form>
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
    photos:state.photos,
    isLoading:state.isLoading
  }
}

const mapDispatchToProps = (dispatch) =>{
  return{
  getPhotosAsProp:(photosTheParamater)=>
  dispatch(getPhotos(photosTheParamater)),
  loadingFinishedAsProp:()=> dispatch(loadingFinished()),
  searchPhotosAsProp:(searchTerm)=>dispatch(searchPhotos(searchTerm))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
