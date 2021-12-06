import { combineReducers } from '@reduxjs/toolkit';
// import { persistReducer } from 'redux-persist';
// import AsyncStorage from '@react-native-async-storage/async-storage';

import authSlice from './ducks/auth';

const rootReducer = combineReducers({
  auth: authSlice,
});

export default rootReducer;
