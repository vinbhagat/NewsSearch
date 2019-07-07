import React, { Component } from 'react';
import moment from 'moment';
import Axios from 'axios';

import { ITEM_URL } from '../Config'

class Comments extends Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: []
        }
    }
    componentDidMount() {
        if (this.props.comment.kids) {
            this.props.comment.kids.forEach(commentId => {
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
            this.state.comments.map(currentComment => {
                debugger;
                // var htmlStr = new DOMParser().parseFromString(currentComment.text, "text/xml");
                var htmlStr = document.createTextNode(currentComment.text);
                return <div>
                    <p>Level: {this.props.level}</p>
                    <p>{currentComment.by}: </p>
                    <div>{htmlStr.nodeValue}</div>
                    <Comments key={currentComment.id} level={this.props.level + 1} comment={currentComment}></Comments>
                </div>
            })
        )
    }
}

export default Comments;