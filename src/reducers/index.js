import { combineReducers } from 'redux';

import favoritesReducer from './favoritesReducer';
import movieReducer from './movieReducer';

const rootReducer = combineReducers({favoritesReducer, movieReducer})

export default rootReducer;