import { createStore, combineReducers } from 'redux';
import listsReducer from '../reducers/listsReducer';
import cardsReducer from '../reducers/cardsReducer';

export default () => {
    const store = createStore(
        combineReducers({
            lists: listsReducer,
            cards: cardsReducer
        }), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
    return store;
}