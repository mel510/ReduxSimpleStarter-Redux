export function selectBook(book) {
  // ActionCreator needs to return an action: object wth type and payload
  return {
    type: 'BOOK_SELECTED',
    payload: book
  };
}
