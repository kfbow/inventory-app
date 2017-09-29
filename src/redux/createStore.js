import { applyMiddleware, combineReducers, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import Immutable from 'immutable';

import alert from './alert/reducers';
import checked from './checked/reducers';
import inventory from './inventory/reducers';

const logger = createLogger({
    stateTransformer: (state) => {
        let newState = {};

        for (var i of Object.keys(state)) {
            if (Immutable.Iterable.isIterable(state[i])) {
                newState[i] = state[i].toJS();
            } else {
                newState[i] = state[i];
            }
        };

        return newState;
        }
    });

export default (initialState = {}) => createStore(
    combineReducers({
        alert,
        checked,
        inventory
    }),
    initialState,
    applyMiddleware(logger, thunk)
);
