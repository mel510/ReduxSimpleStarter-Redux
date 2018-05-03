import React, { Component } from 'react';
import { connect } from 'react-redux';

// Container ("smart") components have direct connection to Redux store
// Generally most parent component(s) that cares about state

class BookList extends Component {
  renderList() {
    return this.props.books.map((book) => {
      return (
        <li key={book.title} className='list-group-item'>{book.title}</li>
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

// connect takes function and component and produces a container
export default connect(mapStateToProps)(BookList);
