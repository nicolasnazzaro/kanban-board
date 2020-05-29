import { createStore, combineReducers } from 'redux';
import boardReducer from '../reducers/boardReducer';

const loadState = () => {
    try {
      const serializedState = localStorage.getItem('state');
      if (serializedState === null) {
        return undefined;
      }
        return JSON.parse(serializedState);
    } catch (error) {
        console.log(error);
        return undefined;
    }
}

const saveState = (state) => {
    try {
      const serializedState = JSON.stringify(state);
      localStorage.setItem('state', serializedState);
    } catch (error) {
      console.log(error);
    }
}

const persistedState = loadState();

export default () => {
    
    const store = createStore(
        combineReducers({
            board: boardReducer,
        }),persistedState ,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );

    store.subscribe(() => {
        saveState({
            board: store.getState().board
        });
    });

    return store;
}