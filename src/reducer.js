import {GET_PHOTOS} from './actions';
import {LOADING_FINISHED} from './actions';

const initialState ={photos:[], isLoading:true};

const reducer = (state = initialState, action)=> {
  switch(action.type){
    case GET_PHOTOS:
      return {...state, photos:action.payload}
    case LOADING_FINISHED:
      return{...state, isLoading: false}
    default:
    return state
  }
};


export default reducer;
