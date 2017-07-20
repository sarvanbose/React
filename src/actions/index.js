export function selectBook(book) {
    console.log(book.title);
    //SelectBook is an action creator, it need to return an action. An object with a type property
    return {
        type: 'BOOK_SELECTED',
        payload: book
    };
}