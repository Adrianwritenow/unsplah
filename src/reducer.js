import {GET_PHOTOS} from './actions';


const initialState ={photos:[]};

const reducer = (state = initialState, action)=> {
  switch(action.type){
    case GET_PHOTOS:
      return {...state, photos:action.payload}
    default:
    return state
  }
};

export default reducer;
