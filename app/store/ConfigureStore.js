/**
 * Author: GuoXC
 * Date: 2018-08-14 15:19
 * des: 用来管理项目中所有的state
 */
'use strict';
import {createStore, applyMiddleware} from 'redux';

import thunkMiddleware from 'redux-thunk';

import rootReducer from '../reducers/RootReducer';

const createStoreWithMiddleware = applyMiddleware(thunkMiddleware)(createStore);

export default function configureStore(initialState) {

    return createStoreWithMiddleware(rootReducer, initialState);

}
