import { combineReducers } from 'redux';
import BooksReducer from './reducer_books';

// combineReducers generates application's state from various reducers

const rootReducer = combineReducers({
  books: BooksReducer
});

export default rootReducer;
