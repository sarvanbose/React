import { combineReducers } from 'redux';
import BookReducers from './reducer_books.js';
import ActiveBook from './reducer_active_book.js';

const rootReducer = combineReducers({
  books: BookReducers,
  activeBook: ActiveBook
});

export default rootReducer;
