import { createStore, combineReducers } from 'redux';
import listsReducer from '../reducers/listsReducer';

export default () => {
    const store = createStore(
        combineReducers({
            lists: listsReducer
        }), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
    return store;
}