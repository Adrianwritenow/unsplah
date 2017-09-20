import token from './token';

export const GET_PHOTOS = 'GET_PHOTOS';
export const LOADING_FINISHED = 'LOADING_FINISHED';
export const SEARCH_PHOTOS ='SEARCH PHOTOS';


const makeActionCreator = (type) =>{
  return function (payload) {
    return {
      type,
      payload
    }
  }
}

export const getPhotos = makeActionCreator(GET_PHOTOS);
export const loadingFinished = makeActionCreator(LOADING_FINISHED);

export const searchPhotos = (query) => {
  return(dispatch,getState)=>{
    fetch(`https://api.unsplash.com/search/photos/?query=${query}&client_id=${token}`)
    .then(response => response.json())
    .then(json => {
      console.log(json);
      dispatch(getPhotos(json.results))
      dispatch(loadingFinished())
    })
  }
}
