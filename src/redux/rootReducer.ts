import { combineReducers } from '@reduxjs/toolkit';

import { reducer as placeReducer } from './places/slice';

const rootReducer = combineReducers({
  place: placeReducer,
});

export default rootReducer;
