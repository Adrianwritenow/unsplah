export const GET_PHOTOS = 'GET_PHOTOS';

const makeActionCreator = (type) =>{
  return function (payload) {
    return {
      type,
      payload
    }
  }
}

export const getPhotos = makeActionCreator(GET_PHOTOS);
