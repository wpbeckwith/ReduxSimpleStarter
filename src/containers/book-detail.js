import React, { Component } from 'react';
import { connect } from 'react-redux';
// import {selectBook } from '../actions/index';
// import { bindActionCreators } from 'redux';

class BookDetail extends Component {
    render() {
        if (!this.props.book) {
            return (<div>Select a book to get started.</div>);
        }

        return (
            <div>
                <h3>Details for:</h3>
                <div>Title: {this.props.book.title}</div>
                <div>Pages: {this.props.book.pages}</div>
            </div>
        );
    }
}


function mapStateToProps(state) {
    // whatever is returned will show up as props in BookDetail
    return {
        book: state.activeBook
    };
}

// Promote BookDetail from a component to a container
export default connect(mapStateToProps)(BookDetail);
