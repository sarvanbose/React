import React, { Component } from 'react';
import BookView from '../containers/bookView';
import BookDetail from '../containers/bookDetails';

export default class App extends Component {
  render() {
    return (
      <div>
           <BookView />
          <BookDetail />
      </div>
    );
  }
}
