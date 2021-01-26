import {combineReducers} from 'redux';
import reducer from '../reducer';
import { reducer as formReducer } from 'redux-form';
export default combineReducers({
    form:formReducer,
    reducer
})