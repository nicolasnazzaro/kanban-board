import { createStore, combineReducers } from 'redux';
import boardReducer from '../reducers/boardReducer';

export default () => {
    
    const store = createStore(
        combineReducers({
            board: boardReducer,
        }), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );

    return store;
}