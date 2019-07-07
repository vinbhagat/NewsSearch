import React, { Component } from 'react';
import Axios from 'axios';

import Comments from './Comments';
import { ITEM_URL } from '../Config'

class NewsDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: []
        }
    }
    componentDidMount() {
        if (this.props.selectedNews.kids) {
            this.props.selectedNews.kids.forEach(commentId => {
                Axios.get(`${ITEM_URL}${commentId}.json`).then(res => {
                    let updatedComments = this.state.comments;
                    updatedComments.push(res.data);
                    this.setState({ comments: updatedComments });
                })
            });
        }
    }

    render() {
        return (
            this.state.comments.map(comment => {
                return <Comments level={1} key={comment.id} comment={comment} />;
            })
        )
    }
}

export default NewsDetails;