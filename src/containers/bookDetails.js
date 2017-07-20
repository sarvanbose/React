import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookDetails extends Component {
    render() {
        if (!this.props.book) {
            return <div> No books selected </div>;
        }

        return(
            <div> Book detail: {this.props.book.title} </div>
            
        );
    }
}

function mapStateToProps(state) {
    return {
        book: state.activeBook
    }
}

export default connect(mapStateToProps) (BookDetails);