import React, { Component } from 'react';
import { Link } from "react-router-dom";
class NewsItem extends Component {
    render() {
        return (
            (
                <div className="row">
                    <div className="col s12 m6">
                        <div className="card">
                            <div className="card-content">
                                <span className="card-title">{this.props.news.title}</span>
                                <p>{this.props.news.text}</p>
                            </div>
                            <div className="card-action">
                                <Link role="button" to={`/${this.props.news.id}`} className="btn" onClick={this.onReadMoreClick}>Read More</Link>
                            </div>
                        </div>
                    </div>
                </div >
            )
        )
    };

    onReadMoreClick = () => {
        this.props.setSelectedNews(this.props.news);
    }
}

export default NewsItem;