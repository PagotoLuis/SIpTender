import { combineReducers } from "redux";
import AuthReducer from '../components/reducers/AuthReducer';

const Reducers = combineReducers({
    auth:AuthReducer
});

export default Reducers;