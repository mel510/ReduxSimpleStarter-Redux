import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

// Container ("smart") components have direct connection to Redux store
// Generally most parent component(s) that cares about state

class BookList extends Component {
  renderList() {
    return this.props.books.map((book) => {
      return (
        <li
          onClick={() => this.props.selectBook(book)}
          key={book.title}
          className='list-group-item'>
            {book.title}
        </li>
      );
    });
  }

  render() {
    return (
      <ul className='list-group col-sm-4'>
        {this.renderList()}
      </ul>
    );
  }
}

function mapStateToProps(state) {
  // takes application state and assigns to component's props
  // reruns whenever state changes
  return {
    books: state.books
  };
}

function mapDispatchToProps(dispatch) {
  // assigns Action Creator to container's prop
  // result is dispatched to all reducers via bind
  return bindActionCreators({ selectBook: selectBook }, dispatch)
}

// connect takes function(s) and component and produces a container (upgraded from dumb component)
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
